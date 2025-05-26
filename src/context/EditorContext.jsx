import React, { createContext, useState } from 'react';
import { structure } from '../data/structure';

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [components,setComponents ] = useState(structure.components);

  const [template, setTemplate] = useState(structure.templetes[0][1]);


    // console.log('Template:', template);

  const [selected, setSelected] = useState(null);


  return (
    <EditorContext.Provider
      value={{template,setTemplate,components,setComponents, selected, setSelected}}
    >
      {children}
    </EditorContext.Provider>
  );
};





  // const addBlock = (section, newComponent) => {
  //   setComponent((prev) => ({
  //     ...prev,
  //     [section]: [...(prev[section] || []), newComponent],
  //   }));
  // };

  // const updateElement = (id, updatedComponent) => {
  //   setComponent((prev) => {
  //     const updated = {};
  //     for (let section in prev) {
  //       updated[section] = prev[section].map((item) => {
  //         const key = Object.keys(item)[0];
  //         const block = item[key];
  //         return block.id === id
  //           ? { [key]: { ...block, ...updatedComponent } }
  //           : item;
  //       });
  //     }
  //     return updated;
  //   });
  // };