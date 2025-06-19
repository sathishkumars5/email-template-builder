import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import HeaderToolbar from '../components/HeaderToolbar/HeaderToolbar';
import BlockSelector from '../components/BlockSelector/BlockSelector';
import CanvasEditor from '../components/CanvasEditor/CanvasEditor';
import PropertiesPanel from '../components/PropertiesPanel/PropertiesPanel';
import useEditorContext from '../hooks/useEditorContext';
import useHead from '../hooks/useHead';

const EditorPage = () => {

  // Set meta tags for the editor page
  useHead({
    title: 'Email Editor - Email Template Builder',
    description: 'Design and customize your email templates with our powerful drag-and-drop editor. Create professional emails with ease.',
    keywords: 'email editor, drag and drop editor, email design, template editor, visual email builder',
    author: 'Email Template Builder Team'
  });

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


