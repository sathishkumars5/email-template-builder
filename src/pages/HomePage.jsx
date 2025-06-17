import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import './HomePage.css';
import { handleEditorPage } from '../components/common/routeFunction';
import StaticTemplates from './StaticTemplates';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = () => {
  const navigate = useNavigate();

  const [activeButton, setActiveButton] = useState('');


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
         <li
 className='sidebar-button'
  onClick={() => {
    setActiveButton('myTemplates');
    handleEditorPage(navigate);
  }}
>
  Recent Activity
</li>
        </ul>
      </div>
     
      
 <div className="main-area">


        <h1>Welcome to Email Builder</h1>
       <StaticTemplates/> 
       
      </div>
    </div>


      

<div>
 
</div>
    </div>
  );
};

export default HomePage;