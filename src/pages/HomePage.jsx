import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import { handleEditorPage } from '../components/common/routeFunction';
import useEditorContext from '../hooks/useEditorContext';
import StaticTemplates from './StaticTemplates';


const HomePage = () => {
  const navigate = useNavigate();
  // const {template,setTemplate,structure}=useEditorContext()

  return (
    <div className="home-container">
      <div className="left-sidebar">
        <h2 className="sidebar-title">Dashboard</h2>
        <ul className="sidebar-menu">
          <li>
            <button className="sidebar-button" onClick={() => handleEditorPage(navigate)}>My Templates</button>
          </li>
        </ul>
      </div>
      <div className="main-area">
        <h1>Welcome to Email Builder</h1>
        {/* <button onClick={()=>{handleEditorPage(navigate)}}>Own project</button> */}
        <StaticTemplates/>
      </div>
    </div>
  );
};

export default HomePage;
