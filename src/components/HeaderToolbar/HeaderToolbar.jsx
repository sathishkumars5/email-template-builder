import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Htmlconvert from './Htmlconvert'
import Modal from './Modal'
import { useNotification } from '../../context/NotificationContext'
import './NavBar.css';

const HeaderToolbar = () => {
  const navigate = useNavigate()
  const [isPopupOpen, setPopupOpen] = useState(false)
  const [modalType, setModalType] = useState('html')
  const [modalTitle, setModalTitle] = useState('')
  const { showSuccess, showError, showWarning } = useNotification()
  const htmlCode = Htmlconvert()

  const showPreview = () => {
    navigate('/preview')
  }

  const openHtmlEditor = () => {
    setModalType('html')
    setModalTitle('HTML Code Editor')
    setPopupOpen(true)
  }

  const openPreviewModal = () => {
    setModalType('preview')
    setModalTitle('HTML Preview')
    setPopupOpen(true)
  }

  const handleExport = () => {
    try {
      if (!htmlCode || htmlCode.trim() === '') {
        showWarning('No content to export. Please add some blocks to your template first.')
        return
      }
      openHtmlEditor()
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

  return (
    <div style={{ padding: '10px', background: '#eee', textAlign: 'center' }}>
      <button className='btnStyle' onClick={showPreview}>PREVIEW</button>
      <button className='btnStyle' onClick={openPreviewModal}>PREVIEW MODAL</button>
      <button className='btnStyle' onClick={testNotifications}>TEST NOTIFICATIONS</button>
      <button className='mainBtnStyle' onClick={handleExport}>EXPORT</button>

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
