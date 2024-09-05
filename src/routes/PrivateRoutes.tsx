import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface PrivateRouteProps {
    children: JSX.Element;
    role?: 'user' | 'admin'; // Optional role prop to specify required role
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, role }) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const location = useLocation();

    // Redirect to login if user is not authenticated
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If role is provided and the user does not match the required role, show "Admin access only"
    if (role && user.role !== role) {
        return <div className="text-center text-red-500 mt-10">Admin access only</div>;
    }

    // If the user is authenticated and has the correct role, render the children components
    return children;
};

export default PrivateRoute;
