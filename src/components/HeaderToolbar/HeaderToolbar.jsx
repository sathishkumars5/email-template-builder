import React, { useState } from 'react'
import Htmlconvert from './Htmlconvert'
import PopUpHtml from './PopUpHtml'
import './NavBar.css';


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
  }

  if (isPreview) {
    return (
      <div style={{ width: '100vw', height: '100vh', background: '#fff' }}>
        <button onClick={backCanvas} className='btnStyle'>⬅ BACK TO EDITOR</button>

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
      <button className='btnStyle' onClick={showPreview}>PREVIEW</button>
      {/* <button className='btnStyle'>UNDO</button>
      <button className='btnStyle'>REDO</button> */}
      <button className='mainBtnStyle' onClick={() => setPopupOpen(true)}>EXPORT</button>

      <PopUpHtml isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <div className="popup-content">
          <p style={{ textAlign: 'left', whiteSpace: 'pre-wrap' }}>{htmlCode}</p>
        </div>
        <div className='popup-buttons'>
          <button onClick={() => setPopupOpen(false)} className='btnStyle'>CLOSE</button>
          <button onClick={copyHtml} className='btnStyle'>COPY</button>
        </div>
      </PopUpHtml>
    </div>
  )
}



export default HeaderToolbar
