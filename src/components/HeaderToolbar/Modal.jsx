import React, { useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useNotification } from '../../context/NotificationContext';

function Modal({ isOpen, onClose, content, title = "Modal", type = "default", onSave }) {
  const [editableContent, setEditableContent] = useState(content || '');
  const { showSuccess, showError } = useNotification();

  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(editableContent).then(() => {
      showSuccess('Content copied to clipboard successfully!');
    }).catch((err) => {
      console.error('Failed to copy content:', err);
      showError('Failed to copy content to clipboard');
    });
  };

  const handleSave = () => {
    if (onSave) {
      try {
        onSave(editableContent);
        showSuccess('Content saved successfully!');
      } catch (err) {
        console.error('Failed to save content:', err);
        showError('Failed to save content');
      }
    }
    onClose();
  };

  const renderContent = () => {
    switch (type) {
      case 'html':
        return (
          <div className="html-editor-container">
            <h3>{title}</h3>
            <div className="editor-wrapper">
              <CodeEditor
                value={editableContent}
                language="html"
                placeholder="Please enter HTML code."
                onChange={(evn) => setEditableContent(evn.target.value)}
                style={{
                  fontSize: 12,
                  backgroundColor: "#f5f5f5",
                  fontFamily: 'ui-monospace,SFMono-Regular,"SF Mono",Consolas,"Liberation Mono",Menlo,monospace',
                  minHeight: '300px'
                }}
                data-color-mode="light"
              />
            </div>
            <div className="modal-actions">
              <button onClick={onClose} className='btnStyle'>CLOSE</button>
              <button onClick={copyToClipboard} className='copy-btn'>COPY</button>
              {onSave && (
                <button onClick={handleSave} className='copy-btn'>SAVE</button>
              )}
            </div>
          </div>
        );
      
      case 'preview':
        return (
          <div className="preview-container">
            <h3>{title}</h3>
            <div className="preview-content">
              <iframe
                title="HTML Preview"
                srcDoc={content}
                style={{
                  width: '100%',
                  height: '400px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              />
            </div>
            <div className="modal-actions">
              <button onClick={onClose} className='btnStyle'>CLOSE</button>
            </div>
          </div>
        );
      
      case 'text':
        return (
          <div className="text-editor-container">
            <h3>{title}</h3>
            <div className="text-editor-wrapper">
              <textarea
                value={editableContent}
                onChange={(e) => setEditableContent(e.target.value)}
                placeholder="Enter your text here..."
                style={{
                  width: '100%',
                  minHeight: '200px',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontFamily: 'monospace',
                  resize: 'vertical'
                }}
              />
            </div>
            <div className="modal-actions">
              <button onClick={onClose} className='btnStyle'>CLOSE</button>
              <button onClick={copyToClipboard} className='copy-btn'>COPY</button>
              {onSave && (
                <button onClick={handleSave} className='copy-btn'>SAVE</button>
              )}
            </div>
          </div>
        );
      
      default:
        return (
          <div className="default-content">
            <h3>{title}</h3>
            <div className="content-body">
              {typeof content === 'string' ? (
                <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                  {content}
                </pre>
              ) : (
                content
              )}
            </div>
            <div className="modal-actions">
              <button onClick={onClose} className='btnStyle'>CLOSE</button>
              <button onClick={copyToClipboard} className='copy-btn'>COPY</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div onClick={onClose} className='popup-wrapper'>
      <div className='popup' onClick={(e) => e.stopPropagation()}>
        {renderContent()}
      </div>
    </div>
  );
}

export default Modal;
