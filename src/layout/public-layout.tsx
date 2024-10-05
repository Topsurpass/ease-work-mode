import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
}
