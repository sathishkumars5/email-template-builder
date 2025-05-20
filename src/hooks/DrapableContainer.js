// import { useEffect } from 'react';

// // Custom hook for drag-and-drop logic
// function useDragAndDrop() {
//   // 1. Setup drag listeners (if using native events)
//   // 2. Return helper functions like `onDragStart`, `onDrop`, etc.

//   useEffect(() => {
//     // Add any listeners here (if needed)

//     return () => {
//       // Cleanup listeners
//     };
//   }, []);

//   // 3. Return what the component needs
//   return {
//     // dragStart, drop, draggedItem, etc.
//   };
// }

// export default useDragAndDrop;



// import React, { useState } from 'react';
// import { useDrop } from 'react-dnd';

// function DrapableContainer() {
//   const [components, setComponents] = useState([]);

//   const [{ isOver }, dropRef] = useDrop(() => ({

//     accept: ['text', 'image', 'link','button'],
//     drop: (item) => {
//         console.log(item);
        
//       setComponents((prev) => [...prev, item.type]);
//     },
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),

//   }));

//   const renderComponent = (type, index) => {
//     switch (type) {
//       case 'text':
//         return (
//           <div key={index}>
//             <p contentEditable='true'>This is a paragraph.</p>
//           </div>
//         );
//       case 'image':
//         return (
//           <div key={index} style={{ border: '1px solid #ccc', padding: '5px' }}>
//             <img src="https://via.placeholder.com/100" alt="Dropped" />
//           </div>
//         );
//       case 'link':
//         return (
//           <div key={index}>
//             <a href="https://example.com" target="_blank" rel="noreferrer">Example Link</a>
//           </div>
//         );
//         case 'button':
//           return (
//             <div key={index}>
//               <button>Button Name</button>
//             </div>
//           );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       {components.map((type, i) => renderComponent(type, i))}
//     </div>
//   );
// }

// export default DrapableContainer;
