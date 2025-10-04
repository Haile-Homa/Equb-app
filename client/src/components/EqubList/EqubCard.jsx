import React from "react";
import { useNavigate } from "react-router-dom";

const EqubCard = ({ equb }) => {
  const navigate = useNavigate();

  const handleJoin = () => {
    navigate(`/terms/${equb.equbId}`);
  };

  return (
    <div className="border rounded-xl border-slate-400 overflow-hidden 
                      h-full flex flex-col">
      {/* Image */}
      {equb.imageUrl && (
        <img
          src={equb.imageUrl}
          alt={equb.name}
          className="w-full h-32 md:h-36 object-cover"
        />
      )}

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        {/* Title */}
        <h3 className="text-md md:text-lg font-bold text-gray-900 mb-2">
          {equb.name}{" "}
          <span className="mx-1 text-lg text-gray-400">/</span>{" "}
          <span className="font-normal text-gray-600">{equb.amount} ETB</span>
        </h3>

        {/* Details in Two Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-xs md:text-sm">
          <div className="flex flex-col gap-1">
            <p>
              <span className="font-medium">Type:</span> {equb.type}
            </p>
            <p>
              <span className="font-medium">Duration:</span> {equb.duration}
            </p>
            <p>
              <span className="font-medium">Total Members:</span> {equb.totalMembers}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p>
              <span className="font-medium">Category:</span> {equb.category}
            </p>
            <p>
              <span className="font-medium">Cycle Size:</span> {equb.cycleSize}
            </p>
          </div>
        </div>

        {/* Join Button */}
        <button
          onClick={handleJoin}
          className="mt-3 w-full py-2 text-white text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
        >
          Join Equb
        </button>
      </div>
    </div>
  );
};

export default EqubCard;
