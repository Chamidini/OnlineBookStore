import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'; 
import Cart from './pages/Cart'; 
import Checkout from './pages/Checkout'; 
import BookDetails from './pages/BookDetails';
import Createanaccount from './components/Create-an-account';
import OrderConfirmation from "./pages/OrderConfirmation";


function App() {
  return (
    <div className="App">
      {/* <Header/> */}

      <Navbar/>

      {/* <Createanaccount/> */}

      {/* <Login/> */}

      {/* <BookDetails/> */}

      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/book-details' element={<BookDetails />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Createanaccount/>} />
        <Route path="/order-confirmation" element={<OrderConfirmation/>} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;