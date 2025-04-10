// import React from 'react'
// import './Home.css'

// export default function Home() {
//   return (
//     <div className='homepage'>

//       <div className='intro'>
//         <img src="./pic/bg7.jpg" alt="bg-image"></img>
//         <div className='welcome-text'>
//           <h1 className='topic'>The Book Lover's Dreamland Awaits!</h1>

//           <p>Welcome to the ultimate book lover's paradise! Join our<br/> community and contribute to the ever-evolving library of <br/>stories, where every book has a chance to inspire someone new.</p>
//         </div>

//       </div >

//       <div className='best-picks'>
//         <img src="./pic/bg3.jpg" alt="bg-image"></img>
//         <h1 className='topic'>The Book Lover's Dreamland Awaits!</h1>

//         <div className='best-books'></div>
//       </div>

//     </div>
//   )
// }


import React from "react";
import "./Home.css";

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
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: "Rs.1495.00",
    image: "./pic/book7.jpg",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: "Rs.1080.00",
    image: "./pic/book17.webp",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: "Rs.1080.00",
    image: "./pic/book21.webp",
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: "Rs.995.00",
    image: "./pic/book25.webp",
  },
  {
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    price: "Rs.1660.00",
    image: "./pic/book13.webp",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    price: "Rs.1330.00",
    image: "./pic/book28.jpg",
  },
];

const Home = () => {
  return (
    <div className="homepage">
      <div className='intro'>
        <img src="./pic/bg7.jpg" alt="bg-image"></img>
        <div className='welcome-text'>
          <h1 className='topic'>The Book Lover's Dreamland Awaits!</h1>

          <p>Welcome to the ultimate book lover's paradise! Join our<br/> community and contribute to the ever-evolving library of <br/>stories, where every book has a chance to inspire someone new.</p>
        </div>

      </div >
    
      <div className="best-picks-section">
        {/* <img src="./pic/bg3.jpg" alt="bg-image"></img> */}
        <h2 className="section-title">Our Best Picks</h2>
        <div className="book-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
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

export default Home;
