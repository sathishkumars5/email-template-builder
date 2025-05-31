import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import useEditorContext from '../../hooks/useEditorContext';
import { Dragable } from './Dragable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faImage} from '@fortawesome/free-solid-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {faT} from '@fortawesome/free-solid-svg-icons';
import {faArrowsUpDown} from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';


export default function NavComponents() {

      const { components } = useEditorContext();
 

 const [navItems,setNavitems]=useState([
        {
            type:'button',
            icon:<FontAwesomeIcon icon={faRectangleList}/>,
            tooltip:"Button block"
        },
         {
            type:'link',
            icon:<FontAwesomeIcon icon={faLink}/>,
            tooltip:"Link block"
        },
         {
            type:'img',
            icon:<FontAwesomeIcon icon={faImage}/>,
            tooltip:"Image block"
        },
         {
            type:'text',
            icon:<FontAwesomeIcon icon={faT}/>,
            tooltip:"Text block"
        },
        {
            type:'space',
            icon:<FontAwesomeIcon icon={faArrowsUpDown}/>,
            tooltip:"Space block"
        }
    ])

  return (

        navItems.map(item=>{
 const componentText = components.find(item1 => item1.type === item.type);

return(

<Dragable data={componentText} tooltip={item.tooltip} > 
            <div className='componentDiv' id={Math.floor(1000 + Math.random() * 9000)}>
            <p
                className='paracontainer'
            >
              {item.icon}
             </p>
          </div>
        </Dragable>
)

})

)
}
