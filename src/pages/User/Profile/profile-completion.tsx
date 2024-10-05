export default function ProfileCompletion() {
    const completionPercentage = 75; // Example percentage

    return (
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-800">
                Profile Completion
            </h3>
            <div className="flex items-center mt-2">
                <div className="relative w-full">
                    <div
                        className="h-2 bg-blue-300 rounded"
                        style={{ width: `${completionPercentage}%` }}
                    />
                </div>
                <span className="ml-2 font-semibold text-blue-800">
                    {completionPercentage}%
                </span>
            </div>
            <p className="text-gray-600 mt-2">
                Complete your profile to increase job matches!
            </p>
        </div>
    );
}
