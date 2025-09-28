import React from "react";
import { useParams } from "react-router-dom";
import { useEqub } from "../../context/EqubContext";
import BackButton from "./BackButton";
import EqubHeader from "./EqubHeader";
import EqubCard from "./EqubCard";


const EqubList = () => {

  const { type, category } = useParams();
  const { equbs } = useEqub();

  const filteredEqubs = equbs.filter((equb) => {
    if (type) return equb.type === type;
    if (category) return equb.category.toLowerCase() === category.toLowerCase();
    return true;
  });

  return (
    <div className="space-y-4 mb-6 mt-5 md:px-8 overflow-x-hidden">
      <BackButton />
      <EqubHeader type={type} category={category} />
      {filteredEqubs.length > 0 ? (
        filteredEqubs.map((equb) => (
          <EqubCard key={equb.equbId} equb={equb} />
        ))
      ) : (
        <p className="text-gray-500">No equbs found 🚫</p>
      )}
    </div>
  );

}

export default EqubList







































// import React from "react";
// import { AiOutlineArrowLeft } from 'react-icons/ai';
// import { useParams } from "react-router-dom";
// import { equbDummyData } from "../../db/data";
// import { useNavigate } from "react-router-dom";


// const EqubList = () => {

//   const navigate = useNavigate();
//   const { type, category } = useParams();

//   const filteredEqubs = equbDummyData.filter((equb) => {
//     if (type) return equb.type === type;
//     if (category) return equb.category.toLowerCase() === category.toLowerCase();
//     return true;
//   });

//   return (
//     <div className="space-y-4 mb-6 mt-5  md:px-8">


//       {/* Back arrow */}
//       <div
//         className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-light-brand-secondary"
//         onClick={() => navigate("/")}
//       >
//         <AiOutlineArrowLeft  className="w-6 h-6" />
//         <span className="font-medium">Back</span>
//       </div>


//       <h2 className="text-xl font-bold text-gray-800 mb-6 border-b-4 w-[200px] pb-1 mx-auto text-center border-gray-200">
//         {type
//           ? `${type.charAt(0).toUpperCase() + type.slice(1)} Equbs`
//           : `${category.charAt(0).toUpperCase() + category.slice(1)} Equbs`}
//       </h2>

//       {filteredEqubs.length > 0 ? (
//         filteredEqubs.map((equb, index) => (
//           <div
//             key={equb.equbId}
//             className="px-4 py-2 "
//           >
//             {/* Header */}
//             <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3">
//               {equb.name}
//             </h3>

//             {/* Info grid */}
//             <div className="grid grid-cols-1  gap-2 text-gray-700 mb-4 text-start ">
//               <p><span className="font-medium">Type:</span> {equb.type}</p>
//               <p><span className="font-medium">Category:</span> {equb.category}</p>
//               <p><span className="font-medium">Duration:</span> {equb.duration}</p>
//               <p><span className="font-medium">Processing Fee:</span> {equb.processingFee}</p>
//               <p><span className="font-medium">Total Members:</span> {equb.totalMembers}</p>
//             </div>

//             {/* Join button */}
//             <button className="w-full py-3  text-white font-semibold rounded-lg bg-light-brand-secondary">
//               Join Equb
//             </button>

//             {/* Full-width HR */}

//             <hr className="w-screen border-t-2 border-gray-300 my-6 -mx-4" />

//           </div>
//         ))
//       ) : (
//         <p className="text-gray-500">No equbs found 🚫</p>
//       )}
//     </div>
//   );
// };

// export default EqubList;
