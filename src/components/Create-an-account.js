import React, { useState } from "react";
import "./Create-an-account.css";
import { Link } from "react-router-dom";


export default function Createanaccount() {
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Handle form submit
  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password })
      });

      if (response.ok) {
        alert("Account created successfully!");
      } else {
        const error = await response.text();
        alert("Signup failed: " + error);
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server.");
    }
  };

  return (
    <div className="page">
      <div className="cover">
        <h1>Create an Account</h1>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="Createaccount">
          <button className="create-account-btn" onClick={handleSignup}>
            Create Account
          </button>
          <p className="text">
            Already have an account? <Link to="/login"><a href="#">Log In</a></Link>
          </p>
        </div>
      </div>
    </div>
  );
}
