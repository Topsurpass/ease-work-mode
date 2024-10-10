import { useParams, useNavigate } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
    CardDescription,
} from '@/components/ui/card';
import Button from '@/components/ui/button';
import { SkeletonJobDetails } from '@/components/skeleton';
import { useGetJobById } from '@/api/jobs/use-get-jobs';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import JobNotFound from './not-found';

type ShowDetailsProps = {
    returnPath: string;
};

export default function MobileViewJobDetails({ returnPath }: ShowDetailsProps) {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: job, isLoading, isError } = useGetJobById(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) {
        return <SkeletonJobDetails size={1} />;
    }

    if (isError || !job) {
        return <JobNotFound returnPath={returnPath} />;
    }

    return (
        <section className="flex flex-col items-center justify-center px-5 min-h-screen">
            <Card className="max-w-4xl w-full shadow-lg mt-24 mb-10">
                <CardHeader className="pb-4 border-b">
                    <div className="flex flex-row items-center justify-between">
                        <CardTitle className="text-2xl font-bold">
                            {job.title}
                        </CardTitle>
                        <ArrowLeft
                            className="cursor-pointer"
                            onClick={() => navigate(returnPath)}
                        />
                    </div>
                    <CardDescription className="font-semibold text-gray-600">
                        {job.company} - {job.type} / {job.location}
                        <p>Pay range: {`${job.pay}`}</p>
                    </CardDescription>
                    <CardDescription className="text-sm text-gray-500">
                        {`Posted on: ${new Date(job.posted).toLocaleDateString()}`}
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6 pt-6">
                    <div>
                        <h3 className="font-semibold text-lg text-blue-700">
                            About the Company
                        </h3>
                        <p className="text-gray-700">{job.aboutCompany}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg text-blue-700">
                            Full Role Description
                        </h3>
                        <p className="text-gray-700">
                            {job.fullRoleDescription}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg text-blue-700">
                            Key Responsibilities
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            {job.keyResponsibility
                                .split('\n')
                                .map((item: any, index: number) => (
                                    <li key={index}>{item}</li>
                                ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg text-blue-700">
                            Qualifications & Experience
                        </h3>
                        <p className="text-gray-700">
                            {job.qualificationAndExperience}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg text-blue-700">
                            Method of Application
                        </h3>
                        <p className="text-gray-700">
                            {job.methodOfApplication}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg text-blue-700">
                            Application Deadline
                        </h3>
                        <p className="text-gray-700">{job.deadline}</p>
                    </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center border-t pt-4">
                    <p className="text-gray-500 text-sm">
                        Posted on: {new Date(job.posted).toLocaleDateString()}
                    </p>
                    <Button
                        label="Apply for this Job"
                        size="lg"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                        onClick={() => navigate('apply')}
                    />
                </CardFooter>
            </Card>
        </section>
    );
}
