import React, { useState } from "react";
import { menuData } from "../../date/kiosk-date.jsx"; // 메뉴 데이터 파일에서 데이터 가져오기
import Addbtn from "./AddBtn.jsx";//추가 버튼 불러오기
import Cart from "../carts/cart.jsx"; // 장바구니 컴포넌트 가져오기

const MenuCard = () => {
    // 장바구니 상태를 저장하는 변수와 이를 변경하는 함수를 만들어줍니다.
    // cartItems는 장바구니에 담긴 물건들의 목록입니다.
    const [cartItems, setCartItems] = useState([]); 

    // Add 버튼을 눌렀을 때 호출되는 함수입니다.
    // 이 함수는 장바구니에 새로운 물건을 추가하거나 이미 있는 물건의 개수를 늘립니다.
    const addToCart = (menuItem) => {
    setCartItems((prevItems) => {
      // 장바구니에 이미 같은 물건이 있는지 확인합니다.
        const existingItem = prevItems.find((item) => item.id === menuItem.id);
        if (existingItem) {
        // 이미 있는 물건이라면, 그 물건의 개수를 1개 늘립니다.
        return prevItems.map((item) =>
            item.id === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        }
        // 장바구니에 없는 새로운 물건이라면, 새로 추가합니다.
        return [...prevItems, { ...menuItem, quantity: 1 }];
    });
    };

    return (
    <div className="menu-container">
        {/* 화면에 "Menu"라는 제목을 표시합니다. */}
        <h1>Menu</h1>
        
        {/* 메뉴 카드들을 보여주는 영역입니다. */}
        <div className="menu-cards">
        {/* menuData라는 데이터를 반복하면서 각 메뉴의 카드(그림과 정보)를 만듭니다. */}
        {menuData.map((menu) => (
            <div key={menu.id} className="menu-card">
            {/* 메뉴 이미지를 화면에 보여줍니다. */}
            <img src={menu.image} alt={menu.name} />
            
            {/* 메뉴 이름을 화면에 보여줍니다. */}
            <p>{menu.name}</p>
            
            {/* 메뉴 가격을 화면에 보여줍니다. 가격에 콤마(,)를 넣어서 보기 좋게 만듭니다. */}
            <span>{menu.price.toLocaleString()}원</span>
            
            {/* Add 버튼을 추가하고, 클릭하면 장바구니에 메뉴를 추가합니다. */}
            <Addbtn onClick={() => addToCart(menu)} />
            </div>
        ))}
    </div>

        {/* 장바구니 컴포넌트를 화면에 표시합니다. */}
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
    );
};

export default MenuCard;
