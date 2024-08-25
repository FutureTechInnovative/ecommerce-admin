import React from 'react';

const Sidebar = ({ setSelectedContent }) => {
  return (
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        <li>
          <a className="nav-link px-0 align-middle" onClick={() => setSelectedContent('Dashboard')}>
            <i className="fs-4 bi-table"></i>
            <span className="ms-1 d-none d-sm-inline text-white">Dashboard</span>
          </a>
        </li>
        <li>
          <a className="nav-link px-0 align-middle" onClick={() => setSelectedContent('Orders')}>
            <i className="fs-4 bi-speedometer2"></i>
            <span className="ms-1 d-none d-sm-inline text-white">Orders</span>
          </a>
        </li>
        <li>
          <a className="nav-link px-0 align-middle" onClick={() => setSelectedContent('Customers')}>
            <i className="fs-4 bi-bootstrap"></i>
            <span className="ms-1 d-none d-sm-inline text-white">Customers</span>
          </a>
        </li>
        <li>
          <a className="nav-link px-0 align-middle" onClick={() => setSelectedContent('PaymentDetails')}>
            <i className="fs-4 bi-grid"></i>
            <span className="ms-1 d-none d-sm-inline text-white">Payment Details</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
