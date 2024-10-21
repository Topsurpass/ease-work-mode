/* eslint-disable react/no-unstable-nested-components */
import { useMemo, useState } from 'react';
import { PaginationState, VisibilityState } from '@tanstack/react-table';
import { View, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import DataTableSSR from '@/components/table/datatable-ssr2';
import { mockJobData } from '../postedJobsData';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import Button from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function DisplayJobApplicants() {
    const [status, setStatus] = useState(true);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
        id: false,
    });
    const navigate = useNavigate();

    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 20,
    });

    const totalRecords = mockJobData.length;

    const filteredData = useMemo(() => {
        const start = pageIndex * pageSize;
        const end = start + pageSize;
        return mockJobData.slice(start, end);
    }, [pageIndex, pageSize, mockJobData]);

    const pagination = useMemo(
        () => ({
            pageIndex,
            pageSize,
        }),
        [pageIndex, pageSize]
    );

    const getBadgeColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-green-500 text-white';
            case 'Closed':
                return 'bg-red-500 text-white';
            case 'Paused':
                return 'bg-yellow-500 text-black font-bold';
            case 'Interview Scheduled':
                return 'bg-blue-500 text-white';
            default:
                return 'bg-gray-300 text-gray-800';
        }
    };

    const columns = useMemo(
        () => [
            {
                accessorKey: 'postedDate',
                header: 'Date',
                cell: (info: any) => (
                    <p className="text-gray-500 text-sm">{info.getValue()}</p>
                ),
            },
            {
                accessorKey: 'category',
                header: 'Category',
                cell: (info) => (
                    <p className="text-gray-500 text-sm">{info.getValue()}</p>
                ),
            },
            {
                accessorKey: 'title',
                header: 'Job Title',
                cell: (info: any) => <p className="f">{info.getValue()}</p>,
            },

            {
                accessorKey: 'location',
                header: 'Location',
                cell: (info) => (
                    <p className="text-gray-600 text-sm">{info.getValue()}</p>
                ),
            },

            {
                accessorKey: 'salaryRange',
                header: 'Salary Range',
                cell: (info) => (
                    <p className="text-gray-600 text-sm">{info.getValue()}</p>
                ),
            },
            {
                accessorKey: 'noOfApplicants',
                header: 'Applicants',
                cell: (info) => (
                    <p className="font-semibold text-gray-700">
                        {info.getValue()}
                    </p>
                ),
            },
            {
                accessorKey: 'status',
                header: 'Status',
                cell: (info) => {
                    const status = info.getValue();
                    const badgeColor = getBadgeColor(status);
                    return (
                        <Badge className={`rounded-full text-xs ${badgeColor}`}>
                            {status}
                        </Badge>
                    );
                },
            },
            {
                header: () => <span className="font-semibold">Actions</span>,
                id: 'action',
                cell: () => <View onClick={() => {}} />,
            },
        ],
        []
    );

    return (
        <section className="bg-white w-full rounded-md grid gap-8">
            <section className="grid grid-cols-1 gap-4">
                <Card className="shadow-lg border-l-4 border-blue-500 flex justify-between">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">
                            Frontend Developer
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                            FaceBook Inc | Remote | Lagos Nigeria
                        </CardDescription>
                        <p className="text-gray-500 mt-2">
                            Pay Range: $120,000 - $ 150,000
                        </p>
                    </CardHeader>
                    <CardHeader>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full"
                            onClick={() => navigate('/employer/manage-jobs')}
                            aria-label="Close"
                        >
                            <X />
                        </Button>
                    </CardHeader>
                </Card>
            </section>
            <section className="flex justify-between">
                <div>
                    <h3 className="text-lg font-semibold"> Job Applicants</h3>
                    <p className="text-sm">
                        Job seekers that applied for the job
                    </p>
                </div>
            </section>
            <div className="rounded-lg">
                <DataTableSSR
                    data={filteredData}
                    columns={columns}
                    totalRecords={totalRecords}
                    pagination={pagination}
                    columnVisibility={columnVisibility}
                    setColumnVisibility={setColumnVisibility}
                    setPagination={setPagination}
                    status={status}
                    setStatus={setStatus}
                    pageSizeOptions={[5, 10, 20, 30, 50]}
                    pageCount={Math.ceil(totalRecords / pageSize)}
                    numOfSkeletonColumns={7}
                    numOfSkeletonRows={5}
                />
            </div>
        </section>
    );
}
