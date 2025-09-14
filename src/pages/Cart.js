import React, { useState } from 'react';
import './Cart.css';
import { FiShoppingCart } from "react-icons/fi";

const initialCart = [
  {
    id: 1,
    title: 'The Great Gatsby',
    price: 1080,
    quantity: 1,
    image: './pic/book1.webp'
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    price: 1245,
    quantity: 1,
    image: './pic/book2.jpg'
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const emptyCart = () => setCartItems([]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <div className="cart-container">
      <h2>Your Cart Details<FiShoppingCart className="cart-icon" /></h2>
      <div className="cart-table">
        <div className="cart-header">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
          <div></div>
        </div>

        {cartItems.map(item => (
          <div className="cart-row" key={item.id}>
            <div className="cart-product">
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </div>
            <div>Rs. {item.price}</div>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
            <div>Rs. {item.price * item.quantity}</div>
            <div><button className="remove-btn" onClick={() => removeItem(item.id)}>×</button></div>
          </div>
        ))}
      </div>

      <button className="empty-btn" onClick={emptyCart}>Empty Cart</button>

      <div className="cart-summary">
        <h3>Cart Totals</h3>
        <p>Subtotal: <span>Rs. {subtotal}</span></p>
        <p>Shipping: <span>Rs. {shipping}</span></p>
        <p className="total">Total: <span>Rs. {total}</span></p>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
