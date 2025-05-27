<<<<<<< HEAD
// // import React from 'react'
// // import { structure } from '../../data/structure'
// // const PropertiesPanel = () => {
// //     console.log(structure.components[0].content);
    
// //   return (
// //     <div>hii</div>
// //   )
// // }

// // export default PropertiesPanel

// import React from 'react'
// import { structure } from '../../data/structure'
=======
import React from 'react';
import PropertyBlock from '../PropertiesPanel/PropertyBlock';

const PropertiesPanel = () => {
  return (
    <div className="properties-panel">
      <h3>Properties</h3>
      <PropertyBlock />
    </div>
  );
};
>>>>>>> 91e20d02886bedc132e32f6618d981eee1f0241a

// const PropertiesPanel = () => {

//   if (structure) {
    
//   }
//   // const firstComponent = structure.components[0]

//   console.log('Content:', firstComponent.content)
//   console.log('Style:', firstComponent.style)

//   return (
//     <div>
//       <h3>Component Preview:</h3>
//       <p style={firstComponent.style}>{firstComponent.content}</p>
//     </div>
//   )
// }

// export default PropertiesPanel
