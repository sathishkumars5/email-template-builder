import React from 'react';
import rawStructure from '../data/structure.json';
import { useNavigate } from 'react-router-dom';
import useEditorContext from '../hooks/useEditorContext';
import './StaticTemplates.css'; 
import { handleHomepage } from '../components/common/routeFunction';
import { handleEditorPage } from '../components/common/routeFunction';

const structure = typeof rawStructure === 'string' ? JSON.parse(rawStructure) : rawStructure;

const StaticTemplates = () => {

  const navigate = useNavigate();
  const { templates } = structure;
  const { setTemplate,setTemplateName } = useEditorContext();


  const renderComponent = (comp) => {
    const style = comp.style || {};

    switch (comp.type) {
      case 'text':
        return <p key={comp.id} style={{ ...style, fontSize: '16px', margin: 0 }}>{comp.content}</p>;
      case 'button':
        return <button key={comp.id} style={{ ...style, fontSize: '12px', padding: '6px 12px' }}>{comp.content}</button>;
      case 'img':
        return <img key={comp.id} src={comp.src} alt={comp.alt} style={{ ...style, maxWidth: '100%', height: 'auto' }} />;
      case 'link':
        return <a key={comp.id} href={comp.href} style={{ ...style, fontSize: '12px' }}>{comp.content}</a>;
      case 'space':
        return <div key={comp.id} style={style}></div>;
      default:
        return null;
    }
  };

  return (
    <div className="static-container">
      <h3 className="static-heading">Static Templates</h3>
      <div className="template-list-wrapper">
        <div className="template-grid">
          {templates.map((templateObj, index) => {
            const templateKey = Object.keys(templateObj);
            const templatedata = templateObj[templateKey];

            return (
              <div
                key={index}
                className="template-card"
                onClick={() => {
                  setTemplateName(templateKey)
                  setTemplate(templatedata);
                  handleEditorPage(navigate);
                }}
              >
                <div className="template-preview">
                  {['header', 'Container', 'footer'].map((section) =>
                    templatedata[section]?.map((comp) => renderComponent(comp))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StaticTemplates;

