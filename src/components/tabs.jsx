import React, { useState } from "react";

const Tabs = () => {
    // 현재 활성화된 탭의 상태 (기본값: 첫 번째 탭)
    const [activeTab, setActiveTab] = useState(1);

    // Map 객체를 사용하여 탭 데이터 관리
    const tabs = new Map([ 
    //Array.from()을 사용해 Map 객체를 [id, { label }] 형태의 배열로 변환
    [1, { label: "Coffe " }],
    [2, { label: "Non Coffe" }],
    [3, { label: "Dessert" }],
    ]);

    return (
    <div className="tabs-container"> {/* 탭 컨테이너 */}
        {/* 탭 버튼 영역 */}
        <div className="tabs">
        {Array.from(tabs).map(([id, { label }]) => (
        // React에서 각 요소를 구분하기 위해 고유 키를 설정 (id를 사용)
            <button
            key={id} // 각 버튼에 고유한 키를 부여
            className={`tab-button ${activeTab === id ? "active" : ""}`}
            // className: 현재 활성화된 탭과 비교하여 "active" 클래스를 추가 (스타일 적용)
            onClick={() => setActiveTab(id)} // 클릭된 탭을 활성화
            >
            {label}{/* label: 현재 버튼에 표시될 탭 이름 (e.g., "Coffe", "Non Coffe", "Dessert") */}
            </button>
        ))}
        </div>

      {/* 탭 콘텐츠 영역 */}
        <div className="tab-content">
        {Array.from(tabs).map(([id, { content }]) => (
            <div
            key={id} // 각 콘텐츠에 고유한 키를 부여
            className={`menu ${activeTab === id ? "active" : ""}`}
            style={{ display: activeTab === id ? "block" : "none" }} // 활성화된 콘텐츠만 표시
            >
            {content}
            </div>
        ))}
        </div>
    </div>
    );
};

export default Tabs;
