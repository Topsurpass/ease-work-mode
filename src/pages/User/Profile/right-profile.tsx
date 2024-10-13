import {
    Card,
    CardContent,
    CardDescription,
    //CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export default function RightProfile() {
    return (
        <div className="col-span-2 md:col-span-2 space-y-8 w-full">
            <Card className="mx-auto shadow-lg">
                <CardHeader className="pb-4 border-b">
                    <CardTitle>Portfolio</CardTitle>
                    <CardDescription className="text-gray-700">
                        Some of my best work
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700 py-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {renderPortfolioItem(
                            '/project1.jpg',
                            'E-Commerce Platform',
                            'Modern e-commerce site built with React and Tailwind CSS.'
                        )}
                        {renderPortfolioItem(
                            '/project2.jpg',
                            'Social Networking Site',
                            'A social media app built with Node.js and MongoDB.'
                        )}
                        {renderPortfolioItem(
                            '/project3.jpg',
                            'Dashboard Analytics',
                            'Data-driven dashboard built using React and TypeScript.'
                        )}
                    </div>
                </CardContent>
            </Card>
            <Card className=" mx-auto shadow-lg">
                <CardHeader className="pb-4 border-b">
                    <CardTitle>Work History</CardTitle>
                    <CardDescription className="text-gray-700">
                        Previous work experience
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700 py-5">
                    <div className="space-y-6">
                        {renderWorkHistory(
                            'Senior Frontend Developer',
                            'Tech Innovators',
                            'Jan 2018 - Present',
                            'Lead developer for a global e-commerce platform, collaborating with designers to create intuitive and scalable applications.'
                        )}
                        {renderWorkHistory(
                            'UI/UX Designer',
                            'Creative Design Studio',
                            'Jul 2015 - Dec 2017',
                            'Designed and prototyped various user interfaces, ensuring a seamless user experience across platforms.'
                        )}
                    </div>
                </CardContent>
            </Card>
            <Card className="mx-auto shadow-lg">
                <CardHeader className="pb-4 border-b">
                    <CardTitle>Employment History</CardTitle>
                    <CardDescription className="text-gray-700">
                        Career path so far
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700 py-5">
                    <ul className="space-y-4">
                        {renderEmploymentHistory(
                            'Tech Innovators',
                            'Senior Frontend Developer',
                            'Jan 2018 - Present'
                        )}
                        {renderEmploymentHistory(
                            'Creative Design Studio',
                            'UI/UX Designer',
                            'Jul 2015 - Dec 2017'
                        )}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}

const renderPortfolioItem = (
    image: string,
    title: string,
    description: string
) => (
    <div key={title} className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h4 className="font-bold text-lg text-gray-800">{title}</h4>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    </div>
);

const renderWorkHistory = (
    title: string,
    company: string,
    duration: string,
    description: string
) => (
    <div
        key={title}
        className="border-l-4 border-teal-600 p-4 bg-gray-50 rounded-lg"
    >
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-500">
            {company} | {duration}
        </p>
        <p className="text-gray-700 mt-2">{description}</p>
    </div>
);

const renderEmploymentHistory = (
    company: string,
    role: string,
    duration: string
) => (
    <li key={company}>
        <h4 className="font-bold text-gray-800">{role}</h4>
        <p className="text-gray-500">
            {company} | {duration}
        </p>
    </li>
);
