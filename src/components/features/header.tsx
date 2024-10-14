import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import useMobileMenu from '@/hooks/useMobileMenu';
import { IoMenuOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { LogOut } from 'lucide-react';
import useAuthStore from '@/stores/user-store';
import Notifications from '@/pages/User/Notifications';

//import Button from '@/components/ui/button';

type AppHeaderProp = {
    homePath?: string;
    desktopMenu: { path: string; title: string; icon?: JSX.Element }[];
    mobileMenu: { path: string; title: string; icon?: JSX.Element }[];
    logOutButton?: JSX.Element;
    hasSignInButton?: boolean;
    hasLogoutButton?: boolean;
    signInPath?: string;
    showDeskMenuIcon?: boolean;
    isLogin?: boolean;
};

export default function AppHeader({
    homePath = '/',
    desktopMenu,
    mobileMenu,
    hasLogoutButton = false,
    showDeskMenuIcon = false,
    isLogin = false,
}: AppHeaderProp) {
    const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
    const userStore = useAuthStore((state) => state);
    const handleLogout = () => {
        userStore.reset();
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md h-20 px-5 flex items-center justify-between z-50">
            <NavLink
                to={homePath}
                className="text-xl font-bold text-blue-600 hover:text-blue-600"
            >
                EaseWork
            </NavLink>

            <nav className="hidden md:flex items-center gap-6">
                {desktopMenu.map((menu, idx) => (
                    <NavLink
                        to={menu.path}
                        key={idx}
                        className={({ isActive }) =>
                            cn(
                                'text-gray-600 hover:text-blue-600 transition-colors flex',
                                {
                                    'text-blue-600 hover:gray-600 border-b-2 pb-2 mt-2 border-blue-600':
                                        isActive,
                                }
                            )
                        }
                    >
                        <p className="flex gap-1">
                            {menu.title}
                            {showDeskMenuIcon && menu.icon}
                        </p>
                    </NavLink>
                ))}
                {isLogin && <Notifications />}
                {hasLogoutButton && (
                    <LogOut
                        className="cursor-pointer text-gray-600"
                        onClick={handleLogout}
                    />
                )}
            </nav>

            <div className="md:hidden flex gap-5 justify-center items-center">
                {isLogin && <Notifications />}
                {isMobileMenuOpen ? (
                    <IoMdClose
                        className="w-8 h-8 text-blue-600 cursor-pointer border"
                        onClick={toggleMobileMenu}
                    />
                ) : (
                    <IoMenuOutline
                        className="w-8 h-8 text-blue-600 cursor-pointer"
                        onClick={toggleMobileMenu}
                    />
                )}
            </div>

            <div
                className={cn(
                    'fixed top-0 right-0 mt-20 h-screen w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden',
                    {
                        'translate-x-0': isMobileMenuOpen,
                        'translate-x-full': !isMobileMenuOpen,
                    }
                )}
            >
                <ul className="flex flex-col gap-4">
                    {mobileMenu.map((menu, idx) => (
                        <li key={idx}>
                            <NavLink
                                to={menu.path}
                                className={({ isActive }) =>
                                    cn(
                                        'text-gray-600 hover:text-blue-600 transition-colors flex items-center p-3',
                                        {
                                            'text-blue-600 hover:gray-600':
                                                isActive,
                                        }
                                    )
                                }
                                onClick={toggleMobileMenu}
                            >
                                <p className="flex gap-2">
                                    {menu.icon} {menu.title}
                                </p>
                            </NavLink>
                        </li>
                    ))}
                    {hasLogoutButton && (
                        <li
                            className="flex gap-2 transition-colors font-semibold cursor-pointer"
                            onClick={handleLogout}
                        >
                            <LogOut className=" ml-4 text-gray-600" />
                            <span className="text-gray-500">Logout</span>
                        </li>
                    )}
                </ul>
            </div>
        </header>
    );
}
