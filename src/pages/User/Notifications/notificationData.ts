interface Notification {
    id: number;
    type: 'application' | 'interview' | 'platform';
    message: string;
    timestamp: string;
    isRead: boolean;
}

export const mockNotifications: Notification[] = [
    {
        id: 1,
        type: 'application',
        message:
            'Your application for Frontend Developer at Tech Innovations is under review.',
        timestamp: '2023-10-05 14:30',
        isRead: false,
    },
    {
        id: 2,
        type: 'interview',
        message:
            'Interview scheduled for Backend Developer at WebSolutions Inc.',
        timestamp: '2023-10-04 09:00',
        isRead: true,
    },
    {
        id: 3,
        type: 'platform',
        message: 'New job matches based on your profile preferences!',
        timestamp: '2023-10-03 16:15',
        isRead: false,
    },
    {
        id: 4,
        type: 'application',
        message:
            'Your application for UI/UX Designer at Creative Studios has been accepted.',
        timestamp: '2023-10-02 11:45',
        isRead: true,
    },
    {
        id: 5,
        type: 'interview',
        message:
            'Reminder: Your interview for Product Manager at FutureTech is tomorrow at 10:00 AM.',
        timestamp: '2023-10-01 08:00',
        isRead: false,
    },
];
