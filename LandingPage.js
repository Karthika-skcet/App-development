import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    const navigate=useNavigate();
    const HandlePharma=()=>{
        navigate('/signup')
    }
    const HandlePro=()=>{
        navigate('/customer')
    }
  return (
    <body className='landing'>
    <div className="landing-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>PHARMAFINDER</h1>
          <p>Explore our comprehensive app for easy prescription refills, medication tracking, and expert health resources.</p><br/>
          <p>Get Started as,</p>
          <div className="buttons">
            <button className="learn-more" onClick={HandlePharma}>Pharmacist</button>
            <button className="purchase" onClick={HandlePro}>Customer</button>
          </div>
        </div>
      </div>
    </div>
    </body>
  );
}

export default LandingPage;
