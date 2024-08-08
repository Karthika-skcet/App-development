import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CusHome.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <body className='karthi'>
    <nav className="navbar">
      <div className="navbar-brand">YOUR PHARMACY</div>
      <ul className="navbar-links">
        <li>
          <button onClick={() => handleNavigation('/')}>Home</button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/')}>About</button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/')}>Products</button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/')}>Contact</button>
        </li>
      </ul>
    </nav>
    </body>
  );
};

export default Navbar;
