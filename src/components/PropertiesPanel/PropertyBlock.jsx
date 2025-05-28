// import React from 'react';
// import useEditorContext from '../../hooks/useEditorContext';

// const PropertyBlock = () => {
//   const { selected, template, updateBlock } = useEditorContext();
//   const { section, id } = selected;

//   const blockList = template[section] || [];
//   const block = blockList.find((b) => b.id === id);

//   if (!block) {
//     return <div className="property-panel">Select a block to edit its properties</div>;
//   }

//    const handleChange = (e, key) => {
//     updateBlock(section, id, { [key]: e.target.value });
//   };

//   const handleStyleChange = (e, key) => {
//     updateBlock(section, id, {
//       style: { ...block.style, [key]: e.target.value }
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
//               value={block.content || ''}
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
//             <label>Button Text:</label>
//             <input
//               type="text"
//               value={block.content || ''}
//               onChange={(e) => handleChange(e, 'content')}
//             />
//             <label>Text Color:</label>
//             <input
//               type="color"
//               value={block.style?.color || '#ffffff'}
//               onChange={(e) => handleStyleChange(e, 'color')}
//             />
//             <label>Background Color:</label>
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
//               value={block.src || ''}
//               onChange={(e) => handleChange(e, 'src')}
//             />
//             <label>Alt Text:</label>
//             <input
//               type="text"
//               value={block.alt || ''}
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
//         return <p>No editable properties for this block.</p>;
//     }
//   };

//   return <div className="property-panel">{renderFields()}</div>;
// };

// export default PropertyBlock

// import React from 'react';
// import useEditorContext from '../../hooks/useEditorContext';

// const PropertyBlock = () => {
//   const { selected, template, updateBlock } = useEditorContext();
//   const { section, id } = selected;

//   const blockList = template[section] || [];
//   const block = blockList.find((b) => b.id === id);

//   if (!block) {
//     return <div className="property-panel">Select a block to edit its properties</div>;
//   }

//   const handleChange = (e, key) => {
//     const updatedBlock = { ...block, [key]: e.target.value };
//     console.log('Updating block content:', updatedBlock);
//     updateBlock(section, id, { [key]: e.target.value });
//   };

//   const handleStyleChange = (e, key) => {
//     const updatedStyle = { ...block.style, [key]: e.target.value };
//     console.log('Updating style:', updatedStyle);
//     updateBlock(section, id, { style: updatedStyle });
//   };

//   const renderFields = () => {
//     switch (block.type) {
//       case 'text':
//         return (
//           <>
//             <label>Content:</label>
//             <input
//               type="text"
//               value={block.content || ''}
//               onBlur={(e) => handleChange(e, 'content')}
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
//             <label>Button Text:</label>
//             <input
//               type="text"
//               value={block.content || ''}
//               onChange={(e) => handleChange(e, 'content')}
//             />
//             <label>Text Color:</label>
//             <input
//               type="color"
//               value={block.style?.color || '#ffffff'}
//               onChange={(e) => handleStyleChange(e, 'color')}
//             />
//             <label>Background Color:</label>
//             <input
//               type="color"
//               value={block.style?.backgroundColor || '#0000ff'}
//               onChange={(e) => handleStyleChange(e, 'backgroundColor')}
//             />
//             <label>Padding:</label>
//             <input
//               type="text"
//               value={block.style?.padding || ''}
//               onChange={(e) => handleStyleChange(e, 'padding')}
//             />
//             <label>Border Radius:</label>
//             <input
//               type="text"
//               value={block.style?.borderRadius || ''}
//               onChange={(e) => handleStyleChange(e, 'borderRadius')}
//             />
//           </>
//         );

//       case 'img':
//         return (
//           <>
//             <label>Image URL:</label>
//             <input
//               type="text"
//               value={block.src || ''}
//               onChange={(e) => handleChange(e, 'src')}
//             />
//             <label>Alt Text:</label>
//             <input
//               type="text"
//               value={block.alt || ''}
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
//         return <p>No editable properties for this block.</p>;
//     }
//   };

//   return <div className="property-panel">{renderFields()}</div>;
// };

// export default PropertyBlock;

import React from 'react';
import useEditorContext from '../../hooks/useEditorContext';

const PropertyBlock = () => {
  const { selected, template, updateBlock } = useEditorContext();
  const { section, id } = selected;

  const blockList = template[section] || [];
  const block = blockList.find((b) => b.id === id);

  if (!block) {
    return <div className="property-panel">Select a block to edit its properties</div>;
  }

  const handleChange = (e, key) => {
    const value = e.target.value;
    const newBlock = {
      ...block,
      [key]: value
    };

    console.log('Updating property:', key, 'with value:', value);
    updateBlock(section, id, newBlock);
  };

  const handleStyleChange = (e, key) => {
    const value = e.target.value;
    const newStyle = {
      ...block.style,
      [key]: value
    };
    const newBlock = {
      ...block,
      style: newStyle
    };

    console.log('Updating style:', key, 'with value:', value);
    updateBlock(section, id, newBlock);
  };

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
