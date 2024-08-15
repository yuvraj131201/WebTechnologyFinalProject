// src/components/Checkout.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = location.state || { cart: [] };
  const [address, setAddress] = React.useState("");

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed! Address: ${address}\nTotal: $${calculateTotal()}`);
    // Navigate to the Thank You page
    navigate("/thank-you");
    // Here you can also handle form submission, such as sending data to the server
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Address</h2>
          <textarea
            value={address}
            onChange={handleAddressChange}
            placeholder="Enter your address here"
            required
          />
        </div>
        <div>
          <h2>Cart Items</h2>
          <ul>
            {cart.map((item) => (
              <li key={item._id}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Total: ${calculateTotal()}</h2>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
