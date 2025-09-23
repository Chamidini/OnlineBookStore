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
    {image:"./pic/book1.webp", title: "The Great Gatsby ", author: "F. Scott Fitzgerald" , price: "Rs.1080.00" , description: "A dazzling portrayal of the Jazz Age and the pursuit of the American Dream. It explores love, wealth, and the illusion of happiness through Jay Gatsby’s tragic story."
},

    {image:"./pic/book2.jpg", title: "To Kill a Mockingbird", author: "Harper Lee" , price: "Rs.1245.00" , description: "A timeless classic that tackles racial injustice and moral growth in the American South. Scout Finch narrates her childhood experiences with empathy and courage."},

    {image:"./pic/book3.jpeg", title: "1984", author: "George Orwell" , price: "Rs.910.00" , description: "A chilling dystopian novel about a world ruled by surveillance and totalitarian power. George Orwell warns of the dangers of absolute control and loss of individuality."},

    {image:"./pic/book4.png", title: "The Catcher in the Rye", author: "J.D. Salinger" , price: "Rs.995.00" , description: "The story of Holden Caulfield, a restless teenager navigating alienation and identity. It captures the raw voice of youth struggling to find authenticity in a superficial world."},

    {image:"./pic/book5.jpeg", title: "Pride and Prejudice", author: "F. Scott Fitzgerald" , price: "Rs.830.00" , description: "A witty romantic tale about Elizabeth Bennet and her complicated relationship with Mr. Darcy. It explores love, class, and personal growth in Georgian England."},

    {image:"./pic/book26.jpg", title: "The Alchemist", author: "Paulo Coelho" , price: "Rs.1160.00" , description: "A philosophical novel about Santiago, a shepherd in search of his personal legend. It emphasizes following your dreams, listening to your heart, and discovering destiny."}
  ],


  "Non-Fiction": [
    {image:"./pic/book6.jpg", title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari" , price: "Rs.1410.00" , description:"A sweeping exploration of human evolution, culture, and society. Yuval Noah Harari explains how Homo sapiens shaped history and the modern world."},

    {image:"./pic/book7.jpg", title: "Atomic Habits", author: "James Clear" , price: "Rs.1495.00" , description:"A practical guide to building good habits and breaking bad ones. James Clear shows how small changes compound into life-changing results."},

    {image:"./pic/book8.jpg", title: "The Power of Now", author: "Eckhart Tolle" , price: "Rs.1160.00" , description:"A spiritual guide encouraging readers to live fully in the present. Eckhart Tolle explains how mindfulness can release people from past regrets and future worries."},

    {image:"./pic/book9.jpeg", title: "Educated", author: "Tara Westover" , price: "Rs.1330.00" , description:"A memoir of Tara Westover, who grew up in a survivalist family with no formal schooling. Her pursuit of education led her to independence and transformation."},

    {image:"./pic/book10.jpeg", title: "Thinking, Fast and Slow", author: "Daniel Kahneman" , price: "Rs.1575.00" , description:"Daniel Kahneman explores two modes of human thought: fast, instinctive, and slow, deliberate reasoning. The book reshapes how we think about decision-making and biases."},

    {image:"./pic/book27.jpeg", title: "The 5 AM Club", author: "Robin Sharma" , price: "Rs.1245.00" , description:"Robin Sharma promotes waking up early to maximize productivity and personal growth. It blends storytelling with strategies for success and discipline."}
  ],


  "Mystery & Thriller": [

    {image:"./pic/book11.jpg", title: "Gone Girl", author: "Gillian Flynn" , price: "Rs.1245.00" , description:"A psychological thriller about a husband and wife entangled in lies, betrayal, and manipulation. Gillian Flynn explores the dark complexities of marriage and identity."},

    {image:"./pic/book12.jpg", title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" , price: "Rs.1080.00" , description:"A gripping mystery involving corruption, murder, and hidden secrets. Lisbeth Salander, a fierce hacker, teams up to solve a decades-old disappearance."},

    {image:"./pic/book13.webp", title: "Sherlock Holmes", author: "Arthur Conan Doyle" , price: "Rs.1660.00" , description:"Sir Arthur Conan Doyle’s iconic detective unravels mysteries with logic and deduction. His adventures highlight wit, intelligence, and the thrill of crime-solving."},

    {image:"./pic/book14.jpeg", title: "The Silent Patient", author: "Alex Michaelides" , price: "Rs.1160.00" , description:"A psychological thriller about a woman who stops speaking after a shocking act of violence. A psychotherapist becomes obsessed with uncovering her secret."},

    {image:"./pic/book15.jpg", title: "In the Woods", author: "Tana French" , price: "Rs.1200.00" , description:"A haunting murder mystery set in Ireland blending psychological drama with suspense. Tana French weaves themes of memory, trauma, and obsession into the investigation."},

    {image:"./pic/book28.jpg", title: "The Da Vinci Code", author: "Dan Brown" , price: "Rs.1330.00" , description:"A fast-paced thriller combining art, history, and conspiracy theories. Robert Langdon deciphers codes leading to a hidden religious mystery."}
  ],


  "NoScience Fiction & Fantasy": [
    {image:"./pic/book16.jpg", title: "Dune", author: "Frank Herbert" , price: "Rs.1330.00" , description:"A grand epic about politics, ecology, and power set on the desert planet Arrakis. Frank Herbert creates a richly detailed universe of survival and destiny."},

    {image:"./pic/book17.webp", title: "The Hobbit", author: "J.R.R. Tolkien" , price: "Rs.1080.00" , description:"A charming adventure about Bilbo Baggins’ unexpected journey with dwarves and a dragon. Tolkien’s tale celebrates bravery, friendship, and the discovery of hidden strength."},

    {image:"./pic/book18.jpg", title: "Harry Potter and the Sorcerer’s Stone", author: "J.K. Rowling" , price: "Rs.995.00" , description:"The beginning of Harry Potter’s magical journey at Hogwarts School of Witchcraft and Wizardry. It introduces friendship, courage, and the battle against dark forces."},

    {image:"./pic/book19.jpeg", title: "A Game of Thrones", author: "George R.R. Martin" , price: "Rs.1245.00" , description:"The first book in George R.R. Martin’s epic saga of power, betrayal, and war. It weaves together multiple characters fighting for survival and the Iron Throne."},

    {image:"./pic/book20.jpg", title: "The Martian", author: "Andy Weir" , price: "Rs.1160.00" , description:"An astronaut stranded on Mars struggles to survive using science and resilience. Andy Weir combines humor, tension, and ingenuity in this gripping survival tale."},

    {image:"./pic/book29.jpeg", title: "The Name of the Wind", author: "Patrick Rothfuss" , price: "Rs.1495.00" , description:"A lyrical fantasy about Kvothe, a gifted young man who becomes a legendary hero. Patrick Rothfuss blends magic, music, and myth in a captivating story."}
  ],


  "Business & Finance": [
    {image:"./pic/book21.webp", title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" , price: "Rs.1080.00" , description:"Robert Kiyosaki contrasts two mindsets about money and investing. It teaches financial independence and the value of assets over liabilities."},

    {image:"./pic/book22.jpg", title: "The Lean Startup", author: "Eric Ries" , price: "Rs.1410.00" , description:"A guide to building startups efficiently through innovation and adaptability. Eric Ries emphasizes testing ideas quickly and learning from feedback."},

    {image:"./pic/book23.jpg", title: "Zero to One", author: "Peter Thiel" , price: "Rs.1325.00" , description:"Peter Thiel shares insights on creating unique businesses that shape the future. It focuses on innovation, competition, and entrepreneurship."},

    {image:"./pic/book24.jpg", title: "The Intelligent Investor", author: "Benjamin Graham" , price: "Rs.1410.00" , description:"A classic on value investing by Benjamin Graham. It offers timeless strategies on risk, discipline, and long-term growth."},

    {image:"./pic/book25.webp", title: "Think and Grow Rich", author: "Napoleon Hill" , price: "Rs.995.00" , description:"Napoleon Hill outlines principles of success and wealth-building through mindset and determination. It remains one of the most influential motivational books."},

    {image:"./pic/book30.jpeg", title: "The Psychology of Money", author: "Morgan Housel" , price: "Rs.1325.00" , description:"Morgan Housel explores how emotions, behavior, and perspective affect financial decisions. It shows that success with money is less about knowledge and more about habits."}

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
