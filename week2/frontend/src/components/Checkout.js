import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";

const Checkout = () => {
  const { cart } = useCart();
  const [checkoutStatus, setCheckoutStatus] = useState("");

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setCheckoutStatus("Checkout successful!");
    } catch (error) {
      setCheckoutStatus(`Checkout failed: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add items to your cart before checking out.</p>
      ) : (
        <>
          <button onClick={handleCheckout}>Complete Purchase</button>
          <p>successfully Purchased.</p>
        </>
      )}
    </div>
  );
};

export default Checkout;
