import React from "react";
import ResetBtn from "./ResetBtn"; // 초기화 버튼 불러오기

const Cart = ({ cartItems = [], setCartItems, resetCart }) => {
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>장바구니</h2>
        {/* ResetButton 컴포넌트 사용 */}
        <ResetBtn onClick={resetCart} />
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>{(item.price * item.quantity).toLocaleString()}원</p>
            <div className="cart-item-controls">
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <span className="quantity-display">{item.quantity}</span>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => removeItem(item.id)}>삭제</button>
            </div>
          </div>
        ))
      ) : (
        <p>장바구니가 비어 있습니다.</p>
      )}
    </div>
  );
};

export default Cart;
