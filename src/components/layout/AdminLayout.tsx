import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import image from "../../assets/images/bike-logo.png";
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom'; 
import { logout } from '../../redux/features/authSlice';

const { Header, Content, Sider, Footer } = Layout;

const AdminLayout: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);

    if (!user || user.role !== 'admin') {
        navigate('/login'); 
        return null;
    }
    const handleLogout = () => {
        dispatch(logout()); 
        navigate('/');
    };

    const adminItems = [
        { key: 'home', label: 'Home', route: '/' },
        { key: 'dashboard', label: 'Dashboard', route: '/admin/dashboard' },
        { key: 'profile', label: 'Profile', route: '/admin/profile' },
        { key: 'user-management', label: 'User Management', route: '/admin/user-list' },
        { key: 'bike-management', label: 'Bike Management', route: '/admin/bike-list' },
        { key: 'rental-management', label: 'Rental Management', route: '/admin/rental-list' },
        { key: 'logout', label: 'Logout', route: '', onClick: handleLogout }, 
    ];

    const handleMenuClick = (route: string, onClick?: () => void) => {
        if (onClick) {
            onClick();
        } else {
            navigate(route);
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => console.log(broken)}
                onCollapse={(collapsed, type) => console.log(collapsed, type)}
            >
                <div className="demo-logo-vertical text-white">
                    <Link to="/" className='flex justify-center items-center py-2'>
                        <img src={image} alt="" className='w-[150px]' />
                    </Link>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    items={adminItems.map(item => ({
                        key: item.key,
                        label: item.label,
                        onClick: () => handleMenuClick(item.route, item.onClick),
                    }))}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }}>
                    <div className="logo">Admin Dashboard</div>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360 }}>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Copyright ©{new Date().getFullYear()} Created by Auto Bike
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
