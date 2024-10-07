import { BriefcaseBusiness } from 'lucide-react';

import { MenuList } from '@/types/menu';
import { Bell, Briefcase, User, Settings } from 'lucide-react';

export const USER_MENU_HEADER: MenuList = [
    {
        path: '/home/employer',
        title: 'Employer/Post job',
        icon: <BriefcaseBusiness />,
    },
];

export const EMPLOYER_MENU_HEADER: MenuList = [
    {
        path: '/',
        title: 'Find Jobs',
        icon: <BriefcaseBusiness />,
    },
];

export const USER_DASHBOARD_MENU: MenuList = [
    {
        path: '/applications',
        title: 'My applications',
        icon: <Briefcase />,
    },
    {
        path: '/notifications',
        title: 'Notification',
        icon: <Bell />,
    },

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
