
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const uid = sessionStorage.getItem('uid');
  return uid ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
