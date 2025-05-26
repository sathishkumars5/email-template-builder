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
<<<<<<< HEAD
    <div
      className="canvas"
      style={{
        flex: 1,
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Canvas Container */}
      <div
        className="canvas-container"
        style={{
          border: '1px solid',
          // height: '80vh',
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          background: '#fdfdfd',
        }}
      >
        {/* Header */}
        <div ref={headerDropRef} style={{ minHeight: '100px', border: '1px solid gray' }}>
          {component.filter((comp) => comp.area === 'header').map(renderComponent)}
        </div>

        {/* Main */}
        <div ref={mainDropRef} style={{  minHeight: '400px', flex: 1, overflowY: 'auto', border: '1px solid gray' }}>
          {component.filter((comp) => comp.area === 'main').map(renderComponent)}
        </div>
=======
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
>>>>>>> 3c21dbeed9d78d367c85ff93c4de5ed9b1bb01f3

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
    </div>
  );
};

export default CanvasEditor;
