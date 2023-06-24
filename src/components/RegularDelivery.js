import React, { useEffect, useState } from "react";
import OrderTable from "./OrderTable";

function RegularDelivery() {
  const [regularOrders, setRegularOrders] = useState([]);

  useEffect(() => {
    fetch("regularOrders.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("all orders", data);
        setRegularOrders(data);
      })
      .catch((err) => {
        console.log("all order error", err);
      });
  }, []);
  return (
    <div>
      <h2 className="table-header">Regular Delivery</h2>
      <OrderTable data={regularOrders} />
    </div>
  );
}

export default RegularDelivery;
