import React from "react";

const PaymentHeader = ({ equbName }) => (
    <>
        <h1 className="text-xl  font-medium text-gray-800  mb-10
                      border-b w-[100px] md:w-[300px] pb-1 border-slate-400  text-left">Payment</h1>
        <p className="text-gray-600">
            Payments for <strong>{equbName}</strong>
        </p>
    </>
);

export default PaymentHeader;