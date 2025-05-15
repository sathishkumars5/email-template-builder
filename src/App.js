import React from 'react';
import { EditorProvider } from './context';
import HeaderToolbar from './components/HeaderToolbar/HeaderToolbar';
import BlockSelector from './components/BlockSelector/BlockSelector';
import CanvasEditor from './components/CanvasEditor/CanvasEditor';
import PropertiesPanel from './components/PropertiesPanel/PropertiesPanel';

import './styles/index.css';

const App = () => {
  return (
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
  );
};

export default App;
