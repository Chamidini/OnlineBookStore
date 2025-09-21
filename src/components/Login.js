import React from 'react'
import "./Login.css"
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className='page'>
      <div className='cover'>
        <h1>Book Shop</h1>
        {/* <input type='text' className='input' placeholder='Username'/>
        <input type='password' className='input' placeholder='Password'/> */}

        <div className="form-group">
          <input type="text" className="input" placeholder='Username' />
        </div>

        <div className="form-group">
          <input type="password" className="input" placeholder='Password' />
        </div>

        <button className='login-btn'>Log in</button>

        <p className='text'><a href='#'>Forgot Password?</a></p>

        <p className='text'>or</p>

        <Link to="/signup"><button className='signup-btn'>Sign up</button></Link>

      </div>
    </div>
  )
}
