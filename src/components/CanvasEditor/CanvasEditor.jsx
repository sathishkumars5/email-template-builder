import React, { useEffect } from 'react';
import { useDrop } from 'react-dnd';
import useEditorContext from '../../hooks/useEditorContext'; 

const CanvasEditor = () => {
  const { component, addBlock, updateElement } = useEditorContext();

  // useEffect(() => {
  //   console.log('Stored Components:', component);
  // }, [component]);

  const createComponent = (type, area) => {
    return {
      id: Date.now(),
      type,
      area,
      content: type === 'text' ? 'Editable Text' : '',
      style: { color: '', backgroundColor: '' },
    };
  };

  const [, headerDropRef] = useDrop(() => ({
    accept: ['text', 'image', 'link', 'button'],
    drop: (item) => {
      const newComponent = createComponent(item.type, 'header');
      {console.log(item);
      }
      addBlock(newComponent);
    },
  }));

  const [, mainDropRef] = useDrop(() => ({
    accept: ['text', 'image', 'link', 'button'],
    drop: (item) => {
      const newComponent = createComponent(item.type, 'main');
      addBlock(newComponent);
    },
  }));

  const [, footerDropRef] = useDrop(() => ({
    accept: ['text', 'image', 'link', 'button'],
    drop: (item) => {
      const newComponent = createComponent(item.type, 'footer');
      addBlock(newComponent);
    },
  }));

 
  const renderComponent = (comp) => {
    const { id, type, content, style } = comp;

    switch (type) {
      case 'text':
        return (
          <p key={id} contentEditable suppressContentEditableWarning style={style} onBlur={(e) => updateElement(id, { content: e.target.innerText })}>
            {content}
          </p>
        );
      case 'image':
        return <img key={id} src="https://via.placeholder.com/100" alt="Dropped" style={style} />;
      case 'link':
        return (
          <a key={id} href="https://example.com" target="_blank" rel="noreferrer" style={style}>
            Example Link
          </a>
        );
      case 'button':
        return (
          <button key={id} style={style}>
            {content || 'Click Me'}
          </button>
        );
      default:
        return null;
    }
  };

  return (
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
          height: '80vh',
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
        <div ref={mainDropRef} style={{ flex: 1, overflowY: 'auto', border: '1px solid gray' }}>
          {component.filter((comp) => comp.area === 'main').map(renderComponent)}
        </div>

        {/* Footer */}
        <div ref={footerDropRef} style={{ minHeight: '100px', border: '1px solid gray' }}>
          {component.filter((comp) => comp.area === 'footer').map(renderComponent)}
        </div>
      </div>
    </div>
  );
};

export default CanvasEditor;












// import React, { useState } from 'react';
// import { useDrop } from 'react-dnd';
// import UsecontexEditor from '../../hooks/DrapableContainer';



// const CanvasEditor = () => {

//     const {component,addBlock} = UsecontexEditor();

//    const [, headerDropRef] = useDrop(() => ({
//   accept: ['text', 'image', 'link', 'button'],
//   drop: (item) => {
//     const componentContent = {
//       id: Date.now(),
//       type: item.type,
//       area: 'header',
//       content: item.type === 'text' ? 'Editable Text' : '',
//       style: { color: 'white', backgroundColor: 'blue' },
//     };
//     addBlock(componentContent);
//   },
// }));

//     const [, mainDropRef] = useDrop(() => ({
//       accept: ['text', 'image', 'link', 'button'],
     
//     }));

//     const [, footerDropRef] = useDrop(() => ({
//       accept: ['text', 'image', 'link', 'button'],
      
//     }));

//  const renderComponent = (comp, index) => {
//   const { type, content, style, id } = comp;

//   switch (type) {
//     case 'text':
//       return (
//         <p key={id} contentEditable suppressContentEditableWarning style={style}>
//           {content || 'Editable Text'}
//         </p>
//       );
//     case 'image':
//       return <img key={id} src="https://via.placeholder.com/100" alt="Dropped" style={style} />;
//     case 'link':
//       return (
//         <a key={id} href="https://example.com" target="_blank" rel="noreferrer" style={style}>
//           Example Link
//         </a>
//       );
//     case 'button':
//       return <button key={id} style={style}>{content || 'Click Me'}</button>;
//     default:
//       return null;
//   }
// };


// return (
//   <div className="canvas" style={{ flex: 1, padding: '2rem', display:'flex', justifyContent:'center', alignItems:'center'}}>
//     <div
//       className="conva-container"
//       style={{
//         border: '1px solid',
//         height: '80vh', 
//         width: '80%',
//         display: 'flex',
//         flexDirection: 'column',
//         position: 'relative',
//         background: '#fdfdfd',
//       }}
//     >
//       {/* Header */}
//       <div
//         ref={headerDropRef}
//         style={{
//           minHeight: '100px',
//           border: '1px solid gray',
//         }}
//       >
//         {components.header.map((type, i) => renderComponent(type, i))}
//       </div>

//       {/* Main (takes up remaining space) */}
//       <div
//         ref={mainDropRef}
//         style={{
//           flex: 1, 
//           overflowY: 'auto',
//           border: '1px solid gray',
//         }}
//       >
//         {components.main.map((type, i) => renderComponent(type, i))}
//       </div>

//       {/* Footer */}
//       <div
//         ref={footerDropRef}
//         style={{
//           minHeight: '100px',
//           border: '1px solid gray',
//         }}
//       >
//         {components.footer.map((type, i) => renderComponent(type, i))}
//       </div>
//     </div>
//   </div>
// );
// }

// export default CanvasEditor;
