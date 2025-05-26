// DropZone.js
import React from 'react';
import { useDrop } from 'react-dnd';
import renderBlock from '../utils/renderBlock';
import useEditorContext from '../hooks/useEditorContext';

const ItemType = 'DRAGGABLE_ITEM';

const DropZone = ({ section }) => {
  const { template, setTemplate, selected,setSelected} = useEditorContext();

  const [{ isOver }, dropRef] = useDrop({
    accept: ItemType,
    drop: (item) => {
  const newBlock = {
    ...item,
    id: Math.floor(1000 + Math.random() * 9000),
  };

  const updatedTemplate = {
    ...template,
    [section]: [...(template[section] || []), newBlock],
  };

  setTemplate(updatedTemplate);

  // Set selected to both section and id
  setSelected({ section, id: newBlock.id });

  console.log('Selected:', { section, id: newBlock.id });
},

    collect: monitor => ({
      isOver: monitor.isOver(),
    })
  });

  const background = isOver ? '#d3f9d8' : 'yellow';

  return (
    <div ref={dropRef} style={{ backgroundColor: background, padding: '1rem', margin: '0 2rem' }}>
      {(template[section]).map((block) => (
        <div key={block.id} style={{ marginBottom: '0.5rem' }}>
          {renderBlock(block)}
        </div>
      ))}
    </div>
  );
};

export default DropZone;


