// src/Home.js
import React, { useState } from 'react';
import Navbar from './Bar';
import { FiMenu } from 'react-icons/fi'; // Import menu icon from react-icons
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleMenu = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <body className="home">
    <div >
    <Navbar menuOpen={sidebarOpen} toggleMenu={toggleMenu} />
      <div className="content">
        <h1>Welcome to the Pharmacy Management System</h1>
        <p>Manage your pharmacy efficiently and effectively.</p>
      </div>
    </div>
    </body>
  );
};

export default Home;
