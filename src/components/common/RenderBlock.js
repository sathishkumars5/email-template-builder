import React from 'react';
import Button from '../BlockSelector/Button';
import Image from '../BlockSelector/Image';
import Link from '../BlockSelector/Link';
import Text from '../BlockSelector/Text';
import Space from '../BlockSelector/Space';

const RenderBlock = (block) => {

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

export default RenderBlock;
