import { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { PaginationState, VisibilityState } from '@tanstack/react-table';
import DataTableSSR from '@/components/table/datatable-ssr';
import Button from '@/components/ui/button';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis, Pencil, Trash2 } from 'lucide-react';

import { mockJobData } from './MockJobData';

export default function JobApplicationsTable() {
    const [status, setStatus] = useState(true);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
        id: false,
    });
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 5,
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
            case 'Offer Made':
                return 'bg-green-500 text-white';
            case 'Rejected':
                return 'bg-red-500 text-white';
            case 'Under Review':
                return 'bg-yellow-500 text-white';
            case 'Interview Scheduled':
                return 'bg-blue-500 text-white';
            default:
                return 'bg-gray-300 text-gray-800';
        }
    };

    const columns = useMemo(
        () => [
            {
                accessorKey: 'title',
                header: 'title',
                cell: (info: any) => (
                    <p className="font-semibold">{info.getValue()}</p>
                ),
            },
            {
                accessorKey: 'company',
                header: 'company',
                cell: (info) => (
                    <p className="text-gray-500 text-sm">{info.getValue()}</p>
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
                        <DropdownMenuContent
                            align="start"
                            className="-mt-2 ml-8 w-36"
                        >
                            <DropdownMenuItem
                                className="flex cursor-pointer items-center gap-2 hover:bg-blue-500"
                                onClick={() => {}}
                            >
                                <Pencil size={18} />
                                <span>View</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="flex cursor-pointer items-end gap-2 hover:bg-blue-500"
                                onClick={() => {}}
                            >
                                <Trash2 size={18} />
                                <span>Delete</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ),
            },
        ],
        []
    );

    return (
        <section className="md:p-5 bg-white min-h-screen mt-20 w-full lg:w-[80%]">
            <div className="mb-10">
                <div className="p-5 md:p-0">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Job Applications
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Keep track of the jobs you've applied to and manage your
                        applications.
                    </p>
                </div>
            </div>
            <div className="shadow-lg rounded-lg">
                <DataTableSSR
                    data={filteredData}
                    columns={columns}
                    totalRecords={totalRecords}
                    pagination={pagination}
                    showColumnVisibility={true}
                    columnVisibility={columnVisibility}
                    setColumnVisibility={setColumnVisibility}
                    setPagination={setPagination}
                    showPagination={true}
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
