import React, { createContext, useState } from 'react';
import { structure } from '../data/structure';

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [components, setComponents] = useState(structure.components);

   const [template, setTemplate] = useState(structure.templetes[0][1]);


  const [selected, setSelected] = useState({
    section: null, 
    id: null       
  });


  const updateBlock = (section, id, newProps) => {
    setTemplate((prevTemplate) => {
      const updatedSection = prevTemplate[section].map((block) =>
        block.id === id ? { ...block, ...newProps } : block
      );
      return {
        ...prevTemplate,
        [section]: updatedSection,
      };
    });
  };


  const getSelectedBlock = () => {
    if (!selected.section || !selected.id) return null;
    return template[selected.section]?.find((block) => block.id === selected.id);
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













