import React from 'react'
import './Header.css'
// import logo from './src/pic/logo.jpg'

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

        <ul className='btn'>
          <li><button>Log in</button></li>    
          <li><button>Sign in</button></li>    
        </ul>

      </nav>
    </header>
  )
}
