import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableBlock = ({ type,lable}) => {
  const [{ isDragging }, dragRef] = useDrag({
    type,
    item: {type},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div>
      <button
        ref={dragRef}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move',
          padding: '8px 12px',
          marginBottom: '10px',
        }}
      >
      {lable}
    </button>
  
    </div>
  )
};
  
export default DraggableBlock;
