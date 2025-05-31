import React from 'react';
import PropertyBlock from '../PropertiesPanel/PropertyBlock';
import './property.css';
import { useDrag } from 'react-dnd';

const PropertiesPanel = ({ onClose }) => {

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'PANEL',
    item: {},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  
  return (
   <div className='main'>
     <div ref={dragRef}
      className="properties-panel"
      style={{ opacity: isDragging ? 0.5 : 1 }}>
      <h3 className="panel-header">
        PROPERTIES
        <h6 className="close-btn" onClick={onClose}>X </h6>
      </h3>
      <PropertyBlock />
    </div>
   </div>
  );
};

export default PropertiesPanel;



