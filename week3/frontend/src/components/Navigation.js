// src/components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/order-summary">Order Summary</Link>
        </li>
        <li>
          <Link to="/admin-login">Admin Login</Link>
        </li>
        <li>
          <Link to="/admin-dashboard">Admin Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
