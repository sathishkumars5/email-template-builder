// import React from 'react';
// import { useState } from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { EditorProvider } from './context';
// import HeaderToolbar from './components/HeaderToolbar/HeaderToolbar';
// import BlockSelector from './components/BlockSelector/BlockSelector';
// import CanvasEditor from './components/CanvasEditor/CanvasEditor';
// import PropertiesPanel from './components/PropertiesPanel/PropertiesPanel';

// import './styles/index.css';

// const App = () => {
//     const [isPanelVisible, setIsPanelVisible] = useState(false);
//   return (

//     <DndProvider backend={HTML5Backend}>
//       <EditorProvider>
//         <div className="app-container">
//           <HeaderToolbar />
//           <div className="editor-body">

//             {isPanelVisible && (
//               <PropertiesPanel onClose={() => setIsPanelVisible(false)} />
//             )}
//             <BlockSelector />
//             <CanvasEditor />
//             <PropertiesPanel />
//           </div>
//         </div>
//       </EditorProvider>
//     </DndProvider>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { EditorProvider } from './context';
// import HeaderToolbar from './components/HeaderToolbar/HeaderToolbar';
// import BlockSelector from './components/BlockSelector/BlockSelector';
// import CanvasEditor from './components/CanvasEditor/CanvasEditor';
// import PropertiesPanel from './components/PropertiesPanel/PropertiesPanel';
// import './styles/index.css';

// const App = () => {
//   const [isPanelVisible, setIsPanelVisible] = useState(false);

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <EditorProvider>
//         <div className="app-container">
//           <HeaderToolbar />
//           <div className="editor-body">
//             <BlockSelector />
//             <CanvasEditor onBlockClick={() => setIsPanelVisible(true)} />
//             {isPanelVisible && (
//               <PropertiesPanel onClose={() => setIsPanelVisible(false)} />
//             )}
//           </div>
//         </div>
//       </EditorProvider>
//     </DndProvider>
//   );
// };

// export default App;
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { EditorProvider } from './context';
import HeaderToolbar from './components/HeaderToolbar/HeaderToolbar';
import BlockSelector from './components/BlockSelector/BlockSelector';
import CanvasEditor from './components/CanvasEditor/CanvasEditor';
import PropertiesPanel from './components/PropertiesPanel/PropertiesPanel';
import './styles/index.css';

const App = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  return (
    <DndProvider backend={HTML5Backend}>
      <EditorProvider>
        <div className="app-container">
          <HeaderToolbar />
          <div className="editor-body">
            <BlockSelector />
            <CanvasEditor onBlockClick={() => setIsPanelVisible(true)} />
            {isPanelVisible && (
              <PropertiesPanel onClose={() => setIsPanelVisible(false)} />
            )}
          </div>
        </div>
      </EditorProvider>
    </DndProvider>
  );
};

export default App;
