// import React from 'react';
// import PropertyBlock from '../PropertiesPanel/PropertyBlock';
// import './property.css'; 

// const PropertiesPanel = () => {
//   console.log('Rendering PropertiesPanel');
//   let btn=document.getElementsByClassName("properties-panel")
//   const closeBtn = () => {

//       btn.classlist.add="hidden"

   
//   };

//   return (
//     <div className="properties-panel">
//       <h3 onClick={closeBtn}>X</h3>
//       <h3>Properties</h3>
//       <PropertyBlock />
//     </div>
//   );
// };

// export default PropertiesPanel;

import React from 'react';
import PropertyBlock from '../PropertiesPanel/PropertyBlock';
import './property.css';

const PropertiesPanel = ({ onClose }) => {
  return (
    <div className="properties-panel">
      <h3 className="panel-header">
        Properties
        <h2 className="close-btn" onClick={onClose}>X </h2>
      </h3>
      <PropertyBlock />
    </div>
  );
};

export default PropertiesPanel;

