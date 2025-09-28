import React, { useContext } from "react";
import { NotificationContext } from "../../context/NotificationContext";
import { AiTwotoneNotification } from "react-icons/ai";

const Notifications = () => {
    const { notifications, clearNotifications } = useContext(NotificationContext);

    return (
        <div className="pt-6 md:pt-8 mt-2 ">

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">Notifications</h1>

                {notifications.length > 0 && (
                    <button
                        onClick={clearNotifications}
                        className="px-4 py-2 bg-light-btns-primary text-white rounded hover:bg-light-btns-secondary transition"
                    >
                        Mark all as read
                    </button>
                )}
            </div>

            {notifications.length === 0 ? (
                <p className="text-gray-500">You have no notifications at the moment.</p>
            ) : (
                <div className="space-y-4">
                    {notifications.map((notif) => (
                        <div
                            key={notif.id}
                            className="flex flex-row items-center p-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
                        >
                            <AiTwotoneNotification className="text-red-500 w-8 h-8 " />
                            <div className="ml-4 ">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold text-gray-800">{notif.title}</h2>
                                    <span className="text-sm text-gray-500">{notif.time}</span>
                                </div>
                                <p className="mt-2 text-gray-600">{notif.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Notifications;
