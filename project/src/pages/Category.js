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









import React, { useState } from "react";
import "./Category.css";
import { FiShoppingCart } from "react-icons/fi";

const booksData = {
  Fiction: [
    {image:"./pic/book1.webp", title: "The Midnight Library", author: "Matt Haig" },
    {image:"./pic/book2.jpg", title: "The Invisible Life of Addie LaRue", author: "V.E. Schwab" },
    {image:"./pic/book3.jpeg", title: "1984", author: "George Orwell" },
    {image:"./pic/book4.png", title: "Beach Read", author: "Emily Henry" },
    {image:"./pic/book5.jpeg", title: "The Night Circus", author: "Erin Morgenstern" },
    {image:"./pic/book26.jpg", title: "Where the Crawdads Sing", author: "Delia Owens" }
  ],
  "Non-Fiction": [
    {image:"./pic/book6.jpg", title: "Educated", author: "Tara Westover" },
    {image:"./pic/book7.jpg", title: "Atomic Habits", author: "James Clear" },
    {image:"./pic/book8.jpg", title: "The Body", author: "Bill Bryson" },
    {image:"./pic/book9.jpeg", title: "Becoming", author: "Michelle Obama" },
    {image:"./pic/book10.jpeg", title: "Sapiens", author: "Yuval Noah Harari" },
    {image:"./pic/book27.jpeg", title: "Born a Crime", author: "Trevor Noah" }
  ],
  "Mystery & Thriller": [
    {image:"./pic/book11.jpg", title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
    {image:"./pic/book12.jpg", title: "Gone Girl", author: "Gillian Flynn" },
    {image:"./pic/book13.webp", title: "The Silent Patient", author: "Alex Michaelides" },
    {image:"./pic/book14.jpeg", title: "Big Little Lies", author: "Liane Moriarty" },
    {image:"./pic/book15.jpg", title: "The Woman in the Window", author: "A.J. Finn" },
    {image:"./pic/book28.jpg", title: "The Da Vinci Code", author: "Dan Brown" }
  ],
  "NoScience Fiction & Fantasy": [
    {image:"./pic/book16.jpg", title: "Educated", author: "Tara Westover" },
    {image:"./pic/book17.webp", title: "Atomic Habits", author: "James Clear" },
    {image:"./pic/book18.jpg", title: "The Body", author: "Bill Bryson" },
    {image:"./pic/book19.jpeg", title: "Becoming", author: "Michelle Obama" },
    {image:"./pic/book20.jpg", title: "Sapiens", author: "Yuval Noah Harari" },
    {image:"./pic/book29.jpeg", title: "Born a Crime", author: "Trevor Noah" }
  ],
  "Business & Finance": [
    {image:"./pic/book21.webp", title: "Educated", author: "Tara Westover" },
    {image:"./pic/book22.jpg", title: "Atomic Habits", author: "James Clear" },
    {image:"./pic/book23.jpg", title: "The Body", author: "Bill Bryson" },
    {image:"./pic/book24.jpg", title: "Becoming", author: "Michelle Obama" },
    {image:"./pic/book25.webp", title: "Sapiens", author: "Yuval Noah Harari" },
    {image:"./pic/book30.jpeg", title: "Born a Crime", author: "Trevor Noah" }
  ]
};

const BookCategoryPage = () => {
  const [search, setSearch] = useState("");

  const filteredBooks = (category) =>
    booksData[category].filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );

  const handleAddToCart = (book) => {
    alert(`Added "${book.title}" to cart.`);
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
        <FiShoppingCart className="cart-icon" />
      </div>

      {Object.keys(booksData).map((category) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="book-grid">
            {filteredBooks(category).map((book, index) => (
              <div key={index} className="book-card">
                <img src={book.image} alt={book.title} className="book-image" />
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <button onClick={() => handleAddToCart(book)} className="add-to-cart-button">
                  Add to Cart
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
