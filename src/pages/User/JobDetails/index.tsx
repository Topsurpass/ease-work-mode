import MobileViewJobDetails from '@/components/features/mobileViewJobDetails';

export default function DashboardJobDetails() {
    return (
        <section className="min-h-screen">
            <MobileViewJobDetails returnPath="/dashboard" />
        </section>
    );
}
