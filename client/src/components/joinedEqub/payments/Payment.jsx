import { useParams } from "react-router-dom";
import { useEqubPaymentData } from "../../../hooks/useEqubPaymentData";
import PaymentHeader from "./PaymentHeader";
import PaymentCard from "./PaymentCard";
import PaymentMethod from "./PaymentMethod";
import { assets } from "../../../assets/assets";



const paymentMethods = [
  { src: assets.TeleBirr, title: "Telebirr" },
  { src: assets.Cooperative, title: "Cooperative oromia" },
  { src: assets.BankAbyssinia , title: "AbSinana" },
  { src: assets.Commercial,  title: "Commercial Bank" },
  { src: assets.Awash, title: "awash" },
  
];



const Payment = () => {
  const { equbId } = useParams();
  const { user, joinedEqub, equb, userPayments, handlePayment } = useEqubPaymentData(equbId);
    //  console.log(" equbId:", equbId);
    //  console.log(" user:", user);
    //  console.log(" joinedEqub:", joinedEqub);
    //  console.log(" equb:", equb);
    //console.log(" userPayments:", userPayments);

  if (!user) return <p className="p-4 text-red-500">User not found</p>;
  if (!joinedEqub) return <p className="p-4 text-red-500">You have not joined this Equb</p>;
  if (!equb) return <p className="p-4 text-red-500">Equb not found</p>;

  return (
    <div className="px-2  space-y-6 mt-8">


      <PaymentHeader equbName={equb.name} />

      {userPayments.length === 0 ? (
        <p className="text-gray-500">No payment records for this Equb.</p>
      ) : (
        userPayments.map(payment => (
          <div key={payment.amount} className="space-y-2">

            <PaymentCard payment={payment} />

          </div>
   
        ))
      )}

      <div>
        <h2 className="text-xl  font-medium text-gray-700   text-center
                      border-b w-[200px] md:w-[300px] pb-1 border-slate-400 mx-auto mb-4 mt-10">Make a Payment</h2>

        <div className="p-2 w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">

          {paymentMethods.map(method => (
            <PaymentMethod     
              key={method.title}  
              src={method.src}
              alt={method.title}
              title={method.title} 
              onClick={() => {
                const nextPending = userPayments.find(p => p.status === "Pending"); 
                if (nextPending) {
                  handlePayment(nextPending.date, method.title);
                }
              }
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;


















// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { equbDummyData, paymentsDummyData as initialPaymentsDummyData, userDummyData } from "../../../db/data";
// import { FaCheckCircle, FaUniversity } from "react-icons/fa";
// import { MdPending } from "react-icons/md";

// // Payment method button
// const PaymentMethodButton = ({ src, alt, title, disabled, onClick }) => {
//   const [errored, setErrored] = useState(false);

//   return (
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       className={`flex items-center justify-center border rounded-lg p-2 hover:bg-gray-100 ${disabled ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//     >
//       {(!src || errored) ? (
//         <FaUniversity title={title || alt} className="w-6 h-6" />
//       ) : (
//         <img
//           src={src}
//           alt={alt}
//           title={title}
//           className="w-6 h-6 object-contain"
//           onError={() => setErrored(true)}
//         />
//       )}
//     </button>
//   );
// };

// const Payment = () => {


//   const { equbId } = useParams();

//   // ===== Fake user for testing =====
//   const fakeUserId = "u1";

//   const user = userDummyData.find(u => u._id === fakeUserId);
//   if (!user) return <p className="p-4 text-red-500">User not found</p>;

//   const joinedEqub = user.equbsJoined.find(j => j.equbId === equbId);
//   if (!joinedEqub) return <p className="p-4 text-red-500">You have not joined this Equb</p>;

  
//   const equb = equbDummyData.find(eq => eq.equbId === equbId);
//   if (!equb) return <p className="p-4 text-red-500">Equb not found</p>;

//   const memberId = parseInt(fakeUserId.replace("u", ""));
//   const [userPayments, setUserPayments] = useState(
//     initialPaymentsDummyData
//       .filter(p => p.memberId === memberId && p.equbId === equbId)
//       .map(p => ({ ...p, method: p.status === "Paid" ? "Telebirr" : null }))
//   );

//   const paymentMethods = [
//     { src: "/assets/telebirr.png", title: "Telebirr" },
//     { src: "/assets/cbe.png", title: "CBE Bank" },
//     { src: "/assets/abcinana.png", title: "AbcInana" }
//   ];

//   const handlePayment = (paymentDate, method) => {
//     setUserPayments(prev =>
//       prev.map(p =>
//         p.date === paymentDate && p.status === "Pending"
//           ? { ...p, status: "Paid", method }
//           : p
//       )
//     );
//   };

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold">Payment</h1>
//       <p className="text-gray-600">
//         Payments for <strong>{equb.name}</strong>
//       </p>

//       {userPayments.length === 0 && (
//         <p className="text-gray-500">No payment records for this Equb.</p>
//       )}

//       {userPayments.map(payment => (
//         <div key={payment.date} className="space-y-2">
//           {/* Payment info card */}
//           <div className="border rounded p-4 flex justify-between items-center">
//             <div>
//               <span className="block">Amount: ${payment.amount}</span>
//               <span className="block">Date: {payment.date}</span>
//               <span className={`font-semibold ${payment.status === "Paid" ? "text-green-500" : "text-yellow-500"}`}>
//                 Status: {payment.status === "Paid" ? "Paid ✅" : "Pending ⏳"}
//               </span>
//             </div>
//             {payment.status === "Paid" && payment.method && (
//               <span className="text-gray-500">Paid via: {payment.method}</span>
//             )}
//           </div>

//           {/* Payment methods card */}
//           <div className="border rounded p-2 flex space-x-4">
//             {paymentMethods.map(method => (
//               <PaymentMethodButton
//                 key={method.title}
//                 src={method.src}
//                 alt={method.title}
//                 title={method.title}
//                 disabled={payment.status === "Paid"}
//                 onClick={() => handlePayment(payment.date, method.title)}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Payment;
