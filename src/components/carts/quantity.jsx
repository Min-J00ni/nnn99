import React from "react";

const QuantityControls = ({ quantity, onIncrease, onDecrease, onRemove }) => {
    //
    return (
    <div className="quantity-controls">
        <button className="control-btn" onClick={onDecrease}>
        - {/* 수량 줄이는 버튼 */}
        </button>
        <span className="quantity">{quantity}</span> {/* 현재 수량 표시 */}
        <button className="control-button" onClick={onIncrease}>
        + {/* 수량 늘리는 버튼 */}
        </button>
        <button className="control-btn remove-btn" onClick={onRemove}>
        ✕ {/* 상품 제거 버튼 */}
        </button>
    </div>
    );
};

export default QuantityControls;
