import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({element}) => {
    const isAuthenticated = localStorage.getItem('token');

    return isAuthenticated ? element : <Navigate to="/" />
}

const AdminRoute = ({element}) => {
    const isAuthenticated = !!localStorage.getItem('token');
    const isAdmin = JSON.parse(localStorage.getItem('isAdmin') || 'false');
    return isAuthenticated && isAdmin ? element : <Navigate to="/" />;
}

export { ProtectedRoute, AdminRoute}