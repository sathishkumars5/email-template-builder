// Top bar : Save, Export, Undo/Redo
import React, { useState } from 'react'
import Htmlconvert from './Htmlconvert'

const HeaderToolbar = () => {
  const [html, setHtml] = useState()
  const htmlCode = Htmlconvert()

  const showHtml = () => {
    setHtml(htmlCode)
  }

  const showPreview = () => {
    const previewWindow = window.open('', '_blank')
    if (previewWindow) {
      previewWindow.document.open()
      previewWindow.document.write(htmlCode)
      previewWindow.document.close()
    } else {
      alert('Popup blocked! Please allow popups for this website.')
    }
  }

  return (
    <div style={{ padding: '10px', background: '#eee', textAlign: 'center' }}>
      <button style={btnStyle} onClick={showPreview}>Preview</button>
      <button style={btnStyle}>Undo</button>
      <button style={btnStyle}>Redo</button>
      <button style={btnStyle} onClick={showHtml}>Export</button>
      <div style={{ margin: '20px auto', padding: '20px', background: '#f9f9f9' }} contentEditable={true}>
        {html}
      </div>
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
