import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Bell, CheckCircle, AlertCircle, Trash2 } from 'lucide-react'; // Lucide icons
import { useState } from 'react';

interface Notification {
    id: number;
    type: 'application' | 'interview' | 'platform';
    message: string;
    timestamp: string;
    isRead: boolean;
}

interface DropDownProp {
    dropMenuIcon: JSX.Element;
    menuClassName: string;
    notifications: Notification[];
    onNotificationClick: (id: number) => void;
    onDeleteNotification: (id: number) => void; // New prop to handle deletion
}

export default function NotificationDropDownMenu({
    dropMenuIcon,
    menuClassName,
    notifications,
    onNotificationClick,
    onDeleteNotification,
}: DropDownProp) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Function to get the icon based on notification type
    const getNotificationIcon = (type: string) => {
        switch (type) {
            case 'application':
                return <CheckCircle className="text-green-500" size={20} />;
            case 'interview':
                return <AlertCircle className="text-yellow-500" size={20} />;
            case 'platform':
                return <Bell className="text-blue-500" size={20} />;
            default:
                return <Bell className="text-gray-500" size={20} />;
        }
    };

    // Handle marking notification as read
    const handleNotificationClick = (id: number) => {
        onNotificationClick(id);
    };

    // Handle deleting notification
    const handleDeleteNotification = (id: number, e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent marking as read when clicking delete
        onDeleteNotification(id);
    };

    // Count unread notifications
    const unreadCount = notifications.filter((n) => !n.isRead).length;

    return (
        <DropdownMenu open={isDropdownOpen} onOpenChange={setDropdownOpen}>
            <DropdownMenuTrigger>
                <div className="relative">
                    {dropMenuIcon}
                    {unreadCount > 0 && (
                        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
                    )}
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className={`w-80 max-h-96 overflow-y-auto ${menuClassName}`}
            >
                {/* Title with Separator */}
                <div className="p-3 font-bold text-lg">Notifications</div>
                <DropdownMenuSeparator />

                {/* Notification List */}
                {notifications.length > 0 ? (
                    <>
                        {notifications.map((notification) => (
                            <DropdownMenuItem
                                key={notification.id}
                                onClick={() =>
                                    handleNotificationClick(notification.id)
                                }
                                className={`p-2 flex items-center gap-2 cursor-pointer ${notification.isRead ? 'bg-gray-100' : 'bg-white'}`}
                            >
                                <div>
                                    {getNotificationIcon(notification.type)}
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold">
                                        {notification.message}
                                    </p>
                                    <span className="text-xs text-gray-500">
                                        {notification.timestamp}
                                    </span>
                                </div>
                                {!notification.isRead && (
                                    <span className="h-2 w-2 bg-red-500 rounded-full"></span>
                                )}
                                <Trash2
                                    className="text-gray-400 hover:text-red-500"
                                    size={20}
                                    onClick={(e) =>
                                        handleDeleteNotification(
                                            notification.id,
                                            e
                                        )
                                    }
                                />
                            </DropdownMenuItem>
                        ))}
                    </>
                ) : (
                    <div className="p-4 text-center text-gray-500">
                        No new notifications
                    </div>
                )}

                <DropdownMenuSeparator />

                {/* "View All Notifications" link */}
                {/*<div className="p-2 text-center text-blue-500 cursor-pointer">
                    View All Notifications
                </div>*/}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
