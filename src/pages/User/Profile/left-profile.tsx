import {
    Card,
    CardContent,
    CardDescription,
    //CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export default function LeftProfileSection() {
    return (
        <div className="col-span-2 md:col-span-1 space-y-8 ">
            <Card className="max-w-lg mx-auto shadow-lg">
                <CardHeader className="pb-4 border-b">
                    <CardTitle>About Me</CardTitle>
                    <CardDescription className="text-gray-700">
                        Get to know me
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700">
                    <p className="py-4">
                        I am a passionate frontend developer with over 10 years
                        of experience in crafting user-friendly, performant web
                        applications. I specialize in React, TypeScript, and
                        Tailwind CSS, creating pixel-perfect interfaces and
                        interactive designs.
                    </p>
                </CardContent>
            </Card>

            <Card className="max-w-lg mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription className="text-gray-700 pb-4 border-b">
                        Below are my areas of skills and expertise.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700">
                    <ul className="space-y-4">
                        {renderSkill('JavaScript', 95)}
                        {renderSkill('React', 90)}
                        {renderSkill('TypeScript', 85)}
                        {renderSkill('Tailwind CSS', 80)}
                    </ul>
                </CardContent>
            </Card>

            <Card className="max-w-lg mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle>Certifications</CardTitle>
                    <CardDescription className="text-gray-700 pb-4 border-b">
                        Below are my certifications.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700">
                    <ul className="space-y-2">
                        <li>Certified React Developer - 2023</li>
                        <li>JavaScript Specialist - 2022</li>
                        <li>TypeScript Proficiency - 2021</li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="max-w-lg mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle>Testimonials</CardTitle>
                    <CardDescription className="text-gray-700 pb-4 border-b">
                        What my clients says about me.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700">
                    <blockquote className="italic text-gray-600">
                        "John design and development skills are unmatched. He's
                        truly a joy to work with."
                    </blockquote>
                    <p className="mt-2 text-gray-500">
                        - Sarah Connor, Project Manager
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}

const renderSkill = (name: string, level: number) => (
    <li key={name}>
        <span className="font-semibold">{name}</span>
        <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
            <div
                className="bg-teal-600 h-2 rounded-full"
                style={{ width: `${level}%` }}
            ></div>
        </div>
    </li>
);
