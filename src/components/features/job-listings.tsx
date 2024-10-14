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
import { useGetJobs } from '@/api/jobs/use-get-jobs';
import { SkeletonListJob, SkeletonJobDecription } from '@/components/skeleton';
import { JobCardProps } from '@/types/jobs';
import DropDownMenu from '@/components/dropdown-menu';
import { Bookmark, Ban, Flag } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import useGlobalProvider from '@/hooks/use-global-provider';
import { EntityType } from '@/types/enum';

export default function JobListing() {
    const { data, isLoading, fetchNextPage, hasNextPage } = useGetJobs();
    const { onModalOpen } = useGlobalProvider();
    const [selectedJob, setSelectedJob] = useState<JobCardProps | undefined>(
        undefined
    );
    const navigate = useNavigate();
    const { ref: loadMoreRef, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage, hasNextPage]);

    const jobs = data?.pages.flatMap((page) => page.data) || [];

    useEffect(() => {
        if (jobs?.length > 0 && !selectedJob) {
            setSelectedJob(jobs[0]);
        }
    }, [jobs, selectedJob]);

    const menuData = [
        {
            icon: <Bookmark />,
            label: 'Save',
        },
        {
            icon: <Ban />,
            label: 'Not Interested',
        },
        {
            icon: <Flag />,
            label: 'Report',
        },
    ];

    return (
        <section className="flex flex-col py-20 border-2 w-full">
            <Search />
            <div className="flex flex-col md:flex-row gap-5 justify-center pt-10 md:pt-20 w-full px-5">
                <section className="grid gap-5">
                    <div className="flex justify-center md:justify-normal">
                        <p className="text-gray-600 text-lg font-semibold">
                            Recent Jobs
                        </p>
                    </div>
                    {isLoading && <SkeletonListJob size={6} />}
                    {jobs?.map((job: JobCardProps, idx: number) => (
                        <Card
                            className={`w-full md:max-w-lg mx-auto shadow-lg md:w-full cursor-pointer ${selectedJob === job ? 'border-blue-500' : ''}`}
                            key={idx}
                            onClick={() => setSelectedJob(job)}
                        >
                            <CardHeader className="pb-4 border-b">
                                <div className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-md font-semibolid">
                                        {job?.title}
                                    </CardTitle>
                                    <DropDownMenu
                                        dropMenuIcon={
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
                                        }
                                        menuClassName="-ml-44 w-48 py-5 font-semibold"
                                        menuOptions={menuData}
                                    />
                                </div>
                                <CardDescription className="">
                                    {job?.company}
                                </CardDescription>
                                <CardDescription className="">
                                    <p>{`${job?.type} / ${job?.location}`}</p>
                                    <p>Pay range: {`${job?.pay}`}</p>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4 pt-3">
                                <p className="text-gray-700">
                                    {job?.shortRoleDescription}
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center border-t pt-4">
                                <p className="text-gray-500 text-sm">{`Posted on ${new Date(job?.posted).toLocaleDateString()}`}</p>
                                <Button
                                    label="Details"
                                    size="lg"
                                    type="button"
                                    className="flex md:hidden"
                                    onClick={() => {
                                        onModalOpen({
                                            data: job,
                                            entity: EntityType.JOB_DETAILS,
                                        });
                                        setSelectedJob(job);
                                    }}
                                />
                            </CardFooter>
                        </Card>
                    ))}
                    {hasNextPage && (
                        <div ref={loadMoreRef} className="text-center py-4">
                            <SkeletonListJob size={1} />
                        </div>
                    )}
                </section>

                {isLoading && !selectedJob ? (
                    <SkeletonJobDecription size={1} />
                ) : (
                    selectedJob && (
                        <aside className="hidden md:block sticky top-28 h-[80vh] overflow-y-auto">
                            <div className="text-left mb-4 sticky block">
                                <p className="text-gray-600 text-lg font-semibold">
                                    Job details
                                </p>
                            </div>
                            <Card className="max-w-lg mx-auto shadow-lg">
                                <CardHeader className="pb-4 border-b">
                                    <div className="flex flex-row items-center justify-between">
                                        <CardTitle className="text-md font-semibold">
                                            {selectedJob.title}
                                        </CardTitle>
                                    </div>
                                    <CardDescription className="">
                                        {selectedJob.company}
                                    </CardDescription>
                                    <CardDescription className="">
                                        <p>{`${selectedJob.type} / ${selectedJob.location}`}</p>
                                        <p>Pay range: {`${selectedJob.pay}`}</p>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 pt-3">
                                    <div className="flex flex-col gap-3">
                                        <div>
                                            <h3 className="font-semibold text-blue-700">
                                                About Company
                                            </h3>
                                            <p className="text-gray-700">
                                                {selectedJob.aboutCompany}
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-blue-700">
                                                Full Role Description
                                            </h3>
                                            <p className="text-gray-700">
                                                {
                                                    selectedJob.fullRoleDescription
                                                }
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-blue-700">
                                                Key Responsibilities
                                            </h3>
                                            <p className="text-gray-700">
                                                {selectedJob.keyResponsibility}
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-blue-700">
                                                Qualification and Experience
                                            </h3>
                                            <p className="text-gray-700">
                                                {
                                                    selectedJob.qualificationAndExperience
                                                }
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-blue-700">
                                                Method of Application
                                            </h3>
                                            <p className="text-gray-700">
                                                {
                                                    selectedJob.methodOfApplication
                                                }
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-blue-700">
                                                Application Deadline
                                            </h3>
                                            <p className="text-gray-700">
                                                {selectedJob.deadline}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between items-center border-t pt-4">
                                    <p className="text-gray-500 text-sm">{`Posted on ${new Date(selectedJob.posted).toLocaleDateString()}`}</p>
                                    <Button
                                        label="Apply"
                                        size="lg"
                                        type="button"
                                        onClick={() =>
                                            navigate(
                                                `/dashboard/job/${selectedJob.id}/apply`
                                            )
                                        }
                                    />
                                </CardFooter>
                            </Card>
                        </aside>
                    )
                )}
            </div>
        </section>
    );
}
