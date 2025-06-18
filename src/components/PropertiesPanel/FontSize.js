import React from 'react';
import useEditorContext from '../../hooks/useEditorContext';


const FontSizeInput = ({ label = "Font Size", propKey = "fontSize" }) => {
  const { selected, template, updateBlock } = useEditorContext();
  const { section, id } = selected || {};
  const blockList = template?.[section] || [];
  const block = blockList.find((b) => b.id === id);
const fontSizeValue = block?.style?.[propKey]? parseInt(block.style[propKey]):18


  const handleFontChange = (newVal) => {
    const clamped = Math.max(0, Math.min(newVal,200));
    const newStyle = {
      ...block.style,
      [propKey]: `${clamped}px`,
    };
    const newBlock = { ...block, style: newStyle };
    updateBlock(section, id, newBlock);
  };

  return (
    <div className="font-size-wrapper">
      <label>{label}</label>
      <div className="font-size-control">
        <button onClick={() => handleFontChange(fontSizeValue - 1)}>-</button>
        <input
          type="number"
          className='total-value'
          value={fontSizeValue}
          onChange={(e) => handleFontChange(Number(e.target.value))}
        />
        <button onClick={() => handleFontChange(fontSizeValue + 1)}>+</button>
      </div>
    </div>
  );
};

export default FontSizeInput;
