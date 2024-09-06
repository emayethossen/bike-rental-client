import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ForgotPassword from '../components/ui/ForgotPassword';
import Profile from '../pages/dashboard/user-management/Profile';
import BikeListing from '../pages/dashboard/bike-management/BikeListing';
import BikeDetail from '../pages/dashboard/bike-management/BikeDetail';
import MyRentals from '../pages/dashboard/rental-management/MyRentals';
import AdminUserList from '../components/ui/admin/AdminUserList';
import AdminDashboard from '../pages/AdminDashboard';
import PrivateRoute from './PrivateRoutes';
import BikeList from '../components/ui/admin/BikeList';
import UserDashboard from '../pages/UserDashboard';
import UserLayout from '../components/layout/UserLayout';
import AdminLayout from '../components/layout/AdminLayout';
import PaymentSuccess from '../components/ui/payment/PaymentSuccess';
import PaymentFailure from '../components/ui/payment/PaymentFailure';
import PaymentCancelled from '../components/ui/payment/PaymentCancelled';
import Error from '../pages/Error';

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
                element: <PrivateRoute><BikeDetail /></PrivateRoute>,
            },
            {
                path: 'my-rentals',
                element: <MyRentals />,
            },
            {
                path: 'payment-success',
                element: <PaymentSuccess />,
            },
            {
                path: 'payment-failure',
                element: <PaymentFailure />,
            },
            {
                path: 'payment-cancelled',
                element: <PaymentCancelled />,
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
