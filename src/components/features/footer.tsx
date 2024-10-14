import { Link } from 'react-router-dom';
import { FOOTER_LINKS, SOCIALS } from '@/constants';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-8">
                    <Link
                        to="/"
                        className="text-xl font-bold text-blue-600 hover:text-blue-600"
                    >
                        EaseWork
                    </Link>
                    <p className="text-center max-w-lg">
                        Connecting You to Remote Opportunities
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-8">
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>

                        <ul className="space-y-2">
                            {FOOTER_LINKS.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link.path}
                                        className="hover:text-blue-400 transition duration-200"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4 mb-4">
                            {SOCIALS.map((social, idx) => (
                                <Link
                                    to={social.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={idx}
                                >
                                    <div className="flex items-center justify-center h-10 w-10 bg-blue-600 rounded-full transition duration-200 hover:bg-blue-500 text-black">
                                        {social.icon}
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <p className="text-sm text-gray-400">
                            Stay connected with us for the latest updates.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">
                            Subscribe to Our Newsletter
                        </h3>
                        <form className="flex flex-col gap-2 lg:flex-row lg:gap-0">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg transition duration-200 hover:bg-blue-600"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-center border-t border-gray-700 pt-4">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} EASE WORK MODE. All
                        rights reserved.
                    </p>
                    <p className="text-sm text-gray-400">
                        Privacy Policy | Terms of Service
                    </p>
                </div>
            </div>
        </footer>
    );
}
