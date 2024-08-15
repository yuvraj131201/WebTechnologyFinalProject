// src/components/ThankYou.js
import React from 'react';
import { Link } from 'react-router-dom';
// Thank you page
const ThankYou = () => {
  return (
    <div>
      <h1>Thank You for Shopping with Us!</h1>
      <p>Your order has been placed successfully. We appreciate your business and hope you enjoy your purchase.</p>
      <Link to="/">Return to Home</Link> {/* Link to navigate back to the home page */}
    </div>
  );
};

export default ThankYou;
