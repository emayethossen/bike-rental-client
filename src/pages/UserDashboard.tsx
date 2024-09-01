// UserDashboard.tsx (or another component)
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const UserDashboard: React.FC = () => {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.auth.user);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else if (user.role === 'admin') {
            navigate('/admin/dashboard');
        } else if (user.role === 'user') {
            navigate('/user/dashboard');
        }
    }, [user, navigate]);

    return (
        <div>
            {/* Dashboard content */}
        </div>
    );
};

export default UserDashboard;
