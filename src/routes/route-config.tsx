import HomePage from '@/pages/public/Home';
import Employer from '@/pages/public/Employers';
import Login from '@/pages/public/Home/Login';
import SignUp from '@/pages/public/Sign-up';
import Notifications from '@/pages/User/Notifications';
import Pricing from '@/pages/public/pricing';
import Settings from '@/pages/User/Settings';
import PublicRoute from './public-route';
import ProtectedUserRoute from './protected-user-route';
import ProtectedEmployerRoute from './protected-employer-route';
import PublicLayout from '@/layout/public-layout';
import ProtectedUserLayout from '@/layout/protected-user-layout';
import ProtectedEmployerLayout from '@/layout/protected-employer-layout';
import EmployerLogin from '@/pages/public/Employers/Login';
import Profile from '@/pages/User/Profile';
import UserDashboard from '@/pages/User/Dashboard';
import Applications from '@/pages/User/Applications';
import EmployerDashBoard from '@/pages/Employer/dashboard';
import ApplyNow from '@/pages/User/ApplyNow';
import Applicant from '@/pages/Employer/applicants';
import ManageJobs from '@/pages/Employer/manage-jobs';
import PostJobs from '@/pages/Employer/post-jobs';
import EmployerProfile from '@/pages/Employer/profile';
import EmployerSettings from '@/pages/Employer/settings';
const routeConfig = [
    {
        path: '/',
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
                path: '/home/employer',
                element: <Employer />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/employer/login',
                element: <EmployerLogin />,
            },

            {
                path: '/signup',
                element: <SignUp />,
            },

            {
                path: '/product/pricing',
                element: <Pricing />,
            },
        ],
    },
    {
        element: (
            <ProtectedUserRoute>
                <ProtectedUserLayout />
            </ProtectedUserRoute>
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
            {
                path: 'dashboard/job/:id/apply',
                element: <ApplyNow />,
            },
        ],
    },
    {
        path: '/',
        element: (
            <ProtectedEmployerRoute>
                <ProtectedEmployerLayout />
            </ProtectedEmployerRoute>
        ),
        children: [
            {
                index: true,
                path: 'employer/dashboard',
                element: <EmployerDashBoard />,
            },
            {
                path: 'employer/applicants',
                element: <Applicant />,
            },
            {
                path: 'employer/post-jobs',
                element: <PostJobs />,
            },
            {
                path: 'employer/manage-jobs',
                element: <ManageJobs />,
            },
            {
                path: 'employer/profile',
                element: <EmployerProfile />,
            },
            {
                path: 'employer/settings',
                element: <EmployerSettings />,
            },
        ],
    },
];
export default routeConfig;
