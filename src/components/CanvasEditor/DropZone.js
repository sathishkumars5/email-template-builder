import { useDrop } from 'react-dnd';
import RenderBlock from '../common/RenderBlock';
import useEditorContext from '../../hooks/useEditorContext';
import { useEffect, useRef, useState, useMemo } from 'react';
import { PRIMARY_COLOR, TEXT_WHITE } from '../../constants/colors';
import { styles } from './DropZoneStyles'; 

const ItemType = 'DRAGGABLE_ITEM';

const DropZone = ({ section }) => {
  const {
    template,
    setTemplate,
    setSelected,
    selected,
    deleteBlock,
  } = useEditorContext();

  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoveredBlockId, setHoveredBlockId] = useState(null);
  const [deleteHoveredId, setDeleteHoveredId] = useState(null);
  const [deleteActiveId, setDeleteActiveId] = useState(null);

  const containerRef = useRef(null);

  const blocks = useMemo(() => template[section] || [], [template, section]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Delete' && selected.section && selected.id) {
        event.preventDefault();
        if (typeof deleteBlock === 'function') {
          deleteBlock(selected.section, selected.id);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
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
      // setSelected({ section, id: newBlock.id });
      setHoverIndex(null);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
    }),
  });

  useEffect(() => {
    if (!isOver) setHoverIndex(null);
  }, [isOver]);

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
        margin: 0,
        minHeight: '50px',
        padding: '0.5rem 0',
      }}
    >
      {blocks.map((block, i) => {
        if (!block || !block.id || !block.type) return null;

        return (
          <div key={block.id}>
            {hoverIndex === i && isOver && <Divider />}
            <div
              id={block.id}
              onClick={() => setSelected({ section, id: block.id })}
              onMouseEnter={() => setHoveredBlockId(block.id)}
              onMouseLeave={() => setHoveredBlockId(null)}
              style={{
                ...styles.blockContainer,
                ...(hoveredBlockId === block.id ? styles.blockContainerHover : {}),
                border:
                  selected?.id === block.id
                    ? `2px dotted ${PRIMARY_COLOR}`
                    : '1px solid transparent',
                backgroundColor:
                  selected?.id === block.id ? '#fff5f0' : 'transparent',
              }}
            >
              {(() => {
                try {
                  return RenderBlock(block);
                } catch (error) {
                  console.error('Error rendering block:', error, block);
                  return (
                    <div style={{ color: 'red', padding: '5px' }}>
                      Error rendering component
                    </div>
                  );
                }
              })()}

              {hoveredBlockId === block.id && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setHoveredBlockId(null);
                    setSelected({ section: null, id: null });
                    deleteBlock(section, block.id);
                  }}
                  onMouseEnter={() => setDeleteHoveredId(block.id)}
                  onMouseLeave={() => {
                    setDeleteHoveredId(null);
                    setDeleteActiveId(null);
                  }}
                  title="Delete component (or press Delete key when selected)"
                  style={{
                    ...styles.deleteButton,
                    ...(deleteHoveredId === block.id ? styles.deleteButtonHover : {}),
                    ...(deleteActiveId === block.id ? styles.deleteButtonActive : {}),
                  }}
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
