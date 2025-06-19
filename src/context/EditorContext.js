import React, { createContext, useEffect, useState } from 'react';
import rawStructure from '../data/structure.json';

const structure = typeof rawStructure === 'string' ? JSON.parse(rawStructure) : rawStructure;

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  let defaultTemplate = {};
  let getUserTemplate = null;

  try {
    const saved = sessionStorage.getItem('selectedTemplate');
    if (saved) {
      getUserTemplate = JSON.parse(saved);
      defaultTemplate =
        structure.templates?.[getUserTemplate.i]?.[getUserTemplate.key] || {};
    }
  } catch (error) {
    console.error('Error parsing selected template from sessionStorage', error);
  }

  const [components, setComponents] = useState(structure.components);
  const [template, setTemplate] = useState(defaultTemplate);
  const [selected, setSelected] = useState({ section: null, id: null });
  const [templateName, setTemplateName] = useState('');
  const [widthState, setWidthState] = useState({
    mobile: false,
    desktop: false,
  });

  const [history, setHistory] = useState({
    past: [],
    present: null,
    future: [],
  });

  useEffect(() => {
    if (template && !history.present) {
      setHistory({
        past: [],
        present: template,
        future: [],
      });
    }
  }, [template]);

  useEffect(() => {
    if (history.present && template !== history.present) {
      setHistory((prev) => {
        if (template === prev.present) return prev;

        return {
          past: [...prev.past, prev.present],
          present: template,
          future: [],
        };
      });
    }
  }, [template]);

  const undo = () => {
    if (history.past.length === 0) return;
    const previous = history.past[history.past.length - 1];
    const newPast = history.past.slice(0, -1);
    setTemplate(previous);
    setHistory({
      past: newPast,
      present: previous,
      future: [history.present, ...history.future],
    });
  };

  const redo = () => {
    if (history.future.length === 0) return;
    const next = history.future[0];
    const newFuture = history.future.slice(1);
    setTemplate(next);
    setHistory({
      past: [...history.past, history.present],
      present: next,
      future: newFuture,
    });
  };

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
    const blockId = String(id);
    setTemplate((prev) => {
      if (!prev[section]) return prev;
      const updatedSection = prev[section].filter(
        (block) => block && block.id && String(block.id) !== blockId
      );
      return {
        ...prev,
        [section]: updatedSection,
      };
    });

    if (selected.section === section && String(selected.id) === blockId) {
      setSelected({ section: null, id: null });
    }
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
        undo,
        redo,
        setTemplateName,
        templateName,
        setWidthState,
        widthState,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
