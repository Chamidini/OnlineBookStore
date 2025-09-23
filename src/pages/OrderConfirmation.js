import React from "react";
import { useParams, Link } from "react-router-dom";
import "./OrderConfirmation.css";

export default function OrderConfirmation() {
  const { id } = useParams(); // get orderId from URL like /order-confirmation/123

  return (
    <div className="confirmation-page">
      <div className="confirmation-box">
        <h1>✅ Order Placed Successfully!</h1>
        <p>Thank you for your purchase.</p>
        
        {id && <p className="order-id">Your Order ID: <strong>{id}</strong></p>}

        <div className="next-actions">
          {/* <Link to="/orders" className="btn">View My Orders</Link> */}
          <Link to="/category" className="btn btn-secondary">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}

