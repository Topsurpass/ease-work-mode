import Header from '@/components/header';
import Footer from '@/pages/public/Home/footer';
import Hero from '@/pages/public/Employers/hero';
import Benefit from '@/pages/public/Employers/benefits';
import Workings from '@/pages/public/Employers/workings';
import TrustedPartners from '@/pages/public/Employers/our-partners';
import Action from '@/pages/public/Employers/action';
export default function Employer() {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <Header />
            <Hero />
            <Workings />
            <Benefit />
            <TrustedPartners />
            <Action />
            <Footer />
        </div>
    );
}
