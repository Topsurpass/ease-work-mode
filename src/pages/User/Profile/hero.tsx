import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-gray-600 my-20 py-12">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <Avatar className="w-32 h-32 rounded-full shadow-lg border-4 border-white text-center">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h1 className="text-4xl font-bold text-white mt-4">John Doe</h1>
                <p className="text-lg text-teal-100 mt-2 text-center">
                    Senior Frontend Developer | UI/UX Enthusiast
                </p>
                <p className="mt-2 text-teal-200 text-center">
                    Crafting cutting-edge web experiences for over 10 years.
                </p>
                <div className="mt-4">
                    <Link
                        to={'#'}
                        className="px-5 py-3 bg-white text-teal-600 font-semibold rounded-md shadow-md hover:bg-teal-50 transition"
                    >
                        Contact Me
                    </Link>
                    <Link
                        to={'#'}
                        className="ml-4 px-5 py-3 bg-teal-700 text-white font-semibold rounded-md hover:bg-teal-800 transition"
                    >
                        Download CV
                    </Link>
                </div>
            </div>
        </section>
    );
}
