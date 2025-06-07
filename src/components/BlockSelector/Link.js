import React from 'react'

export default function Link({href,id,style,linkText}) {
  return (
    <a
          className='linkTag'
          id={id}
          style={style}
          href={href}
        
    >{linkText}</a>
  )
};
