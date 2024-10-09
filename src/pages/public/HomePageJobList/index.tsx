import ShowDetails from '@/components/features/mobileViewJobDetails';
import { USER_MENU_HEADER } from '@/routes/menu-list';
import AppHeader from '@/components/features/header';
export default function HomeJobDetails() {
    return (
        <section className="min-h-screen">
            <AppHeader
                homePath="/"
                desktopMenu={USER_MENU_HEADER}
                mobileMenu={USER_MENU_HEADER}
                hasSignInButton={true}
                signInPath="/login"
            />
            <ShowDetails returnPath="/" applyPath="/dashboard/job/:id/apply" />
        </section>
    );
}
