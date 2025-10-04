import React from 'react'

const EqubInfoWinner = ({ equb }) => {
  // define the array first
  const infoItems = [
    { label: "Last Winner", value: equb.lastWinner },
    { label: "Next Draw", value: equb.nextDraw },
    { label: "Chances", value: equb.chances },
    { label: "Participants", value: equb.codes.length },
  ];

  return (
    <div className="text-center px-2 ">

      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
        Winner Info past
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-lg mx-auto">
        {infoItems.map((item, idx) => (
          <div
            key={idx}
            className=" rounded-lg p-3  border border-slate-500"
          >
            <p className="text-xs text-gray-500">{item.label}</p>
            <p className="text-sm md:text-base font-medium ">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EqubInfoWinner;
