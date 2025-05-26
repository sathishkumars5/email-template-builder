import React from 'react';
import { useDrag } from 'react-dnd';

const ItemType = 'DRAGGABLE_ITEM';

export const Dragable = ({ children }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ItemType,
    item: {},
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


// import React from 'react';
// import { useDrag } from 'react-dnd';

// const ItemType = 'DRAGGABLE_ITEM';

// export const Dragable = ({ children }) => {
//   const [{ isDragging }, dragRef] = useDrag(() => ({
//     type: ItemType,
//     item: {}, 
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   }));

//   const style = {
//     opacity: isDragging ? 0.5 : 1,
//     cursor: 'move',
//   };

//   return (
//     <div ref={dragRef} style={style}>
//       {children}
//     </div>
//   );
// };
