import { Outlet } from 'react-router-dom';

export default function ProtectedEmployerLayout() {
    return (
        <div>
            <Outlet />
        </div>
    );
}
