import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import './HomePage.css';
import { handleEditorPage } from '../components/common/routeFunction';
import { handleTemplates } from '../components/common/routeFunction';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">

       <div className='homePageNav'>
  <div className="nav-left">
    <img src='/assets/sliceMailer.png' alt="logo" className='logoImage' />
  </div>

  <div className="nav-right">
    <h4 className="user-greeting">Hi, User username</h4>
    <button className='logoutBtn'>Log out</button>
  </div>
</div>

<div id='bodyy'> 
      <div className="left-sidebar">
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
    </div>
  );
};

export default HomePage;
