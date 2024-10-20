export interface Job {
    title: string;
    posted: string;
    status: 'Active' | 'Paused' | 'Stopped' | 'Expired';
    applicants: number;
}

export interface Applicant {
    name: string;
    job: string;
    date: string;
}

export const applicants = [
    { name: 'Alice Johnson', job: 'Frontend Developer', date: 'Oct 15, 2024' },
    { name: 'Mark David', job: 'Backend Engineer', date: 'Oct 12, 2024' },
];

export const averageSalaryData = [
    { name: 'Jan', salary: Math.floor(Math.random() * 3000) + 4000 },
    { name: 'Feb', salary: Math.floor(Math.random() * 3000) + 4500 },
    { name: 'Mar', salary: Math.floor(Math.random() * 3000) + 4200 },
    { name: 'Apr', salary: Math.floor(Math.random() * 3000) + 4800 },
    { name: 'May', salary: Math.floor(Math.random() * 3000) + 5000 },
    { name: 'Jun', salary: Math.floor(Math.random() * 3000) + 5200 },
    { name: 'Jul', salary: Math.floor(Math.random() * 100) + 2000 },
    { name: 'Aug', salary: Math.floor(Math.random() * 100) + 3820 },
    { name: 'Sept', salary: Math.floor(Math.random() * 100) + 1025 },
    { name: 'Oct', salary: Math.floor(Math.random() * 100) + 400 },
    { name: 'Nov', salary: Math.floor(Math.random() * 100) + 3815 },
    { name: 'Dec', salary: Math.floor(Math.random() * 100) + 4500 },
];

export const jobApplicationsData = [
    { name: 'Jan', applications: Math.floor(Math.random() * 100) + 20 },
    { name: 'Feb', applications: Math.floor(Math.random() * 100) + 30 },
    { name: 'Mar', applications: Math.floor(Math.random() * 100) + 25 },
    { name: 'Apr', applications: Math.floor(Math.random() * 100) + 40 },
    { name: 'May', applications: Math.floor(Math.random() * 100) + 35 },
    { name: 'Jun', applications: Math.floor(Math.random() * 100) + 45 },
    { name: 'Jul', applications: Math.floor(Math.random() * 100) + 20 },
    { name: 'Aug', applications: Math.floor(Math.random() * 100) + 30 },
    { name: 'Sept', applications: Math.floor(Math.random() * 100) + 25 },
    { name: 'Oct', applications: Math.floor(Math.random() * 100) + 40 },
    { name: 'Nov', applications: Math.floor(Math.random() * 100) + 35 },
    { name: 'Dec', applications: Math.floor(Math.random() * 100) + 45 },
];

export const jobCategoriesData = [
    { name: 'Frontend', value: Math.floor(Math.random() * 30) + 10 },
    { name: 'Backend', value: Math.floor(Math.random() * 30) + 15 },
    { name: 'Fullstack', value: Math.floor(Math.random() * 30) + 5 },
    { name: 'DevOps', value: Math.floor(Math.random() * 30) + 20 },
    { name: 'Design', value: Math.floor(Math.random() * 30) + 10 },
];

export const jobs: Job[] = [
    {
        title: 'Senior Frontend Developer',
        posted: 'Oct 1, 2024',
        status: 'Active',
        applicants: 25,
    },
    {
        title: 'Backend Developer',
        posted: 'Sep 25, 2024',
        status: 'Paused',
        applicants: 18,
    },
    {
        title: 'Senior Frontend Developer',
        posted: 'Oct 1, 2024',
        status: 'Stopped',
        applicants: 25,
    },
    {
        title: 'Backend Developer',
        posted: 'Sep 25, 2024',
        status: 'Expired',
        applicants: 18,
    },
];
