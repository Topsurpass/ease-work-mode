import {
    Briefcase,
    User,
    Settings,
    Users,
    LayoutDashboard,
    BriefcaseBusiness,
} from 'lucide-react';

export type navMenuProps = {
    icon: any;
    label: string;
    path: string;
}[];

export const navMenu: navMenuProps = [
    {
        icon: LayoutDashboard,
        label: 'Dashboard',
        path: 'employer/dashboard',
    },
    {
        icon: BriefcaseBusiness,
        label: 'Post jobs',
        path: 'employer/post-jobs',
    },
    {
        icon: Briefcase,
        label: 'Manage Jobs',
        path: 'employer/manage-jobs',
    },
    {
        icon: Users,
        label: 'Applicants',
        path: 'employer/applicants',
    },
    {
        icon: User,
        label: 'Profile',
        path: 'employer/profile',
    },
    {
        icon: Settings,
        label: 'Settings',
        path: 'employer/settings',
    },
];
