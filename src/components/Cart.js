import React from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleCheckout = () => {
    // Navigate to the checkout page
    navigate("/checkout");
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product._id}>
              <h2>shoes</h2>
              <p>$20</p>
              <button onClick={() => handleRemoveFromCart(product._id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button onClick={handleCheckout}>Proceed to Checkout</button>
      )}
    </div>
  );
};

export default Cart;
