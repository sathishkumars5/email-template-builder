import React from 'react';
import DropZone from './DropZone';
import useEditorContext from '../../hooks/useEditorContext';
// import '../../styles/';

const CanvasEditor = () => {
  const { template } = useEditorContext();

  if (!template || typeof template !== 'object') {
    return (
      <div className="canvas" style={{ padding: '1rem', border: '1px dashed gray' }}>
        <p>Drag blocks here</p>
      </div>
    );
  }

  return (
    <div className="canvas" style={{ padding: '1rem', border: '1px dashed gray'}}>
      
      <DropZone section="header" />

      <DropZone section="Container" />


      <DropZone section="footer" />

    </div>
  );
};

export default CanvasEditor;





