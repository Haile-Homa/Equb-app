import React from 'react';

const EqubDetails = ({ equbInfo }) => {
    
    const details = [
        { label: "Type", value: equbInfo.type },
        { label: "Contribution", value: equbInfo.contribution },
        { label: "Duration", value: equbInfo.duration },
        { label: "Total Members", value: equbInfo.totalMembers },
        { label: "Start Date", value: equbInfo.startDate },
        { label: "Cycle Size", value: equbInfo.cycleSize }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {details.map((item, idx) => (
                <div
                    key={idx}
                    className="border border-slate-200 rounded-lg px-4 py-2 flex justify-between items-center"
                >
                    <span className="font-medium text-gray-800">{item.label}:</span>
                    <span className="text-gray-600 font-medium">{item.value}</span>
                </div>
            ))}
        </div>
    );
};

export default EqubDetails;
