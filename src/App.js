import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EditorProvider } from './context';
import { NotificationProvider } from './context/NotificationContext';
import EditorPage from './pages/EditorPage';
import PreviewPage from './pages/PreviewPage';
import './styles/index.css';

const App = () => {
  return (
    <Router>
      <EditorProvider>
        <NotificationProvider>
          <Routes>
            <Route path="/" element={<EditorPage />} />
            <Route path="/preview" element={<PreviewPage />} />
          </Routes>
        </NotificationProvider>
      </EditorProvider>
    </Router>
  );
};

export default App;
