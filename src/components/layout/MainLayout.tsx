import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const { Header, Content, Sider, Footer } = Layout;

const MainLayout: React.FC = () => {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.auth.user);
    const isLoading = useSelector((state: RootState) => state.auth.isLoading); // Check loading state

    useEffect(() => {
        if (!user && !isLoading) {
            navigate('/login'); // Redirect to login if user is not authenticated and not loading
        }
    }, [user, isLoading, navigate]);

    if (isLoading) {
        return <div>Loading...</div>; // Show loading state
    }

    if (!user) {
        return <div>Unauthorized</div>; // Optionally handle unauthorized access
    }

    const userRole = user.role; // Get the user's role from the state

    const adminItems = [
        { key: 'dashboard', label: 'Dashboard', route: '/admin/dashboard' },
        { key: 'profile', label: 'Profile', route: '/admin/profile' },
        { key: 'user-management', label: 'User Management', route: '/admin/user-management' },
        { key: 'bike-management', label: 'Bike Management', route: '/admin/bike-management' },
        { key: 'rental-management', label: 'Rental Management', route: '/admin/rental-management' },
    ];

    const userItems = [
        { key: 'dashboard', label: 'Dashboard', route: '/user/dashboard' },
        { key: 'profile', label: 'Profile', route: '/user/profile' },
        { key: 'my-rentals', label: 'My Rentals', route: '/user/my-rentals' },
    ];

    const items = userRole === 'admin' ? adminItems : userItems;

    const handleMenuClick = (route: string) => {
        navigate(route);
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
                    <h1>Bike Rental System</h1>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    items={items.map(item => ({
                        key: item.key,
                        label: item.label,
                        onClick: () => handleMenuClick(item.route),
                    }))}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet /> {/* Render the matched child route */}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
