import React from 'react';
import useEditorContext from '../../hooks/useEditorContext';
import { Dragable } from './Dragable';

export const Button = () => {
  const { components } = useEditorContext();
  const componentBtn = components.find(item => item.type === 'button');

  if (!componentBtn) return null;

  return (
    <Dragable>
      <div id={Math.floor(1000 + Math.random() * 9000)}>
        <button
          id={componentBtn.id}
          style={componentBtn.style}
          type={componentBtn.type}
        >
          {componentBtn.content}
        </button>
      </div>
    </Dragable>
  );
};
