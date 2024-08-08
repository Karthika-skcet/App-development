import React, { useState } from 'react';
import './Product.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';

const PharmacistLoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    address: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  });
  const navigate=useNavigate();
  const HandleLogin=()=>{
    navigate('/userlogin');
  }
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Perform form validation
    const { email, password, address, street, city, state, zip } = formData;
    if (!email || !password || !address || !street || !city || !state || !zip) {
      setError('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    // Mock login process
    try {
      // Replace with your actual login API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert('Login successful!');
      // Redirect or perform other actions on successful login
    } catch (err) {
      setError('Login failed. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="login-container">
      <h2>Customer Login</h2>
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
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Street</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>ZIP Code</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
        <div>
        <p>Alread have an account?</p>
        <button onClick={HandleLogin}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default PharmacistLoginPage;
