import React, { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import NotificationHeader from "../components/notifications/NotificationHeader";
import NotificationItem from "../components/notifications/NotificationItem";

const Notifications = () => {
    const { notifications, clearNotifications } = useContext(NotificationContext);

    return (
        <div className="pt-6 md:pt-8 mt-2">
            <NotificationHeader
                hasNotifications={notifications.length > 0}
                onClear={clearNotifications}
            />

            {notifications.length === 0 ? (
                <p className="text-gray-500">You have no notifications at the moment.</p>
            ) : (
                <div className="space-y-4">
                    {notifications.map(({ id, title, message, time }) => (
                        <NotificationItem
                            key={id}
                            title={title}
                            message={message}
                            time={time}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Notifications;
















