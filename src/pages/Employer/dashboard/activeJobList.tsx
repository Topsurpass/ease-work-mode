import {
    Card,
    CardContent,
    //CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Button from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Ellipsis, Pencil, Trash2 } from 'lucide-react';
import { jobs, Job } from './dashboardData';

const getBadgeColor = (status: string) => {
    switch (status) {
        case 'Active':
            return 'bg-green-500 text-white';
        case 'Stopped':
            return 'bg-red-500 text-white';
        case 'Paused':
            return 'bg-yellow-500 text-white';
        default:
            return 'bg-gray-300 text-gray-800';
    }
};

const JobListingCard: React.FC<{ job: Job }> = ({ job }) => (
    <Card className="shadow-lg hover:shadow-2xl transition duration-300">
        <CardHeader>
            <div className="flex justify-between items-center">
                <CardTitle className="text-md font-semibold text-gray-900">
                    {job.title}
                </CardTitle>
                <Badge
                    className={`rounded-full text-xs ${getBadgeColor(job.status)}`}
                >
                    {job.status}
                </Badge>
            </div>
            <p className="text-sm text-gray-500">Posted on {job.posted}</p>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
            <p className="text-sm font-medium text-gray-700">
                Applicants:{' '}
                <span className="font-semibold">{job.applicants}</span>
            </p>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="outline" size="icon">
                        <Ellipsis size={18} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="-mt-2 ml-8 w-36">
                    <DropdownMenuItem
                        className="flex cursor-pointer items-center gap-2 hover:bg-blue-500"
                        onClick={() => {}}
                    >
                        <Pencil size={18} />
                        <span>View</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="flex cursor-pointer items-start gap-2 hover:bg-blue-500"
                        onClick={() => {}}
                    >
                        <Trash2 size={18} />
                        <span>Delete</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </CardContent>
    </Card>
);

export default function ActiveJobList() {
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 ">
                    Current Job Listings
                </h2>
                <p className="text-xs">View and manage jobs currently posted</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                {jobs.map((job, index) => (
                    <JobListingCard key={index} job={job} />
                ))}
            </div>
        </div>
    );
}
