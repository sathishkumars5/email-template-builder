import React from 'react';
import PropertyBlock from '../PropertiesPanel/PropertyBlock';
import './property.css';
import { useDrag} from 'react-dnd';
import useEditorContext from '../../hooks/useEditorContext';

const PropertiesPanel = ({ onClose }) => {
  const { setSelected } = useEditorContext();

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'PANEL',
    item: {},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
   
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



