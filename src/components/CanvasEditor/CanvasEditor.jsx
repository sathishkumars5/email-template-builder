import React from 'react';
import DropZone from '../../utils/DropZone';
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
<<<<<<< HEAD

    <div className="canvas" style={{ padding: '1rem', border: '1px dashed gray' }}>
      {/* Header Section */}
      <div style={{backgroundColor:'yellow', padding:'1rem', margin:'0 2rem'}}>
        {header.map((block) => (
          <div key={block.id} style={{ marginBottom: '0.5rem' }}>
            {renderBlock(block)}
            {console.log(header)}
            
          </div>
        ))}
      </div>
=======
    <div className="canvas" style={{ padding: '1rem', border: '1px dashed gray'}}>
      
      <DropZone section="header" />
>>>>>>> 91e20d02886bedc132e32f6618d981eee1f0241a

      <DropZone section="Container" />

<<<<<<< HEAD
      {/* Footer Section */}
      <div style={{backgroundColor:'yellow', padding:'1rem', margin:'0 2rem'}}>
        {footer.map((block) => (
          <div key={block.id} style={{ marginBottom: '0.5rem' }}>
            {renderBlock(block)}
          </div>
        ))}
      </div>
    <div className="canvas">
      <p>Drag blocks here</p>
      <p>hii</p>
    </div>
=======
      <DropZone section="footer" />
>>>>>>> 91e20d02886bedc132e32f6618d981eee1f0241a
    </div>
  );
};

export default CanvasEditor;





