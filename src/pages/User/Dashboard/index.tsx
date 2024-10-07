import JobListing from '@/components/features/job-listings';

export default function UserDashboard() {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <JobListing viewDetailsPath="job" />
        </div>
    );
}
