import React, { useState, useRef, useEffect } from 'react';

const TextBlock = ({ block }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [content, setContent] = useState(block?.content || '');
  const pRef = useRef(null);

  const handleClick = () => {
    setIsEditable(true);
  };

  const handleBlur = (e) => {
    const newText = e.target.innerText;
    setIsEditable(false);
    setContent(newText);
    console.log("Updated content:", newText);
  };

  useEffect(() => {
    if (isEditable && pRef.current) {
      pRef.current.focus();
    }
  }, [isEditable]);

  return (
    <p
      id={block.id}
      ref={pRef}
      style={block.style}
      contentEditable={isEditable}
      suppressContentEditableWarning={true}
      onClick={handleClick}
      onBlur={handleBlur}
    >
      {content}
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
        case 'link':
      return (
      <a
        id={block.id}
        href={block.href || '#'}
        style={{
            ...block.style,
            display: 'inline-block',
            backgroundImage: `url(${block.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
       }}
  
    >
     {block.content} 
</a>
      );

    default:
      return <div>Unknown block type: {block.type}</div>;
  }
};

export default renderBlock;
