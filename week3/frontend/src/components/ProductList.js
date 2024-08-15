// src/components/ProductList.js
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
// list of products
const sampleShoes = [
  {
    _id: "1",
    name: "Classic Sneakers",
    price: 59.99,
    category: "Footwear",
    description: "Comfortable and stylish sneakers for everyday wear.",
    imageUrl: "https://via.placeholder.com/100?text=Sneakers",
  },
  {
    _id: "2",
    name: "Running Shoes",
    price: 89.99,
    category: "Sports",
    description: "High-performance shoes designed for running.",
    imageUrl: "https://via.placeholder.com/100?text=Running+Shoes",
  },
  {
    _id: "3",
    name: "Leather Boots",
    price: 129.99,
    category: "Boots",
    description: "Durable leather boots for rugged use.",
    imageUrl: "https://via.placeholder.com/100?text=Boots",
  },
  {
    _id: "4",
    name: "Casual Loafers",
    price: 49.99,
    category: "Loafers",
    description: "Elegant loafers suitable for casual and semi-formal occasions.",
    imageUrl: "https://via.placeholder.com/100?text=Loafers",
  },
  {
    _id: "5",
    name: "Slip-On Shoes",
    price: 39.99,
    category: "Casual",
    description: "Easy-to-wear slip-on shoes for a relaxed look.",
    imageUrl: "https://via.placeholder.com/100?text=Slip-On",
  },
];

const ProductList = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {sampleShoes.map((shoe) => (
          <li key={shoe._id} style={{ marginBottom: "20px" }}>
            <h2>{shoe.name}</h2>
            <p>Price: ${shoe.price.toFixed(2)}</p>
            <p>Category: {shoe.category}</p>
            <p>{shoe.description}</p>
            <img
              src={shoe.imageUrl}
              alt={shoe.name}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              style={{ marginRight: "10px" }}
            />
            <button onClick={() => handleAddToCart(shoe)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
