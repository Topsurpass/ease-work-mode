import Search from '@/pages/User/Dashboard/search';

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
                <Search />
            </div>
        </section>
    );
}
