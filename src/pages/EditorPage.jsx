import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import HeaderToolbar from '../components/HeaderToolbar/HeaderToolbar';
import BlockSelector from '../components/BlockSelector/BlockSelector';
import CanvasEditor from '../components/CanvasEditor/CanvasEditor';
import PropertiesPanel from '../components/PropertiesPanel/PropertiesPanel';

const EditorPage = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  return (
    <DndProvider backend={HTML5Backend}>
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
    </DndProvider>
  );
};

export default EditorPage;
