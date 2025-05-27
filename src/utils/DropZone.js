// import React, { useEffect } from 'react';
import { useDrop } from 'react-dnd';
import renderBlock from '../utils/renderBlock';
import useEditorContext from '../hooks/useEditorContext';

const ItemType = 'DRAGGABLE_ITEM';

const DropZone = ({ section }) => {
  const { template, setTemplate, setSelected, selected } = useEditorContext();

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
      setSelected({ section, id: newBlock.id });

      console.log(selected);
       console.log(template);
      
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  });

  const background = isOver ? '#d3f9d8' : '';

  return (
<<<<<<< HEAD
    <div ref={dropRef} style={{ backgroundColor: background, padding: '1rem', margin: '0 2rem',...(section === 'header' ? template.headerStyle : {}),}}>
      {(template[section]).map((block) => (
<div key={block.id} >
          {renderBlock(block)}
        </div>
      ))}
=======
    <div ref={dropRef} style={{ backgroundColor: background, padding: '1rem', margin: '0 2rem' }}>
      {(template[section] || []).map((block) => {
        const isSelected = selected?.id === block.id && selected?.section === section;

        return (
          <div
            key={block.id}
            onClick={() => setSelected({ section, id: block.id })}
            style={{
              marginBottom: '0.5rem',
              border: isSelected ? '2px solid blue' : '1px solid transparent',
              padding: '0.25rem',
              cursor: 'pointer',
            }}
          >
            {renderBlock(block)}
          </div>
        );
      })}
>>>>>>> 6a58997c5312aa20ff281b9553882775725751f5
    </div>
  );
};

export default DropZone;

