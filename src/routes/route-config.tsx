import Home from '@/pages/private/Home';
import HomePage from '@/pages/public/Home';
import Employer from '@/pages/public/Employers';
import Profile from '@/pages/private/Profile';
import Login from '@/pages/public/Login';
import SignUp from '@/pages/public/Sign-up';
import MyReviews from '@/pages/private/MyReviews';
import MyJobs from '@/pages/private/MyJobs';
import Settings from '@/pages/private/Settings';
import PublicRoute from './public-route';
import ProtectedRoute from './protected-route';
import PublicLayout from '@/layout/public-layout';
import ProtectedLayout from '@/layout/protected-layout';

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
                path: 'sign-in',
                element: <Login />,
            },
            {
                path: 'sign-up',
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
                path: '/',
                element: <Home />,
            },
            {
                path: '/profile',
                element: <Profile />,
            },
            {
                path: '/jobs',
                element: <MyJobs />,
            },
            {
                path: '/reviews',
                element: <MyReviews />,
            },
            {
                path: '/settings',
                element: <Settings />,
            },
        ],
    },
];
export default routeConfig;
