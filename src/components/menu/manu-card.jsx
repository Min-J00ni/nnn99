import React from "react";
import Addbtn from "./AddBtn";

const MenuCard = ({ menuData, cartItems, addToCart }) => {
    return (
    <div className="menu-container">
        <div className="menu-cards">
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

    </div>
    );
};

export default MenuCard;
