import React, { useState } from 'react';
import './BroadcastForm.css'; // Import the CSS file for styling

const BroadcastForm = () => {
  const [selectedDistance, setSelectedDistance] = useState('');
  const [orderTitle, setOrderTitle] = useState('');
  const [medicine, setMedicine] = useState('');
  const [need, setNeed] = useState('Need Now');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleBroadcast = () => {
    // Implement the broadcast functionality here
    alert('Broadcasting!');
    console.log({
      orderTitle,
      medicine,
      need,
      phone,
      address,
      selectedDistance,
    });
  };

  return (
    <div className="broadcast-form">
      <h2>Broadcast List</h2>
      <div className="distance-selector">
        {['01 km', '02 km', '05 km', '>05 km'].map((distance) => (
          <button
            key={distance}
            className={`distance-button ${selectedDistance === distance ? 'selected' : ''}`}
            onClick={() => setSelectedDistance(distance)}
          >
            {distance}
          </button>
        ))}
      </div>

      <input
        type="text"
        className="input-field"
        placeholder="Enter Order Title"
        value={orderTitle}
        onChange={(e) => setOrderTitle(e.target.value)}
      />

      <div className="search-bar">
        <input
          type="text"
          className="input-field"
          placeholder="Search Medicine"
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
        />
        <button className="search-button">&#x1F50D;</button>
      </div>

      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="need"
            checked={need === 'Need Now'}
            onChange={() => setNeed('Need Now')}
          />
          Need Now
        </label>
        <label>
          <input
            type="radio"
            name="need"
            checked={need === 'Need Later'}
            onChange={() => setNeed('Need Later')}
          />
          Need Later
        </label>
      </div>

      <input
        type="text"
        className="input-field"
        placeholder="Phone No"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="text"
        className="input-field"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button className="broadcast-button" onClick={handleBroadcast}>
        Broadcast
      </button>
    </div>
  );
};

export default BroadcastForm;
