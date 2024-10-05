import { NavLink } from 'react-router-dom';
import { USER_DASHBOARD_MENU } from '@/routes/menu-list';
import { cn } from '@/lib/utils';
import useMobileMenu from '@/hooks/useMobileMenu';
import { IoMenuOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';

export default function DashBoardHeader() {
    const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md h-20 px-5 flex items-center justify-between z-50">
            <NavLink
                to="/dashboard"
                className="text-2xl font-bold text-blue-600 hover:text-blue-600"
            >
                EaseWork
            </NavLink>

            <nav className="hidden md:flex items-center gap-6">
                {USER_DASHBOARD_MENU.map((menu, idx) => (
                    <NavLink
                        to={menu.path}
                        key={idx}
                        className={({ isActive }) =>
                            cn(
                                'text-gray-600 hover:text-blue-600 transition-colors flex',
                                { 'text-blue-600 hover:gray-600': isActive }
                            )
                        }
                    >
                        <p className="flex gap-1">
                            {menu.title}
                            {menu.icon}
                        </p>
                    </NavLink>
                ))}
            </nav>
            <div className="md:hidden">
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
                    {USER_DASHBOARD_MENU.map((menu, idx) => (
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
                </ul>
            </div>
        </header>
    );
}
