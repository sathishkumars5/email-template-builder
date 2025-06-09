
import React from 'react';
import useEditorContext from '../../hooks/useEditorContext';

const Textinput = ({ label = 'Text', propKey = 'content' }) => {
  const { selected, template, updateBlock } = useEditorContext();
  const { section, id } = selected || {};
  const blockList = template?.[section] || [];
  const block = blockList.find((b) => b.id === id);
  
   const handleChange = (e) => {
    const value = e.target.value;
    const newBlock = {
      ...block,
      [propKey]: value,
    };
    updateBlock(section, id, newBlock);
  };
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type="text"
        value={block[propKey] || ''}
        onChange={handleChange}
      />
    </div>
  );
};

export default Textinput;
