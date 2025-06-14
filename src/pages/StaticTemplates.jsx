// import React from 'react';
// import rawStructure from '../data/structure.json';
// import { useNavigate } from 'react-router-dom';
// import useEditorContext from '../hooks/useEditorContext';

// const structure = typeof rawStructure === 'string' ? JSON.parse(rawStructure) : rawStructure;

// const StaticTemplates = () => {
//   const navigate = useNavigate();
//   const { templates } = structure;
//   const { setTemplate } = useEditorContext();

//   const handleHomepage = () => {
//     navigate('/');
//   };

//   const EditorPage = () => {
//     navigate('/editor');
//   };

//   const renderComponent = (comp) => {
//     const style = comp.style || {};

//     switch (comp.type) {
//       case 'text':
//         return <p key={comp.id} style={{ ...style, fontSize: '16px', margin: 0 }}>{comp.content}</p>;
//       case 'button':
//         return <button key={comp.id} style={{ ...style, fontSize: '12px', padding: '6px 12px' }}>{comp.content}</button>;
//       case 'img':
//         return <img key={comp.id} src={comp.src} alt={comp.alt} style={{ ...style, maxWidth: '100%', height: 'auto' }} />;
//       case 'link':
//         return <a key={comp.id} href={comp.href} style={{ ...style, fontSize: '12px' }}>{comp.content}</a>;
//       case 'space':
//         return <div key={comp.id} style={style}></div>;
//       default:
//         return null;
//     }
//   };

//   return (
//   <div style={{ padding: '1rem', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
//       <h3 style={{ marginBottom: '1rem' }}>Static Templates</h3>
//       <button onClick={handleHomepage} style={{ marginBottom: '1rem', padding: '6px 12px', fontSize: '14px' }}> HomePage</button>
//       <div style={{display:'flex'}}>
//       <div style={{display: 'flex',flexWrap: 'wrap',gap: '1rem',}}>
//           {templates.map((templateObj, index) => {
//             const templateKey = Object.keys(templateObj);
//             const templatedata = templateObj[templateKey];

//             return (
//               <div
//                 key={index}
//                 onClick={() => {
//                   setTemplate(templatedata);
//                   EditorPage();
//                 }}
//                 style={{
//                   backgroundColor: '#ffffff',
//                   borderRadius: '6px',
//                   boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
//                   cursor: 'pointer',
//                   height: '240px',
//                   width: '180px', 
//                   overflow: 'hidden',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'space-between',
//                   transition: 'transform 0.2s',
//                   padding: '8px',
//                 }}
//               >
//                 <div
//                   style={{
//                     transform: 'scale(0.4)',
//                     transformOrigin: 'top left',
//                     width: '250%',
//                     pointerEvents: 'none',
//                   }}
//                 >
//                   {['header', 'Container', 'footer'].map((section) =>
//                     templatedata[section]?.map((comp) => renderComponent(comp))
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//     </div>
//   </div>
// </div>
// )};

// export default StaticTemplates;


import React from 'react';
import rawStructure from '../data/structure.json';
import { useNavigate } from 'react-router-dom';
import useEditorContext from '../hooks/useEditorContext';
import './StaticTemplates.css'; // Importing external CSS

const structure = typeof rawStructure === 'string' ? JSON.parse(rawStructure) : rawStructure;

const StaticTemplates = () => {
  const navigate = useNavigate();
  const { templates } = structure;
  const { setTemplate } = useEditorContext();

  const handleHomepage = () => {
    navigate('/homePage');
  };

  const EditorPage = () => {
    navigate('/editor');
  };

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
      {/* <h3 className="static-heading">Static Templates</h3> */}
      {/* <button onClick={handleHomepage} className="homepage-btn">HomePage</button> */}
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
                  setTemplate(templatedata);
                  EditorPage();
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

