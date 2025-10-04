import React, { useState } from "react";
import { FaUniversity } from "react-icons/fa";



const PaymentMethod = ({ src, alt, title, disabled, onClick }) => {

   

return (
  <div
    onClick={onClick}
    className=  "flex flex-col items-center p-2 border border-slate-400 rounded cursor-pointer hover:shadow-lg transition transform hover:scale-105"   
  >
    <img
      src={src}
      alt={alt}
      title={title}
      className=" object-contain w-24 h-24 mb-2"
    />

       
  </div>
);
};

export default PaymentMethod








