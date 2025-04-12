import React from 'react'
import "./Category.css";


const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "Rs.108.00",
    image: "./pic/book1.webp",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "Rs.1245.00",
    image: "./pic/book2.jpg",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: "Rs.995.00",
    image: "./pic/book18.jpg",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    price: "Rs.1080.00",
    image: "./pic/book12.jpg",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: "Rs.1410.00",
    image: "./pic/book6.jpg",
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    price: "Rs.1245.00",
    image: "./pic/book11.jpg",
  },
  
];


const Category = () => {
  return (
    <div className="category">
      
      <div className="category-section">
        <h2 className="category-title">Fiction</h2>
        <div className="category-book-grid">
        {books.map((book, index) => (
          <div className="category-book-card" key={index}>
            <img src={book.image} alt={book.title} className="book-image" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <p className="book-price">{book.price}</p>
          </div>
        ))}
        </div>
      </div>

    </div>

  );
};

export default Category;
