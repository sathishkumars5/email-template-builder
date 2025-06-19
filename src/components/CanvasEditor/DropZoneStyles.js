// DropZoneStyles.js

export const styles = {
  deleteButton: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    width: '22px',
    height: '22px',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    color: '#666',
    zIndex: 10,
    transition: 'all 0.2s ease',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },

  deleteButtonHover: {
    backgroundColor: '#ffebee',
    borderColor: '#ffcdd2',
    color: '#d32f2f',
    transform: 'scale(1.1)',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
  },

  deleteButtonActive: {
    transform: 'scale(0.95)',
    backgroundColor: '#ffcdd2',
  },

  blockContainer: {
    position: 'relative',
    marginBottom: '0.5rem',
    padding: '0.25rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    borderRadius: '4px',
        display: 'flex',
    justifyContent: 'center'
  },

  blockContainerHover: {
    backgroundColor: 'rgba(248, 249, 250, 0.6)',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
};
