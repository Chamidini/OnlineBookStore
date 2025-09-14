import React from 'react'
import "./Create-an-account.css"

export default function Createanaccount() {
  return (
    <div className='page'>
      <div className='cover'>
        <h1>Create an Account</h1>

        {/* <div className='input feilds'>
          <p>First Name <input type='text' className='input'/></p>

          <p>Last Name <input type='text' className='input'/></p>

          <p>Email<input type='text' className='input'/></p>

          <p>Password <input type='password' className='input'/></p>
        </div> */}

        <div className="form-group">
          <label>First Name</label>
          <input type="text" className="input" />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" className="input" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="text" className="input" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="input" />
        </div>
          
        <div className='Createaccount'>
          <button className='create-account-btn'>Create Account</button>
          <p className='text'>Already have an account? <a href='#'>Log In</a></p>
        </div>
        
      </div>
    </div>
  )
}
