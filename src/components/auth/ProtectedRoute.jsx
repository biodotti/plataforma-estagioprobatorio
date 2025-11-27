import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
    const { currentUser, userRole, loading } = useAuth();

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    if (requiredRole) {
        // Admin has access to everything
        if (userRole === 'admin') {
            return children;
        }

        // Professor check
        if (requiredRole === 'professor' && userRole !== 'professor') {
            return <Navigate to="/" />; // Redirect to home if unauthorized
        }

        // Exact match for other roles if needed
        if (requiredRole !== userRole && userRole !== 'admin' && requiredRole !== 'professor') {
            return <Navigate to="/" />;
        }
    }

    return children;
};

export default ProtectedRoute;
