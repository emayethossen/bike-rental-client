import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/layout/Login';
import Register from '../pages/layout/Register';
import Home from '../pages/layout/Home';
import About from '../pages/layout/About';
import Contact from '../pages/layout/Contact';
import ForgotPassword from '../components/ui/ForgotPassword';
import Profile from '../pages/dashboard/Profile';
import BikeListing from '../pages/dashboard/user/BikeListing';
import BikeDetail from '../pages/dashboard/user/BikeDetail';
import MyRentals from '../pages/dashboard/user/MyRentals';
import AdminDashboard from '../pages/dashboard/admin/AdminDashboard';
import PrivateRoute from './PrivateRoutes';
import UserDashboard from '../pages/dashboard/user/UserDashboard';
import UserLayout from '../components/layout/UserLayout';
import AdminLayout from '../components/layout/AdminLayout';
import Error from '../pages/layout/Error';
import ReturnBike from '../pages/dashboard/admin/ReturnBike';
import AdminUserList from '../pages/dashboard/admin/AdminUserList';
import BikeList from '../pages/dashboard/admin/BikeList';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/bikes',
                element: <BikeListing />,
            },
        ],
    },
    {
        path: '/admin',
        element: <PrivateRoute role="admin"><AdminLayout /></PrivateRoute>,
        children: [
            {
                path: 'dashboard',
                element: <AdminDashboard />,
            },
            {
                path: 'profile',
                element: <Profile />,
            },
            {
                path: 'user-list',
                element: < AdminUserList />,
            },
            {
                path: 'bike-list',
                element: <PrivateRoute role='admin'>< BikeList /></PrivateRoute>,
            },
            {
                path:'rental-list',
                element: <ReturnBike rentalId={''} />
            }
        ]
    },
    {
        path: '/user',
        element: <PrivateRoute><UserLayout /></PrivateRoute>,
        children: [
            {
                path: 'dashboard',
                element: <UserDashboard />,
            },
            {
                path: 'profile',
                element: <Profile />,
            },
            {
                path: 'bikes',
                element: <BikeListing />,
            },
            {
                path: 'bikes/:id',
                element: <BikeDetail />,
            },
            {
                path: 'my-rentals',
                element: <MyRentals />,
            },
        ]
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/recover-password',
        element: <ForgotPassword />,
    },
]);

export default router;
