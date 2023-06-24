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
        <button key={i} onClick={() => handlePageChange(i)}>
          {i}
        </button>
      );
    }

    return paginationButtons;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Delivery Type</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {currentOrders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.customer}</td>
            <td>{order.deliveryType}</td>
            <td>{order.total}</td>
          </tr>
        ))}
      </tbody>

      {/*  pagination */}
      <div>{renderPagination()}</div>
    </table>
  );
};

export default OrderTable;
