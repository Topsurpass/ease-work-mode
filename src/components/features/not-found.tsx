import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type ShowDetailsProps = {
    returnPath: string;
};

export default function JobNotFound({ returnPath }: ShowDetailsProps) {
    const navigate = useNavigate();

    return (
        <section className="flex flex-col items-center justify-center px-5 min-h-screen">
            <Card className="max-w-4xl w-full shadow-lg mt-24 mb-10">
                <CardHeader className="pb-4 border-b">
                    <CardTitle className="text-2xl font-bold text-red-600">
                        Job Not Found
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                    <p className="text-gray-700">
                        The job you are looking for might have been removed or
                        the ID is invalid.
                    </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                    <ArrowLeft
                        className="cursor-pointer"
                        onClick={() => navigate(returnPath)}
                    />
                </CardFooter>
            </Card>
        </section>
    );
}
