import { Card, CardContent } from '@/components/ui/card';

const NotificationCard = ({ notification }: any) => {
    return (
        <Card className="bg-gray-50 shadow-sm border-l-4 border-blue-500 rounded-lg">
            <CardContent className="p-4">
                <p className="text-gray-700">{notification.message}</p>
                <span className="text-gray-500 text-sm">
                    {new Date(notification.date).toLocaleDateString()}
                </span>
            </CardContent>
        </Card>
    );
};

export default NotificationCard;
