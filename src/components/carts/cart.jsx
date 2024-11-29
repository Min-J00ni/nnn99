import React from "react";
import ResetButton from "./reset.jsx"// 초기화 버튼 가져오기
import QuantityControls from "./quantity.jsx"; // 수량 버튼 가져오기

const Cart = ({ cartItems, setCartItems }) => {
  // 수량을 +1 증가시키는 함수
    const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
        prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
    );
    };

    // 수량을 -1 감소시키는 함수
    const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
        prevItems
        .map((item) =>
            item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // 수량이 0이면 항목 제거
    );
    };

    // 장바구니에서 상품 하나를 완전히 제거하는 함수
    const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

  // 장바구니를 모두 비우는 함수
    const resetCart = () => {
    setCartItems([]); // 장바구니를 빈 상태로 만듦
    };

    return (
    <div className={`cart-container ${cartItems.length === 0 ? "hidden" : ""}`}>
      {/* 상단 헤더 */}
        <div className="cart-header">
        <h2>Cart</h2> {/* 제목 */}
        <ResetButton onClick={resetCart} /> {/* 초기화 버튼 */}
        </div>

      {/* 장바구니에 추가된 상품 목록 */}
        <div className="cart-items">
        {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
            <p>{item.name}</p> {/* 상품 이름 */}
            <span>{item.price.toLocaleString()} 원</span> {/* 상품 가격 */}
            <QuantityControls
                quantity={item.quantity}
                onIncrease={() => increaseQuantity(item.id)} // 수량 +1
                onDecrease={() => decreaseQuantity(item.id)} // 수량 -1
                onRemove={() => removeItem(item.id)} // 상품 제거
            />
            </div>
        ))}
        </div>
    </div>
    );
};

export default Cart;
