import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'; 
import Cart from './pages/Cart'; 
import Checkout from './pages/Checkout'; 


function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;