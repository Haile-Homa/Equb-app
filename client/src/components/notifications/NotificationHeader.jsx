import React from 'react'

const NotificationHeader = ({ hasNotifications, onClear }) => {
    
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Notifications</h1>
            {hasNotifications && (
                <button
                    onClick={onClear}
                    className="px-4 py-2 bg-light-btns-primary text-white rounded hover:bg-light-btns-secondary transition"
                >
                    Mark all as read
                </button>
            )}
        </div>
    )
}

export default NotificationHeader