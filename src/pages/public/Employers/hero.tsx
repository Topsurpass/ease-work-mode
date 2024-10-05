import Button from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();
    return (
        <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-full mt-20">
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-bold md:text-xl lg:text-6xl">
                    Find Your Perfect Candidate
                </h1>
                <p className="mt-4 text-lg lg:text-xl max-w-2xl mx-auto">
                    Post jobs easily and connect with talented professionals.
                </p>
                <div className="my-8 flex justify-center">
                    <Button
                        label="Post a job"
                        size="lg"
                        type="button"
                        className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-md hover:bg-gray-200 transition duration-200"
                        onClick={() => navigate('/employer/login')}
                    />
                </div>
            </div>
        </section>
    );
}
