
import React, { createContext, useState } from 'react';

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [component, setComponent] = useState([]);
  const [selected, setSelected] = useState(null);

  const addBlock = (newComponent) => {
    setComponent((prev) => [...prev, newComponent]);
  };

  const updateElement = (id, updatedComponent) => {
    setComponent((prev) =>
      prev.map((comp) => (comp.id === id ? { ...comp, ...updatedComponent } : comp))
    );
  };

  return (
    <EditorContext.Provider
      value={{ component, addBlock, updateElement, selected, setSelected }}
    >
      {children}
    </EditorContext.Provider>
  );
};
