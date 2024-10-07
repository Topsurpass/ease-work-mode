import ShowDetails from '@/components/features/jobDetails';

export default function DashboardJobDetails() {
    return (
        <section className="min-h-screen">
            <ShowDetails
                returnPath="/dashboard"
                applyPath="/dashboard/job/:id/apply"
            />
        </section>
    );
}
