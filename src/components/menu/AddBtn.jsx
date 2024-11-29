import React from "react";

const AddButton = ({ onClick }) => {
    return (
    <button className="AddBtn" onClick={onClick}>
        추가
    </button>
    );
};

export default AddButton;
