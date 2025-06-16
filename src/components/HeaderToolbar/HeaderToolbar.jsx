import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateFullHtml } from './Htmlconvert';
import Modal from './Modal';
import { useNotification } from '../../context/NotificationContext';
import useEditorContext from '../../hooks/useEditorContext';
import { handleShowPreview, handleTemplates } from '../common/routeFunction';

import './NavBar.css';

const HeaderToolbar = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [modalType, setModalType] = useState('html');
  const [modalTitle, setModalTitle] = useState('');
  const [htmlCode, setHtmlCode] = useState('');

  const { showSuccess, showError, showWarning } = useNotification();
  const { template, undo, redo,setSelected } = useEditorContext(); // ✅ use from context

  const openPreviewModal = () => {
    const freshHtmlCode = generateFullHtml(template);
    setHtmlCode(freshHtmlCode);
    setModalType('preview');
    setModalTitle('HTML Preview');
    setPopupOpen(true);
  };

  const handleExport = () => {
    try {
      const freshHtmlCode = generateFullHtml(template);

      if (!freshHtmlCode || freshHtmlCode.trim() === '') {
        showWarning('No content to export. Please add some blocks to your template first.');
        return;
      }

      setHtmlCode(freshHtmlCode);
      setModalType('html');
      setModalTitle('HTML Code Editor');
      setPopupOpen(true);
      showSuccess('HTML code generated successfully!');
    } catch (error) {
      console.error('Export error:', error);
      showError('Failed to generate HTML code. Please try again.');
    }
  };

    const testNotifications = () => {
    showSuccess('This is a success notification!')
    setTimeout(() => showWarning('This is a warning notification!'), 1000)
    setTimeout(() => showError('This is an error notification!'), 2000)
  }

  return (
    <div style={{ padding: '10px', background: '#eee', textAlign: 'center' }}>
      <button className='btnStyle' onClick={() => {handleTemplates(navigate);setSelected({ section: null, id: null });}}>BACK</button>
      <button className='btnStyle' onClick={() => {handleShowPreview(navigate);setSelected({ section: null, id: null });}}>PREVIEW</button>
      <button className='btnStyle' onClick={()=>{undo();setSelected({ section: null, id: null })}}>UNDO</button>
      <button className='btnStyle' onClick={()=>{redo();setSelected({ section: null, id: null })}}>REDO</button>
      {/* <button className='btnStyle' onClick={openPreviewModal}>PREVIEW MODAL</button> */}
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
            // Optional: You can update template with content if needed
          } catch (error) {
            console.error('Save error:', error);
            showError('Failed to save content. Please try again.');
          }
        }}
      />
    </div>
  );
};

export default HeaderToolbar;

