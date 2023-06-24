import "./App.css";
import { useState } from "react";
import AllOrders from "./components/AllOrders";
import RegularDelivery from "./components/RegularDelivery";
import ExpressDelivery from "./components/ExpressDelivery";

function App() {
  const [activeTab, setActiveTab] = useState("allOrders");

  const tabs = {
    allOrders: "allOrders",
    regularDelivery: "regularDelivery",
    expressDelivery: "expressDelivery",
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabContent = {
    allOrders: <AllOrders />,
    regularDelivery: <RegularDelivery />,
    expressDelivery: <ExpressDelivery />,
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="inner-container">
          <div>
            {/* Tab buttons */}
            <div>
              <button
                onClick={() => handleTabClick(tabs.allOrders)}
                className={`${
                  activeTab === tabs.allOrders
                    ? "active-button"
                    : "general-button"
                } order-tab`}
              >
                All Orders
              </button>
              <button
                onClick={() => handleTabClick(tabs.regularDelivery)}
                className={`${
                  activeTab === tabs.regularDelivery
                    ? "active-button"
                    : "general-button"
                } order-tab`}
              >
                Regular Delivery
              </button>
              <button
                onClick={() => handleTabClick(tabs.expressDelivery)}
                className={`${
                  activeTab === tabs.expressDelivery
                    ? "active-button"
                    : "general-button"
                } order-tab`}
              >
                Express Delivery
              </button>
            </div>

            {/* Selected tab content */}
            <div className="tab-contents">{tabContent[activeTab]}</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
