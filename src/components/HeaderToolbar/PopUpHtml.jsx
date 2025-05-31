import React from 'react';

function PopUpHtml({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className='popup-wrapper' >
      <div className='popup' onClick={(e) => e.stopPropagation()} >
        {children}
      </div>
    </div>
  );
}

export default PopUpHtml;
