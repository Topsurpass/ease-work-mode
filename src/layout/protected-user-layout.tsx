import { Outlet } from 'react-router-dom';
import AppHeader from '@/components/features/header';
import { USER_DASHBOARD_MENU } from '@/routes/menu-list';
import Footer from '@/components/features/footer';
export default function ProtectedUserLayout() {
    return (
        <div>
            <AppHeader
                homePath="/dashboard"
                desktopMenu={USER_DASHBOARD_MENU}
                mobileMenu={USER_DASHBOARD_MENU}
                hasSignInButton={false}
                showDeskMenuIcon={true}
                hasLogoutButton
                isLogin={true}
            />
            <Outlet />
            <Footer />
        </div>
    );
}
