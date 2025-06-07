import React from 'react';
import useEditorContext from '../../hooks/useEditorContext';
import { TEXT_WHITE, TEXT_BLACK } from '../../constants/colors';


const PropertyBlock = () => {
  const { selected, template, updateBlock } = useEditorContext();
  const { section, id } = selected;

  const blockList = template[section] || [];
  const block = blockList.find((b) => b.id === id);

  if (!block) return null;

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


  const getAlignValue = (style = {}) => {

    const margin = style.margin;

    if (margin === '0 auto') return 'center';
    if (margin === '0 auto 0 0') return 'left';
    if (margin === '0 0 0 auto') return 'right';

    return 'center' ;
};


  
  const handleAlignChange = (align) => {
    const newStyle = {
      ...block.style,
     
    };

    if (align === 'left') {
      newStyle.margin = '0 auto 0 0';
    } else if (align === 'center') {
      newStyle.margin = '0 auto';
    } else if (align === 'right') {
      newStyle.margin = '0 0 0 auto';

    }

    const newBlock = {
      ...block,
      style: newStyle
    };

    console.log('Updating image alignment to', align);
    updateBlock(section, id, newBlock);
  };

  const renderFields = () => {
    switch (block.type) {
      case 'text':
        return (
          <>
            <label>Content</label>
            <input
              type="text"
              value={block.content || ''}
              onChange={(e) => handleChange(e, 'content')}
            />
            <label>Font Size</label>
            <input
              type="text"
              value={block.style?.fontSize || ''}
              onChange={(e) => handleStyleChange(e, 'fontSize')}
            />
            <label>Text Color</label>
            <input
              type="color"
              className='inputColor'
              value={block.style?.color || TEXT_BLACK}
              onChange={(e) => handleStyleChange(e, 'color')}
            />
            <label>Text Align</label>
            <select
              value={block.style?.textAlign || 'left'}
              onChange={(e) => handleStyleChange(e, 'textAlign')}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
            <label>Font Weight</label>
  <select
    value={block.style?.fontWeight || 'normal'}
    onChange={(e) => handleStyleChange(e, 'fontWeight')}
  >
    <option value="normal">Normal</option>
    <option value="bold">Bold</option>
    <option value="lighter">Lighter</option>
    <option value="bolder">Bolder</option>
  </select>

          </>

        );

      case 'button':
        return (
          <>
            <label>Button Text</label>
            <input
              type="text"
              value={block.content || ''}
              onChange={(e) => handleChange(e, 'content')}
            />
            <label>Text Color</label>
            <input
              type="color"
              className='inputColor'
              value={block.style?.color || TEXT_WHITE}
              onChange={(e) => handleStyleChange(e, 'color')}
            />
            <label>Background Color</label>
            <input
              type="color"
              className='inputColor'
              value={block.style?.backgroundColor || '#0000ff'}
              onChange={(e) => handleStyleChange(e, 'backgroundColor')}
            />
              <label>Align</label>
            <select
              value={getAlignValue(block.style)}
              onChange={(e) => handleAlignChange(e.target.value)}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </>
        );

      case 'img':
        return (
          <>
            <label>Image URL</label>
            <input
              type="text"
              value={block.src || ''}
              onChange={(e) => handleChange(e, 'src')}
            />
            <label>Alt Text</label>
            <input
              type="text"
              value={block.alt || ''}
              onChange={(e) => handleChange(e, 'alt')}
            />
            <label>Width</label>
            <input
              type="text"
              value={block.style?.width || ''}
              onChange={(e) => handleStyleChange(e, 'width')}
            />
            <label>Height</label>
            <input
              type="text"
              value={block.style?.height || ''}
              onChange={(e) => handleStyleChange(e, 'height')}
            />
            <label>Align</label>
            <select
              value={getAlignValue(block.style)}
              onChange={(e) => handleAlignChange(e.target.value)}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </>
          
        );
        case 'link':
  return (
    <>
      <label>Link Text</label>
      <input
        type="text"
        value={block.content || ''}
        onChange={(e) => handleChange(e, 'content')}
      />
      <label>Href</label>
      <input
        type="text"
        value={block.href || '' }
        onChange={(e) => handleChange(e, 'href')}
      />
      <label>Text Color</label>
      <input
        type="color"
        className='inputColor'
        value={block.style?.color || TEXT_BLACK}
        onChange={(e) => handleStyleChange(e, 'color')}
      />
      <label>Background Color</label>
      <input
        type="color"
        value={block.style?.backgroundColor || TEXT_WHITE}
        onChange={(e) => handleStyleChange(e, 'backgroundColor')}
      />
       <label>Text Align</label>
            <select
              value={block.style?.textAlign || 'left' === block.style?.display}
              onChange={(e) => handleStyleChange(e, 'textAlign')}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </>
  );


      default:
        return <p>No editable properties for this block.</p>;
    }
  };

  return <div className="property-panel">{renderFields()}</div>;
};

export default PropertyBlock;
