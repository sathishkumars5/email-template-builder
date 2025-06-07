// src/context/EditorContext.js

import React, { createContext, useState } from 'react';
import rawStructure from '../data/structure.json';

const structure = typeof rawStructure === 'string' ? JSON.parse(rawStructure) : rawStructure;

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [components, setComponents] = useState(structure.components);
  const [template, setTemplate] = useState(structure.templates?.[0]?.template1 || {});
  const [selected, setSelected] = useState({ section: null, id: null });

  const updateBlock = (section, id, newProps) => {
    setTemplate((prev) => {
      const updatedSection = prev[section]?.map((block) =>
        block.id === id ? { ...block, ...newProps } : block
      ) || [];

      return {
        ...prev,
        [section]: updatedSection,
      };
    });
  };

  const deleteBlock = (section, id) => {
    console.log(id,'iddd')
    // Ensure ID is string for consistent comparison
    const blockId = String(id);
    console.log(blockId)
    console.log(section)
    
    setTemplate((prev) => {
      if (!prev[section]) {
        return prev;
      }
  

    //   // Filter out the block to delete, ensuring we only keep valid blocks
      const updatedSection = prev[section].filter((block) => {
        // Extra safety: ensure block is valid and ID doesn't match
        return block && block.id && String(block.id) !== blockId;
      });

      return {
        ...prev,
        [section]: updatedSection,
      };
    });
    
    // Clear selection if the deleted block was selected
    // if (selected.section === section && String(selected.id) === blockId) {
    //   setSelected({ section: null, id: null });
    // }
  };

  const getSelectedBlock = () => {
    if (!selected.section || !selected.id) return null;
    return template[selected.section]?.find((b) => b.id === selected.id);
  };

  return (
    <EditorContext.Provider
      value={{
        components,
        setComponents,
        template,
        setTemplate,
        selected,
        setSelected,
        updateBlock,
        deleteBlock,
        getSelectedBlock,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};





// import React, { createContext, useState } from 'react';
// import { structure } from '../data/structure';

// export const EditorContext = createContext();

// export const EditorProvider = ({ children }) => {
//   const [components, setComponents] = useState(structure.components);
//   const [template, setTemplate] = useState(structure.templetes?.[0]?.[1] || {});
//   const [selected, setSelected] = useState({ section: null, id: null });

//   const updateBlock = (section, id, newProps) => {
//     setTemplate((prev) => {
//       const updatedSection = prev[section]?.map((block) =>
//         block.id === id ? { ...block, ...newProps } : block
//       ) || [];

//       return {
//         ...prev,
//         [section]: updatedSection,
//       };
//     });
//   };

//   const getSelectedBlock = () => {
//     if (!selected.section || !selected.id) return null;
//     return template[selected.section]?.find((b) => b.id === selected.id);
//   };

//   return (
//     <EditorContext.Provider
//       value={{
//         components,
//         setComponents,
//         template,
//         setTemplate,
//         selected,
//         setSelected,
//         updateBlock,
//         getSelectedBlock,
//       }}
//     >
//       {children}
//     </EditorContext.Provider>
//   );
// };


// import React, { createContext, useState } from 'react';
// import { structure } from '../data/structure';

// export const EditorContext = createContext();

// export const EditorProvider = ({ children }) => {
//   const [components, setComponents] = useState(structure.components);

//   const [template, setTemplate] = useState(structure.templetes[0][1]);

//   const [selected, setSelected] = useState({ section: null, id: null });

//   console.log('UseContext Selected:', template);

//   return (
//     <EditorContext.Provider
//       value={{
//         template,
//         setTemplate,
//         components,
//         setComponents,
//         selected,
//         setSelected
//       }}
//     >
//       {children}
//     </EditorContext.Provider>
//   );
// };













