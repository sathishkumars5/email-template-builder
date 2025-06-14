import { useDrop, useDrag } from 'react-dnd';
import RenderBlock from '../common/RenderBlock';
import useEditorContext from '../../hooks/useEditorContext';
import { useEffect, useRef, useState } from 'react';
import { PRIMARY_COLOR, TEXT_WHITE } from '../../constants/colors';
import { styles } from './DropZoneStyles';

const ItemType = 'DRAGGABLE_ITEM';

const DropZone = ({ section }) => {
  const { template, setTemplate, selected, setSelected, deleteBlock } = useEditorContext();
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoveredBlockId, setHoveredBlockId] = useState(null);
  const containerRef = useRef(null);
  const blocks = template[section] || [];

  // Handle delete with keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Delete' && selected?.id) {
        deleteBlock(section, selected.id);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selected, deleteBlock, section]);

  const [{ isOver }, dropRef] = useDrop({
    accept: ItemType,
    drop: (item) => {
      const isExistingBlock = item.section !== undefined && item.index !== undefined;
      const insertIndex = hoverIndex ?? blocks.length;

      if (isExistingBlock) {
        // Moving existing block (same or different section)
        if (item.section === section) {
          if (item.index === insertIndex) return;

          const newBlocks = [...blocks];
          const [removed] = newBlocks.splice(item.index, 1);
          newBlocks.splice(insertIndex, 0, removed);

          setTemplate({ ...template, [section]: newBlocks });
        } else {
          const sourceBlocks = [...template[item.section]];
          const [movedBlock] = sourceBlocks.splice(item.index, 1);
          const targetBlocks = [...blocks];
          targetBlocks.splice(insertIndex, 0, movedBlock);

          setTemplate({
            ...template,
            [item.section]: sourceBlocks,
            [section]: targetBlocks
          });
        }
      } else {
        // New block from toolbox
        const newBlock = {
          ...item,
          id: `${item.type}_${Date.now()}`,
          content: item.content || '',
          styles: item.styles || {}
        };
        const newBlocks = [...blocks];
        newBlocks.splice(insertIndex, 0, newBlock);

        setTemplate({
          ...template,
          [section]: newBlocks
        });

        // Optionally select the new block
        setSelected({ section, id: newBlock.id });
      }
    },
    hover: (item, monitor) => {
      if (!containerRef.current) return;
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const y = clientOffset.y - containerRect.top;
      let newHoverIndex = blocks.length;

      for (let i = 0; i < blocks.length; i++) {
        const el = document.getElementById(blocks[i].id);
        if (!el) continue;
        const { top, height } = el.getBoundingClientRect();
        const middle = top - containerRect.top + height / 2;
        if (y < middle) {
          newHoverIndex = i;
          break;
        }
      }
      setHoverIndex(newHoverIndex);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
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
      style={{
        backgroundColor: isOver ? '#ffd9ca' : TEXT_WHITE,
        minHeight: '50px',
        padding: '0.5rem 0'
      }}
    >
      {blocks.map((block, index) => (
        <DraggableBlock
          key={block.id}
          block={block}
          index={index}
          section={section}
          isSelected={selected?.id === block.id}
          isHovered={hoveredBlockId === block.id}
          onSelect={() => setSelected({ section, id: block.id })}
          onHover={() => setHoveredBlockId(block.id)}
          onHoverEnd={() => setHoveredBlockId(null)}
          onDelete={() => deleteBlock(section, block.id)}
        >
          {hoverIndex === index && isOver && <Divider />}
        </DraggableBlock>
      ))}
      {hoverIndex === blocks.length && isOver && <Divider />}
    </div>
  );
};

const DraggableBlock = ({
  block,
  index,
  section,
  isSelected,
  isHovered,
  onSelect,
  onHover,
  onHoverEnd,
  onDelete,
  children
}) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { ...block, index, section },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  drag(ref);

  return (
    <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
      <div
        id={block.id}
        onClick={onSelect}
        onMouseEnter={onHover}
        onMouseLeave={onHoverEnd}
        style={{
          ...styles.blockContainer,
          ...(isHovered ? styles.blockContainerHover : {}),
          border: isSelected ? `2px dotted ${PRIMARY_COLOR}` : '1px solid transparent',
          backgroundColor: isSelected ? '#fff5f0' : 'transparent',
          cursor: 'move'
        }}
      >
        {RenderBlock(block)}
        {isHovered && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            style={styles.deleteButton}
            title="Delete block"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

const Divider = () => (
  <div style={{ height: '2px', backgroundColor: '#fff5f0', margin: '.8rem 0' }} />
);

export default DropZone;
