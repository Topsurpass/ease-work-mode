import Overview from './overview';
import ActiveJobList from './activeJobList';
import {
    JobApplicationsChart,
    AverageSalaryChart,
    JobPostedByCategoryChart,
} from './analytics';

const PostNewJobButton = () => (
    <button className="fixed bottom-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition">
        Post New Job
    </button>
);

export default function EmployerDashBoard() {
    return (
        <div className="bg-gray-100 min-h-screen grid gap-12">
            <div className="bg-white p-5 rounded-lg  shadow-md">
                <Overview />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-md ">
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-gray-800 ">
                            Job applications
                        </h2>
                        <p className="text-xs">
                            Total number of job applications received each
                            month.
                        </p>
                    </div>
                    <JobApplicationsChart />
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-gray-800 ">
                            Monthly average salary
                        </h2>
                        <p className="text-xs">
                            Average monthly salary spent on jobs.
                        </p>
                    </div>
                    <AverageSalaryChart />
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-gray-800 ">
                            Total Jobs posted
                        </h2>
                        <p className="text-xs">
                            Total number of jobs posted based on catageory
                        </p>
                    </div>
                    <JobPostedByCategoryChart />
                </div>
            </div>
            <div className="bg-white p-5 rounded-lg  shadow-md">
                <ActiveJobList />
            </div>

            <PostNewJobButton />
        </div>
    );
}
