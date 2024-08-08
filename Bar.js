// src/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bar.css';

const Bar = ({ menuOpen, toggleMenu }) => {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul>
        <li onClick={() => navigate('/customerhome')}>Home</li>
        <li onClick={() => navigate('/discover')}>Discover</li>
        <li onClick={() => navigate('/list')}>Create List</li>
        <li onClick={() => navigate('/diagnosis')}>Diagnosis</li>
        <li className="signout" onClick={() => navigate('/')}>Sign Out</li>
      </ul>
    </div>
  );
};

export default Bar;

