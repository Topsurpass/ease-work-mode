import { NavLink } from 'react-router-dom';
import { navMenu } from './navData';
import { X } from 'lucide-react';
import { useMenu } from '@/context/menuContext';

export type navMenuProps = {
    Icon: any;
    label: string;
    path: string;
};

export const Sidebar = () => {
    const { isSidebarOpen, toggleSidebar } = useMenu();

    return (
        <div>
            {/*Desktop*/}
            <aside className="md:w-64 bg-gray-50 hidden md:flex flex-col border-r h-screen fixed z-30">
                <div className="pt-6 px-4 border-b  h-20 text-blue-500">
                    <h2 className="text-xl font-bold">Ease work</h2>
                </div>
                <nav className="mt-6 flex-grow overflow-y-auto">
                    <ul className="space-y-2">
                        {navMenu.map((menu, idx) => (
                            <li key={idx}>
                                <NavItem
                                    Icon={menu.icon}
                                    label={menu.label}
                                    path={menu.path}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            {/*Mobile*/}

            {isSidebarOpen && (
                <aside className="fixed inset-0 z-50 w-full bg-white md:hidden flex flex-col">
                    <div className="flex justify-between items-center px-4 py-3 border-b border-blue-400 h-20">
                        <h2 className="text-xl font-bold text-blue-500">
                            Ease work
                        </h2>
                        <X
                            className="w-6 h-6 cursor-pointer"
                            onClick={toggleSidebar}
                        />
                    </div>
                    <nav className="mt-6 px-4 space-y-2 overflow-y-auto flex-grow">
                        <ul className="space-y-5">
                            {navMenu.map((menu, idx) => (
                                <li key={idx} onClick={toggleSidebar}>
                                    <NavItem
                                        Icon={menu.icon}
                                        label={menu.label}
                                        path={menu.path}
                                    />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
            )}
        </div>
    );
};

export const NavItem = ({ Icon, label, path }: navMenuProps) => (
    <NavLink
        to={path}
        className={({ isActive }) =>
            `flex items-center space-x-2 py-3 rounded transition-colors md:mx-3 px-2  ${
                isActive
                    ? 'bg-blue-700 text-white hover:text-white'
                    : 'hover:bg-gray-700 hover:text-white'
            }`
        }
    >
        <Icon className="h-6 w-6" />
        <span>{label}</span>
    </NavLink>
);
