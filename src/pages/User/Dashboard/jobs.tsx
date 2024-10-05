import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { IoIosSearch } from 'react-icons/io';
import { JOBS } from '@/data/job-list-data';
import { useState } from 'react';
import Button from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function JobListing() {
    // Set the first job as the default selected job
    const [selectedJob, setSelectedJob] = useState(JOBS[0]);
    const navigate = useNavigate();

    return (
        <section className="flex flex-col pt-20 border-2 w-full">
            <div className="mt-20 flex justify-center">
                <div className="relative w-full max-w-lg">
                    <input
                        type="text"
                        placeholder="Search for jobs..."
                        className="w-full px-5 py-3 rounded-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 border-2 border-black"
                    />
                    <IoIosSearch className="absolute right-3 top-3 w-6 h-6 text-gray-500" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 justify-center pt-20 w-full">
                <section className="grid gap-5">
                    <div className="flex justify-center md:justify-normal">
                        <p className="text-gray-600 text-xl font-semibold">
                            Jobs you might like
                        </p>
                    </div>
                    {JOBS.map((job, idx) => (
                        <Card
                            className={`max-w-lg mx-auto shadow-lg cursor-pointer ${selectedJob === job ? 'border-blue-500' : ''}`}
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
                                    {`${job.type} / ${job.location}`}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4 pt-3">
                                <p className="text-gray-700">
                                    {job.description1}
                                </p>
                                <p className="text-gray-700">
                                    {job.description2}
                                </p>
                            </CardContent>

                            <CardFooter className="flex justify-between items-center border-t pt-4">
                                <p className="text-gray-500 text-sm">
                                    {job.posted}
                                </p>
                                <Button
                                    label="Details"
                                    size="lg"
                                    type="button"
                                    onClick={() => navigate('/job/:id')}
                                />
                            </CardFooter>
                        </Card>
                    ))}
                </section>

                {selectedJob && (
                    <aside className="hidden md:block sticky top-28 h-[80vh] overflow-y-auto">
                        <div className="text-center mb-4">
                            <p className="text-gray-600 text-lg font-semibold">
                                Full job description
                            </p>
                        </div>
                        <Card className="max-w-lg mx-auto shadow-lg">
                            <CardHeader className="pb-4 border-b">
                                <div className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-lg font-semibold">
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
                                    {`${selectedJob.type} / ${selectedJob.location}`}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4 pt-3">
                                <p className="text-gray-700">
                                    {selectedJob.description1}
                                </p>
                                <p className="text-gray-700">
                                    {selectedJob.description2}
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center border-t pt-4">
                                <p className="text-gray-500 text-sm">
                                    {selectedJob.posted}
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
                )}
            </div>
        </section>
    );
}
