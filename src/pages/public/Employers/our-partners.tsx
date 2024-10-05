import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { PARTNERS } from '@/data/our-partners-data';

export default function TrustedPartners() {
    return (
        <section className="p-10 md:w-[80%] flex flex-col justify-center items-center">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    We Have Good Partners
                </h2>
                <p className="text-gray-600 mt-2 max-w-xl">
                    We are proud to partner with leading companies globally.
                    These companies have used EaseWork to hire most of their
                    staff.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {PARTNERS.map((partner, index) => (
                    <Card
                        key={index}
                        className="shadow-lg transform transition hover:scale-105"
                    >
                        <CardHeader className="flex justify-center items-center py-6">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-12"
                            />
                        </CardHeader>
                        <CardContent className="text-center">
                            <CardTitle className="text-xl font-semibold">
                                {partner.name}
                            </CardTitle>
                            <p className="text-gray-700 mt-3">
                                {partner.description}
                            </p>
                        </CardContent>
                        <CardFooter className="flex justify-center pt-4">
                            <a
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 font-medium"
                            >
                                Visit Website
                            </a>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
