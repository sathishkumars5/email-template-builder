import React from 'react';
import PropertyBlock from '../PropertiesPanel/PropertyBlock';
import './property.css'; 

const PropertiesPanel = () => {
  console.log('Rendering PropertiesPanel');
  const closeBtn = () => {
   console.log("qwertui");
   onclose('.properties-panel')
   
  };

  return (
    <div className="properties-panel">
      <h3 onClick={closeBtn}>X</h3>
      <h3>Properties</h3>
      <PropertyBlock />
    </div>
  );
};

export default PropertiesPanel;
