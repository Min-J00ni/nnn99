import React from "react";

const PaymentBtn = ({ cartItems }) => {
  console.log("cartItems: ", cartItems); // 전달된 데이터 확인
  // 총 결제 금액 계산
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );

  return (
    <div className="PaymentBtn">
      <button>
        {totalAmount > 0
          ? `${totalAmount.toLocaleString()}원 결제하기`
          : "결제하기"}
      </button>
    </div>
  );
};

export default PaymentBtn;
