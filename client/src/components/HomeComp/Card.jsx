import React from "react"; 
import { useNavigate } from "react-router-dom";

const Card = ({ title, icon, path }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="flex flex-col items-center justify-center 
                 p-6 rounded-xl cursor-pointer
                 transition border border-slate-500
                 hover:border-light-brand-secondary text-sm"
    >
      {/* Render React Icon */}
      {icon && <div className="text-3xl mb-2">{icon}</div>}

      <span className="font-medium text-gray-700">{title}</span>
    </div>
  );
};

export default Card;







// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Card = ({ title, icon, path }) => {

//   const navigate = useNavigate();

//   return (
//     <div
//       onClick={() => navigate(path)}
//       className="flex flex-col items-center justify-center 
//                  p-6 rounded-xl  cursor-pointer
//                  transition  border  border-slate-500
//                  hover:border-light-brand-secondary text-sm"
//     >
//       {icon && <img src={icon} alt={title} className="w-12 h-12 mb-2" />}
//       <span className="font-medium text-gray-700">{title}</span>
//     </div>
//   );
// };

// export default Card;





