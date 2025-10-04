import React, { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const EqubCard = ({
  equbName,
  balance,
  currency = "ETB",
  showAmountToggle = false,
  account,
  date
}) => {
  const [showAmount, setShowAmount] = useState(false);

  const handleToggle = () => setShowAmount(prev => !prev);

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-2xl shadow-lg p-6 w-full mx-auto">

      {/* Header: Name + toggle */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-medium">{equbName}</h2>
        {showAmountToggle && (
          <button
            onClick={handleToggle}
            className="cursor-pointer text-white/70 hover:text-white"
          >
            {showAmount ? <HiOutlineEyeOff size={20} /> : <HiOutlineEye size={20} />}
          </button>
        )}
      </div>

      {/* Balance */}
      <p className="mt-4 text-4xl font-bold tracking-wide">
        {showAmount ? `${balance} ${currency}` : `***** ${currency}`}
      </p>

      {/* Account - toggle together with balance */}
      {account && (
        <p className="text-sm font-medium mt-2">
          Account: {showAmount ? account : "70******80"}
        </p>
      )}

      {/* Date - always visible */}
      {date && <p className="text-xs opacity-70">{date}</p>}

      <div className="mt-8 flex justify-between text-xs opacity-80">
        <span>Savings Group</span>
        <span>Equb App</span>
      </div>
    </div>
  );
};

export default EqubCard;
