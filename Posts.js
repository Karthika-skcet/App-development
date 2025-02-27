import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../HomePage/Bar';
import './Posts.css';
import Replies from './Reply';

const Post = () => {
  const location = useLocation();
  const { selectedMedicines } = location.state || { selectedMedicines: [] };
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showReplies, setShowReplies] = useState(false);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    if (uploadedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(uploadedFile);
    }
  };

  const handlePostRequirement = () => {
    if (!file) {
      alert('Please upload a file before posting.');
      return;
    }
    setShowReplies(true);
  };
  const toggleMenu = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const totalQuantity = selectedMedicines.reduce((total, medicine) => total + medicine.quantity, 0);

  return (
    
    <div className="post-background">
    <Navbar menuOpen={sidebarOpen} toggleMenu={toggleMenu} />
      <div className="post-container">
        <h1>Selected Medicines</h1>
        <ul>
          {selectedMedicines.map((medicine, index) => (
            <li key={index} className="medicine-card">
              <strong>{medicine.name}</strong>: {medicine.selectedDosage}, Quantity: {medicine.quantity}
            </li>
          ))}
        </ul>
        <div className="total">Total: {totalQuantity}</div>
        <div className="upload-section">
          <input type="file" onChange={handleFileChange}/>
          {filePreview && (
            <div className="file-preview">
              <h3>File Preview:</h3>
              <img src={filePreview} alt="Prescription Preview" />
            </div>
          )}
        </div>
        <button className="post-btn" onClick={handlePostRequirement}>Post Requirement</button>
        {showReplies && <Replies />}
      </div>
    </div>
  );
};

export default Post;