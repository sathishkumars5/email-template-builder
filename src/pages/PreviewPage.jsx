import React from 'react';
import { useNavigate } from 'react-router-dom';
import { generateFullHtml } from '../components/HeaderToolbar/Htmlconvert';
import useEditorContext from '../hooks/useEditorContext';
import './PreviewPage.css';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { handleEditorPage } from '../components/common/routeFunction';


const PreviewPage = () => {
  const navigate = useNavigate();
  const { template } = useEditorContext();
  const htmlCode = generateFullHtml(template);

  return (
    <div className="preview-page">
      <div className="preview-header">
        <button 
          onClick={()=>handleEditorPage(navigate)} 
          className="back-to-editor-btn"
        >
       <FontAwesomeIcon icon={faArrowLeft} /> 
        </button>
        <h1 className="preview-title">Email Template Preview</h1>
      </div>
      
      <div className="preview-container">
        <div className="preview-frame">
         <iframe
  title="Email Template Preview"
  srcDoc={htmlCode}
  id="preview-iframe"
  style={{
    width: '100%',
    height: '100vh', 
    border: 'none',
    backgroundColor:'white',
    borderRadius:'10px',
    overflow: 'hidden',
     boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  }}
/>

        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
