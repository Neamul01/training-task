import React, { useState } from "react";

const OrderTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  // Calculate the index range for current page
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = data.slice(indexOfFirstOrder, indexOfLastOrder);

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate pagination buttons
  const renderPagination = () => {
    const pageNumbers = Math.ceil(data.length / ordersPerPage);
    const paginationButtons = [];

    for (let i = 1; i <= pageNumbers; i++) {
      paginationButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${
            currentPage === i ? "active-pagination-button" : "pagination-button"
          }`}
        >
          {i}
        </button>
      );
    }
    if (paginationButtons.length > 3) {
      paginationButtons.splice(paginationButtons.length - 1, 0, "....");
    }

    return paginationButtons;
  };

  return (
    <div className="order-table-box">
      <table className="order-table">
        <thead className="order-table-head">
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Delivery Type</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {currentOrders.map((order, i) => (
            <tr
              key={order.id}
              className={`${i % 2 === 0 && "styled-row"} table-row`}
            >
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.deliveryType}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*  pagination */}
      <div className={`order-table-pagination`}>{renderPagination()}</div>
    </div>
  );
};

export default OrderTable;
