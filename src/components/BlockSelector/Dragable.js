import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

export const Dragable = ({ children, data, tooltip }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'DRAGGABLE_ITEM',
    item: data,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'pointer', position: 'relative', 
        }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && tooltip && (
        <div
            style={{
            position: 'absolute',
            top: '-15px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            zIndex: 999,
          }}
        >
          {tooltip}
        </div>
      )}

      <div
        style={{
          display: 'inline-block',
          margin:"15px 3px",
          borderRadius: '10px',
          
          
        }}
        ref={dragRef}
      >
        {children}
      </div>
    </div>
  );
};