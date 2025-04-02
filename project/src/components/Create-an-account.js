import React from 'react'
import "./Create-an-account.css"

export default function Createanaccount() {
  return (
    <div className='page'>
      <div className='cover'>
        <h1>Create an Account</h1>

        <p>First Name <input type='text' className='input'/></p>

        <p>Last Name <input type='text' className='input'/></p>

        <p>Email<input type='text' className='input'/></p>
        
        <p>Password <input type='password' className='input'/></p>

        <button className='create-account-btn'>Create Account</button>

        <p className='text'>Already have an account? <a href='#'>Log In</a></p>

      </div>
    </div>
  )
}
