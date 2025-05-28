// Contains buttons like "Add Text", "Add Image"
import {React} from 'react';
import { Button } from './Button';
import { Text } from './Text';
import { Image } from './Image';
import { Link } from './Link';


const BlockSelector = () => {
 
  return (
    <div className="sidebar left">
      <h4>Blocks</h4>
     <div id='components'>

     
      <Button />
      <Text />
      <Image/>
      <Link/>
      </div>
    </div>
  );
};

export default BlockSelector;
