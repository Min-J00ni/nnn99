import React from "react";

const ResetBtn = ({ onClick }) => {
    return (
    <button onClick={onClick} className="reset-btn">
        초기화
    </button>
    );
};

export default ResetBtn;
