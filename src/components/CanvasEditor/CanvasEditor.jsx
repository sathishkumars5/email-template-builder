import React from 'react';
import useEditorContext from '../../hooks/useEditorContext';
import renderBlock from '../../utils/renderBlock'; 

const CanvasEditor = () => {
  const { template } = useEditorContext();

  console.log('Template:', template);

  if (!template || typeof template !== 'object') {
    return (
      <div className="canvas" style={{ padding: '1rem', border: '1px dashed gray' }}>
        <p>Drag blocks here</p>
      </div>
    );
  }

  const { header = [], Container = [], footer = [] } = template;

  return (
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

      {/* Container Section */}
      <div style={{backgroundColor:'yellow', padding:'1rem', margin:'0 2rem'}}>
        {Container.map((block) => (
          <div key={block.id} style={{ marginBottom: '0.5rem' }}>
            {renderBlock(block)}
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div style={{backgroundColor:'yellow', padding:'1rem', margin:'0 2rem'}}>
        {footer.map((block) => (
          <div key={block.id} style={{ marginBottom: '0.5rem' }}>
            {renderBlock(block)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanvasEditor;
