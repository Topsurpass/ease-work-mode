interface ApplicationProp {
    id: string;
    title: string;
    company: string;
    status: string;
    location: string;
    appliedDate: string;
    timeline: { date: string; description: string }[];
}

export const mockJobData: ApplicationProp[] = [
    {
        id: '1',
        title: 'Frontend Developer',
        company: 'Tech Innovations',
        appliedDate: '2023-09-15',
        status: 'Under Review',
        location: 'Remote',
        timeline: [
            { date: '2023-09-16', description: 'Application Submitted' },
            { date: '2023-09-20', description: 'Application Reviewed' },
        ],
    },
    {
        id: '2',
        title: 'Backend Developer',
        company: 'Backend Solutions',
        appliedDate: '2023-08-05',
        status: 'Interview Scheduled',
        location: 'New York, NY',
        timeline: [
            { date: '2023-08-06', description: 'Application Submitted' },
            { date: '2023-08-10', description: 'Interview Scheduled' },
        ],
    },
    {
        id: '3',
        title: 'Fullstack Engineer',
        company: 'Fullstack Magic',
        appliedDate: '2023-07-20',
        status: 'Rejected',
        location: 'San Francisco, CA',
        timeline: [
            { date: '2023-07-21', description: 'Application Submitted' },
            { date: '2023-07-28', description: 'Rejected' },
        ],
    },
    {
        id: '4',
        title: 'DevOps Engineer',
        company: 'Cloud Masters',
        appliedDate: '2023-06-30',
        status: 'Offer Made',
        location: 'Remote',
        timeline: [
            { date: '2023-07-01', description: 'Application Submitted' },
            { date: '2023-07-15', description: 'Offer Made' },
        ],
    },
    {
        id: '5',
        title: 'UI/UX Designer',
        company: 'Creative Minds',
        appliedDate: '2023-09-10',
        status: 'Under Review',
        location: 'Austin, TX',
        timeline: [
            { date: '2023-09-11', description: 'Application Submitted' },
        ],
    },
    {
        id: '6',
        title: 'Video Editor',
        company: 'Global Impact Chuch',
        appliedDate: '2023-09-10',
        status: 'Submitted',
        location: 'Austin, TX',
        timeline: [
            { date: '2023-09-11', description: 'Application Submitted' },
        ],
    },
    // Add more dummy data as needed
];
