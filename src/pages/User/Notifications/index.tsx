import NotificationDropDownMenu from '@/pages/User/Notifications/notificationDropdown';
import { Bell } from 'lucide-react';
import { useState } from 'react';
import { mockNotifications } from '@/pages/User/Notifications/notificationData';

export default function Notifications() {
    const [notifications, setNotifications] = useState(mockNotifications);

    const handleNotificationClick = (id: number) => {
        setNotifications((prev) =>
            prev.map((notification) =>
                notification.id === id
                    ? { ...notification, isRead: true }
                    : notification
            )
        );
    };
    const handleDeleteNotification = (id: number) => {
        setNotifications((prev) =>
            prev.filter((notification) => notification.id !== id)
        );
    };
    return (
        <div className="">
            <NotificationDropDownMenu
                dropMenuIcon={<Bell size={24} />}
                menuClassName="bg-white shadow-lg rounded-lg mr-16 mt-7 w-96"
                notifications={notifications}
                onNotificationClick={handleNotificationClick}
                onDeleteNotification={handleDeleteNotification}
            />
        </div>
    );
}
