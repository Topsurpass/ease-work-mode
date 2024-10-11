import { Button } from '@/components/ui/button';
import Modal from '@/components/modal';
import useGlobalProvider from '@/hooks/use-global-provider';
import { EntityType } from '@/types/enum';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
} from '@/components/ui/card';
import { useEffect } from 'react';

export default function JobDetailsModal() {
    const { isModalOpen, onModalClose, entity, data } = useGlobalProvider();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Modal
            title={`Job Details`}
            open={isModalOpen && EntityType.JOB_DETAILS === entity}
            handleClose={onModalClose}
            size="full"
            description="View more information about jobs and apply."
        >
            <section className="flex flex-col items-center justify-center px-5 mt-5">
                <Card className="max-w-3xl w-full shadow-lg mb-10 rounded-lg border border-gray-200">
                    <CardHeader className="pb-6 border-b border-gray-200 bg-gray-100 px-6 py-4">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-xl font-bold text-gray-800">
                                {data.title}
                            </CardTitle>
                        </div>
                        <CardDescription className="text-gray-600 mt-2">
                            <span className="font-semibold">
                                {data.company}
                            </span>{' '}
                            - {data.type} / {data.location}
                        </CardDescription>
                        <CardDescription className="text-sm text-gray-500 mt-1">
                            {`Posted on: ${new Date(data.posted).toLocaleDateString()}`}
                        </CardDescription>
                        <p className="text-sm text-gray-500 mt-2">
                            Pay range:{' '}
                            <span className="font-semibold">
                                {data.pay || 'N/A'}
                            </span>
                        </p>
                    </CardHeader>

                    <CardContent className="space-y-8 bg-white px-6 py-8">
                        <div>
                            <h3 className="text-xl font-semibold text-blue-700">
                                About the Company
                            </h3>
                            <p className="text-gray-700 mt-2">
                                {data.aboutCompany ||
                                    'No information provided.'}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-blue-700">
                                Full Role Description
                            </h3>
                            <p className="text-gray-700 mt-2">
                                {data.fullRoleDescription ||
                                    'No details provided.'}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-blue-700">
                                Key Responsibilities
                            </h3>
                            <p>{data.keyResponsibility}</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-blue-700">
                                Qualifications & Experience
                            </h3>
                            <p className="text-gray-700 mt-2">
                                {data.qualificationAndExperience ||
                                    'Not specified.'}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-blue-700">
                                Method of Application
                            </h3>
                            <p className="text-gray-700 mt-2">
                                {data.methodOfApplication || 'Not specified.'}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-blue-700">
                                Application Deadline
                            </h3>
                            <p className="text-gray-700 mt-2">
                                {data.deadline || 'No deadline specified.'}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </section>

            <div className="flex items-center justify-end gap-10 p-4">
                <Button
                    label="Apply for this job"
                    size="lg"
                    className="bg-blue-600 text-white hover:bg-blue-700 py-2 px-4 rounded-lg"
                    onClick={() => {
                        navigate(`/dashboard/job/${data.id}/apply`);
                        onModalClose();
                    }}
                />
            </div>
        </Modal>
    );
}
