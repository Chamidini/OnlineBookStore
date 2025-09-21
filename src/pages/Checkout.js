import React from 'react';
import './Checkout.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Checkout() {

  const navigate = useNavigate();

  const handlePayNow = (e) => {
    e.preventDefault(); // prevent form refresh

    // Later this will come from backend (orderId after saving order)
    const orderId = Math.floor(Math.random() * 100000);

    // Navigate to Order Confirmation page with orderId
    navigate(`/order-confirmation/${orderId}`);
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout Details</h2>
      <form className="checkout-form">
        <div className="form-group">
          <input type="text" placeholder="Receiver name" required />
          <input type="text" placeholder="Billing Address" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Sending Address" required />
          <select required>
            <option value="">Select Province</option>
            <option value="province1">Southern Province</option>
            <option value="province2">Central Province</option>
            <option value="province3">Eastern Province</option>
            <option value="province4">Northern Province</option>
            <option value="province5">Sabaragamuwa Province</option>
            <option value="province6">Western Province</option>
            <option value="province7">Uva Province</option>
          </select>
        </div>
        <div className="form-group">
          <input type="tel" placeholder="Contact Number" required />
          <input type="text" placeholder="Card Number" required />
        </div>
        <div className="button-group">
          <button type="submit" className="pay-btn">Pay Now</button>
          <Link to="/category"><button type="button" className="close-btn">Close Checkout Page</button></Link>
        </div>
        <p className="cancel-note">*Contact us to cancel your order</p>
      </form>
    </div>
  );
}

export default Checkout;
