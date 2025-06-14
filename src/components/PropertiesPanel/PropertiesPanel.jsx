import React from 'react';
import PropertyBlock from '../PropertiesPanel/PropertyBlock';
import './property.css';


const PropertiesPanel = ({onClose}) => {

  return (
   <div className='main'>
     <div 
      className="properties-panel"
      >
      <h3 className="panel-header">
        PROPERTIES
        <small className="close-btn" onClick={onClose}>X </small>
      </h3>
      <PropertyBlock />
    </div>
   </div>
  );
}; 

export default PropertiesPanel;



