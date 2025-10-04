import React from "react";

const PaymentCard = ({ payment }) => {
    return (
        <div className="border rounded p-4 flex justify-between items-center">
            <div>
                <span className="block">Amount: ${payment.amount}</span>
                <span className="block">Date: {payment.date}</span>
                <span className={`font-semibold ${payment.status === "Paid" ? "text-blue-500" : "text-blue-500"}`}>
                    Status: {payment.status === "Paid" ? "Paid " : "Pending "}
                </span>
            </div>
        </div>
    )
}

export default PaymentCard



// import React from "react";
// import PaymentMethodButton from "./PaymentMethod";


// const PaymentCard = ({ payment}) => {
//  <div className="border rounded p-4 flex justify-between items-center">
//     <div>
//       <span className="block">Amount: ${payment.amount}</span>
//       <span className="block">Date: {payment.date}</span>
//       <span className={`font-semibold ${payment.status === "Paid" ? "text-green-500" : "text-yellow-500"}`}>
//         Status: {payment.status === "Paid" ? "Paid ✅" : "Pending ⏳"}
//       </span>
//     </div>
//   </div>

// }

// export default PaymentCard


