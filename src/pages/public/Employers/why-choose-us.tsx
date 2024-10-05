import { BENEFITS } from '@/data/benefits';

export default function Benefits() {
    return (
        <section className="py-20 bg-gradient-to-r from-white to-gray-50 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 flex flex-col justify-center items-center ">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Why Choose Us?
                    </h2>
                    <p className="text-gray-600 mt-2 max-w-xl">
                        We are committed at EWM to making your search for
                        talents easy and seamless while priotizing security.
                    </p>
                </div>

                <div className="space-y-12">
                    {BENEFITS.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 ${
                                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                            <div className="flex-shrink-0">{item.icon}</div>

                            <div className="md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-md leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
