import React from 'react';

export default function Indent({ id, style }) {
  const finalStyle = {
    paddingLeft: '40px', // you can make this dynamic later
    ...style
  };

  return (
    <div id={id} style={finalStyle}>
      <p>This section is indented.</p>
    </div>
  );
}
