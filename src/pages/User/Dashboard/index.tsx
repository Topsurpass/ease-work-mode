import DashBoardHeader from '@/pages/User/Dashboard/header';
import JobListing from '@/pages/User/Dashboard/jobs';
import Footer from '@/components/features/footer';

export default function UserDashboard() {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <DashBoardHeader />
            <JobListing />
            <Footer />
        </div>
    );
}
