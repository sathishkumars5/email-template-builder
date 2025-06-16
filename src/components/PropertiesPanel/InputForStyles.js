import React, { useState } from 'react';
import useEditorContext from '../../hooks/useEditorContext';


const InputForStyles = ({ label, propKey, type = 'text', options = []}) => {
 const { selected, template, updateBlock } = useEditorContext();
  const { section, id } = selected || {};
  const blockList = template?.[section] || [];
  const block = blockList.find((b) => b.id === id);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!block) return null;

  const getValue = () => {
    return block.style?.[propKey] || '';
  };

  const handleStyleChange = (value) => {
    const newStyle = { ...block.style, [propKey]: value };
    const newBlock = { ...block, style: newStyle };
    updateBlock(section, id, newBlock);
    setDropdownOpen(false);
  };
  return (
    <div className="input-style-wrapper">
      <label>{label}</label>

      {type === 'select' ? (
     
          <div
            className={`dropdown-selected ${dropdownOpen ? 'show' : ''}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {getValue()||'select'}
            <span className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}>▾</span>
     

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
      ) : type === 'color' ? (
        <div className='color-styled-div' style={{ display: 'flex',width:'40%' }}>
     <input
            type="color"
            value={getValue()}
            onChange={(e) => handleStyleChange(e.target.value)}
            className="styled-input"
            style={{ width: '40px', height: '34px', padding: 0, border: '1px solid #ccc' }}
          />
          <input
            type="text"
            value={getValue()}
            onChange={(e) => handleStyleChange(e.target.value)}
            className="styled-input"
            style={{ flex: 1 }}
          />
          
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
