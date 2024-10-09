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

------------------------APPLICATION

import { useMemo, useState } from 'react';
import {
useReactTable,
createColumnHelper,
getCoreRowModel,
} from '@tanstack/react-table';
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from '@/components/ui/card'; // Import your Card components
import Button from '@/components/ui/button'; // Import your Button component
import { Eye, Trash } from 'lucide-react'; // Import icons

// Dummy data for job applications
const dummyData = [
{
id: 1,
title: 'Software Engineer',
company: 'Tech Company',
appliedDate: '2024-09-15',
status: 'Applied',
},
{
id: 2,
title: 'Frontend Developer',
company: 'Web Solutions',
appliedDate: '2024-09-20',
status: 'Interview Scheduled',
},
{
id: 3,
title: 'Backend Developer',
company: 'Data Corp',
appliedDate: '2024-09-25',
status: 'Rejected',
},
{
id: 4,
title: 'DevOps Engineer',
company: 'Cloud Services',
appliedDate: '2024-09-28',
status: 'Offer Extended',
},
{
id: 5,
title: 'Product Manager',
company: 'Innovate Inc.',
appliedDate: '2024-09-30',
status: 'Application Under Review',
},
{
id: 6,
title: 'Data Analyst',
company: 'Data Insights',
appliedDate: '2024-10-01',
status: 'Interview Scheduled',
},
{
id: 7,
title: 'QA Engineer',
company: 'Quality Assurance Co.',
appliedDate: '2024-10-05',
status: 'Applied',
},
{
id: 8,
title: 'UX Designer',
company: 'Design Studio',
appliedDate: '2024-10-10',
status: 'Interview Scheduled',
},
{
id: 9,
title: 'Data Analyst',
company: 'Data Insights',
appliedDate: '2024-10-01',
status: 'Interview Scheduled',
},
{
id: 10,
title: 'QA Engineer',
company: 'Quality Assurance Co.',
appliedDate: '2024-10-05',
status: 'Applied',
},
{
id: 11,
title: 'UX Designer',
company: 'Design Studio',
appliedDate: '2024-10-10',
status: 'Interview Scheduled',
},
];

// Define column helper
const columnHelper = createColumnHelper<any>();

// Define columns
const columns = [
columnHelper.accessor('title', {
header: () => <span className="cursor-pointer">Job Title</span>,
cell: (info) => <span>{info.getValue()}</span>,
}),
columnHelper.accessor('company', {
header: () => <span className="cursor-pointer">Company</span>,
cell: (info) => <span>{info.getValue()}</span>,
}),
columnHelper.accessor('appliedDate', {
header: () => <span className="cursor-pointer">Applied Date</span>,
cell: (info) => <span>{info.getValue()}</span>,
}),
columnHelper.accessor('status', {
header: () => (
<span className="cursor-pointer">Application Status</span>
),
cell: (info) => (
<span
className={`font-bold ${
info.getValue() === 'Rejected'
? 'text-red-600'
: info.getValue() === 'Offer Extended'
? 'text-green-600'
: info.getValue() === 'Interview Scheduled'
? 'text-yellow-600'
: 'text-blue-600'
}`}
>
{info.getValue()}
</span>
),
}),
];

// Main Component
export default function JobApplication() {
const [sorting, setSorting] = useState([]);
const [pageIndex, setPageIndex] = useState(0);
const [pageSize, setPageSize] = useState(8); // Adjusted for 2 rows of 4 cards

    // Create table instance
    const table = useReactTable({
        data: dummyData,
        columns,
        state: {
            sorting,
            pagination: {
                pageIndex,
                pageSize,
            },
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        pageCount: Math.ceil(dummyData.length / pageSize),
    });

    // Action handlers
    const handleView = (id: number) => {
        console.log(`Viewing job with ID: ${id}`);
    };

    const handleDelete = (id: number) => {
        alert(`Deleting job with ID: ${id}`);
    };

    const handlePageChange = (newPage: number) => {
        setPageIndex(newPage);
    };

    return (
        <section className="p-10 bg-gray-50 min-h-screen mt-20">
            <h1 className="text-4xl font-bold text-center mb-6">
                Job Applications
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {table
                    .getRowModel()
                    .rows.slice(
                        pageIndex * pageSize,
                        pageIndex * pageSize + pageSize
                    )
                    .map((row) => (
                        <Card
                            key={row.id}
                            className="bg-brown-50 shadow-lg rounded-lg border border-gray-200 p-4"
                        >
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">
                                    {row.getValue('title')}
                                </CardTitle>
                                <CardDescription className="text-sm text-gray-500">
                                    {row.getValue('company')}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600">
                                    Applied on: {row.getValue('appliedDate')}
                                </p>
                                <p className="text-sm font-bold mb-4">
                                    Status:
                                    <span
                                        className={`font-bold ${
                                            row.getValue('status') ===
                                            'Rejected'
                                                ? 'text-red-600'
                                                : row.getValue('status') ===
                                                    'Offer Extended'
                                                  ? 'text-green-600'
                                                  : row.getValue('status') ===
                                                      'Interview Scheduled'
                                                    ? 'text-yellow-600'
                                                    : 'text-blue-600'
                                        }`}
                                    >
                                        {row.getValue('status')}
                                    </span>
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    variant="outline"
                                    onClick={() =>
                                        handleView(row.getValue('id'))
                                    }
                                    className="mr-2"
                                >
                                    <Eye size={16} className="mr-1" /> View
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() =>
                                        handleDelete(row.original.id)
                                    }
                                >
                                    <Trash size={16} className="mr-1" /> Delete
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
            </div>
            <div className="mt-6 flex justify-center">
                <Pagination
                    currentPage={pageIndex}
                    pageCount={Math.ceil(dummyData.length / pageSize)}
                    onPageChange={handlePageChange}
                />
            </div>
        </section>
    );

}

// Pagination Component
const Pagination = ({ currentPage, pageCount, onPageChange }) => {
const handleNext = () => {
if (currentPage < pageCount - 1) {
onPageChange(currentPage + 1);
}
};

    const handlePrev = () => {
        if (currentPage > 0) {
            onPageChange(currentPage - 1);
        }
    };

    return (
        <div className="flex items-center space-x-2">
            <Button onClick={handlePrev} disabled={currentPage === 0}>
                Previous
            </Button>
            <span>
                {currentPage + 1} of {pageCount}
            </span>
            <Button
                onClick={handleNext}
                disabled={currentPage === pageCount - 1}
            >
                Next
            </Button>
        </div>
    );

};
