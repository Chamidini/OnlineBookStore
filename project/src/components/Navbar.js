import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

export default function Narbar() {
// export const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      
      <img src="./pic/logo.jpg" alt="logo" className='logo' height={100} width={120}></img>

      <div className='menu' onClick={() =>{
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className='{menuOpen ? "open" : ""}'>
        <li><NavLink  to='/home'>Home</NavLink ></li>
        <li><NavLink  to='category'>Category</NavLink ></li>
        <li><NavLink to='cart'>Cart</NavLink></li>
        <li><NavLink  to='/checkout'>Checkout</NavLink ></li>
        <li><NavLink  to='/login'>Login</NavLink ></li>
      </ul>
    </nav>
  )
}
