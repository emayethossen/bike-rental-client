// PrivateRoute.tsx
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const location = useLocation();

    useEffect(() => {
        if (!user) {
            // Redirect to login if no user is found
            <Navigate to="/login" state={{ from: location }} replace />;
        }
    }, [user, location]);

    return user ? children : null;
};

export default PrivateRoute;
