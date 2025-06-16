import React from 'react';
import useEditorContext from '../../hooks/useEditorContext';
import { Dragable } from './Dragable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRectangleList, 
  faImage, 
  faLink, 
  faT, 
  faArrowsUpDown, 
  faIndent 
} from '@fortawesome/free-solid-svg-icons';

export default function NavComponents() {
  const { components, selected, updateBlock, template } = useEditorContext();

  const handleIndentClick = () => {
    if (!selected?.id || !selected?.section) return;
    
    const currentBlock = template[selected.section]?.find(block => block.id === selected.id);
    if (!currentBlock) return;
    
    const currentPadding = parseInt(currentBlock.style?.paddingLeft || '0');
    const newPadding = currentPadding + 40;
    
    updateBlock(selected.section, selected.id, {
      style: {
        ...currentBlock.style,
        paddingLeft: `${newPadding}px`
      }
    });
  };

  const navItems = [
    {
      type: 'button',
      icon: <FontAwesomeIcon icon={faRectangleList} />,
      tooltip: "Button block",
      label: "Button"
    },
    {
      type: 'link',
      icon: <FontAwesomeIcon icon={faLink} />,
      tooltip: "Link block",
      label: "Link"
    },
    {
      type: 'img',
      icon: <FontAwesomeIcon icon={faImage} />,
      tooltip: "Image block",
      label: "Image"
    },
    {
      type: 'text',
      icon: <FontAwesomeIcon icon={faT} />,
      tooltip: "Text block",
      label: "Text"
    },
    {
      type: 'space',
      icon: <FontAwesomeIcon icon={faArrowsUpDown} />,
      tooltip: "Space block",
      label: "Spacer"
    },
    {
      type: 'indent',
      icon: <FontAwesomeIcon icon={faIndent} />,
      tooltip: selected?.id ? "Indent selected block" : "Select a block to indent",
      label: "Indent",
      disabled: !selected?.id
    }
  ];

  return (
    <>
      {navItems.map((item, index) => {
        if (item.type === 'indent') {
          return (
            <div 
              key={index}
              className={`componentDiv ${item.disabled ? 'disabled' : ''}`}
              onClick={!item.disabled ? handleIndentClick : undefined}
              title={item.tooltip}
            >
              <p className='paracontainer'>
                {item.icon}
                <span className='componentLabel'>{item.label}</span>
              </p>
            </div>
          );
        }

        const componentText = components.find(c => c.type === item.type);
        return (
          <Dragable data={componentText} key={index} tooltip={item.tooltip}>
            <div className='componentDiv'>
              <p className='paracontainer'>
                {item.icon}
                <span className='componentLabel'>{item.label || componentText?.label}</span>
              </p>
            </div>
          </Dragable>
        );
      })}
    </>
  );
}
