import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { generateFullHtml } from './Htmlconvert'
import Modal from './Modal'
import { useNotification } from '../../context/NotificationContext'
import useEditorContext from '../../hooks/useEditorContext'
import { handleShowPreview } from '../common/routeFunction'
import { handleTemplates } from '../common/routeFunction'

import './NavBar.css';
import {faMagnifyingGlass,faArrowUpFromBracket,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import undoImg from '../../assets/undo.png';

const HeaderToolbar = () => {
  const navigate = useNavigate()
  const [isPopupOpen, setPopupOpen] = useState(false)
  const [modalType, setModalType] = useState('html')
  const [modalTitle, setModalTitle] = useState('')
  const [htmlCode, setHtmlCode] = useState('')
  const { showSuccess, showError, showWarning } = useNotification()
  const {template,setTemplate } = useEditorContext()
   const [history, setHistory] = useState({
    past: [],       
    present: null,  
    future: []      
  });

  const showPreview = () => {
    navigate('/preview')
  }

  const backToTemplate=()=>{
    navigate('/templates')
  }

  const openPreviewModal = () => {
    // Generate fresh HTML with current template state
    const freshHtmlCode = generateFullHtml(template)
    setHtmlCode(freshHtmlCode)
    setModalType('preview')
    setModalTitle('HTML Preview')
    setPopupOpen(true)
  }

  const handleExport = () => {
    try {
      // Generate fresh HTML with current template state
      const freshHtmlCode = generateFullHtml(template)
      
      if (!freshHtmlCode || freshHtmlCode.trim() === '') {
        showWarning('No content to export. Please add some blocks to your template first.')
        return
      }
      
      setHtmlCode(freshHtmlCode)
      setModalType('html')
      setModalTitle('HTML Code Editor')
      setPopupOpen(true)
      showSuccess('HTML code generated successfully!')
    } catch (error) {
      console.error('Export error:', error)
      showError('Failed to generate HTML code. Please try again.')
    }
  }

  // Demo function to test different notification types
  const testNotifications = () => {
    showSuccess('This is a success notification!')
    setTimeout(() => showWarning('This is a warning notification!'), 1000)
    setTimeout(() => showError('This is an error notification!'), 2000)
  }

   useEffect(() => {
    if (template && !history.present) {
      setHistory({
        past: [],
        present: template,
        future: []
      });
    }
  },[template]);

useEffect(() => {
 
  if (history.present && template !== history.present) {
    setHistory(prev => {
      if (template === prev.present) {
        return prev; 
      }

      return {
        past: [...prev.past, prev.present],
        present: template,
        future: []
      };
    });
  }
}, [template]);

const undo = () => {
  if (history.past.length === 0) return;

  const previousState = history.past[history.past.length - 1];
  const newPast = history.past.slice(0, -1);

  setTemplate(previousState);

  setHistory({
    past: newPast,
    present: previousState,
    future: [history.present, ...history.future]
  });
};

const redo = () => {
  if (history.future.length === 0) return;

  const nextState = history.future[0];
  const newFuture = history.future.slice(1);

  setTemplate(nextState);

  setHistory({
    past: [...history.past, history.present],
    present: nextState,
    future: newFuture
  });
};
      
  return (
    <div id='headerToolbarDiv' style={{ padding: '5px 30px', background: '#eee', textAlign: 'center' }}>

<div id='logoDiv'>

  <div>
 <img src='/assets/sliceMailer.png' alt="logo" />
  </div>
 

         <button className='btnStyle back-to-editor-btn' onClick={backToTemplate}> <FontAwesomeIcon icon={faArrowLeft} /></button>

</div>
      
       <div id='undoRedoDiv'>
       <button className='btnStyle undonBtn' onClick={undo}> <img src='/assets/undo.png' alt="undo" style={{  height: '24px',
  width: '24px', objectFit: 'contain'}} /></button>
       <button className='btnStyle redoBtn' onClick={redo}><img src='/assets/redo.png' alt="redo" style={{  height: '24px',
  width: '24px'}}/></button>
        </div>
        <div id='exportPreviewDiv'>

       <button className='btnStyle' onClick={showPreview}><FontAwesomeIcon icon={faMagnifyingGlass}/> Preview</button>
       <button className='mainBtnStyle btnStyle' onClick={handleExport}><FontAwesomeIcon icon={faArrowUpFromBracket} /> Export</button>
       </div>

      <Modal 
        isOpen={isPopupOpen} 
        onClose={() => setPopupOpen(false)}
        content={htmlCode}
        title={modalTitle}
        type={modalType}
        onSave={(content) => {
          try {
            console.log('Saved content:', content);
            showSuccess('Content saved successfully!');
            // Here you could update the template with the edited HTML
          } catch (error) {
            console.error('Save error:', error);
            showError('Failed to save content. Please try again.');
          }
        }}
      />
    </div>
  )
}

export default HeaderToolbar