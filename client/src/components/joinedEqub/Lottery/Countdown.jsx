import React, { useEffect, useState } from "react";
import { useLottery } from "../../../context/LotteryContext";

const Countdown = () => {
  const { equb, isDrawReady } = useLottery();
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (!equb?.targetDate) return;

    const updateTime = () => {
      const now = new Date().getTime();
      const target = new Date(equb.targetDate).getTime();
      const diff = target - now;
      setTimeLeft(diff > 0 ? diff : 0);
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [equb]);

  // Format milliseconds into Days, Hours, Minutes, Seconds
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="flex  justify-center ">

      <div className="w-full ">

        {!isDrawReady ? (
          <>
            <h2 className="text-2xl font-bold text-orange-700 mb-4">
              Next Draw In
            </h2>

            {/* Countdown Blocks */}
            <div className="flex justify-center gap-3 font-mono">
              <div className="bg-white shadow-md rounded-lg px-4 py-3 text-2xl font-bold text-gray-800">
                {days} <span className="block text-sm text-gray-500">Days</span>
              </div>

              <div className="bg-white shadow-md rounded-lg px-4 py-3 text-2xl font-bold text-gray-800">
                {hours} <span className="block text-sm text-gray-500">Hrs</span>
              </div>

              <div className="bg-white shadow-md rounded-lg px-4 py-3 text-2xl font-bold text-gray-800">
                {minutes}{" "}
                <span className="block text-sm text-gray-500">Min</span>
              </div>

              <div className="bg-white shadow-md rounded-lg px-4 py-3 text-2xl font-bold text-gray-800">
                {seconds.toString().padStart(2, "0")}{" "}
                <span className="block text-sm text-gray-500">Sec</span>
              </div>

            </div>


            <p className="mt-4 text-sm text-gray-600">
              Stay tuned, the excitement is building!
            </p>
          </>
        ) : (
          <div className="p-5 rounded-xl shadow-inner border-2 border-dashed border-blue-300 bg-blue-50">
            <p className="text-XL font-medium text-blue-700 animate-bounce">
              Draw Ready! Spin Now!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Countdown;
