import React from 'react'
import { useNavigate } from 'react-router-dom'

const EqubCard = ({ equb }) => {

    const navigate = useNavigate();

    const handleJoin = () => {
        // navigate to Terms page with the equbId
        navigate(`/terms/${equb.equbId}`);
    };

    return (
        <div className="px-4 py-2">
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3">
                {equb.name}
            </h3>
            <div className="grid grid-cols-1 gap-2 text-gray-700 mb-4 text-start">
                <p><span className="font-medium">Type:</span> {equb.type}</p>
                <p><span className="font-medium">Category:</span> {equb.category}</p>
                <p><span className="font-medium">Duration:</span> {equb.duration}</p>
                <p><span className="font-medium">Processing Fee:</span> {equb.processingFee}</p>
                <p><span className="font-medium">Total Members:</span> {equb.totalMembers}</p>
            </div>
            <button onClick={handleJoin}
                className="w-full py-3
                          text-white font-semibold rounded-lg bg-light-brand-secondary">
                Join Equb
            </button>
            <hr className="w-screen border-t-2 border-gray-300 my-6 -mx-4" />
        </div>
    )
}

export default EqubCard
