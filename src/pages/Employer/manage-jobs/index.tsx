import { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { PaginationState, VisibilityState } from '@tanstack/react-table';
import DataTableSSR from '@/components/table/datatable-ssr2';
import Button from '@/components/ui/button';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis, Pencil, Trash2, Plus } from 'lucide-react';
import { mockJobData } from './postedJobsData';

export default function ManageJobs() {
    const [status, setStatus] = useState(true);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
        id: false,
    });
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
                cell: () => (
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="outline" size="icon">
                                <Ellipsis size={18} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className=" ml-8 w-40">
                            <DropdownMenuItem
                                className="flex cursor-pointer items-center gap-2 hover:bg-blue-500"
                                onClick={() => {}}
                            >
                                <Pencil size={18} />
                                <span>Edit job</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="flex cursor-pointer items-center gap-2 hover:bg-blue-500"
                                onClick={() => {}}
                            >
                                <Trash2 size={18} />
                                <span>View applicants</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ),
            },
        ],
        []
    );

    return (
        <section className="bg-white w-full rounded-md">
            <div className="mb-10 flex justify-between items-center h-[100px]">
                <div className="md:p-0">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Manage Jobs
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Keep track of your posted jobs and manage applications.
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button
                        type="button"
                        className="group flex items-center gap-2 active:bg-blue-200"
                        //onClick={() => onModalOpen(EntityType.MINISTRY)}
                        variant="outline"
                        size="lg"
                        label="New Job"
                        icon={Plus}
                    />
                </div>
            </div>

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