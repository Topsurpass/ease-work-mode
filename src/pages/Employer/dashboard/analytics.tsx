import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    PieChart,
    Pie,
    Cell,
    Tooltip,
} from 'recharts';
import { LineChart, Line } from 'recharts';
import {
    jobApplicationsData,
    jobCategoriesData,
    averageSalaryData,
} from './dashboardData';

export function JobApplicationsChart() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={jobApplicationsData}>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <Bar
                    dataKey="applications"
                    fill="#4CAF50"
                    radius={[4, 4, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}

export function AverageSalaryChart() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart data={averageSalaryData}>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <Line
                    type="monotone"
                    dataKey="salary"
                    stroke="#FF5722"
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export function JobPostedByCategoryChart() {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6F61'];
    return (
        <ResponsiveContainer width="100%" height={350}>
            <PieChart>
                <Pie
                    data={jobCategoriesData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                >
                    {jobCategoriesData.map((_, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}
