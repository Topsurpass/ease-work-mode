import { FaUserPlus, FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import { Working_Steps } from '@/types/schema';

export const WORK_STEPS: Working_Steps = [
    {
        step: '1',
        title: 'Create Your Account',
        description:
            'Register your account and instantly gain access to our platform. Set up your company profile and start managing job listings seamlessly.',
        icon: <FaUserPlus className="h-12 w-12 text-blue-600" />,
    },
    {
        step: '2',
        title: 'Post Job Openings',
        description:
            'Post your job listings with our intuitive interface, tailored to capture key details about the role and attract the right candidates.',
        icon: <FaBriefcase className="h-12 w-12 text-blue-600" />,
    },
    {
        step: '3',
        title: 'Review and Hire',
        description:
            'Track applications in real-time, review candidate profiles, and move quickly to interview and hire the ideal talent for your team.',
        icon: <FaCheckCircle className="h-12 w-12 text-blue-600" />,
    },
];
