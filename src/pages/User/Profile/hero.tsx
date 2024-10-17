//import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useAuthStore from '@/stores/user-store';

export default function Hero() {
    const { firstname, lastname, phone, email, jobTitle } = useAuthStore();
    return (
        <section className="bg-gradient-to-r from-blue-600 to-gray-600 my-20 py-12">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <Avatar className="w-32 h-32 rounded-full shadow-lg border-4 border-white text-center">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback className="text-2xl font-semibold">{`${lastname[0]}${firstname[0]}`}</AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-bold text-white mt-4">{`${lastname} ${firstname}`}</h1>
                <p className="text-lg text-teal-100 mt-2 text-center">
                    {`${jobTitle}`}
                </p>
                <div className="">
                    <p className="text-lg text-teal-100 mt-2 text-center">
                        {`${email} | ${phone}`}
                    </p>
                </div>
            </div>
        </section>
    );
}
