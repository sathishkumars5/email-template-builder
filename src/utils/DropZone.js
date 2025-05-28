import { useDrop } from 'react-dnd';
import { useEffect } from 'react';
import renderBlock from '../utils/renderBlock';
import useEditorContext from '../hooks/useEditorContext';

const ItemType = 'DRAGGABLE_ITEM';

const DropZone = ({ section }) => {
  const { template, setTemplate, setSelected, selected } = useEditorContext();

 
  useEffect(() => {
    console.log('Updated Template:', template);
  }, [template]);


  useEffect(() => {
    if (selected?.id && selected?.section) {
      const selectedBlock = template[selected.section]?.find(
        (block) => block.id === selected.id
      );
      console.log('Selected Block:', selectedBlock);
    }
    
  }, [selected, template]);

  const [{ isOver }, dropRef] = useDrop({
    accept: ItemType,
    drop: (item) => {
      const newBlock = {
        ...item,
        id: Math.floor(1000 + Math.random() * 9000),
      };

      setTemplate(prevTemplate => {
        const updatedSection = [...(prevTemplate[section] || []), newBlock];
        return {
          ...prevTemplate,
          [section]: updatedSection,
        };
      });

      setSelected({ section, id: newBlock.id });
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  });

  const background = isOver ? '#d3f9d8' : '';

  return (
    <div
      ref={dropRef}
      style={{ backgroundColor: background, padding: '1rem', margin: '0 2rem' }}
    >
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
    </div>
  );
};

export default DropZone;