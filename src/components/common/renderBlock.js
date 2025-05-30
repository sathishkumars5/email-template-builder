import React, { useState, useRef, useEffect } from 'react';

const TextBlock = ({ block }) => {
  // const [isEditable, setIsEditable] = useState(false);
  const [content, setContent] = useState(block?.content || '');
  const paraRef = useRef(null);

  // const handleClick = () => {
  //   setIsEditable(true);
  // };

  const handleBlur = (e) => {
    const newText = e.target.innerText;
    // setIsEditable(false);
    setContent(newText);
    // console.log("Updated content:", newText);
  };

  // useEffect(() => {
  //   if (isEditable && paraRef.current) {
  //     paraRef.current.focus();
  //   }
  // }, [isEditable]);

  return (
    <p
      id={block.id}
      ref={paraRef}
      style={block.style}
      // onClick={handleClick}
      onBlur={handleBlur}
    >
      {block.content}
    </p>
  );
};

const renderBlock = (block) => {
  if (!block || typeof block !== 'object' || !block.type) {
    return <div style={{ color: 'red' }}>Invalid block</div>;
  }

  switch (block.type) {
    case 'button':
      return (
        <button
          id={block.id}
          style={block.style}
          onClick={() => console.log('Button clicked:', block.id)}
        >
          {block.content || 'Button'}
        </button>
      );

    case 'text':
      return <TextBlock block={block} />;

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
