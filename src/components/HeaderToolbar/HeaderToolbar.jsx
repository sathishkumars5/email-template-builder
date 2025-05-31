import React, { useState } from 'react'
import Htmlconvert from './Htmlconvert'
import PopUpHtml from './PopUpHtml'

const HeaderToolbar = () => {
  const [isPopupOpen, setPopupOpen] = useState(false)
  const [isPreview, setPreview] = useState(false)
  const htmlCode = Htmlconvert()

  const showPreview = () => {
    setPreview(true)
  }

  const backCanvas = () => {
    setPreview(false)
  }

  const copyHtml=()=>{
    navigator.clipboard.writeText(htmlCode)
    .then(()=>{
      alert('Copied to clipboard')
    })
    .catch(err => {
        console.error('Failed to copy: ', err);
    });
  }

  if (isPreview) {
    return (
      <div style={{ width: '100vw', height: '100vh', background: '#fff' }}>
        <button
          onClick={backCanvas}
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            zIndex: 10,
            padding: '8px 16px',
            background: 'grey',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ⬅ Back to Canvas
        </button>

        <iframe
          title="Preview"
          style={{ width: '100vw', height: '100vw', border: 'none' }}
          srcDoc={htmlCode}
        />
      </div>
    )
  }

  return (
    <div style={{ padding: '10px', background: '#eee', textAlign: 'center' }}>
      <button style={btnStyle} onClick={showPreview}>Preview</button>
      <button style={btnStyle}>Undo</button>
      <button style={btnStyle}>Redo</button>
      <button style={btnStyle} onClick={() => setPopupOpen(true)}>Export</button>

      <PopUpHtml isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <p>{htmlCode}</p>
        <button onClick={copyHtml}>Copy</button>
        <button onClick={() => setPopupOpen(false)}>Close</button>
      </PopUpHtml>
    </div>
  )
}

const btnStyle = {
  margin: '0 8px',
  padding: '8px 16px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  background: 'lightblue',
  cursor: 'pointer'
}

export default HeaderToolbar
