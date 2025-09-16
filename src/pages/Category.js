// import React from 'react'
// import "./Category.css";


// const books = [
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     price: "Rs.108.00",
//     image: "./pic/book1.webp",
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     price: "Rs.1245.00",
//     image: "./pic/book2.jpg",
//   },
//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: "J.K. Rowling",
//     price: "Rs.995.00",
//     image: "./pic/book18.jpg",
//   },
//   {
//     title: "The Girl with the Dragon Tattoo",
//     author: "Stieg Larsson",
//     price: "Rs.1080.00",
//     image: "./pic/book12.jpg",
//   },
//   {
//     title: "Sapiens: A Brief History of Humankind",
//     author: "Yuval Noah Harari",
//     price: "Rs.1410.00",
//     image: "./pic/book6.jpg",
//   },
//   {
//     title: "Gone Girl",
//     author: "Gillian Flynn",
//     price: "Rs.1245.00",
//     image: "./pic/book11.jpg",
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     price: "Rs.108.00",
//     image: "./pic/book1.webp",
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     price: "Rs.1245.00",
//     image: "./pic/book2.jpg",
//   },
//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: "J.K. Rowling",
//     price: "Rs.995.00",
//     image: "./pic/book18.jpg",
//   },
//   {
//     title: "The Girl with the Dragon Tattoo",
//     author: "Stieg Larsson",
//     price: "Rs.1080.00",
//     image: "./pic/book12.jpg",
//   },
//   {
//     title: "Sapiens: A Brief History of Humankind",
//     author: "Yuval Noah Harari",
//     price: "Rs.1410.00",
//     image: "./pic/book6.jpg",
//   },
//   {
//     title: "Gone Girl",
//     author: "Gillian Flynn",
//     price: "Rs.1245.00",
//     image: "./pic/book11.jpg",
//   },
  
// ];


// const Category = () => {
//   return (
//     <div className="category">
      
//       <div className="category-section">
//         <h2 className="category-title">Fiction</h2>
//         <div className="category-book-grid">
//         {books.map((book, index) => (
//           <div className="category-book-card" key={index}>
//             <img src={book.image} alt={book.title} className="book-image" />
//             <h3 className="book-title">{book.title}</h3>
//             <p className="book-author">{book.author}</p>
//             <p className="book-price">{book.price}</p>
//           </div>
//         ))}
//         </div>
//       </div>

//     </div>

//   );
// };

// export default Category;





//3rd attempt


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";


const booksData = {

  Fiction: [
    {image:"./pic/book1.webp", title: "The Great Gatsby ", author: "F. Scott Fitzgerald" , price: "Rs.1080.00" },

    {image:"./pic/book2.jpg", title: "To Kill a Mockingbird", author: "Harper Lee" , price: "Rs.1245.00"},

    {image:"./pic/book3.jpeg", title: "1984", author: "George Orwell" , price: "Rs.910.00"},

    {image:"./pic/book4.png", title: "The Catcher in the Rye", author: "J.D. Salinger" , price: "Rs.995.00"},

    {image:"./pic/book5.jpeg", title: "Pride and Prejudice", author: "F. Scott Fitzgerald" , price: "Rs.830.00"},

    {image:"./pic/book26.jpg", title: "The Alchemist", author: "Paulo Coelho" , price: "Rs.1160.00"}
  ],


  "Non-Fiction": [
    {image:"./pic/book6.jpg", title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari" , price: "Rs.1410.00"},

    {image:"./pic/book7.jpg", title: "Atomic Habits", author: "James Clear" , price: "Rs.1495.00"},

    {image:"./pic/book8.jpg", title: "The Power of Now", author: "Eckhart Tolle" , price: "Rs.1160.00"},

    {image:"./pic/book9.jpeg", title: "Educated", author: "Tara Westover" , price: "Rs.1330.00"},

    {image:"./pic/book10.jpeg", title: "Thinking, Fast and Slow", author: "Daniel Kahneman" , price: "Rs.1575.00"},

    {image:"./pic/book27.jpeg", title: "The 5 AM Club", author: "Robin Sharma" , price: "Rs.1245.00"}
  ],


  "Mystery & Thriller": [

    {image:"./pic/book11.jpg", title: "Gone Girl", author: "Gillian Flynn" , price: "Rs.1245.00"},

    {image:"./pic/book12.jpg", title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" , price: "Rs.1080.00"},

    {image:"./pic/book13.webp", title: "Sherlock Holmes", author: "Arthur Conan Doyle" , price: "Rs.1660.00"},

    {image:"./pic/book14.jpeg", title: "The Silent Patient", author: "Alex Michaelides" , price: "Rs.1160.00"},

    {image:"./pic/book15.jpg", title: "In the Woods", author: "Tana French" , price: "Rs.1200.00"},

    {image:"./pic/book28.jpg", title: "The Da Vinci Code", author: "Dan Brown" , price: "Rs.1330.00"}
  ],


  "NoScience Fiction & Fantasy": [
    {image:"./pic/book16.jpg", title: "Dune", author: "Frank Herbert" , price: "Rs.1330.00"},

    {image:"./pic/book17.webp", title: "The Hobbit", author: "J.R.R. Tolkien" , price: "Rs.1080.00"},

    {image:"./pic/book18.jpg", title: "Harry Potter and the Sorcerer’s Stone", author: "J.K. Rowling" , price: "Rs.995.00"},

    {image:"./pic/book19.jpeg", title: "A Game of Thrones", author: "George R.R. Martin" , price: "Rs.1245.00"},

    {image:"./pic/book20.jpg", title: "The Martian", author: "Andy Weir" , price: "Rs.1160.00"},

    {image:"./pic/book29.jpeg", title: "The Name of the Wind", author: "Patrick Rothfuss" , price: "Rs.1495.00"}
  ],


  "Business & Finance": [
    {image:"./pic/book21.webp", title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" , price: "Rs.1080.00"},

    {image:"./pic/book22.jpg", title: "The Lean Startup", author: "Eric Ries" , price: "Rs.1410.00"},

    {image:"./pic/book23.jpg", title: "Zero to One", author: "Peter Thiel" , price: "Rs.1325.00"},

    {image:"./pic/book24.jpg", title: "The Intelligent Investor", author: "Benjamin Graham" , price: "Rs.1410.00"},

    {image:"./pic/book25.webp", title: "Think and Grow Rich", author: "Napoleon Hill" , price: "Rs.995.00"},

    {image:"./pic/book30.jpeg", title: "The Psychology of Money", author: "Morgan Housel" , price: "Rs.1325.00"}

  ]

};

const BookCategoryPage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredBooks = (category) =>
    booksData[category].filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );

  const handleAddToCart = (book) => {
    alert(`Added "${book.title}" to cart.`);
  };

  const handleImageClick = (book) => {
    navigate("/book-details", { state: { book } });
  };

  return (
    <div className="page-container">
      <div className="header">
        <input
          type="text"
          placeholder="Search Book Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/cart"><FiShoppingCart className="cart-icon" /></Link>
      </div>

      {Object.keys(booksData).map((category) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="book-grid">
            {filteredBooks(category).map((book, index) => (
              <div key={index} className="book-card">
                <img
                  src={book.image}
                  alt={book.title}
                  className="book-image"
                  onClick={() => handleImageClick(book)}
                  style={{ cursor: "pointer" }}
                />
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <p className="book-price">{book.price}</p>
                <button onClick={() => handleAddToCart(book)} className="add-to-cart-button">
                  <FiShoppingCart className="cart-icon" />
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCategoryPage;
