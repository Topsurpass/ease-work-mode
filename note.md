import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Briefcase, User, Settings } from 'lucide-react';
import { USER_DASHBOARD_MENU } from '@/routes/menu-list';
import { NavLink } from 'react-router-dom';
import ProfileCompletion from './profile-completion';
import JobCard from './job-cards';
import NotificationCard from './notification card';
import { cn } from '@/lib/utils';

export default function Profile() {
    const [jobs] = useState([
        {
            id: 1,
            title: 'Software Engineer',
            company: 'TechCorp',
            location: 'Remote',
            applied: false,
        },
        {
            id: 2,
            title: 'Data Analyst',
            company: 'DataVision',
            location: 'Lagos, Nigeria',
            applied: true,
        },
        {
            id: 3,
            title: 'Frontend Developer',
            company: 'WebSolutions',
            location: 'Abuja, Nigeria',
            applied: false,
        },
    ]);

    const [notifications] = useState([
        {
            id: 1,
            message: 'You have a new job alert for Software Engineer.',
            date: '2024-10-01',
        },
        {
            id: 2,
            message: 'Your application for Data Analyst has been received.',
            date: '2024-10-02',
        },
    ]);

    return (
        <div className="min-h-screen bg-gray-50 py-20">
            {/*<header className="fixed top-0 left-0 right-0 bg-white shadow-md h-20 px-5 flex items-center justify-between z-50">
                <NavLink
                    to="/employer"
                    className="text-2xl font-bold text-blue-600 hover:text-blue-600"
                >
                    EaseWork
                </NavLink>

                <nav className="hidden md:flex items-center gap-6">
                    {USER_DASHBOARD_MENU.map((menu, idx) => (
                        <NavLink
                            to={menu.path}
                            key={idx}
                            className={({ isActive }) =>
                                cn(
                                    'text-gray-600 hover:text-blue-600 transition-colors',
                                    { 'text-blue-600 hover:gray-600': isActive }
                                )
                            }
                        >
                            {menu.title}
                        </NavLink>
                    ))}
                    <Link
                        to="/settings"
                        className="text-gray-600 hover:text-gray-800"
                    >
                        <Settings className="h-6 w-6" />
                    </Link>
                    <Link
                        to="/notifications"
                        className="text-gray-600 hover:text-gray-800 relative"
                    >
                        <Bell className="h-6 w-6" />
                        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
                    </Link>
                </nav>
            </header>*/}

            <div className="flex flex-col md:flex-row px-6 py-10 space-y-10 md:space-y-0 md:space-x-10">
                {/* Sidebar */}
                <aside className="w-full md:w-1/4 bg-white shadow-md p-6 rounded-lg">
                    <h2 className="text-lg font-semibold text-gray-800 mb-6">
                        Quick Filters
                    </h2>
                    <ul className="space-y-4">
                        <li>
                            <Link
                                to="/saved-jobs"
                                className=" text-gray-700 hover:text-gray-900 flex items-center"
                            >
                                <Briefcase className="h-5 w-5 mr-2" />
                                Saved Jobs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/applied-jobs"
                                className=" text-gray-700 hover:text-gray-900 flex items-center"
                            >
                                <Briefcase className="h-5 w-5 mr-2" />
                                Applied Jobs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/profile-completion"
                                className=" text-gray-700 hover:text-gray-900 flex items-center"
                            >
                                <User className="h-5 w-5 mr-2" />
                                Profile Completion
                            </Link>
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="flex-grow bg-white shadow-md rounded-lg p-6">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Welcome Back, [Job Hunter Name]!
                        </h2>
                        <ProfileCompletion />
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Job Recommendations
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {jobs.map((job) => (
                                <JobCard key={job.id} job={job} />
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Recent Activity
                        </h2>
                        <div className="space-y-4">
                            {notifications.map((notification) => (
                                <NotificationCard
                                    key={notification.id}
                                    notification={notification}
                                />
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
