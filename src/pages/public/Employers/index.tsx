import Footer from '@/components/features/footer';
import Hero from '@/pages/public/Employers/hero';
import Benefit from '@/pages/public/Employers/why-choose-us';
import Workings from '@/pages/public/Employers/how-it-works';
import TrustedPartners from '@/pages/public/Employers/our-partners';
import Action from '@/pages/public/Employers/get-started';
import AppHeader from '@/components/features/header';
import { EMPLOYER_MENU_HEADER } from '@/routes/menu-list';

export default function Employer() {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <AppHeader
                homePath="/home/employer"
                desktopMenu={EMPLOYER_MENU_HEADER}
                mobileMenu={EMPLOYER_MENU_HEADER}
                hasSignInButton={true}
                signInPath="/employer/login"
            />
            <Hero />
            <Workings />
            <Benefit />
            <TrustedPartners />
            <Action />
            <Footer />
        </div>
    );
}
