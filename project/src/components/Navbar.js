import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Narbar() {
  return (
    <nav>
      
      <img src="./pic/logo.jpg" alt="logo" className='logo' height={100} width={120}></img>

      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='category'>Category</Link></li>
        <li><Link to='cart'>Cart</Link></li>
        <li><Link to='/checkout'>Checkout</Link></li>
      </ul>
    </nav>
  )
}
