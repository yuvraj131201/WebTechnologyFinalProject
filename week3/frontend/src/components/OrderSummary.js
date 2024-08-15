// src/components/OrderSummary.js
import React from "react";
import { useLocation } from "react-router-dom";

const OrderSummary = () => {
  const location = useLocation();
  const { state } = location;

  // Check if state is null or undefined and provide fallback values
  const name = state?.name || "Not provided";
  const address = state?.address || "Not provided";
  const email = state?.email || "Not provided";
  const phone = state?.phone || "Not provided";

  return (
    <div className="order-summary">
      <h1>Order Summary</h1>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <h2>Total Price: $XXX.XX</h2>
      <p>Thank you for your order!</p>
    </div>
  );
};

export default OrderSummary;
