import { FaChartLine, FaHandshake, FaClock, FaShieldAlt } from 'react-icons/fa';
import { Working_Steps } from '@/types/schema';

export const BENEFITS: Working_Steps = [
    {
        title: 'Efficient Hiring Process',
        description:
            'Post jobs, review applications, and hire talent quickly and efficiently with minimal effort.',
        icon: <FaChartLine className="h-16 w-16 text-blue-600" />,
    },
    {
        title: 'Reliable Talent Pool',
        description:
            'Access a diverse range of candidates with verified profiles, ensuring you only see quality applicants.',
        icon: <FaHandshake className="h-16 w-16 text-blue-600" />,
    },
    {
        title: 'Save Time and Resources',
        description:
            'With advanced filters and AI-driven recommendations, you can find the right candidates faster, saving valuable time.',
        icon: <FaClock className="h-16 w-16 text-blue-600" />,
    },
    {
        title: 'Secure and Trustworthy',
        description:
            'We prioritize your data and job security. All transactions and information are kept secure with top-notch encryption.',
        icon: <FaShieldAlt className="h-16 w-16 text-blue-600" />,
    },
];
