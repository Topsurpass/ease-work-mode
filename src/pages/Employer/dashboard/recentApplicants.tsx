import { UserCircle } from 'lucide-react';
import React from 'react';
import { applicants, Applicant } from './dashboardData';

const ApplicantCard: React.FC<{ applicant: Applicant }> = ({ applicant }) => (
    <div className="flex items-center space-x-4 bg-white shadow-sm p-4 rounded-lg hover:shadow-lg transition">
        <UserCircle size={40} className="text-gray-500" />
        <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">
                {applicant.name}
            </p>
            <p className="text-sm text-gray-500">{applicant.job}</p>
        </div>
        <p className="text-sm text-gray-500">{applicant.date}</p>
        <button className="text-blue-500">View Profile</button>
    </div>
);

export default function RecentApplicants() {
    return (
        <div>
            <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800 ">
                    Recent Applicants
                </h2>
                <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="space-y-4 mt-8">
                {applicants.map((applicant, index) => (
                    <ApplicantCard key={index} applicant={applicant} />
                ))}
            </div>
        </div>
    );
}
