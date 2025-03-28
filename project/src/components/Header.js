import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
      <nav className='nav'>

        <img src="./pic/logo.jpg" alt="logo" className='logo' height={100} width={120}></img>

        <ul className='nav-links'>
          <li><a href='/home'>Home</a></li>    
          <li><a href='/category'>Category</a></li>    
          <li><a href='/cart'>Cart</a></li>    
          <li><a href='/checkout'>Checkout</a></li>    
        </ul>

        <div className='btn'>
          <button className="border px-3 py-1 rounded-md">Sign in</button>
          <button>Log in</button>
        </div>

      </nav>
    </header>
  )
}
