import React from 'react';
import useEditorContext from '../../hooks/useEditorContext';


const StyleToggleButton = ({ propKey, value, label }) => {
  const { selected, template, updateBlock } = useEditorContext();
  const { section, id } = selected || {};
  const blockList = template?.[section] || [];
  const block = blockList.find((b) => b.id === id);


  const style = block.style || {};
  const currentValue = style[propKey];

  const isActive = currentValue === value;

  const toggleStyle = () => {
    const newStyle = { ...style };

    if (isActive) {
      delete newStyle[propKey]; 
    } else {
      newStyle[propKey] = value;
    }

    const newBlock = { ...block, style: newStyle };
    updateBlock(section, id, newBlock);
  };

  return (
      
    <div className='style-toggle-group'>
 
<button
      className={`style-toggle-button ${isActive ? 'active' : ''}`}
      onClick={toggleStyle}
      type="button"
    >
      {label}
    </button>
    </div>

    
  );
};

export default StyleToggleButton;
