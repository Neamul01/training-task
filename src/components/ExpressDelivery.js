import React from "react";
import OrderTable from "./OrderTable";
import { expressOrders } from "../OrderDatas";

function ExpressDelivery() {
  return (
    <div>
      <h2 className="table-header">Express Delivery</h2>
      <OrderTable data={expressOrders} />
    </div>
  );
}

export default ExpressDelivery;
