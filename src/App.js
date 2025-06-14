import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EditorProvider } from './context';
import { NotificationProvider } from './context/NotificationContext';
import EditorPage from './pages/EditorPage';
import PreviewPage from './pages/PreviewPage';
import HomePage from './pages/HomePage';
import StaticTemplates from './pages/StaticTemplates';
import './styles/index.css';
import FrontPage from './pages/FrontPage';

const App = () => {
  return (
    <Router>
      <EditorProvider>
        <NotificationProvider>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/templates" element={<StaticTemplates />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/preview" element={<PreviewPage />} />
      
          </Routes>
        </NotificationProvider>
      </EditorProvider>
    </Router>
  );
};

export default App;
