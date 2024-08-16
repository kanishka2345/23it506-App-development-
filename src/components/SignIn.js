// src/components/SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'; // Assuming you have CSS for styling

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate for navigation

  const handleSignIn = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      alert('Please enter both email and password to sign in.');
      return;
    }

    // Simulate authentication
    // In a real application, you would verify the credentials with your backend
    console.log('Sign In:', { email, password });
    
    // If credentials are valid, redirect to the shop page
    navigate('/DressPage'); // Use navigate for redirecting
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
