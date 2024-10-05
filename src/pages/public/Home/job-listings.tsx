import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { JOBS } from '@/data/job-list-data';

export default function JobListing() {
    return (
        <section className="flex flex-col justify-center items-center md:p-10 p-5">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    Jobs For You
                </h2>
                <p className="text-gray-600 mt-2">
                    Apply to any of the currently available jobs
                </p>
            </div>
            <section className="grid gap-8 md:grid-cols-2 2xl:grid-cols-3 lg:w-[80%]">
                {JOBS.map((job, idx) => (
                    <Card className="max-w-lg mx-auto shadow-lg" key={idx}>
                        <CardHeader className=" pb-4 border-b">
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

                            <>
                                <CardDescription className="font-semibold">
                                    {job.company}
                                </CardDescription>
                                <CardDescription className="font-semibold">
                                    {`${job.type}/${job.location}`}
                                    <p>Pay range: {`${job.pay}`}</p>
                                </CardDescription>
                            </>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-3">
                            <p className="text-gray-700">
                                {job.shortRoleDescription}
                            </p>
                        </CardContent>

                        <CardFooter className="flex justify-between items-center border-t pt-4">
                            <p className="text-gray-500 text-sm">
                                {job.posted}
                            </p>
                            <button className="bg-blue-500 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-lg transition duration-300 hover:bg-blue-600">
                                Details
                            </button>
                        </CardFooter>
                    </Card>
                ))}
            </section>
        </section>
    );
}
