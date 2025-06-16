  import React from 'react';
  import useEditorContext from '../../hooks/useEditorContext';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faAlignLeft, faAlignCenter, faAlignRight } from '@fortawesome/free-solid-svg-icons';

  const alignOptions = {
    left: {
      icon: faAlignLeft,
      margin: '0 auto 0 0',
    },
    center: {
      icon: faAlignCenter,
      margin: '0 auto',
    },
    right: {
      icon: faAlignRight,
      margin: '0 0 0 auto',
    },
  };

  const AlignmentButtonGroup = () => {
    const { selected, template, updateBlock } = useEditorContext();
    const { section, id } = selected || {};
    const block = template?.[section]?.find((b) => b.id === id);

    if (!block) return null;

    const style = block.style || {};
    const isTextAlign = block.type === 'text' || block.type === 'link';

    const setAlign = (align) => {
      const newStyle = { ...style };

      if (isTextAlign) {
        newStyle.textAlign = align;
      } else {
        newStyle.margin = alignOptions[align].margin;
      }

      const updatedBlock = { ...block, style: newStyle };
      updateBlock(section, id, updatedBlock);
    };

 return (
  <div className="input-style-wrapper">
    <span className="label-text">Alignment</span>
    <div className="align-button-group">
      {Object.entries(alignOptions).map(([align, config]) => (
        <button
          key={align}
 className={`align-button ${
                   (isTextAlign && block?.style?.textAlign === align) || (!isTextAlign && block?.style?.margin === alignOptions[align].margin)
                   ? 'active' : ''}`}


          onClick={() => setAlign(align)}
        >
          <FontAwesomeIcon icon={config.icon} />
        </button>
      ))}
    </div>
  </div>
 
);
  }

  export default AlignmentButtonGroup;
