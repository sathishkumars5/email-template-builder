import React, { createContext, useState } from 'react';

// 1. Create context
export const EditorContext = createContext([]);

// 2. Create provider component
export const EditorProvider = ({ children }) => {
  // 3. Define shared states here
  const [state, setState] = useState([]);

  // 4. Define functions to update state
  const addBlock = (addComponent)=>{ 
    setState((currentComponent) =>[...currentComponent,addComponent])
  }
  // function selectBlock() { ... }

  return (
    <EditorContext.Provider value={{ state, addBlock }}>
      {children}
    </EditorContext.Provider>
  );
};
