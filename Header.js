import React from 'react';
import './Header.css';

const Home = () => {
  return (
    <div className="home">
      <div className="overlay">
        <div className="home-content">
          <h1>YOUR PHARMACY STORE</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="search-bar">
            <input type="text" placeholder="TYPE HERE" />
            <button>Search</button>
            <span>or</span>
            <button>Upload Prescription</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
