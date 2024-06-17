// src/components/ProtectedRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
