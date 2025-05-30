// import React from 'react'
// import useEditorContext from '../../hooks/useEditorContext';

// const textcomp = () => {
//       const { selected, template, updateBlock } = useEditorContext();
//       const { section, id } = selected;

//        const blockList = template[section] || [];
//   const block = blockList.find((b) => b.id === id);

//       const handleChange = (e, key) => {
//     const value = e.target.value;
//     const newBlock = {
//       ...block,
//       [key]: value
//     };

//     console.log('Updating property:', key, 'with value:', value);
//     updateBlock(section, id, newBlock);
//   };
//   return (
//     <div> <label>Content</label>
//             <input
//               type="text"
//               value={block.content || ''}
//               onChange={(e) => handleChange(e, 'content')}
//             /></div>
//   )
// }


// export default textcomp

import React from 'react';
import useEditorContext from '../../hooks/useEditorContext';

const TextComp = () => {
  const { selected, template, updateBlock } = useEditorContext();
  const { section, id } = selected;

  const blockList = template[section] || [];
  const block = blockList.find((b) => b.id === id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newBlock = {
      ...block,
      [name]: value,
    };
    updateBlock(section, id, newBlock);
  };

  // Define all editable fields here
  const fields = [
    { label: 'Content', name: 'content', type: 'text' },
    { label: 'Font Size', name: 'fontSize', type: 'text' },
    { label: 'Color', name: 'color', type: 'color' },
    { label: 'Text Align', name: 'textAlign', type: 'text' },
    { label: 'Font Weight', name: 'fontWeight', type: 'text' }
  ];

  if (!block) return <div>No block selected</div>;

  return (
    <div>
      {fields.map((field) => (
        <div key={field.name} style={{ marginBottom: '10px' }}>
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={block[field.name] || ''}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
};

export default TextComp;
