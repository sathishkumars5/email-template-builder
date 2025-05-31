import React from 'react'

export default function Image({alt,id,style,src}) {
  return (
    <img
      id={id}
          style={style}
          src={src}
          alt={alt}
          
   ></img>
  )
};

