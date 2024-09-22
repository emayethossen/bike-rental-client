import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface PrivateRouteProps {
    children: JSX.Element;
    role?: 'user' | 'admin'; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, role }) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const location = useLocation();

    
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (role && user.role !== role) {
        return <div className="text-center text-red-500 mt-10">Admin access only</div>;
    }

    return children;
};

export default PrivateRoute;
