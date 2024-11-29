import React from "react";
import Language from "./language.jsx"; // LanguageButton 컴포넌트 불러오기

const Header = () => {
    return (
    <header className="header-container">
      {/* 로고가 들어갈 파란색 배경 부분 */}
        <div className="logo-area">
        <span className="logo-text">NNN Cafe</span>
        </div>
      {/* 분리된 다국어 버튼 컴포넌트 */}
        <Language/>
    </header>
    );
};

export default Header;
