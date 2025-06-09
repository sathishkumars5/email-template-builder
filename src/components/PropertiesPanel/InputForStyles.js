import React, { useState } from 'react';
import useEditorContext from '../../hooks/useEditorContext';


const InputForStyles = ({ label, propKey, type = 'text', options = [], useMargin = false }) => {
  const { selected, template, updateBlock } = useEditorContext();
  const { section, id } = selected || {};
  const blockList = template?.[section] || [];
  const block = blockList.find((b) => b.id === id);

  const [dropdownOpen, setDropdownOpen] = useState(false);


  const getValue = () => {
    if (useMargin && propKey === 'textAlign') {
      const margin = block.style?.margin;
      if (margin === '0 auto') return 'center';
      if (margin === '0 auto 0 0') return 'left';
      if (margin === '0 0 0 auto') return 'right';
      return '';
    }
    return block.style?.[propKey] || '';
  };

   const handleStyleChange = (value) => {
    const newStyle = { ...block.style };

    if (useMargin && propKey === 'textAlign') {
      if (value === 'left') newStyle.margin = '0 auto 0 0';
      else if (value === 'center') newStyle.margin = '0 auto';
      else if (value === 'right') newStyle.margin = '0 0 0 auto';
    } else {
      newStyle[propKey] = value;
    }

    const newBlock = { ...block, style: newStyle };
    updateBlock(section, id, newBlock);
    setDropdownOpen(false);
    console.log(section, id, newBlock);
    
  };

  return (
    <div className="input-style-wrapper">
      <label>{label}</label>

      {type === 'select' ? (
        <div className="custom-dropdown">
          <div
            className="dropdown-selected"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {getValue()||'select'}
            <span className="dropdown-arrow">▾</span>
          </div>

          {dropdownOpen && (
            <ul className="dropdown-options">
              {options.map((opt) => (
                <li
                  key={opt}
                  className={getValue() === opt ? 'active' : ''}
                  onClick={() => handleStyleChange(opt)}
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <input
          type={type}
          value={getValue()}
          onChange={(e) => handleStyleChange(e.target.value)}
          className="styled-input"
        />
      )}
    </div>
  );
};

export default InputForStyles;
