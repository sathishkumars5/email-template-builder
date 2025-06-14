import React from 'react';
import { useNavigate } from 'react-router-dom';
import { generateFullHtml } from '../components/HeaderToolbar/Htmlconvert';
import useEditorContext from '../hooks/useEditorContext';
import './PreviewPage.css';
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
