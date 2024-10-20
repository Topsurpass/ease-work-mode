import { Briefcase, CheckCircle, UserCheck, BarChart } from 'lucide-react';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface OverviewCardProps {
    title: string;
    icon: React.ElementType;
    value: string | number;
    color: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
    title,
    icon: Icon,
    value,
    color,
}) => (
    <Card className={`shadow-lg border-l-4 ${color}`}>
        <CardHeader>
            <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-gray-100 text-gray-800">
                    <Icon size={28} />
                </div>
                <CardTitle className="text-md font-medium text-gray-600">
                    {title}
                </CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </CardContent>
    </Card>
);

export default function Overview() {
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 ">
                    Overview
                </h2>
                <p className="text-xs">
                    Brief overview of jobs posted and applicants
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                <OverviewCard
                    title="Total Jobs Posted"
                    icon={Briefcase}
                    value="25"
                    color="border-blue-500"
                />
                <OverviewCard
                    title="Active Listings"
                    icon={CheckCircle}
                    value="12"
                    color="border-green-500"
                />
                <OverviewCard
                    title="Total Applicants"
                    icon={UserCheck}
                    value="120"
                    color="border-orange-500"
                />
                <OverviewCard
                    title="Views"
                    icon={BarChart}
                    value="560"
                    color="border-purple-500"
                />
            </div>
        </div>
    );
}
