import React from 'react';
import { useNavigate } from 'react-router-dom';
import Htmlconvert from '../components/HeaderToolbar/Htmlconvert';
import './PreviewPage.css';

const PreviewPage = () => {
  const navigate = useNavigate();
  const htmlCode = Htmlconvert();

  const handleBackToEditor = () => {
    navigate('/');
  };

  return (
    <div className="preview-page">
      <div className="preview-header">
        <button 
          onClick={handleBackToEditor} 
          className="back-to-editor-btn"
        >
        Back to Editor
        </button>
        <h1 className="preview-title">Email Template Preview</h1>
      </div>
      
      <div className="preview-container">
        <div className="preview-frame">
          <iframe
            title="Email Template Preview"
            srcDoc={htmlCode}
            className="preview-iframe"
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
