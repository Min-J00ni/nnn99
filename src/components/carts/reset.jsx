import React from "react";

const ResetButton = ({ onClick }) => {
    return (
    <button className="reset-btn" onClick={onClick}>
        초기화
    </button>
    );
};

export default ResetButton;
