// Contains buttons like "Add Text", "Add Image"
import {React} from 'react';
import { Button } from './Button';
import { Text } from './Text';

const BlockSelector = () => {
 
  return (
    <div className="sidebar left">
      <p>Blocks</p>
      <Button />
      <Text />
    </div>
  );
};

export default BlockSelector;
