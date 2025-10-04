import React, { createContext, useState, useContext, useEffect } from "react";
import { lotteryDummyData } from "../db/data";

const LotteryContext = createContext();
export const useLottery = () => useContext(LotteryContext);

// Helper for stronger randomness
const getRandomInt = (max) => {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] % max;
};

export const LotteryProvider = ({ children }) => {
  const [equb, setEqub] = useState(null);
  const [winner, setWinner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDrawReady, setIsDrawReady] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const loadEqub = (equbId) => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        const found = lotteryDummyData.find((e) => e.equbId === equbId);
        setEqub(found || null);
        setWinner(null);
        setLoading(false);
        resolve(found || null);
      }, 500);
    });
  };

  const pickWinner = (equbId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const found = lotteryDummyData.find((e) => e.equbId === equbId);
        if (!found) return resolve(null);

        // Reset winner each spin
        setWinner(null);

        // 🎲 Pick truly random winner
        const randomIndex = getRandomInt(found.codes.length);
        const result = found.codes[randomIndex];

        setWinner(result);
        resolve({ result, index: randomIndex });
      }, 500);
    });
  };

  // Auto-enable draw based on targetDate
  useEffect(() => {
    if (!equb?.targetDate) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(equb.targetDate).getTime();
      setIsDrawReady(now >= target);
    }, 500);

    return () => clearInterval(interval);
  }, [equb]);

  // Notifications
  useEffect(() => {
    if (winner) {
      console.log(`🎉 Notification: Winner is ${winner.name} (${winner.code})`);
    }
  }, [winner]);

  return (
    <LotteryContext.Provider
      value={{
        equb,
        winner,
        loading,
        isDrawReady,
        isSpinning,
        setIsSpinning,
        loadEqub,
        pickWinner,
      }}
    >
      {children}
    </LotteryContext.Provider>
  );
};



// import React, { createContext, useState, useContext, useEffect } from "react";
// import { lotteryDummyData } from "../db/data";

// const LotteryContext = createContext();
// export const useLottery = () => useContext(LotteryContext);

// export const LotteryProvider = ({ children }) => {
//   const [equb, setEqub] = useState(null);
//   const [winner, setWinner] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [isDrawReady, setIsDrawReady] = useState(false);

//   const loadEqub = (equbId) => {
//     setLoading(true);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const found = lotteryDummyData.find((e) => e.equbId === equbId);
//         setEqub(found || null);
//         setWinner(null);
//         setLoading(false);
//         resolve(found || null);
//       }, 500);
//     });
//   };

//   const pickWinner = (equbId) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const found = lotteryDummyData.find((e) => e.equbId === equbId);
//         if (!found) return resolve(null);

//         const randomIndex = Math.floor(Math.random() * found.codes.length);
//         const result = found.codes[randomIndex];

//         setWinner(result); // store winner before spin
//         resolve(result);
//       }, 500);
//     });
//   };

//   // Auto-enable draw based on targetDate
//   useEffect(() => {
//     if (!equb?.targetDate) return;

//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const target = new Date(equb.targetDate).getTime();
//       setIsDrawReady(now >= target);
//     }, 500);

//     return () => clearInterval(interval);
//   }, [equb]);

//   // Notifications
//   useEffect(() => {
//     if (winner) {
//       console.log(`🎉 Notification: Winner is ${winner.name} (${winner.code})`);
//     }
//   }, [winner]);

//   return (
//     <LotteryContext.Provider
//       value={{ equb, winner, loading, isDrawReady, loadEqub, pickWinner }}
//     >
//       {children}
//     </LotteryContext.Provider>
//   );
// };







// import React, { createContext, useState, useContext } from "react";
// import { lotteryDummyData } from "../db/data";

// // Create Context
// const LotteryContext = createContext();

// //  Custom hook for easy access
// export const useLottery = () => useContext(LotteryContext);

// //  Provider with fake backend built-in
// export const LotteryProvider = ({ children }) => {
//   const [equb, setEqub] = useState(null);
//   const [winner, setWinner] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // 🛠 Fake backend: fetch equb by ID
//   const loadEqub = (equbId) => {
//     setLoading(true);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const found = lotteryDummyData.find((e) => e.equbId === equbId);
//         setEqub(found || null);
//         setWinner(null);
//         setLoading(false);
//         resolve(found || null);
//       }, 500); // fake delay
//     });
//   };



//   // 🛠 Fake backend: pick winner
//   const pickWinner = (equbId) => {
//     setLoading(true);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const found = lotteryDummyData.find((e) => e.equbId === equbId);
//         if (!found) {
//           setWinner(null);
//           setLoading(false);
//           return resolve(null);
//         }
//         const randomIndex = Math.floor(Math.random() * found.codes.length);
//         const result = found.codes[randomIndex];
//         setWinner(result);
//         setLoading(false);
//         resolve(result);
//       }, 2000); // fake backend delay
//     });
//   };


//   const value = {
//     equb,
//     winner,
//     loading,
//     loadEqub,
//     pickWinner,
//   };

//   return (
//     <LotteryContext.Provider value={value}>
//       {children}
//     </LotteryContext.Provider>
//   );
// };
