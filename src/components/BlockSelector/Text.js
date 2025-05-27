import React from 'react';
import useEditorContext from '../../hooks/useEditorContext';
import { Dragable } from './Dragable';

export const Text = () => {
  const { components } = useEditorContext();
  const componentText = components.find(item => item.type === 'text');

  if (!componentText) return null;

  return (
    <Dragable data={componentText}> 
        <div id={Math.floor(1000 + Math.random() * 9000)}>
        <p
          id={componentText.id}
          style={componentText.style}
        >
          {componentText.content}
        </p>
      </div>
    </Dragable>
  );
};
