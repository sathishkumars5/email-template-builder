import React from 'react';
import PropertyBlock from '../PropertiesPanel/PropertyBlock';
import './property.css';
import useEditorContext from '../../hooks/useEditorContext';

const PropertiesPanel = ({ onClose }) => {
  const { setSelected } = useEditorContext();

  const handleClose = () => {
    setSelected({ section: null, id: null }); 
    onClose();
  };

  return (
   <div className='main'>
     <div 
      className="properties-panel"
      >
      <h3 className="panel-header">
        PROPERTIES
        <small className="close-btn" onClick={handleClose}>X </small>
      </h3>
      <PropertyBlock />
    </div>
   </div>
  );
}; 

export default PropertiesPanel;



