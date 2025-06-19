import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import StaticTemplates from "./StaticTemplates";
import { handleLandingPage,handleEditorPage } from '../components/common/routeFunction';
import { handleLogout } from "../components/common/authHelpers";
import useHead from '../hooks/useHead';

const HomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  // Set meta tags for the home/dashboard page
  useHead({
    title: 'Dashboard - Email Template Builder',
    description: 'Access your email template dashboard. Manage, create, and edit your email templates from one central location.',
    keywords: 'dashboard, email templates, template management, email builder dashboard',
    author: 'Email Template Builder Team'
  });

  useEffect(() => {
    const storedName = sessionStorage.getItem("name");
    if (storedName) {
      setUsername(storedName);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="home-container">
      <div className="homePageNav">
        <div className="nav-left">
          <img src="/assets/sliceMailer.png" alt="logo" className="logoImage" onClick={() => handleLandingPage(navigate)} />
        </div>

        <div className="nav-right">
          <h4 className="user-greeting">
            Hi{username ? `, ${username}` : ""}
          </h4>
          
        <button
          className="logoutBtn"
          onClick={() => handleLogout(navigate)}
        >
          Log out
        </button>
        
        </div>
      </div>

      <div id="homePageBody">
        <div className="left-sidebar">
          <ul className="sidebar-menu">
            <li
              className="sidebar-button"
              onClick={() => handleEditorPage(navigate)}
            >
              Recent Activity
            </li>
          </ul>
        </div>

        <div className="main-area">
          <h1>Welcome to Email Builder</h1>
          <StaticTemplates />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
