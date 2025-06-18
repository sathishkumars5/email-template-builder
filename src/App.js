import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EditorProvider } from './context';
import { NotificationProvider } from './context/NotificationContext';
import EditorPage from './pages/EditorPage';
import PreviewPage from './pages/PreviewPage';
import HomePage from './pages/HomePage';
import StaticTemplates from './pages/StaticTemplates';
import Login from './authentication/Login';
import PrivateRoute from './components/PrivateRoute'; 
import './styles/index.css';
import FrontPage from './pages/FrontPage';
import SignUp from './authentication/SignUp';


const App = () => {
  return (
    <Router>
      <EditorProvider>
        <NotificationProvider>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            <Route
              path="/homePage"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/templates"
              element={
                <PrivateRoute>
                  <StaticTemplates />
                </PrivateRoute>
              }
            />
            <Route
              path="/editor"
              element={
                <PrivateRoute>
                  <EditorPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/preview"
              element={
                <PrivateRoute>
                  <PreviewPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </NotificationProvider>
      </EditorProvider>
    </Router>
  );
};

export default App;
