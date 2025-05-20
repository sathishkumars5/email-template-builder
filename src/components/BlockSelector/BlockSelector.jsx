// // Contains buttons like "Add Text", "Add Image"

import React from 'react';
import DraggableBlock from './DraggableBlock';
import { initialBlocks } from '../../data/initialBlocks';

const BlockSelector = () => {
  return (
    <div className="sidebar left">
      {initialBlocks.map((block) => (
        <DraggableBlock key={block.id} type={block.type} lable={block.content} />
      ))}
    </div>
  );
};

export default BlockSelector;
