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
        getSelectedBlock,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};