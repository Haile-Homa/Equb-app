import React from "react";
import { AiTwotoneNotification } from "react-icons/ai";


const NotificationItem = ({ title, message, time }) => {

    return (
        <div className="flex flex-row items-center p-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition">
            <AiTwotoneNotification className="text-blue-500 w-8 h-8" />
            <div className="ml-4">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-gray-800">{title}</h2>
                    <span className="text-sm text-gray-500">{time}</span>
                </div>
                <p className="mt-2 text-gray-600">{message}</p>
            </div>
        </div>
    )
}

export default NotificationItem