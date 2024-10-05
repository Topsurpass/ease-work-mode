import Hero from '@/pages/public/Home/hero';
import JobListing from '@/pages/public/Home/job-listings';
import TrustedPartners from './our-partners';
import Header from '@/pages/public/Home/job-hunt-header';
import Footer from '@/components/features/footer';
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
