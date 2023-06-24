import "./App.css";
import { useState } from "react";

function App() {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("allOrders");

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Content for each tab
  const tabContent = {
    allOrders: <div>All Orders</div>,
    regularDelivery: <div>Regular Delivery</div>,
    expressDelivery: <div>Express Delivery</div>,
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="inner-container">
          <div>
            <div>
              {/* Tab buttons */}
              <button
                onClick={() => handleTabClick("allOrders")}
                className={`${
                  activeTab === "allOrders" ? "active-button" : "general-button"
                } order-tab`}
              >
                All Orders
              </button>
              <button
                onClick={() => handleTabClick("regularDelivery")}
                className={`${
                  activeTab === "regularDelivery"
                    ? "active-button"
                    : "general-button"
                } order-tab`}
              >
                Regular Delivery
              </button>
              <button
                onClick={() => handleTabClick("expressDelivery")}
                className={`${
                  activeTab === "expressDelivery"
                    ? "active-button"
                    : "general-button"
                } order-tab`}
              >
                Express Delivery
              </button>
            </div>

            <div>
              {/* Selected tab content */}
              {tabContent[activeTab]}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
