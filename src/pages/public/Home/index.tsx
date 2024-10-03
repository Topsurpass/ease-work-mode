import Hero from '@/pages/public/Home/hero';
import JobListing from '@/pages/public/Home/job-listings';
import TrustedPartners from './our-partners';
import Header from '@/components/header';
import Footer from '@/pages/public/Home/footer';
export default function HomePage() {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <Header />
            <Hero />
            <TrustedPartners />
            <JobListing />
            <Footer />
        </div>
    );
}
