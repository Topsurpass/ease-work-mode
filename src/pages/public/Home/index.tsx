import { USER_MENU_HEADER } from '@/routes/menu-list';
import AppHeader from '@/components/features/header';
import Footer from '@/components/features/footer';
import JobListing from '@/components/features/job-listings';
export default function HomePage() {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <AppHeader
                //homePath="/"
                desktopMenu={USER_MENU_HEADER}
                mobileMenu={USER_MENU_HEADER}
                hasSignInButton={true}
                signInPath="/login"
            />
            <JobListing viewDetailsPath="job" />
            <Footer />
        </div>
    );
}
