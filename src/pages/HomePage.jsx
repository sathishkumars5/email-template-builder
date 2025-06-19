import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { handleEditorPage } from "../components/common/routeFunction";
import StaticTemplates from "./StaticTemplates";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleLogout } from "../components/common/authHelpers";

const HomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

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
          <img src="/assets/sliceMailer.png" alt="logo" className="logoImage" />
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

      <div id="bodyy">
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
