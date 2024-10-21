interface Applicant {
    id: string;
    name: string;
    email: string;
    applicationDate: string;
    status: 'Active' | 'Paused' | 'Closed';
}

interface Job {
    id: string;
    category: string;
    title: string;
    postedDate: string;
    status: 'Active' | 'Paused' | 'Closed';
    location: string;
    noOfApplicants: number;
    applicants: Applicant[];
    salaryRange: string;
    employmentType: 'Full-Time' | 'Part-Time' | 'Contract';
    experienceLevel: 'Entry-Level' | 'Mid-Level' | 'Senior-Level';
    jobDescription: string;
}

export const mockJobData: Job[] = [
    {
        id: '1',
        category: 'Software Development',
        title: 'Frontend Developer',
        postedDate: '2023-09-15',
        status: 'Active',
        location: 'Remote',
        noOfApplicants: 30,
        applicants: [
            {
                id: '89383-92892',
                name: 'Sunday Gabriel',
                email: 'sunday@example.com',
                applicationDate: '2023-09-18',
                status: 'Active',
            },
            {
                id: '73928-28290',
                name: 'Jane Doe',
                email: 'jane@example.com',
                applicationDate: '2023-09-19',
                status: 'Active',
            },
        ],
        salaryRange: '$80,000 - $100,000',
        employmentType: 'Full-Time',
        experienceLevel: 'Mid-Level',
        jobDescription:
            'Develop responsive UI components using React and Tailwind CSS.',
    },
    {
        id: '2',
        category: 'IT & Support',
        title: 'Technical Support Specialist',
        postedDate: '2023-10-01',
        status: 'Paused',
        location: 'On-site - New York, NY',
        noOfApplicants: 15,
        applicants: [
            {
                id: '23983-12451',
                name: 'John Smith',
                email: 'johnsmith@example.com',
                applicationDate: '2023-10-03',
                status: 'Paused',
            },
            {
                id: '19284-49573',
                name: 'Emily Johnson',
                email: 'emilyj@example.com',
                applicationDate: '2023-10-04',
                status: 'Closed',
            },
        ],
        salaryRange: '$50,000 - $70,000',
        employmentType: 'Contract',
        experienceLevel: 'Entry-Level',
        jobDescription:
            'Provide technical assistance and support for incoming queries and issues.',
    },
    {
        id: '3',
        category: 'Marketing',
        title: 'Digital Marketing Manager',
        postedDate: '2023-08-20',
        status: 'Active',
        location: 'Hybrid - San Francisco, CA',
        noOfApplicants: 45,
        applicants: [
            {
                id: '92842-23982',
                name: 'Michael Lee',
                email: 'michael.lee@example.com',
                applicationDate: '2023-08-22',
                status: 'Closed',
            },
            {
                id: '47392-23983',
                name: 'Anna White',
                email: 'anna.white@example.com',
                applicationDate: '2023-08-23',
                status: 'Active',
            },
        ],
        salaryRange: '$90,000 - $120,000',
        employmentType: 'Full-Time',
        experienceLevel: 'Senior-Level',
        jobDescription:
            'Lead digital marketing campaigns, manage SEO/SEM strategies, and optimize social media channels.',
    },
    {
        id: '4',
        category: 'Human Resources',
        title: 'HR Generalist',
        postedDate: '2023-07-10',
        status: 'Closed',
        location: 'On-site - Austin, TX',
        noOfApplicants: 20,
        applicants: [
            {
                id: '98342-12873',
                name: 'Lisa Wong',
                email: 'lisa.wong@example.com',
                applicationDate: '2023-07-12',
                status: 'Paused',
            },
            {
                id: '28391-47392',
                name: 'Peter Kim',
                email: 'peter.kim@example.com',
                applicationDate: '2023-07-13',
                status: 'Active',
            },
        ],
        salaryRange: '$60,000 - $80,000',
        employmentType: 'Full-Time',
        experienceLevel: 'Mid-Level',
        jobDescription:
            'Support HR processes including recruitment, employee relations, and benefits administration.',
    },
    {
        id: '1',
        category: 'Software Development',
        title: 'Frontend Developer',
        postedDate: '2023-09-15',
        status: 'Active',
        location: 'Remote',
        noOfApplicants: 30,
        applicants: [
            {
                id: '89383-92892',
                name: 'Sunday Gabriel',
                email: 'sunday@example.com',
                applicationDate: '2023-09-18',
                status: 'Active',
            },
            {
                id: '73928-28290',
                name: 'Jane Doe',
                email: 'jane@example.com',
                applicationDate: '2023-09-19',
                status: 'Active',
            },
        ],
        salaryRange: '$80,000 - $100,000',
        employmentType: 'Full-Time',
        experienceLevel: 'Mid-Level',
        jobDescription:
            'Develop responsive UI components using React and Tailwind CSS.',
    },
    {
        id: '2',
        category: 'IT & Support',
        title: 'Technical Support Specialist',
        postedDate: '2023-10-01',
        status: 'Paused',
        location: 'On-site - New York, NY',
        noOfApplicants: 15,
        applicants: [
            {
                id: '23983-12451',
                name: 'John Smith',
                email: 'johnsmith@example.com',
                applicationDate: '2023-10-03',
                status: 'Paused',
            },
            {
                id: '19284-49573',
                name: 'Emily Johnson',
                email: 'emilyj@example.com',
                applicationDate: '2023-10-04',
                status: 'Closed',
            },
        ],
        salaryRange: '$50,000 - $70,000',
        employmentType: 'Contract',
        experienceLevel: 'Entry-Level',
        jobDescription:
            'Provide technical assistance and support for incoming queries and issues.',
    },
    {
        id: '3',
        category: 'Marketing',
        title: 'Digital Marketing Manager',
        postedDate: '2023-08-20',
        status: 'Active',
        location: 'Hybrid - San Francisco, CA',
        noOfApplicants: 45,
        applicants: [
            {
                id: '92842-23982',
                name: 'Michael Lee',
                email: 'michael.lee@example.com',
                applicationDate: '2023-08-22',
                status: 'Closed',
            },
            {
                id: '47392-23983',
                name: 'Anna White',
                email: 'anna.white@example.com',
                applicationDate: '2023-08-23',
                status: 'Active',
            },
        ],
        salaryRange: '$90,000 - $120,000',
        employmentType: 'Full-Time',
        experienceLevel: 'Senior-Level',
        jobDescription:
            'Lead digital marketing campaigns, manage SEO/SEM strategies, and optimize social media channels.',
    },
    {
        id: '4',
        category: 'Human Resources',
        title: 'HR Generalist',
        postedDate: '2023-07-10',
        status: 'Closed',
        location: 'On-site - Austin, TX',
        noOfApplicants: 20,
        applicants: [
            {
                id: '98342-12873',
                name: 'Lisa Wong',
                email: 'lisa.wong@example.com',
                applicationDate: '2023-07-12',
                status: 'Paused',
            },
            {
                id: '28391-47392',
                name: 'Peter Kim',
                email: 'peter.kim@example.com',
                applicationDate: '2023-07-13',
                status: 'Active',
            },
        ],
        salaryRange: '$60,000 - $80,000',
        employmentType: 'Full-Time',
        experienceLevel: 'Mid-Level',
        jobDescription:
            'Support HR processes including recruitment, employee relations, and benefits administration.',
    },
    {
        id: '1',
        category: 'Software Development',
        title: 'Frontend Developer',
        postedDate: '2023-09-15',
        status: 'Active',
        location: 'Remote',
        noOfApplicants: 30,
        applicants: [
            {
                id: '89383-92892',
                name: 'Sunday Gabriel',
                email: 'sunday@example.com',
                applicationDate: '2023-09-18',
                status: 'Active',
            },
            {
                id: '73928-28290',
                name: 'Jane Doe',
                email: 'jane@example.com',
                applicationDate: '2023-09-19',
                status: 'Active',
            },
        ],
        salaryRange: '$80,000 - $100,000',
        employmentType: 'Full-Time',
        experienceLevel: 'Mid-Level',
        jobDescription:
            'Develop responsive UI components using React and Tailwind CSS.',
    },
    {
        id: '2',
        category: 'IT & Support',
        title: 'Technical Support Specialist',
        postedDate: '2023-10-01',
        status: 'Paused',
        location: 'On-site - New York, NY',
        noOfApplicants: 15,
        applicants: [
            {
                id: '23983-12451',
                name: 'John Smith',
                email: 'johnsmith@example.com',
                applicationDate: '2023-10-03',
                status: 'Paused',
            },
            {
                id: '19284-49573',
                name: 'Emily Johnson',
                email: 'emilyj@example.com',
                applicationDate: '2023-10-04',
                status: 'Closed',
            },
        ],
        salaryRange: '$50,000 - $70,000',
        employmentType: 'Contract',
        experienceLevel: 'Entry-Level',
        jobDescription:
            'Provide technical assistance and support for incoming queries and issues.',
    },
    {
        id: '3',
        category: 'Marketing',
        title: 'Digital Marketing Manager',
        postedDate: '2023-08-20',
        status: 'Active',
        location: 'Hybrid - San Francisco, CA',
        noOfApplicants: 45,
        applicants: [
            {
                id: '92842-23982',
                name: 'Michael Lee',
                email: 'michael.lee@example.com',
                applicationDate: '2023-08-22',
                status: 'Closed',
            },
            {
                id: '47392-23983',
                name: 'Anna White',
                email: 'anna.white@example.com',
                applicationDate: '2023-08-23',
                status: 'Active',
            },
        ],
        salaryRange: '$90,000 - $120,000',
        employmentType: 'Full-Time',
        experienceLevel: 'Senior-Level',
        jobDescription:
            'Lead digital marketing campaigns, manage SEO/SEM strategies, and optimize social media channels.',
    },
    {
        id: '4',
        category: 'Human Resources',
        title: 'HR Generalist',
        postedDate: '2023-07-10',
        status: 'Closed',
        location: 'On-site - Austin, TX',
        noOfApplicants: 20,
        applicants: [
            {
                id: '98342-12873',
                name: 'Lisa Wong',
                email: 'lisa.wong@example.com',
                applicationDate: '2023-07-12',
                status: 'Paused',
            },
            {
                id: '28391-47392',
                name: 'Peter Kim',
                email: 'peter.kim@example.com',
                applicationDate: '2023-07-13',
                status: 'Active',
            },
        ],
        salaryRange: '$60,000 - $80,000',
        employmentType: 'Full-Time',
        experienceLevel: 'Mid-Level',
        jobDescription:
            'Support HR processes including recruitment, employee relations, and benefits administration.',
    },
];
