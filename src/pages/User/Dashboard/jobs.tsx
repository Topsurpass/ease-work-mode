import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Search from '@/pages/User/Dashboard/search';
import useGetJobs from '@/api/jobs/use-get-jobs';
import { SkeletonListJob, SkeletonJobDecription } from '@/components/skeleton';
import { JobCardProps } from '@/types/jobs';
import { formatDateTime } from '@/utils/helpers';

export default function JobListing() {
    const { data, isLoading } = useGetJobs();
    const [selectedJob, setSelectedJob] = useState<JobCardProps | undefined>(
        undefined
    );
    const navigate = useNavigate();

    useEffect(() => {
        if (data && data.length > 0) {
            setSelectedJob(data[0]);
        }
    }, [data]);

    return (
        <section className="flex flex-col py-20 border-2 w-full">
            <Search />
            <div className="flex flex-col md:flex-row gap-5 justify-center pt-10 md:pt-20 w-full px-5">
                <section className="grid gap-5">
                    <div className="flex justify-center md:justify-normal">
                        <p className="text-gray-600 text-xl font-semibold">
                            Recent Jobs
                        </p>
                    </div>
                    {isLoading && <SkeletonListJob size={6} />}
                    {data?.map((job: JobCardProps, idx: number) => (
                        <Card
                            className={`w-full md:max-w-lg mx-auto shadow-lg md:w-full cursor-pointer ${selectedJob === job ? 'border-blue-500' : ''}`}
                            key={idx}
                            onClick={() => setSelectedJob(job)}
                        >
                            <CardHeader className="pb-4 border-b">
                                <div className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-lg font-semibold">
                                        {job.title}
                                    </CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-6 w-6 text-muted-foreground"
                                    >
                                        <circle cx="12" cy="6" r="2" />
                                        <circle cx="12" cy="12" r="2" />
                                        <circle cx="12" cy="18" r="2" />
                                    </svg>
                                </div>
                                <CardDescription className="font-semibold">
                                    {job.company}
                                </CardDescription>
                                <CardDescription className="font-semibold">
                                    <p>{`${job.type} / ${job.location}`}</p>
                                    <p>Pay range: {`${job.pay}`}</p>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4 pt-3">
                                <p className="text-gray-700">
                                    {job.shortRoleDescription}
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center border-t pt-4">
                                <p className="text-gray-500 text-sm">
                                    {`Posted on ${formatDateTime(job.posted)}`}
                                </p>
                                <Button
                                    label="Details"
                                    size="lg"
                                    type="button"
                                    className="flex md:hidden"
                                    onClick={() => navigate('/job/:id')}
                                />
                            </CardFooter>
                        </Card>
                    ))}
                </section>

                {selectedJob ? (
                    <aside className="hidden md:block sticky top-28 h-[80vh] overflow-y-auto">
                        <div className="text-left mb-4 sticky block">
                            <p className="text-gray-600 text-xl font-semibold">
                                Job details
                            </p>
                        </div>
                        <Card className="max-w-lg mx-auto shadow-lg">
                            <CardHeader className="pb-4 border-b">
                                <div className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-xl font-bold">
                                        {selectedJob.title}
                                    </CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-6 w-6 text-muted-foreground"
                                    >
                                        <circle cx="12" cy="6" r="2" />
                                        <circle cx="12" cy="12" r="2" />
                                        <circle cx="12" cy="18" r="2" />
                                    </svg>
                                </div>
                                <CardDescription className="font-semibold">
                                    {selectedJob.company}
                                </CardDescription>
                                <CardDescription className="font-semibold">
                                    <p>{`${selectedJob.type} / ${selectedJob.location}`}</p>
                                    <p>Pay range: {`${selectedJob.pay}`}</p>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4 pt-3">
                                <div className="flex flex-col gap-3">
                                    <div>
                                        <h3 className="font-semibold text-lg ">
                                            About Company
                                        </h3>
                                        <p className="text-gray-700">
                                            {selectedJob.aboutCompany}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg ">
                                            Full Role Description
                                        </h3>
                                        <p className="text-gray-700">
                                            {selectedJob.fullRoleDescription}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg ">
                                            Key Responsibilities
                                        </h3>
                                        <p className="text-gray-700">
                                            {selectedJob.keyResponsibility}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg ">
                                            Qualification and Experience
                                        </h3>
                                        <p className="text-gray-700">
                                            {
                                                selectedJob.qualificationAndExperience
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg ">
                                            Method of Application
                                        </h3>
                                        <p className="text-gray-700">
                                            {selectedJob.methodOfApplication}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg ">
                                            Application Deadline
                                        </h3>
                                        <p className="text-gray-700">
                                            {selectedJob.deadline}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center border-t pt-4">
                                <p className="text-gray-500 text-sm">
                                    {`Posted on ${formatDateTime(selectedJob.posted)}`}
                                </p>
                                <Button
                                    label="Apply"
                                    size="lg"
                                    type="button"
                                    onClick={() => navigate('/job/:id/apply')}
                                />
                            </CardFooter>
                        </Card>
                    </aside>
                ) : (
                    isLoading && <SkeletonJobDecription size={1} />
                )}
            </div>
        </section>
    );
}
