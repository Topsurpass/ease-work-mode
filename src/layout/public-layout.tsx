import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow pt-[80px] overflow-auto">
                <Outlet />
            </main>
        </div>
    );
}
