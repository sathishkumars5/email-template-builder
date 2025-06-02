import { useDrop } from 'react-dnd';
import renderBlock from '../common/renderBlock';
import useEditorContext from '../../hooks/useEditorContext';
import { useEffect, useRef, useState, useMemo } from 'react';
import { PRIMARY_COLOR, TEXT_WHITE } from '../../constants/colors';
import './DropZone.css';

const ItemType = 'DRAGGABLE_ITEM';

const DropZone = ({ section }) => {
  const { template, setTemplate, setSelected, selected, deleteBlock } = useEditorContext();
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoveredBlockId, setHoveredBlockId] = useState(null);
  const containerRef = useRef(null);

  const blocks = useMemo(() => template[section] || [], [template, section]);

  // Add keyboard event listener for Delete key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Delete' && selected.section && selected.id) {
        event.preventDefault();
        if (deleteBlock && typeof deleteBlock === 'function') {
          deleteBlock(selected.section, selected.id);
        }
      }
    };

    // Add event listener to document
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selected, deleteBlock]);

  const [{ isOver }, dropRef] = useDrop({
    accept: ItemType,
    hover(item, monitor) {
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const y = clientOffset.y - containerRect.top;

      let newIndex = blocks.length;

      for (let i = 0; i < blocks.length; i++) {
        const el = document.getElementById(blocks[i].id);
        if (!el) continue;

        const { top, height } = el.getBoundingClientRect();
        const blockY = top - containerRect.top;
        const middleY = blockY + height / 2;

        if (y < middleY) {
          newIndex = i;
          break;
        }
      }

      setHoverIndex(newIndex);
    },
    drop(item) {
      const newBlock = { ...item, id: String(Date.now()) };
      const updated = [...blocks];
      updated.splice(hoverIndex ?? blocks.length, 0, newBlock);

      setTemplate(prev => ({ ...prev, [section]: updated }));
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

  // Clear hover state if the hovered block no longer exists
  useEffect(() => {
    if (hoveredBlockId && !blocks.find(block => block && block.id === hoveredBlockId)) {
      setHoveredBlockId(null);
    }
  }, [blocks, hoveredBlockId]);

  return (
    <div
      ref={(el) => {
        dropRef(el);
        containerRef.current = el;
      }}
      onMouseLeave={() => setHoverIndex(null)}
      style={{
        backgroundColor: isOver ? '#ffd9ca' : TEXT_WHITE,
        margin: '0',
        minHeight: '50px',
        padding: '0.5rem 0',
      }}
    >
      {blocks.map((block, i) => {
        // Comprehensive safety check for block structure
        if (!block || !block.id || !block.type) {
          return null;
        }

        return (
          <div key={block.id}>
            {hoverIndex === i && isOver && <Divider />}
            <div
              id={block.id}
              className="block-container"
              onClick={() => setSelected({ section, id: block.id })}
              onMouseEnter={() => setHoveredBlockId(block.id)}
              onMouseLeave={() => setHoveredBlockId(null)}
              style={{
                border: selected?.id === block.id ? `2px dotted ${PRIMARY_COLOR}` : '1px solid transparent',
                backgroundColor: selected?.id === block.id ? '#fff5f0' : 'transparent',
              }}
            >
              {(() => {
                try {
                  return renderBlock(block);
                } catch (error) {
                  console.error('Error rendering block:', error, block);
                  return <div style={{ color: 'red', padding: '5px' }}>Error rendering component</div>;
                }
              })()}
              {hoveredBlockId === block.id && (
                <button
                  className="delete-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (deleteBlock && typeof deleteBlock === 'function') {
                      // Clear hover state before deleting to prevent reference errors
                      setHoveredBlockId(null);
                      deleteBlock(section, block.id);
                    }
                  }}
                  title="Delete component (or press Delete key when selected)"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        );
      })}
      {hoverIndex === blocks.length && isOver && <Divider />}
    </div>
  );
};

const Divider = () => (
  <div
    style={{
      height: '2px',
      backgroundColor: '#fff5f0',
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


















