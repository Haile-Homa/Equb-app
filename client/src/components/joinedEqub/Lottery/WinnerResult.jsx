import React, { useState, useEffect } from "react";
import { useLottery } from "../../../context/LotteryContext";

const WinnerResult = ({ delay = 3000 }) => { // delay in ms (default 3s)

  const { winner } = useLottery();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!winner) {
      setShow(false); // hide if no winner
      return;
    }

    // Set a timeout to show the winner after delay
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    // Cleanup on unmount or if winner changes
    return () => clearTimeout(timer);
  }, [winner, delay]);

  if (!winner || !show) return null;

  return (
    <div className="text-center mt-6 animate-fadeIn">
      <h2 className="text-xl font-bold text-blue-700">Winner</h2>
      <p className="text-lg mt-2">
        Code: <span className="font-mono">{winner.code}</span>
      </p>
      <p className="text-lg">
        User: <span className="font-medium text-gray-600">{winner.name}</span>
      </p>
    </div>
  );
};

export default WinnerResult;






// import React from "react";
// import { useLottery } from "../../../context/LotteryContext";

// const WinnerResult = () => {
//   const { winner } = useLottery();

//   if (!winner) return null;

//   return (
//     <div className="text-center mt-6">
//       <h2 className="text-xl font-bold text-green-700"> Winner </h2>
//       <p className="text-lg mt-2">
//         Code: <span className="font-mono">{winner.code}</span>
//       </p>
//       <p className="text-lg">
//         User: <span className="font-semibold">{winner.name}</span>
//       </p>
//     </div>
//   );
// };

// export default WinnerResult;
