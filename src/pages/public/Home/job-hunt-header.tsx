import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { USER_MENU_HEADER } from '@/routes/menu-list';
import { IoMenuOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import useMobileMenu from '@/hooks/useMobileMenu';
import Button from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

export default function Header() {
    const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
    const navigate = useNavigate();
    const location = useLocation();

    const isSignedInPage = location.pathname === '/sign-in';

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md h-20 px-5 flex items-center justify-between z-50">
            <NavLink
                to="/"
                className="text-2xl font-bold text-blue-600 hover:text-blue-600"
            >
                EaseWork
            </NavLink>

            <nav className="hidden md:flex items-center gap-6">
                {!isSignedInPage && (
                    <Button
                        label="Sign in"
                        size="lg"
                        type="button"
                        onClick={() => navigate('/user/login')}
                    />
                )}

                {USER_MENU_HEADER.map((menu, idx) => (
                    <NavLink
                        to={menu.path}
                        key={idx}
                        className={({ isActive }) =>
                            cn(
                                'text-gray-600 hover:text-blue-600 transition-colors',
                                { 'text-blue-600 hover:gray-600': isActive }
                            )
                        }
                    >
                        {menu.title}
                    </NavLink>
                ))}
            </nav>

            <div className="md:hidden">
                {isMobileMenuOpen ? (
                    <IoMdClose
                        className="w-6 h-6 text-blue-600 cursor-pointer"
                        onClick={toggleMobileMenu}
                    />
                ) : (
                    <IoMenuOutline
                        className="w-6 h-6 text-blue-600 cursor-pointer"
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
                <ul className="flex flex-col gap-4 p-5">
                    {USER_MENU_HEADER.map((menu, idx) => (
                        <li key={idx}>
                            <NavLink
                                to={menu.path}
                                className={({ isActive }) =>
                                    cn(
                                        'text-gray-600 hover:text-blue-600 transition-colors flex gap-2 items-center',
                                        {
                                            'text-blue-600 hover:gray-600':
                                                isActive,
                                        }
                                    )
                                }
                                onClick={toggleMobileMenu}
                            >
                                {menu.icon} {menu.title}
                            </NavLink>
                        </li>
                    ))}
                    <NavLink
                        to={'/user/login'}
                        className={'flex gap-2 text-gray-600 pt-3'}
                    >
                        <FaUser />
                        Sign In
                    </NavLink>
                </ul>
            </div>
        </header>
    );
}
