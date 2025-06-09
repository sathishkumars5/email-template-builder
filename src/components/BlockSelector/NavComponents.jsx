import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import useEditorContext from '../../hooks/useEditorContext';
import { Dragable } from './Dragable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList,faImage, faLink,faT,faArrowsUpDown} from '@fortawesome/free-solid-svg-icons';



export default function NavComponents() {

      const { components } = useEditorContext();
 

 const [navItems,setNavitems]=useState([
        {
            type:'button',
            icon:<FontAwesomeIcon icon={faRectangleList}/>,
            tooltip:"Button block",
            label:"Button"
        },
         {
            type:'link',
            icon:<FontAwesomeIcon icon={faLink}/>,
            tooltip:"Link block",
            label:"Link"
        },
         {
            type:'img',
            icon:<FontAwesomeIcon icon={faImage}/>,
            tooltip:"Image block",
            label:"Image"
        },
         {
            type:'text',
            icon:<FontAwesomeIcon icon={faT}/>,
            tooltip:"Text block",
            label:"Text"
        },
        
        {
            type:'space',
            icon:<FontAwesomeIcon icon={faArrowsUpDown}/>,
            tooltip:"Space block",
            label:"Spacer"
        }
    ])

  return (

        navItems.map((item,index)=>{
 const componentText = components.find(item1 => item1.type === item.type);

return(

<Dragable data={componentText} key={index} tooltip={item.tooltip} > 
            <div className='componentDiv' id={Math.floor(1000 + Math.random() * 9000)}>
            <p
                className='paracontainer'
            >
              {item.icon}
              <span className='componentLabel'> {item.label || componentText.label}</span>
             
             </p>
          </div>
        </Dragable>
)
})
)
}
