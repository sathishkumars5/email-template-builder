import React from 'react';
import useEditorContext from '../../hooks/useEditorContext';
import { Dragable } from './Dragable';

export const Button = () => {
  const { components } = useEditorContext();
  const componentText = components.find(item => item.type === 'button');

  if (!componentText) return null;

  return (
    <Dragable data={componentText} tooltip="Button Block" > 
        <div className='componentDiv' id={Math.floor(1000 + Math.random() * 9000)}>
       
        <p
            className='paracontainer'
          id={componentText.id}
          // style={componentText.style}
        > 
          {componentText.icon}
         </p>
          {/* {componentText.icon} */}
      </div>
    </Dragable>
  );
};
