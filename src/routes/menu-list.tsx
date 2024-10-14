import { BriefcaseBusiness } from 'lucide-react';

import { MenuList } from '@/types/menu';
import { Briefcase, User, Settings, Wallet, LogIn } from 'lucide-react';

export const USER_MENU_HEADER: MenuList = [
    {
        path: '/home/employer',
        title: 'Post jobs',
        icon: <BriefcaseBusiness />,
    },
    {
        path: '/login',
        title: 'Job seeker login',
        icon: <LogIn />,
    },
];

export const EMPLOYER_MENU_HEADER: MenuList = [
    {
        path: '/product/pricing',
        title: 'Pricing',
        icon: <Wallet />,
    },
    {
        path: '/employer/login',
        title: 'Login as Employer',
        icon: <LogIn />,
    },
];

export const USER_DASHBOARD_MENU: MenuList = [
    {
        path: '/applications',
        title: 'My applications',
        icon: <Briefcase />,
    },
    //{
    //    path: '/notifications',
    //    title: 'Notification',
    //    icon: <Bell />,
    //},

    {
        path: '/settings',
        title: 'Settings',
        icon: <Settings />,
    },

    {
        path: '/Profile',
        title: 'Profile',
        icon: <User />,
    },
];
