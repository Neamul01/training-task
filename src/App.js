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

  const tabContent = {
    allOrders: <AllOrders />,
    regularDelivery: <RegularDelivery />,
    expressDelivery: <ExpressDelivery />,
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="heading">Advance React Training Task</h2>
        <div className="inner-container">
          <div>
            {/* Tab buttons */}
            <div>
              <button
                onClick={() => setActiveTab(tabs.allOrders)}
                className={`${
                  activeTab === tabs.allOrders
                    ? "active-button"
                    : "general-button"
                } order-tab`}
              >
                All Orders
              </button>
              <button
                onClick={() => setActiveTab(tabs.regularDelivery)}
                className={`${
                  activeTab === tabs.regularDelivery
                    ? "active-button"
                    : "general-button"
                } order-tab`}
              >
                Regular Delivery
              </button>
              <button
                onClick={() => setActiveTab(tabs.expressDelivery)}
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
