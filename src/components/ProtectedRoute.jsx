import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth, selectIsAuthenticated } from '../features/auth/authSlice';

export default function ProtectedRoute({ children }) {
  const { loading } = useSelector(selectAuth);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-pulse text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
