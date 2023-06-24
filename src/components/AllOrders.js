import React, { useEffect, useState } from "react";
import OrderTable from "./OrderTable";

function AllOrders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("allOrder.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("all orders", data);
        setAllOrders(data);
      })
      .catch((err) => {
        console.log("all order error", err);
      });
  }, []);
  return (
    <div>
      <h2 className="table-header">All Orders</h2>
      <OrderTable data={allOrders} />
    </div>
  );
}

export default AllOrders;
