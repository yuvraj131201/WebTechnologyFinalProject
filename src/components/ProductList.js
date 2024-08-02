import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Error fetching products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div>
      <h1>Products</h1>
      {error && <p>{error}</p>}
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product._id}>
              <h2>Shoes</h2>
              <p>$20</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </li>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
