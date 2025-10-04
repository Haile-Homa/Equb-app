import React from 'react'

const SettingLangSelect = ({ icon: Icon, title, color, options }) => {
    return (
        <div className="flex items-center justify-between py-3 px-4 transition-colors duration-150 rounded-lg hover:bg-gray-50">
            <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${color}-100`}>
                    <Icon className={`text-xl ${color}-600`} />
                </div>
                <span className="font-medium text-gray-800">{title}</span>
            </div>
            <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm text-gray-700 bg-white focus:ring-indigo-500 focus:border-indigo-500 appearance-none transition-colors duration-150 cursor-pointer">
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default SettingLangSelect





