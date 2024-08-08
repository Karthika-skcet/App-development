// src/Login.js
import React, { useState } from 'react';
import './index.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle the login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img src="logo.png" alt="Pharmacy Logo" className="logo" />
      </div>
      <div className="login-form">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email or Username</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-footer">
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
