import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [accountType, setAccountType] = useState(null); // State to manage the account type

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
  };

  return (
    
    <div className="login-page">
      {!accountType ? (
        <div className="account-type-selection">
          <h2>Select Account Type</h2>
          <div className="button-group">
            <button onClick={() => handleAccountTypeChange('customer')}>Customer Login</button>
            <button onClick={() => handleAccountTypeChange('pharmacist')}>Pharmacist Login</button>
          </div>
        </div>
      ) : (
        <LoginForm accountType={accountType} />
      )}
    </div>
    
  );
};

const LoginForm = ({ accountType }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting ${accountType} login`, formData);
    // Add your form submission logic here

    // Navigate to the appropriate page based on the account type
    if (accountType === 'pharmacist') {
      navigate('/pharmahome');
    } else if (accountType === 'customer') {
      navigate('/customerhome');
    }
  };

  return (
    <div className="login-form-container">
      <h2>{accountType === 'pharmacist' ? 'Pharmacist Login' : 'Customer Login'}</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
