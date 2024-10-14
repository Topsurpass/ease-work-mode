import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/ui/button';
import { TextArea, TextField } from '@/components/ui/forms';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetJobById } from '@/api/jobs/use-get-jobs';
import {
    jobApplicationSchema,
    ApplicationInputs,
} from '@/validations/jobApplicationSchema';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
} from '@/components/ui/card';
import JobNotFound from '@/components/features/not-found';
import LoadingSpinner from '@/components/ui/loading-spinner';

export default function Apply() {
    const { id } = useParams();
    const { data: job, isLoading, isError } = useGetJobById(id);

    const navigate = useNavigate();
    const { control, handleSubmit } = useForm<ApplicationInputs>({
        resolver: zodResolver(jobApplicationSchema),
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (isError) {
        return <JobNotFound />;
    }

    const processForm = async (data: ApplicationInputs) => {
        console.log(data);
        alert(id);
        navigate('/applications');
    };

    return (
        <div className="bg-gray-50 min-h-screen md:p-10 mt-20">
            <div className="md:max-w-4xl mx-auto bg-white shadow-lg rounded-lg w-full">
                {/*<pre>{JSON.stringify(watch(), null, 2)}</pre>*/}

                <Card className="border-0 rounded-none mb-6">
                    <CardHeader className="p-6 border-b bg-gray-50">
                        <CardTitle className="text-xl font-semibold text-gray-800">
                            {job?.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                            {job?.company} | {job?.type} | {job?.location}
                        </CardDescription>
                        <p className="text-gray-500 mt-2">
                            Pay Range: {`${job?.pay}`}
                        </p>
                    </CardHeader>
                </Card>

                <Card className="border-0 rounded-none">
                    <CardHeader className="bg-blue-50 p-6">
                        <CardTitle className="text-xl font-semibold text-blue-800">
                            Apply for This Job
                        </CardTitle>
                        <CardDescription className="text-blue-600">
                            Please provide your details and upload your resume
                            to submit your application.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <form
                            onSubmit={handleSubmit(processForm)}
                            className="space-y-6"
                        >
                            <div className="pt-3">
                                <TextField
                                    label="Full Name"
                                    placeholder="Enter your name"
                                    name="name"
                                    control={control}
                                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-500 w-full bg-white"
                                />
                            </div>

                            <div>
                                <TextField
                                    label="Email Address"
                                    placeholder="you@example.com"
                                    type="email"
                                    name="email"
                                    control={control}
                                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-500 w-full bg-white"
                                />
                            </div>

                            <div>
                                <TextField
                                    label="Phone Number"
                                    placeholder="(123) 456-7890"
                                    type="tel"
                                    name="phone"
                                    control={control}
                                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-500 w-full bg-white"
                                />
                            </div>

                            <div>
                                <TextField
                                    type="file"
                                    name="resume"
                                    label="Resume"
                                    control={control}
                                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-500 w-full bg-white"
                                />
                            </div>

                            <TextArea
                                label="Cover Letter (Optional)"
                                placeholder="Enter your cover letter"
                                name="coverLetter"
                                control={control}
                                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-500 w-full bg-white"
                            />

                            <Button
                                type="submit"
                                className="w-full py-3 bg-blue-500 text-white rounded-lg"
                                label="Submit Application"
                            />
                        </form>
                    </CardContent>
                </Card>
                <Card className="border-0">
                    <footer className="p-6 border-t text-center">
                        <p className="text-gray-500 text-sm">
                            By submitting this application, you agree to our{' '}
                            <a href="#" className="underline">
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </footer>
                </Card>
            </div>
        </div>
    );
}
