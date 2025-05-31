// import React from 'react';
// import useEditorContext from '../../hooks/useEditorContext';

// const PropertyBlock = () => {
//   const { template, setTemplate, selected } = useEditorContext();
//   const { section, id } = selected;

//   if (section ===id) {
//     return <div className="property-panel">Select a block to edit its properties</div>;
//   }

//   const blockIndex = template[section]?.findIndex((block) => block.id === id);
//   if (blockIndex === -1) return <div className="property-panel">Block not found</div>;

//   const block = template[section][blockIndex];

//   const handleChange = (e, field) => {
//     const value = e.target.value;

//     const updatedBlock = {
//       ...block,
//       [field]: value,
//     };

//     const updatedSection = [...template[section]];
//     updatedSection[blockIndex] = updatedBlock;

//     setTemplate({
//       ...template,
//       [section]: updatedSection,
//     });
//   };

//   const handleStyleChange = (e, styleKey) => {
//     const value = e.target.value;

//     const updatedBlock = {
//       ...block,
//       style: {
//         ...block.style,
//         [styleKey]: value,
//       },
//     };

//     const updatedSection = [...template[section]];
//     updatedSection[blockIndex] = updatedBlock;

//     setTemplate({
//       ...template,
//       [section]: updatedSection,
//     });
//   };

//   const renderFields = () => {
//     switch (block.type) {
//       case 'text':
//         return (
//           <>
//             <label>Content:</label>
//             <input
//               type="text"
//               value={block.content}
//               onChange={(e) => handleChange(e, 'content')}
//             />
//             <label>Font Size:</label>
//             <input
//               type="text"
//               value={block.style?.fontSize || ''}
//               onChange={(e) => handleStyleChange(e, 'fontSize')}
//             />
//             <label>Text Color:</label>
//             <input
//               type="color"
//               value={block.style?.color || '#000000'}
//               onChange={(e) => handleStyleChange(e, 'color')}
//             />
//             <label>Text Align:</label>
//             <select
//               value={block.style?.textAlign || 'left'}
//               onChange={(e) => handleStyleChange(e, 'textAlign')}
//             >
//               <option value="left">Left</option>
//               <option value="center">Center</option>
//               <option value="right">Right</option>
//             </select>
//           </>
//         );

//       case 'button':
//         return (
//           <>
//             <label>Text:</label>
//             <input
//               type="text"
//               value={block.content}
//               onChange={(e) => handleChange(e, 'content')}
//             />
//             <label>Text Color:</label>
//             <input
//               type="color"
//               value={block.style?.color || '#ffffff'}
//               onChange={(e) => handleStyleChange(e, 'color')}
//             />
//             <label>Background:</label>
//             <input
//               type="color"
//               value={block.style?.backgroundColor || '#0000ff'}
//               onChange={(e) => handleStyleChange(e, 'backgroundColor')}
//             />
//           </>
//         );

//       case 'img':
//         return (
//           <>
//             <label>Image URL:</label>
//             <input
//               type="text"
//               value={block.src}
//               onChange={(e) => handleChange(e, 'src')}
//             />
//             <label>Alt Text:</label>
//             <input
//               type="text"
//               value={block.alt}
//               onChange={(e) => handleChange(e, 'alt')}
//             />
//             <label>Width:</label>
//             <input
//               type="text"
//               value={block.style?.width || ''}
//               onChange={(e) => handleStyleChange(e, 'width')}
//             />
//             <label>Height:</label>
//             <input
//               type="text"
//               value={block.style?.height || ''}
//               onChange={(e) => handleStyleChange(e, 'height')}
//             />
//           </>
//         );

//       default:
//         return <p>No editable fields for this block type.</p>;
//     }
//   };

//   return <div className="property-panel">{renderFields()}</div>;
// };

// export default PropertyBlock;


import React from 'react';
import useEditorContext from '../../hooks/useEditorContext';

const PropertyBlock = () => {
  const { template, setTemplate, selected } = useEditorContext();
  const { section, id } = selected;

  // Get the list of blocks in the selected section
  const blockList = template[section] || [];

  // Find the selected block by ID
  const block = blockList.find((b) => b.id === id);

  // Show message if no block is selected
  if (section===id) {
    return <div className="property-panel">Select a block to edit its properties</div>;
  }

  // Helper: Update the entire block
  const updateBlock = (updatedData) => {
    const newList = blockList.map((b) =>
      b.id === id ? { ...b, ...updatedData } : b
    );
    setTemplate({ ...template, [section]: newList });
  };

  // Update a top-level field like content, src, alt
  const handleChange = (e, key) => {
    updateBlock({ [key]: e.target.value });
  };

  // Update styles like fontSize, color, etc.
  const handleStyleChange = (e, key) => {
    const updatedStyle = {
      ...block.style,
      [key]: e.target.value,
    };
    updateBlock({ style: updatedStyle });
  };

  // Render inputs based on block type
  const renderFields = () => {
    switch (block.type) {
      case 'text':
        return (
          <>
            <label>Content:</label>
            <input
              type="text"
              value={block.content || ''}
              onChange={(e) => handleChange(e, 'content')}
            />
            <label>Font Size:</label>
            <input
              type="text"
              value={block.style?.fontSize || ''}
              onChange={(e) => handleStyleChange(e, 'fontSize')}
            />
            <label>Text Color:</label>
            <input
              type="color"
              value={block.style?.color || '#000000'}
              onChange={(e) => handleStyleChange(e, 'color')}
            />
            <label>Text Align:</label>
            <select
              value={block.style?.textAlign || 'left'}
              onChange={(e) => handleStyleChange(e, 'textAlign')}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </>
        );

      case 'button':
        return (
          <>
            <label>Button Text:</label>
            <input
              type="text"
              value={block.content || ''}
              onChange={(e) => handleChange(e, 'content')}
            />
            <label>Text Color:</label>
            <input
              type="color"
              value={block.style?.color || '#ffffff'}
              onChange={(e) => handleStyleChange(e, 'color')}
            />
            <label>Background Color:</label>
            <input
              type="color"
              value={block.style?.backgroundColor || '#0000ff'}
              onChange={(e) => handleStyleChange(e, 'backgroundColor')}
            />
          </>
        );

      case 'img':
        return (
          <>
            <label>Image URL:</label>
            <input
              type="text"
              value={block.src || ''}
              onChange={(e) => handleChange(e, 'src')}
            />
            <label>Alt Text:</label>
            <input
              type="text"
              value={block.alt || ''}
              onChange={(e) => handleChange(e, 'alt')}
            />
            <label>Width:</label>
            <input
              type="text"
              value={block.style?.width || ''}
              onChange={(e) => handleStyleChange(e, 'width')}
            />
            <label>Height:</label>
            <input
              type="text"
              value={block.style?.height || ''}
              onChange={(e) => handleStyleChange(e, 'height')}
            />
          </>
        );

      default:
        return <p>No editable properties for this block.</p>;
    }
  };

  return <div className="property-panel">{renderFields()}</div>;
};

export default PropertyBlock;
