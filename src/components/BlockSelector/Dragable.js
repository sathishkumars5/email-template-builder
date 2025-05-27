import React from 'react';
import { useDrag } from 'react-dnd';

export const Dragable = ({ children, data }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'DRAGGABLE_ITEM',
    item: data, 
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const style = {
    opacity: isDragging ? 0.5 : 1,
    cursor: 'move',
  };

  return (
    <div ref={dragRef} style={style}>
      {children}
    </div>
  );
};