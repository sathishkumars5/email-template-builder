import React from 'react';
import useEditorContext from '../../hooks/useEditorContext';
import Textinput from './Textinput';
import InputStyle from './InputForStyles';
import StyleToggleButton from './StyleToggleButton';

const PropertyBlock = () => {
  const { selected, template, updateBlock } = useEditorContext();
  const { section, id } = selected || {};
  const blockList = template?.[section] || [];
  const block = blockList.find((b) => b.id === id);

  if (!block) return null;

  // Function to get padding value with guaranteed default
  const getPaddingValue = (side) => {
    const propKey = `padding${side.charAt(0).toUpperCase() + side.slice(1)}`;
    if (block.style?.[propKey]) {
      return block.style[propKey].endsWith('px') 
        ? block.style[propKey] 
        : `${block.style[propKey]}px`;
    }
    
    if (block.style?.padding) {
      const parts = block.style.padding.split(/\s+/);
      switch (side) {
        case 'top': return parts[0].endsWith('px') ? parts[0] : `${parts[0]}px`;
        case 'right': 
          return parts.length > 1 
            ? (parts[1].endsWith('px') ? parts[1] : `${parts[1]}px`)
            : (parts[0].endsWith('px') ? parts[0] : `${parts[0]}px`);
        case 'bottom': 
          return parts.length > 2 
            ? (parts[2].endsWith('px') ? parts[2] : `${parts[2]}px`)
            : (parts[0].endsWith('px') ? parts[0] : `${parts[0]}px`);
        case 'left': 
          return parts.length > 3 
            ? (parts[3].endsWith('px') ? parts[3] : `${parts[3]}px`)
            : parts.length > 1 
              ? (parts[1].endsWith('px') ? parts[1] : `${parts[1]}px`)
              : (parts[0].endsWith('px') ? parts[0] : `${parts[0]}px`);
        default: return '0px';
      }
    }
    
    return '0px';
  };

  const handlePaddingChange = (side, operation) => {
  // Get all current padding values from the actual style object
  const currentValues = {
    paddingTop: block.style?.paddingTop || getPaddingValue('top'),
    paddingRight: block.style?.paddingRight || getPaddingValue('right'),
    paddingBottom: block.style?.paddingBottom || getPaddingValue('bottom'),
    paddingLeft: block.style?.paddingLeft || getPaddingValue('left')
  };

  // Calculate new value
  const currentValue = currentValues[`padding${side.charAt(0).toUpperCase() + side.slice(1)}`];
  const numericValue = parseInt(currentValue) || 0;
  const newValue = operation === 'increase' ? numericValue + 2 : Math.max(0, numericValue - 2);

  // Update style while preserving all padding values
  const updatedStyle = {
    ...block.style,
    ...currentValues, // Include all current padding values
    [`padding${side.charAt(0).toUpperCase() + side.slice(1)}`]: `${newValue}px`,
    padding: undefined // Remove shorthand padding
  };

  updateBlock(section, id, { style: updatedStyle });
};

const handleDirectPaddingChange = (side, value) => {
  // Get all current padding values from the actual style object
  const currentValues = {
    paddingTop: block.style?.paddingTop || getPaddingValue('top'),
    paddingRight: block.style?.paddingRight || getPaddingValue('right'),
    paddingBottom: block.style?.paddingBottom || getPaddingValue('bottom'),
    paddingLeft: block.style?.paddingLeft || getPaddingValue('left')
  };

  // Update only the changed value
  const safeValue = value === '' ? '0px' : value.includes('px') ? value : `${value}px`;
  const propKey = `padding${side.charAt(0).toUpperCase() + side.slice(1)}`;
  
  const updatedStyle = {
    ...block.style,
    ...currentValues, // Include all current padding values
    [propKey]: safeValue,
    padding: undefined // Remove shorthand padding
  };

  updateBlock(section, id, { style: updatedStyle });
};

  const PaddingControl = ({ side }) => {
    const value = getPaddingValue(side);
    
    return (
      <div className="padding-control">
        <label>{side.charAt(0).toUpperCase() + side.slice(1)}</label>
        <div className="padding-adjuster">
          <button 
            className="padding-btn minus" 
            onClick={() => handlePaddingChange(side, 'decrease')}
          >
            -
          </button>
          <input
            type="text"
            value={value}
            onChange={(e) => handleDirectPaddingChange(side, e.target.value)}
            className="padding-input"
          />
          <button 
            className="padding-btn plus" 
            onClick={() => handlePaddingChange(side, 'increase')}
          >
            +
          </button>
        </div>
      </div>
    );
  };

  const renderPaddingInputs = () => (
    <div className="padding-inputs">
      <h4>Padding</h4>
      <div className="padding-input-group">
        {['top', 'right', 'bottom', 'left'].map(side => (
          <PaddingControl key={side} side={side} />
        ))}
      </div>
    </div>
  );

  const renderFields = () => {
    switch (block.type) {
      case 'text':
        return (
          <>
            <Textinput label="Text Content" propKey="content" />
            <InputStyle label="Color" propKey="color" type="color" />
            <InputStyle label="fontSize" propKey="fontSize" type="text" />   
            <InputStyle label="Text Align" propKey="textAlign" type="select" options={['left', 'center', 'right']}/>
            <div className="textStyleBtn"> 
              <StyleToggleButton propKey="fontWeight" value="bold" label="B" />
              <StyleToggleButton propKey="fontStyle" value="italic" label="I" />
              <StyleToggleButton propKey="textDecoration" value="underline" label="U" />  
            </div>
            {renderPaddingInputs()}
          </>
        );
      case 'button':
        return (
          <>
            <Textinput label="Button Text" propKey="content" />
            <InputStyle label="Color" propKey="color" type="color" />
            <InputStyle label="fontSize" propKey="fontSize" type="text" /> 
            <InputStyle label="Text Align" propKey="textAlign" type="select" options={['left', 'center', 'right']}/>
            <InputStyle label="Background Color" propKey="backgroundColor" type="color" />
            <InputStyle label="Border Radius" propKey="borderRadius" type="text" />
            <div className="textStyleBtn">             
              <StyleToggleButton propKey="fontWeight" value="bold" label="B" />
              <StyleToggleButton propKey="fontStyle" value="italic" label="I" />
              <StyleToggleButton propKey="textDecoration" value="underline" label="U" />  
            </div>
            {renderPaddingInputs()}
          </>
        );
      case 'img':
        return (
          <>
            <Textinput label="Image URL" propKey="src" />
            <Textinput label="Alt Text" propKey="alt" />
            <InputStyle label="Height" propKey="height" type="text" />
            <InputStyle label="Width" propKey="width" type="text" />
            <InputStyle label="Display" propKey="display" type="select" options={['block', 'inline-block', 'inline']}/>
            {renderPaddingInputs()}
          </>
        );
      case 'link':
        return (
          <>
            <Textinput label="Link Text" propKey="content" />
            <Textinput label="Href" propKey="href" />
            <InputStyle label="Color" propKey="color" type="color" />
            <InputStyle label="fontSize" propKey="fontSize" type="text" />     
            <InputStyle label="Text Align" propKey="textAlign" type="select" options={['left', 'center', 'right']}/>
            <div className="textStyleBtn">
              <StyleToggleButton propKey="fontWeight" value="bold" label="B" />
              <StyleToggleButton propKey="fontStyle" value="italic" label="I" />
              <StyleToggleButton propKey="textDecoration" value="underline" label="U" />  
            </div>
            {renderPaddingInputs()}
          </>
        );
      case 'space':
        return (
          <>
            <InputStyle label="Height" propKey="height" type="text" />
            <InputStyle label="Background Color" propKey="backgroundColor" type="color" />
            {renderPaddingInputs()}
          </>
        );
      default:
        return (
          <>
            <p>No editable properties for this block type.</p>
            {renderPaddingInputs()}
          </>
        );
    }
  };

  return <div className="property-panel">{renderFields()}</div>;
};

export default PropertyBlock;