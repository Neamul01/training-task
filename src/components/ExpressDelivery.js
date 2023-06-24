import React, { useEffect, useState } from "react";
import OrderTable from "./OrderTable";

function ExpressDelivery() {
  const [expressOrders, setExpressOrders] = useState([]);

  useEffect(() => {
    fetch("expressOrders.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("all orders", data);
        setExpressOrders(data);
      })
      .catch((err) => {
        console.log("all order error", err);
      });
  }, []);
  return (
    <div>
      <h2 className="table-header">Express Delivery</h2>
      <OrderTable data={expressOrders} />
    </div>
  );
}

export default ExpressDelivery;
