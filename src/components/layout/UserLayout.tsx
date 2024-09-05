import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import image from "../../assets/images/bike-logo.png";
import { Link } from 'react-router-dom';

const { Header, Content, Sider, Footer } = Layout;

const UserLayout = () => {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.auth.user);

    if (!user || user.role !== 'user') {
        navigate('/login'); // Redirect to login if not user
        return null;
    }

    const userItems = [
        { key: 'home', label: 'Home', route: '/' },
        { key: 'dashboard', label: 'Dashboard', route: '/user/dashboard' },
        { key: 'profile', label: 'Profile', route: '/user/profile' },
        { key: 'bikes', label: 'Bikes', route: '/user/bikes' },
        { key: 'my-rentals', label: 'My Rentals', route: '/user/my-rentals' },
    ];

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
                    <Link to="/" className='flex justify-center items-center py-2'>
                        <img src={image} alt="" className='w-[150px]' />
                    </Link>
                </div>
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

export default UserLayout;
