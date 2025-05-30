import { useDrop } from 'react-dnd';
import renderBlock from '../common/renderBlock';
import useEditorContext from '../../hooks/useEditorContext';
import { useEffect, useRef, useState } from 'react';

const ItemType = 'DRAGGABLE_ITEM';

const DropZone = ({ section }) => {
  const { template, setTemplate, setSelected, selected } = useEditorContext();
  const [hoverIndex, setHoverIndex] = useState(null);
  const containerRef = useRef(null);

  const blocks = template[section] || [];

  useEffect(() => {
    console.log('Template updated for section:', section);
    console.log('New content:', blocks);
  }, [blocks]);

  const [{ isOver }, dropRef] = useDrop({
    accept: ItemType,
    hover(item, monitor) {
      const offset = monitor.getClientOffset();
      const container = containerRef.current?.getBoundingClientRect();
      if (!offset || !container) return;

      const y = offset.y - container.top;
      let index = blocks.findIndex((block, i) => {
        const el = document.getElementById(block.id);
        const rect = el?.getBoundingClientRect();
        return rect && y < rect.bottom;
      });

      setHoverIndex(index === -1 ? blocks.length : index);
    },
    drop(item) {
      const newBlock = { ...item, id: Date.now() }; 
      const updated = [...blocks];
      updated.splice(hoverIndex ?? updated.length, 0, newBlock);

      setTemplate((prev) => ({ ...prev, [section]: updated }));
      setSelected({ section, id: newBlock.id });
      setHoverIndex(null);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
    }),
  });

  useEffect(() => {
    if (!isOver) setHoverIndex(null);
  }, [isOver]);

  return (
    <div
      ref={(el) => {
        dropRef(el);
        containerRef.current = el;
      }}
      onMouseLeave={() => setHoverIndex(null)}
      style={{
        backgroundColor: isOver ? '#ffd9ca' : '#fff',
        margin: '0 2rem',
        minHeight: '50px',
      }}
    >
      {blocks.map((block, i) => (
        <div key={block.id}>
          {hoverIndex === i && isOver && <Divider />}
          <div
            id={block.id}
            onClick={() => setSelected({ section, id: block.id })}
            style={{
              marginBottom: '0.5rem',
              border: selected?.id === block.id ? '2px solid #f17a4b' : '1px solid transparent',
              padding: '0.25rem',
              cursor: 'pointer',
            }}
          >
            {renderBlock(block)}
          </div>
        </div>
      ))}
      {hoverIndex === blocks.length && isOver && <Divider />}
    </div>
  );
};

const Divider = () => (
  <div
    style={{
      height: '2px',
      backgroundColor: '#c74a27',
      margin: '.8rem 0',
    }}
  />
);

export default DropZone;




















// const ItemType = 'DRAGGABLE_ITEM';

// const DropZone = ({ section }) => {
//   const { template, setTemplate, setSelected, selected } = useEditorContext();

//   useEffect(() => {
//     console.log('Updated Template:', template);
//   }, [template]);

//   useEffect(() => {
//     if (selected?.id && selected?.section) {
//       const selectedBlock = template[selected.section]?.find(
//         (block) => block.id === selected.id
//       );
//       console.log('Selected Block:', selectedBlock);
//     }
//   }, [selected, template]);

//   const [{ isOver }, dropRef] = useDrop({
//     accept: ItemType,
//     drop: (item) => {
//       const newBlock = {
//         ...item,
//         id: Math.floor(1000 + Math.random() * 9000),
//       };

//       setTemplate((prevTemplate) => {
//         const updatedSection = [...(prevTemplate[section] || []), newBlock];
//         return {
//           ...prevTemplate,
//           [section]: updatedSection,
//         };
//       });

//       setSelected({ section, id: newBlock.id });
//     },
//     collect: (monitor) => ({
//       isOver: monitor.isOver(),
//     }),
//   });

//   const background = isOver ? '#d3f9d8' : '';

//   return (
//     <div
//       ref={dropRef}
//       style={{ backgroundColor: background, padding: '1rem', margin: '0 2rem' }}
//     >
//       {(template[section] || []).map((block) => {
//         const isSelected = selected?.id === block.id && selected?.section === section;

//         const baseStyle = {
//           marginBottom: '0.5rem',
//           border: isSelected ? '2px solid blue' : '1px solid transparent',
//           padding: '0.25rem',
//           cursor: 'pointer',
          
//         };

     
//         const combinedStyle =
//           block.type === 'img' && block.parentStyle
//             ? { ...baseStyle, ...block.parentStyle }
//             : baseStyle;

//         return (
//           <div
//             key={block.id}
//             onClick={() => setSelected({ section, id: block.id })}
//             style={combinedStyle}
//           >
//             {renderBlock(block)}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default DropZone;


















