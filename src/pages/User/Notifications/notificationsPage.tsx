import { useState } from 'react';
import {
    CheckCircle,
    Eye,
    Trash2,
    Bell,
    CalendarCheck,
    Briefcase,
} from 'lucide-react';
import { mockNotifications } from './notificationData';

interface Notification {
    id: number;
    type: 'application' | 'interview' | 'platform';
    message: string;
    timestamp: string;
    isRead: boolean;
}

const NotificationIcon = ({ type }: { type: string }) => {
    switch (type) {
        case 'application':
            return <Briefcase className="text-blue-500" />;
        case 'interview':
            return <CalendarCheck className="text-green-500" />;
        case 'platform':
            return <Bell className="text-yellow-500" />;
        default:
            return <Bell />;
    }
};

export default function NotificationPage() {
    const [notifications, setNotifications] =
        useState<Notification[]>(mockNotifications);

    const markAsRead = (id: number) => {
        const updatedNotifications = notifications.map((notification) =>
            notification.id === id
                ? { ...notification, isRead: true }
                : notification
        );
        setNotifications(updatedNotifications);
    };

    const deleteNotification = (id: number) => {
        const updatedNotifications = notifications.filter(
            (notification) => notification.id !== id
        );
        setNotifications(updatedNotifications);
    };

    return (
        <section className="p-8 bg-gray-50 min-h-screen w-full mt-20">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Notifications
                    </h1>
                    <p className="text-gray-600">
                        Stay updated with all your job applications and
                        interview progress.
                    </p>
                </div>

                {/* Notification List */}
                <div className="space-y-4">
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`bg-white shadow-md rounded-lg p-4 flex justify-between items-center ${
                                notification.isRead ? 'opacity-75' : ''
                            }`}
                        >
                            <div className="flex items-center space-x-4">
                                {/* Notification Icon */}
                                <NotificationIcon type={notification.type} />

                                {/* Notification Details */}
                                <div>
                                    <p
                                        className={`font-medium ${notification.isRead ? 'text-gray-500' : 'text-gray-800'}`}
                                    >
                                        {notification.message}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {notification.timestamp}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Eye
                                    className="text-blue-500 hover:text-blue-700 cursor-pointer transition"
                                    onClick={() =>
                                        alert(
                                            `View notification #${notification.id}`
                                        )
                                    }
                                />
                                {!notification.isRead && (
                                    <CheckCircle
                                        className="text-green-500 hover:text-green-700 cursor-pointer transition"
                                        onClick={() =>
                                            markAsRead(notification.id)
                                        }
                                    />
                                )}
                                <Trash2
                                    className="text-red-500 hover:text-red-700 cursor-pointer transition"
                                    onClick={() =>
                                        deleteNotification(notification.id)
                                    }
                                />
                            </div>
                        </div>
                    ))}

                    {notifications.length === 0 && (
                        <div className="text-center text-gray-600 mt-8">
                            <p>No new notifications.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
