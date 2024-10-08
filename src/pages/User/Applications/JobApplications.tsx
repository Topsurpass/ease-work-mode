import { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { PaginationState, VisibilityState } from '@tanstack/react-table';
import DataTableSSR from '@/components/table/datatable-ssr';
import { Eye, XCircle } from 'lucide-react';
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
                    <p className="text-gray-500">{info.getValue()}</p>
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
                accessorKey: 'actions',
                header: 'Actions',
                cell: (info) => (
                    <div className="flex space-x-4">
                        <Eye
                            className="text-blue-600 hover:text-blue-800 cursor-pointer transition duration-300"
                            onClick={() => alert(info.row.original.id)}
                        />
                        <XCircle className="text-red-600 hover:text-red-800 cursor-pointer transition duration-300" />
                    </div>
                ),
            },
        ],
        []
    );

    return (
        <section className="p-5 bg-white min-h-screen mt-20 md:w-[90%] w-full">
            <div className="mb-10">
                <div className="">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Job Applications
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Keep track of the jobs you've applied to and manage your
                        applications.
                    </p>
                </div>
            </div>
            <div className="shadow-lg rounded-lg  p-6">
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
