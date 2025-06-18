import React from 'react';
import useEditorContext from '../../hooks/useEditorContext';


const BoxModelInput = () => {
  const { selected, template, updateBlock } = useEditorContext();
  const { section, id } = selected || {};
  const blockList = template?.[section] || [];
  const block = blockList.find((b) => b.id === id);
  const styles = block?.style || {};

  const padding = styles?.padding || {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  const handleChange = (side, value) => {
    const updatedPadding = {
      ...padding,
      [side]: value,
    };

    const newStyle = {
      ...styles,
      padding: updatedPadding,
    };

    updateBlock(section, id, { style: newStyle });
  };

  return (
    <div className="box-model-input">
      <label className="box-label">Padding</label>
      <div className="input-grid">
        {['top', 'right', 'bottom', 'left'].map((side) => (
          <div key={side} className="box-input">
            <span className="box-dir">{side.charAt(0).toUpperCase() + side.slice(1)}</span>
            <div className="box-control">
              <button onClick={() => handleChange(side, (padding?.[side] || 0) - 1)}>-</button>
              <input
                type="number"
                value={padding?.[side] || 0}
                onChange={(e) =>
                  handleChange(side, parseInt(e.target.value || '0', 10))
                }
              />
              <button onClick={() => handleChange(side, (padding?.[side] || 0) + 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxModelInput;
