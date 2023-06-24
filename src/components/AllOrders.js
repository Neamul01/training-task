import React from "react";
import OrderTable from "./OrderTable";
import { allOrders } from "../OrderDatas";

function AllOrders() {
  return (
    <div>
      <h2 className="table-header">All Orders</h2>
      <OrderTable data={allOrders} />
    </div>
  );
}

export default AllOrders;
