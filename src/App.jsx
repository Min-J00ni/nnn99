import React, { useState } from "react";
import Header from "./components/header.jsx"; // 헤더 컴포넌트 import
import Tabs from "./components/tabs.jsx"; //탭 컴포넌트 import
import MenuCard from "./components/menu/manu-card.jsx"; // 메뉴 카드 컴포넌트 import
import Cart from "./components/carts/cart.jsx"; // 장바구니 컴포넌트 import

const App = () => {
  // 장바구니 상태 관리
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="app-container">
      {/* 헤더 컴포넌트 */}
      <Header />

      {/*탭 컴포넌트*/}
      <Tabs cartItems={cartItems} setCartItems={setCartItems} />


      {/* 메뉴 카드 컴포넌트 */}
      <MenuCard cartItems={cartItems} setCartItems={setCartItems} />

      {/* 장바구니 컴포넌트 */}
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default App;
