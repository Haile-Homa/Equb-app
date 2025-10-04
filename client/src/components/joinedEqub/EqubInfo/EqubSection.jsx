import React from 'react'

const EqubSection = ({ title, content, isList = false }) => {
    return (
        <div className="border border-slate-200 rounded-lg px-4 py-2">
            <span className="font-medium text-gray-700">{title}:</span>
            {isList ? (
                <ul className="list-disc list-inside text-gray-900 mt-1 space-y-1">
                    {content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-900 mt-1">{content}</p>
            )}
        </div>
    )
}

export default EqubSection