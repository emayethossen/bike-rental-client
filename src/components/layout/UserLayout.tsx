import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const { Header, Content, Sider, Footer } = Layout;

const UserLayout: React.FC = () => {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.auth.user);

    if (!user || user.role !== 'user') {
        navigate('/login'); // Redirect to login if not user
        return null;
    }

    const userItems = [
        { key: 'dashboard', label: 'Dashboard', route: '/user/dashboard' },
        { key: 'profile', label: 'Profile', route: '/user/profile' },
        { key: 'my-rentals', label: 'My Rentals', route: '/user/my-rentals' },
    ];

    const handleMenuClick = (route: string) => {
        navigate(route);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider>
                <div className="logo">Bike Rental System</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    items={userItems.map(item => ({
                        key: item.key,
                        label: item.label,
                        onClick: () => handleMenuClick(item.route),
                    }))}
                />
            </Sider>
            <Layout>
                <Header className="header">
                    <div className="logo">User Dashboard</div>
                </Header>
                <Content style={{ margin: '24px 16px' }}>
                    <div style={{ padding: 24, minHeight: 360 }}>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default UserLayout;
