import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { WORK_STEPS } from '@/data/how-we-work';

export default function Workings() {
    return (
        <section className="pt-20 pb-5">
            <div className="md:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 flex flex-col justify-center items-center ">
                    <h2 className="text-3xl font-bold text-gray-800">
                        How it works
                    </h2>
                    <p className="text-gray-600 mt-2 max-w-xl">
                        Post jobs easily and connect with talented professionals
                        in 3 simple steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
                    {WORK_STEPS.map((item, index) => (
                        <Card
                            key={index}
                            className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105"
                        >
                            <CardContent className="p-8 text-center">
                                <div className="mb-6 flex justify-center">
                                    {item.icon}
                                </div>
                                <CardTitle className="text-xl font-semibold text-gray-800 mb-4">
                                    {item.title}
                                </CardTitle>
                                <p className="text-gray-600 text-md leading-relaxed">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
