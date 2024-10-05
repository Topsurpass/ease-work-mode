import { Outlet } from 'react-router-dom';
import DashBoardHeader from '@/pages/User/header';
import Footer from '@/components/features/footer';
export default function ProtectedUserLayout() {
    return (
        <div>
            <DashBoardHeader />
            <Outlet />
            <Footer />
        </div>
    );
}
