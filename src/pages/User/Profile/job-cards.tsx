import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const JobCard = ({ job }: any) => {
    return (
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
            <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                    {job.title}
                </h2>
                <p className="text-gray-600">
                    {job.company} - {job.location}
                </p>
                <Link
                    to={`/job/${job.id}`}
                    className="text-blue-600 hover:text-blue-500 mt-2 block font-semibold"
                >
                    View Details
                </Link>
            </CardContent>
        </Card>
    );
};

export default JobCard;
