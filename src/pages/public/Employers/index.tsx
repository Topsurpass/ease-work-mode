import Footer from '@/components/features/footer';
import Hero from '@/pages/public/Employers/hero';
import Benefit from '@/pages/public/Employers/why-choose-us';
import Workings from '@/pages/public/Employers/how-it-works';
import TrustedPartners from '@/pages/public/Employers/our-partners';
import Action from '@/pages/public/Employers/action';
import EmployerHeader from './employer-header';

export default function Employer() {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <EmployerHeader />
            <Hero />
            <Workings />
            <Benefit />
            <TrustedPartners />
            <Action />
            <Footer />
        </div>
    );
}
