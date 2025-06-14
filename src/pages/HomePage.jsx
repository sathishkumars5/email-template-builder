import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import { handleEditorPage } from '../components/common/routeFunction';
import { handleTemplates } from '../components/common/routeFunction';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="left-sidebar">
        <h2 className="sidebar-title">Dashboard</h2>
        <ul className="sidebar-menu">
          <li>
            <button className="sidebar-button" onClick={() => handleTemplates(navigate)}>Templates</button>
          </li>
          <li>
            <button className="sidebar-button" onClick={() => handleEditorPage(navigate)}>My Templates</button>
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