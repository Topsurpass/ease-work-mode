import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/ui/button';
import { TextArea, TextField } from '@/components/ui/forms';
import { useParams, useNavigate } from 'react-router-dom';
import {
    jobApplicationSchema,
    ApplicationInputs,
} from '@/validations/jobApplicationSchema';

export default function Apply() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm<ApplicationInputs>({
        resolver: zodResolver(jobApplicationSchema),
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const processForm = async (data: ApplicationInputs) => {
        console.log(data);
        alert(id);
        navigate('/applications');
    };

    return (
        <div className="bg-gray-50 min-h-screen p-10 mt-20">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
                <header className="p-6 border-b">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Apply for Job
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Senior Frontend Engineer - Remote
                    </p>
                    <p className="text-gray-500">Company XYZ | Full-time</p>
                </header>
                {/*<pre>{JSON.stringify(watch(), null, 2)}</pre>*/}

                <form
                    onSubmit={handleSubmit(processForm)}
                    className="p-6 space-y-6"
                >
                    <div>
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
                        <label className="text-gray-700 font-semibold mb-2">
                            Upload Resume
                        </label>
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

                <footer className="p-6 border-t text-center">
                    <p className="text-gray-500 text-sm">
                        By submitting this application, you agree to our{' '}
                        <a href="#" className="underline">
                            Privacy Policy
                        </a>
                        .
                    </p>
                </footer>
            </div>
        </div>
    );
}
