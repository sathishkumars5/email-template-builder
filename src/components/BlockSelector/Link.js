import React from 'react'

export default function Link({href,id,style,linkText}) {
  return (
    <a
          id={id}
          style={style}
          href={href}
        
    >{linkText}</a>
  )
};
