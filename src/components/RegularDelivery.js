import React from "react";
import { regularOrders } from "../OrderDatas";
import OrderTable from "./OrderTable";

function RegularDelivery() {
  return (
    <div>
      <h2 className="table-header">Regular Delivery</h2>
      <OrderTable data={regularOrders} />
    </div>
  );
}

export default RegularDelivery;
