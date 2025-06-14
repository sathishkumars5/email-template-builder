import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; 
import StaticTemplates from './StaticTemplates'


const HomePage = () => {
  const navigate = useNavigate();

  const handleNewTemplate = () => {
    navigate('/editor');
  };
  return (
    <div className="home-container">
      <div className="left-sidebar">
        <img src="emailtemplatelogo.png" alt="No" />
        <h2 className="sidebar-title">Dashboard</h2>
        <ul className="sidebar-menu">
          <li>
            <button className="sidebar-button" onClick={handleNewTemplate}>My Templates</button>
          </li>
        </ul>
      </div>
      <div className="main-area">
        <h1>Templates</h1>
        <StaticTemplates/>
      </div>
    </div>
  );
};

export default HomePage;
