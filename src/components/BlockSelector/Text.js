import {React} from 'react';
import useEditorContext from '../../hooks/useEditorContext';

export const Text = () => {
    const {components} = useEditorContext();
    const componentBtn = components.find(item => item.type === 'text');
    return (
      <div id= {Math.floor(1000 + Math.random() * 9000)}>
        <button id={componentBtn.id} style={componentBtn.style}>{componentBtn.content}</button>
      </div> 
    );
}
