import React from 'react';
import { FiChevronRight } from 'react-icons/fi';


const SettingGoTo = ({ icon: Icon, title, onClick, color, isDestructive = false, detail = null }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between py-3 px-4 transition-colors duration-150 rounded-lg ${isDestructive ? 'hover:bg-red-50' : 'hover:bg-gray-50'}`}
        >
            <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${isDestructive ? 'bg-red-100' : `${color}-100`}`}>
                    <Icon className={`text-xl ${isDestructive ? 'text-red-600' : `${color}-600`}`} />
                </div>
                <span className={`font-medium ${isDestructive ? 'text-red-600' : 'text-gray-800'}`}>{title}</span>
            </div>
            {detail && <span className="text-sm text-gray-500 mr-2">{detail}</span>}
            {!detail && <FiChevronRight className={`text-xl ${isDestructive ? 'text-red-400' : 'text-gray-400'}`} />}
        </button>
    )
}

export default SettingGoTo


