import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/pages/Employer/components/sidebar';
import Header from '@/pages/Employer/components/header';

export default function ProtectedEmployerLayout() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Header />
                <main className="p-3 overflow-y-auto flex-1  mt-20 md:ml-64">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
