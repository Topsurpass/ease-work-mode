import { Menu } from 'lucide-react';
import { useMenu } from '@/context/menuContext';
import { LogOut } from 'lucide-react';

export default function Header() {
    const { toggleSidebar } = useMenu();

    return (
        <header className="flex items-center justify-between p-4 bg-white border-b shadow-md h-20">
            <div className="flex items-center space-x-2">
                <Menu
                    className="w-6 h-6 cursor-pointer md:hidden"
                    onClick={toggleSidebar}
                />
                <h1 className="text-xl font-bold text-blue-500 md:hidden">
                    Easework
                </h1>
            </div>
            <div className="flex items-center space-x-4">
                <LogOut />
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            </div>
        </header>
    );
}
