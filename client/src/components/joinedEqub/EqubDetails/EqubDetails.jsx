import React from 'react'

const EqubDetails = ({ equb }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-2 bg-gray-50 p-3 rounded-lg shadow-sm">
                <p><span className="font-semibold text-gray-900">Amount:</span> {equb.amount} Birr</p>
                <p><span className="font-semibold text-gray-900">Type:</span> {equb.type}</p>
                <p><span className="font-semibold text-gray-900">Duration:</span> {equb.duration}</p>
                <p><span className="font-semibold text-gray-900">Total Members:</span> {equb.totalMembers}</p>
            </div>
            <div className="flex flex-col gap-2 bg-gray-50 p-3 rounded-lg shadow-sm">
                <p><span className="font-semibold text-gray-900">Category:</span> {equb.category}</p>
                <p><span className="font-semibold text-gray-900">Cycle Size:</span> {equb.cycleSize}</p>
            </div>
        </div>
    )
}

export default EqubDetails