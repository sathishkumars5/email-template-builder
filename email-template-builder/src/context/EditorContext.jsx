import React, { createContext, useState } from 'react';

// 1. Create context
export const EditorContext = createContext();

// 2. Create provider component
export const EditorProvider = ({ children }) => {
  // 3. Define shared states here
  // const [state, setState] = useState(initialValue);

  // 4. Define functions to update state
  // function addBlock() { ... }
  // function selectBlock() { ... }

  return (
    <EditorContext.Provider value={{
      // pass states and functions here
      // state, setState, addBlock
    }}>
      {children}
    </EditorContext.Provider>
  );
};
