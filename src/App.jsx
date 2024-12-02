import React, { useState, useMemo } from "react";
import Header from "./components/header.jsx";
import Tabs from "./components/tabs.jsx";
import MenuCard from "./components/menu/manu-card.jsx";
import { menuData } from "./date/kiosk-date.jsx";
import Cart from "./components/carts/cart.jsx";
import PaymentBtn from "./components/PaymentBtn.jsx";

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const resetCart = () => {
    setCartItems([]); // 장바구니 초기화
  };

  const addToCart = (menuItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === menuItem.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...menuItem, quantity: 1 }];
    });
  };

  const filteredMenuData = useMemo(() => {
    return menuData.filter((menu) => {
      if (activeTab === 1) return menu.category === "Coffee";
      if (activeTab === 2) return menu.category === "Non Coffee";
      if (activeTab === 3) return menu.category === "Dessert";
      return true;
    });
  }, [activeTab]);

  return (
    <div className="app-container">
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <MenuCard menuData={filteredMenuData} addToCart={addToCart} />
      <div className="cart-section">
        <Cart cartItems={cartItems} setCartItems={setCartItems} resetCart={resetCart} />
      </div>
      <PaymentBtn cartItems={cartItems} />
    </div>
  );
};

export default App;
