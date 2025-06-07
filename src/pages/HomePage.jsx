import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Make sure this file is in the same folder

const HomePage = () => {
  const navigate = useNavigate();

  const handleNewTemplate = () => {
    navigate('/editor');
  };

  const templates = () => {
    navigate('/templates');
  };

  return (
    <div className="home-container">
      <div className="left-sidebar">
        <h2 className="sidebar-title">Dashboard</h2>
        <ul className="sidebar-menu">
          <li>
            <button className="sidebar-button" onClick={templates}>Templates</button>
          </li>
          <li>
            <button className="sidebar-button" onClick={handleNewTemplate}>My Templates</button>
          </li>
        </ul>
      </div>
      <div className="main-area">
        <h1>Welcome to Email Builder</h1>
      </div>
    </div>
  );
};

export default HomePage;
