import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import HeaderToolbar from '../components/HeaderToolbar/HeaderToolbar';
import BlockSelector from '../components/BlockSelector/BlockSelector';
import CanvasEditor from '../components/CanvasEditor/CanvasEditor';
import PropertiesPanel from '../components/PropertiesPanel/PropertiesPanel';
import useEditorContext from '../hooks/useEditorContext';

const EditorPage = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const { selected, setSelected } = useEditorContext(); 

  useEffect(() => {
    if (!selected?.id) {
      setIsPanelVisible(false);
    }
  }, [selected]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <HeaderToolbar />
        <div className="editor-body">
          {isPanelVisible ? (
            <PropertiesPanel
              onClose={() => {
                setSelected({ section: null, id: null });
                setIsPanelVisible(false);
              }}
            />
          ) : (
            <BlockSelector />
          )}
          <CanvasEditor onBlockClick={() => setIsPanelVisible(true)} />
        </div>
      </div>
    </DndProvider>
  );
};

export default EditorPage;


