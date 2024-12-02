const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 1, label: "Coffee" },
        { id: 2, label: "Non Coffee" },
        { id: 3, label: "Dessert" },
    ];

    return (
        <div className="tabs">
        {tabs.map((tab) => (
            <button
            key={tab.id}
            className={activeTab === tab.id ? "active" : ""}
            onClick={() => {
              console.log(`Tab clicked: ${tab.id}`); // 상태 변경 확인
                setActiveTab(tab.id);
            }}
            >
            {tab.label}
            </button>
        ))}
        </div>
    );
    };
    
    export default Tabs;
