import SignUpForm from './signup-form';
import { USER_MENU_HEADER } from '@/routes/menu-list';
import Footer from '@/components/features/footer';
import AppHeader from '@/components/features/header';
export default function index() {
    return (
        <div>
            <AppHeader
                desktopMenu={USER_MENU_HEADER}
                mobileMenu={USER_MENU_HEADER}
                hasSignInButton={true}
                signInPath="/login"
            />
            <SignUpForm />
            <Footer />
        </div>
    );
}
