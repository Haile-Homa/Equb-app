import { useState } from "react";
import { equbDummyData, paymentsDummyData, userDummyData } from "../db/data";

export const useEqubPaymentData = (equbId, userId = "u1") => {
  // 1️⃣ Find user
  const user = userDummyData.find(u => u._id === userId);

  // 2️⃣ Check if this user joined this equb
  const joinedEqub = user?.equbsJoined.find(j => j.equbId === equbId);

  // 3️⃣ Find the equb itself
  const equb = equbDummyData.find(eq => eq.equbId === equbId);

  // 4️⃣ Get this user’s payments for that equb
  const [userPayments, setUserPayments] = useState(
    paymentsDummyData
      .filter(p => p.userId === userId && p.equbId === equbId)
      .map(p => ({
        ...p,
        method: p.method || null, // keep method null until chosen
      }))
  );

console.log(" userPayments:", userPayments);
  // 5️⃣ Handle payment update
  const handlePayment = (paymentDate, method) => {
    setUserPayments(prev =>
      prev.map(p =>
        p.date === paymentDate && p.status === "Pending"
          ? { ...p, status: "Paid", method }
          : p
      )
    );
  };

  return { user, joinedEqub, equb, userPayments, handlePayment };
};
