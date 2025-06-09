import { useState, useRef, useEffect } from 'react';

import Button from '../BlockSelector/Button';
import Image from '../BlockSelector/Image';
import Link from '../BlockSelector/Link';
import Text from '../BlockSelector/Text';
import Space from '../BlockSelector/Space';

const TextBlock = ({ block }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [content, setContent] = useState(block?.content || '');
  const pRef = useRef(null);

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

        <Button
          id={block.id}
          style={block.style}
          buttonText={block.content||"Button"}
        />
       
      );

    case 'text':
      return <Text 
        id={block.id}
        style={block.style}
        Textcontent={block.content||"Enter a text"}
      />;

    case 'img':
      return (
        <Image
          id={block.id}
          src={block.src}
          alt={block.alt || 'Image'}
          style={block.style}
        />
      );
        case 'link':
      return (
  
      <Link
  id={block.id}
  href={block.href}
  linkText={block.content}
  style={{
    ...block.style,
    display: 'block',

  }}
   />
      );
       case 'space':
      return (
      <Space 
      id={block.id}
        style={block.style}
        />
      );


    default:
      return <div>Unknown block type: {block.type}</div>;
  }
};

export default renderBlock;
