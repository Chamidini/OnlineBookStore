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
    price: "Rs.300.00",
    image: "https://m.media-amazon.com/images/I/81xXAy9aVbL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "Rs.345.00",
    image: "https://m.media-amazon.com/images/I/81Ox45x+n4L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: "Rs.465.00",
    image: "https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    price: "Rs.500.00",
    image: "https://m.media-amazon.com/images/I/91cJc-VwXML._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: "Rs.650.00",
    image: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    price: "Rs.390.00",
    image: "https://m.media-amazon.com/images/I/91lkiYxI6-L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: "Rs.310.00",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: "Rs.370.00",
    image: "https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: "Rs.300.00",
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
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
