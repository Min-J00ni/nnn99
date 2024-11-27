document.addEventListener('DOMContentLoaded', () => {
    // 모든 탭 버튼과 메뉴를 가져오기
    const tabButtons = document.querySelectorAll('.tab-button'); // 탭 버튼 가져오기
    const menus = document.querySelectorAll('.menu'); // 메뉴 가져오기
    const cart = document.getElementById('cart'); // 카트 가져오기
    const cartItemsContainer = document.getElementById('cart-items'); // 카트 상품 컨테이너
    const clearCartButton = document.getElementById('clear-cart'); // 초기화 버튼 가져오기
    const buyButton = document.getElementById('buy-btn'); // 결제 버튼 가져오기

    let cartItems = []; // 장바구니 항목 저장

    // 기본 활성화 상태 설정
    const defaultTab = document.querySelector('.tab-button.active');
    const defaultMenu = document.querySelector('.menu.active');

    if (!defaultTab || !defaultMenu) {
        tabButtons[0].classList.add('active'); // 첫 번째 탭 버튼 활성화
        menus[0].classList.add('active'); // 첫 번째 메뉴 활성화
    }

    // 탭 클릭 이벤트 설정
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active')); // 모든 버튼 비활성화
            button.classList.add('active'); // 클릭된 버튼 활성화

            menus.forEach(menu => {
                if (menu.getAttribute('data-tab-content') === tab) {
                    menu.style.display = 'block'; // 해당 메뉴 보이기
                } else {
                    menu.style.display = 'none'; // 다른 메뉴 숨기기
                }
            });
        });
    });

    // 메뉴의 "추가" 버튼 클릭 시
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const menuItem = e.target.parentElement;
            const name = menuItem.getAttribute('data-name');
            const price = parseInt(menuItem.getAttribute('data-price')); // 문자열을 숫자로 변환

            // 이미 장바구니에 있는지 확인
            const existingItem = cartItems.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++; // 수량 증가
            } else {
                cartItems.push({ name, price, quantity: 1 }); // 새 항목 추가
            }
            renderCart();
        });
    });

    // 장바구니 렌더링
    function renderCart() {
        cartItemsContainer.innerHTML = ''; // 기존 장바구니 내용 초기화

        if (cartItems.length === 0) {
            cart.style.display = 'none'; // 장바구니 숨기기
            buyButton.textContent = `0원 결제하기`; // 결제 금액 초기화
        } else {
            cart.style.display = 'block'; // 장바구니 보이기

            cartItems.forEach((item, index) => {
                const div = document.createElement('div');
                div.classList.add('cart-item'); // 스타일 적용을 위한 클래스 추가
                div.innerHTML = `
                    <p>${item.name} (${item.price}원) x ${item.quantity}</p>
                    <button class="increase">+</button>
                    <button class="decrease">-</button>
                    <button class="remove">x</button>
                `;

                // + 버튼 클릭 이벤트
                div.querySelector('.increase').addEventListener('click', () => {
                    item.quantity++;
                    renderCart();
                });

                // - 버튼 클릭 이벤트
                div.querySelector('.decrease').addEventListener('click', () => {
                    if (item.quantity > 1) {
                        item.quantity--;
                    } else {
                        cartItems.splice(index, 1); // 항목 삭제
                    }
                    renderCart();
                });

                // x 버튼 클릭 이벤트
                div.querySelector('.remove').addEventListener('click', () => {
                    cartItems.splice(index, 1); // 항목 삭제
                    renderCart();
                });

                cartItemsContainer.appendChild(div); // 장바구니에 항목 추가
            });

            // 총 결제 금액 계산
            const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
            buyButton.textContent = `${total.toLocaleString()}원 결제하기`; // 천 단위 구분 추가
        }
    }

    // 초기화 버튼 이벤트 리스너
    clearCartButton.addEventListener('click', () => {
        cartItems = []; // 장바구니 항목 초기화
        renderCart(); // UI 업데이트
    });
});
