import React from 'react'
import { Navigate, useLocation, Outlet } from "react-router-dom"

const ProtectedRoutes = ({ children }) => {
    const token = localStorage.getItem('token');
    if (token) {
        return <Outlet />
    } else {
        localStorage.clear();
        return <Navigate to="/login" replace />
    }

};

export default ProtectedRoutes;