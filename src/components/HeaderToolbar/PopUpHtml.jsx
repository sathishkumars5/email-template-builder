import React from 'react';

function PopUpHtml({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw', height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClose} >
      <div
        style={{backgroundColor: 'white',padding: '20px',borderRadius: '10px',}}
        onClick={(e) => e.stopPropagation()} >
        {children}
      </div>
    </div>
  );
}

export default PopUpHtml;
