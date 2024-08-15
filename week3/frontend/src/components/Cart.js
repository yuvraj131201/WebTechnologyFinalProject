// src/components/Cart.js
import React from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, quantity);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cart } }); // Pass cart state to checkout
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
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
              <h2>{product.name}</h2>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>
                Quantity:
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) =>
                    handleQuantityChange(product._id, Number(e.target.value))
                  }
                  min="1"
                />
              </p>
              <button onClick={() => removeFromCart(product._id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div>
          <h2>Total: ${calculateTotal()}</h2>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
