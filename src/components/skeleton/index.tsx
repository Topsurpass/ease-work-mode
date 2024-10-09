import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function SkeletonJob({ size }: { size: number }) {
    const skeletonArray = Array.from({ length: size });

    return (
        <section className="grid gap-8 md:grid-cols-2 2xl:grid-cols-3 lg:w-[80%] md:p-0 p-5 w-[100%]">
            {skeletonArray.map((_, idx) => (
                <Card
                    className="w-[100%] mx-auto shadow-lg flex flex-col animate-pulse"
                    key={idx}
                >
                    <CardHeader className="pb-4 border-b">
                        <div className="flex flex-row items-center justify-between">
                            <CardTitle className="h-6 w-3/4 bg-gray-300 rounded mb-2"></CardTitle>
                            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                        </div>
                        <div>
                            <CardDescription className="h-4 w-1/2 bg-gray-300 rounded mb-2"></CardDescription>
                            <CardDescription className="h-4 w-3/4 bg-gray-300 rounded">
                                <p className="h-3 w-full bg-gray-300 rounded"></p>
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-3 flex-grow">
                        <div className="h-20 bg-gray-300 rounded"></div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center border-t pt-4">
                        <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
                        <div className="h-8 w-24 bg-gray-300 rounded ml-auto"></div>
                    </CardFooter>
                </Card>
            ))}
        </section>
    );
}

export function SkeletonListJob({ size }: { size: number }) {
    const skeletonArray = Array.from({ length: size });
    return (
        <section className="flex flex-col gap-5 w-[100%] md:w-[100%]">
            {skeletonArray.map((_, idx) => (
                <Card
                    className="w-[100%] mx-auto shadow-lg flex flex-col animate-pulse  lg:w-[50%] 2xl:w-[500px] "
                    key={idx}
                >
                    <CardHeader className="pb-4 border-b">
                        <div className="flex flex-row items-center justify-between">
                            <CardTitle className="h-6 w-3/4 bg-gray-300 rounded mb-2"></CardTitle>
                            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                        </div>
                        <div>
                            <CardDescription className="h-4 w-1/2 bg-gray-300 rounded mb-2"></CardDescription>
                            <CardDescription className="h-4 w-3/4 bg-gray-300 rounded">
                                <p className="h-3 w-full bg-gray-300 rounded"></p>
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-3 flex-grow">
                        <div className="h-20 bg-gray-300 rounded"></div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center border-t pt-4">
                        <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
                        <div className="h-8 w-24 bg-gray-300 rounded ml-auto"></div>
                    </CardFooter>
                </Card>
            ))}
        </section>
    );
}

export function SkeletonJobDecription({ size }: { size: number }) {
    const skeletonArray = Array.from({ length: size });

    return (
        <section className="md:w-[70%] lg:w-[50%] 2xl:w-[500px] hidden md:block sticky top-28 h-[80vh] overflow-y-auto ">
            {skeletonArray.map((_, idx) => (
                <Card
                    className="w-[100%] mx-auto shadow-lg flex flex-col animate-pulse"
                    key={idx}
                >
                    <CardHeader className="pb-4 border-b">
                        <div className="flex flex-row items-center justify-between">
                            <CardTitle className="h-6 w-3/4 bg-gray-300 rounded mb-2"></CardTitle>
                            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                        </div>
                        <div>
                            <CardDescription className="h-4 w-1/2 bg-gray-300 rounded mb-2"></CardDescription>
                            <CardDescription className="h-4 w-3/4 bg-gray-300 rounded">
                                <p className="h-3 w-full bg-gray-300 rounded"></p>
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-3 flex-grow">
                        <div className="h-40 bg-gray-300 rounded"></div>
                        <div className="h-40 bg-gray-300 rounded"></div>
                        <div className="h-20 bg-gray-300 rounded"></div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center border-t pt-4">
                        <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
                        <div className="h-8 w-24 bg-gray-300 rounded ml-auto"></div>
                    </CardFooter>
                </Card>
            ))}
        </section>
    );
}

export function SkeletonJobDetails({ size }: { size: number }) {
    const skeletonArray = Array.from({ length: size });
    return (
        <section className="flex flex-col items-center justify-center px-5 ">
            {skeletonArray.map((_, idx) => (
                <Card
                    className="max-w-4xl w-full shadow-lg flex flex-col animate-pulse my-24"
                    key={idx}
                >
                    <CardHeader className="pb-4 border-b">
                        <div className="flex flex-row items-center justify-between">
                            <CardTitle className="h-6 w-3/4 bg-gray-300 rounded mb-2"></CardTitle>
                            <div className="md:h-10 md:w-28 h-8 w-8 bg-gray-300 rounded-md"></div>
                        </div>
                        <div>
                            <CardDescription className="h-4 w-1/2 bg-gray-300 rounded mb-2"></CardDescription>
                            <CardDescription className="h-4 w-3/4 bg-gray-300 rounded">
                                <p className="h-3 w-full bg-gray-300 rounded"></p>
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-3 flex-grow">
                        <div className="h-40 bg-gray-300 rounded"></div>
                        <div className="h-40 bg-gray-300 rounded"></div>
                        <div className="h-20 bg-gray-300 rounded"></div>
                        <div className="h-40 bg-gray-300 rounded"></div>
                        <div className="h-20 bg-gray-300 rounded"></div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center border-t pt-4">
                        <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
                        <div className="h-8 w-24 bg-gray-300 rounded ml-auto"></div>
                    </CardFooter>
                </Card>
            ))}
        </section>
    );
}

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn('animate-pulse rounded-md bg-muted', className)}
            {...props}
        />
    );
}

export { Skeleton };
