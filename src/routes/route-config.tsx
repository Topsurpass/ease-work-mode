//import Home from '@/pages/private/Home/header';
import HomePage from '@/pages/public/Home';
import Employer from '@/pages/public/Employers';
import Login from '@/pages/public/Home/Login';
import SignUp from '@/pages/public/Sign-up';
import Notifications from '@/pages/User/Notifications';

import Settings from '@/pages/User/Settings';
import PublicRoute from './public-route';
import ProtectedRoute from './protected-route';
import PublicLayout from '@/layout/public-layout';
import ProtectedLayout from '@/layout/protected-layout';
import EmployerLogin from '@/pages/public/Employers/Login';
import Profile from '@/pages/User/Profile';
import UserDashboard from '@/pages/User/Dashboard';
import Applications from '@/pages/User/Applications';

const routeConfig = [
    {
        element: (
            <PublicRoute>
                <PublicLayout />
            </PublicRoute>
        ),
        children: [
            {
                index: true,
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/user/login',
                element: <Login />,
            },
            {
                path: '/employer/login',
                element: <EmployerLogin />,
            },

            {
                path: 'signup',
                element: <SignUp />,
            },
            {
                path: 'employer',
                element: <Employer />,
            },
        ],
    },
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <ProtectedLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                path: 'dashboard',
                element: <UserDashboard />,
            },
            {
                path: 'profile',
                element: <Profile />,
            },
            {
                path: 'applications',
                element: <Applications />,
            },
            {
                path: 'notifications',
                element: <Notifications />,
            },
            {
                path: 'settings',
                element: <Settings />,
            },
        ],
    },
];
export default routeConfig;
