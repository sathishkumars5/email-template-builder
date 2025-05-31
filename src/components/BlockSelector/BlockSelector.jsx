// Contains buttons like "Add Text", "Add Image"
import {React} from 'react';
import NavComponents from './NavComponents';
import { Button } from './Button';
import { Text } from './Text';
import { Image } from './Image';
import { Link } from './Link';
import {Space} from './Space'


const BlockSelector = () => {
 
  return (
    <div className="sidebar left">
      <h4>Blocks</h4>
     <div id='components'>
<NavComponents/>
      </div>
    </div>
  );
};

export default BlockSelector;
