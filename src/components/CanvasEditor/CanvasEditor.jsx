import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const CanvasEditor = () => {
  const [components, setComponents] = useState({
    header: [],
    main: [],
    footer: [],
  });
  
  const [, headerDropRef] = useDrop(() => ({
    accept: ['text', 'image', 'link', 'button'],
    drop: (item) => {
      setComponents((prev) => ({
        ...prev,
        header: [...prev.header, item.type],
      }));
    },
  }));

  const [, mainDropRef] = useDrop(() => ({
    accept: ['text', 'image', 'link', 'button'],
    drop: (item) => {
      setComponents((prev) => ({
        ...prev,
        main: [...prev.main, item.type],
      }));
    },
  }));

  const [, footerDropRef] = useDrop(() => ({
    accept: ['text', 'image', 'link', 'button'],
    drop: (item) => {
      setComponents((prev) => ({
        ...prev,
        footer: [...prev.footer, item.type],
      }));
    },
  }));

  const renderComponent = (type, index) => {
    switch (type) {
      case 'text':
        return <p key={index} contentEditable suppressContentEditableWarning >Editable Text</p>;
      case 'image':
        return <img key={index} src="https://via.placeholder.com/100" alt="Dropped" />;
      case 'link':
        return <a key={index} href="https://example.com" target="_blank" rel="noreferrer">Example Link</a>;
      case 'button':
        return <button key={index}>Click Me</button>;
      default:
        return null;
    }
  };

return (
  <div className="canvas" style={{ flex: 1, padding: '2rem', display:'flex', justifyContent:'center', alignItems:'center'}}>
    <div
      className="conva-container"
      style={{
        border: '1px solid',
        height: '80vh', 
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background: '#fdfdfd',
      }}
    >
      {/* Header */}
      <div
        ref={headerDropRef}
        style={{
          minHeight: '100px',
          border: '1px solid gray',
        }}
      >
        {components.header.map((type, i) => renderComponent(type, i))}
      </div>

      {/* Main (takes up remaining space) */}
      <div
        ref={mainDropRef}
        style={{
          flex: 1, 
          overflowY: 'auto',
          border: '1px solid gray',
        }}
      >
        {components.main.map((type, i) => renderComponent(type, i))}
      </div>

      {/* Footer */}
      <div
        ref={footerDropRef}
        style={{
          minHeight: '100px',
          border: '1px solid gray',
        }}
      >
        {components.footer.map((type, i) => renderComponent(type, i))}
      </div>
    </div>
  </div>
);
}

export default CanvasEditor;
