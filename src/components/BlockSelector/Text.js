import React from 'react'

export default function Text({id,style,Textcontent}) {
  return (
    <p
          id={id}
          style={style}
        
    >{Textcontent}</p>
  )
};