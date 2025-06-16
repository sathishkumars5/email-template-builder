import React, { createContext, useContext, useState, useCallback } from 'react';
import Notification from '../components/common/Notification';

const NotificationContext = createContext();

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const showNotification = useCallback((message, type = 'success', duration = 3000) => {
    const id = Date.now() + Math.random(); // Simple unique ID
    const notification = {
      id,
      message,
      type,
      duration,
      isVisible: true
    };

    setNotifications(prev => [...prev, notification]);

    // Auto remove after duration + animation time
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, duration + 300);
  }, []);

  const hideNotification = useCallback((id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isVisible: false }
          : notification
      )
    );

    // Remove from array after animation
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 300);
  }, []);

  const showSuccess = useCallback((message, duration) => {
    showNotification(message, 'success', duration);
  }, [showNotification]);

  const showWarning = useCallback((message, duration) => {
    showNotification(message, 'warning', duration);
  }, [showNotification]);

  const showError = useCallback((message, duration) => {
    showNotification(message, 'error', duration);
  }, [showNotification]);

  const showInfo = useCallback((message, duration) => {
    showNotification(message, 'info', duration);
  }, [showNotification]);

  return (
    <NotificationContext.Provider value={{
      showNotification,
      showSuccess,
      showWarning,
      showError,
      showInfo
    }}>
      {children}
      <div className="notification-container">
        {notifications.map((notification, index) => (
          <div 
            key={notification.id}
            style={{ 
              position: 'fixed',
              top: `${20 + index * 80}px`,
              right: '20px',
              zIndex: 9999 + index
            }}
          >
            <Notification
              message={notification.message}
              type={notification.type}
              isVisible={notification.isVisible}
              duration={notification.duration}
              onClose={() => hideNotification(notification.id)}
            />
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
