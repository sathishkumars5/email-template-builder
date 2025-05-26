import React from 'react';

const renderBlock = (block) => {
  switch (block.type) {
    case 'button':
      return (
        <button id={block.id} style={block.style}>
          {block.content}
        </button>
      );

    case 'text':
      return (
        <p id={block.id} style={block.style}>
          {block.content}
        </p>
      );

    case 'img':
      return (
        <img
          id={block.id}
          src={block.src}
          alt={block.alt || 'Image'}
          style={block.style}
        />
      );

    default:
      return <div>Unknown block type: {block.type}</div>;
  }
};

export default renderBlock;
