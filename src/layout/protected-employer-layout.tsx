import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/pages/Employer/components/sidebar';
import Header from '@/pages/Employer/components/header';

export default function ProtectedEmployerLayout() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Header />
                <main className="p-6 overflow-y-auto flex-1 bg-gray-100">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
