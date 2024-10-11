import JobListing from '@/components/features/job-listings';
import JobDeatailsModal from '@/pages/User/job-details-modal';

export default function UserDashboard() {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <JobListing />
            <JobDeatailsModal />
        </div>
    );
}
