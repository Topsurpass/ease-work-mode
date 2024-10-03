import { FaUser } from 'react-icons/fa';
import { MdAssuredWorkload } from 'react-icons/md';
import { MenuList } from '@/types/menu';

export const MENU_HEADER: MenuList = [
    {
        title: 'Sign In',
        path: '/sign-in',
        icon: <FaUser />,
    },
    {
        title: 'Employer',
        path: '/employer',
        icon: <MdAssuredWorkload />,
    },
];
