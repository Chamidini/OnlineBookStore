import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BookDetails.css";
import { FiShoppingCart } from "react-icons/fi";

const BookDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const book = location.state?.book;

  if (!book) {
    return <div>No book data available.</div>;
  }

  return (
    <div className="book-details-container">
      <div className="book-content">
        <img src={book.image} alt={book.title} className="book-details-image" />
        <div className="book-info">
          <h2>{book.title}</h2>
          <h4><em>{book.author}</em></h4>
          <p className="book-price">{book.price}</p>
          <p className="book-description">
            {book.description || "No description available."}
          </p>
          <div className="book-buttons">
            <button className="btn add" onClick={() => alert("Added to cart!")}>
              <FiShoppingCart className="cart-icon" />
            </button>
            <button className="btn back" onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
