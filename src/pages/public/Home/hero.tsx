import { IoIosSearch } from 'react-icons/io';

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-full mt-20">
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-extrabold md:text-xl lg:text-7xl">
                    EASE WORK MODE
                </h1>
                <p className="mt-4 text-lg lg:text-xl max-w-2xl mx-auto">
                    For over a decade, EWM has been the number one destination
                    to find and list incredible remote jobs. We are home to the
                    largest remote work community in the world with 4.5M
                    visitors.
                </p>
                <div className="mt-8 flex justify-center">
                    <div className="relative w-full max-w-lg">
                        <input
                            type="text"
                            placeholder="Search for jobs..."
                            className="w-full px-5 py-3 rounded-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <IoIosSearch className="absolute right-3 top-3 w-6 h-6 text-gray-500" />
                    </div>
                </div>
            </div>
        </section>
    );
}
