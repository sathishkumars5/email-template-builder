import React, { useEffect } from 'react';
import DropZone from './DropZone';
import useEditorContext from '../../hooks/useEditorContext';

const CanvasEditor = ({ onBlockClick }) => {
  const { template,setSelected,widthState } = useEditorContext();

const getCanvasStyle = () => {
  if (widthState.mobile) {
    return {
      margin:'auto',
      padding: '1rem',
      border: '1px dashed gray',
      width: '425px',
    };
  } else if (widthState.desktop) {
    return {
      margin:'auto',
      padding: '1rem',
      border: '1px dashed gray',
      width: '1024px',
    };
  } else {
    return {
      padding: '1rem',
      border: '1px dashed gray',
      width: '1024px'
    };
  }
};

   const handleCanvasClick = (e) => {
        if (e.target.id==='') {
          setSelected({section: null, id: null })
          return
        }
        else{
          onBlockClick()
        }
  };

  if (!template || typeof template !== 'object') {
    return (
      <div className="canvas" style={{ padding: '1rem', border: '1px dashed gray' }}>
        <p>Drag blocks here</p>
      </div>
    );
  }

  return (
    <div
      className="canvas"
      style={getCanvasStyle()}
      onClick={handleCanvasClick} 
    >
      {template.header?.length > 0 && <DropZone section="header" />}
      {template.Container?.length > 0 && <DropZone section="Container" />}
      {template.footer?.length > 0 && <DropZone section="footer" />}
      
    </div>
  );
};

export default CanvasEditor;