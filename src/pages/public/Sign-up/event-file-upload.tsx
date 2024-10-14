import { useMemo } from 'react';
import { ScrollText, UploadCloud, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import useEventUpload from './use-event-upload';
import { IEventFileUpload } from '@/types';

export default function EventFileUpload({
    file,
    setFile,
    resetFile,
}: IEventFileUpload) {
    const { isDragActive, getRootProps, getInputProps } = useEventUpload({
        setFile,
    });

    const ContentBeforeFileSelected = useMemo(() => {
        return !isDragActive && !file?.hasFile ? (
            <div className="flex flex-col items-center justify-center gap-1 text-gray-600">
                <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <UploadCloud size={25} color="gray" />
                </div>
                <button
                    type="button"
                    className="text-primary-500 hover:text-primary-700 font-medium"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                >
                    Click to upload &nbsp; or drag and drop
                </button>
                <p className="text-sm text-gray-500">
                    .pdf , .doc and .docx file only (max. 5MB)
                </p>
            </div>
        ) : null;
    }, [isDragActive, file?.hasFile]);

    const ContentAfterFileSelected = useMemo(() => {
        return file?.hasFile ? (
            <div className="relative flex flex-col items-center gap-y-2 rounded-md py-3">
                <h4>
                    <ScrollText size={20} color="green" />
                </h4>
                <h4 className="overflow-hidden text-ellipsis text-center">
                    {file?.result?.name}
                </h4>
                <button
                    type="button"
                    className="absolute right-[-10px] top-[-10px] text-red-500"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        resetFile();
                    }}
                    aria-label="button"
                >
                    <XCircle />
                </button>
                {file?.result?.type?.startsWith('image/') && (
                    <Avatar className="h-20 w-32 rounded-none">
                        <AvatarImage src={file?.preview} alt="@shadcn" />
                    </Avatar>
                )}
            </div>
        ) : null;
    }, [file, resetFile]);

    const [fileError] = file.error;

    return (
        <div
            {...getRootProps({
                className: cn(
                    'p-5 bg-gray-100/50 rounded-xl cursor-pointer appearance-none',
                    file?.hasFile && 'p-0 border-none',
                    isDragActive && 'p-5'
                ),
            })}
        >
            <label
                className={cn(
                    'jus flex flex-col items-center justify-center transition-all',
                    file?.hasFile && 'hidden'
                )}
                htmlFor="file"
            >
                {/* Text display when file is drag to upload area */}
                {isDragActive && <p>Drop the files here ...</p>}
                {/* UI display before file selected */}
                {ContentBeforeFileSelected}
                <input
                    id="csvUpload"
                    type="file"
                    className="sr-only"
                    {...getInputProps()}
                />
            </label>
            {/* UI display after file is selected */}
            {ContentAfterFileSelected}
            {/* UI error display for file size */}
            {fileError?.errors.length > 0 && (
                <h4 className="pt-2 text-center text-base text-red-600">
                    {fileError.errors[0]?.message}
                </h4>
            )}
        </div>
    );
}
