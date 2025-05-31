import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { EditorProvider } from './context';
import HeaderToolbar from './components/HeaderToolbar/HeaderToolbar';
import BlockSelector from './components/BlockSelector/BlockSelector';
import CanvasEditor from './components/CanvasEditor/CanvasEditor';
import PropertiesPanel from './components/PropertiesPanel/PropertiesPanel';



import './styles/index.css';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <EditorProvider>
        <div className="app-container">
          <HeaderToolbar />
          <div className="editor-body">
            <BlockSelector />
            <CanvasEditor />
            <PropertiesPanel />
          </div>
        </div>
      </EditorProvider>
    </DndProvider>
  );
};

export default App;