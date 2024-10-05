import Button from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function CallToAction() {
    const navigate = useNavigate();

    return (
        <section className="py-24 bg-gradient-to-r from-gray-500 to-indigo-600 text-white w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold mb-6">
                    Ready to Find the Best Talent for Your Team?
                </h2>
                <p className="text-lg leading-relaxed mb-12">
                    Join thousands of businesses that have discovered top talent
                    effortlessly. Start posting jobs, screening candidates, and
                    building your ideal team today.
                </p>

                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <Button
                        label="Get started for free"
                        size="lg"
                        type="button"
                        className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition duration-200"
                        onClick={() => navigate('/employer/login')}
                    />
                    <Button
                        label=" View Pricing Plans"
                        size="lg"
                        type="button"
                        className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-blue-500 hover:text-white  transition duration-200"
                        onClick={() => navigate('/product/pricing')}
                    />
                </div>
            </div>
        </section>
    );
}
