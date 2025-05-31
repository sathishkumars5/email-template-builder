import {React} from 'react';
import NavComponents from './navComponent';


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