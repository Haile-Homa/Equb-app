import { useParams } from "react-router-dom";
import { equbDummyData } from "../../../db/data";
import EqubHeader from "./EqubHeader";
import EqubCard from "./EqubCard";
import EqubNotFound from "./EqubNotFound";

const Equb = () => {
  const { equbId } = useParams();
  const equb = equbDummyData.find(item => item.equbId === equbId);

  if (!equb) return <EqubNotFound />;

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6 mt-6 pl-2">
      <EqubHeader {...equb} />
      <EqubCard equb={equb} />
    </div>
  );
};

export default Equb;
















// import { useParams, useNavigate } from "react-router-dom";
// import { equbDummyData } from "../../../db/data";

// const Equb = () => {
//   const { equbId } = useParams();
//   const navigate = useNavigate();

//   const equb = equbDummyData.find(item => item.equbId === equbId);


//   if (!equb) {
//     return (
//       <div className="p-6 flex flex-col items-center justify-center mt-10">
//         <h1 className="text-3xl font-bold text-red-600 mb-2">❌ Equb Not Found</h1>
//         <p className="text-gray-600 text-center">
//           The Equb ID <span className="font-semibold">{equbId}</span> does not exist.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className=" max-w-4xl mx-auto flex flex-col gap-6 mt-6 pl-2">

//       {/* Header */}

//       <h1 className="text-lg font-medium text-gray-800 
//                        border-b w-[200px] pb-1 border-slate-400  text-left 
//                     ">{equb.name}</h1>

//       <p className="text-gray-600">
//         {equb.category} | {equb.type} |{" "}
//         <span className={`font-semibold ${equb.status === 'active' ? 'text-green-600' : 'text-yellow-600'}`}>
//           {equb.status.toUpperCase()}
//         </span>
//       </p>


//       {/* Equb Card */}
//       <div className=" border border-slate-500 rounded-xl overflow-hidden flex flex-col md:flex-row gap-6 p-4">

//         {/* Image */}
//         {equb.imageUrl && (
//           <img
//             src={equb.imageUrl}
//             alt={equb.name}
//             className="w-full md:w-1/3 h-48 md:h-full object-cover rounded-lg shadow-sm md:mt-2"
//           />
//         )}

//         {/* Details + Actions */}
//         <div className="flex-1 flex flex-col justify-between">

//           {/* Two-column Details */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//             {/* Left Column */}
//             <div className="flex flex-col gap-2 bg-gray-50 p-3 rounded-lg shadow-sm">
//               <p><span className="font-semibold text-gray-900">Amount:</span> {equb.amount} Birr</p>
//               <p><span className="font-semibold text-gray-900">Type:</span> {equb.type}</p>
//               <p><span className="font-semibold text-gray-900">Duration:</span> {equb.duration}</p>
//               <p><span className="font-semibold text-gray-900">Total Members:</span> {equb.totalMembers}</p>
//             </div>
//             {/* Right Column */}
//             <div className="flex flex-col gap-2 bg-gray-50 p-3 rounded-lg shadow-sm">
//               <p><span className="font-semibold text-gray-900">Category:</span> {equb.category}</p>
//               <p><span className="font-semibold text-gray-900">Cycle Size:</span> {equb.cycleSize}</p>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col md:flex-row gap-4 mt-2">
//             {/* Cancel as text only */}
//             <button
//               className="flex-1 text-gray-600 font-medium hover:underline text-center"
//               onClick={() => navigate("/")}
//             >
//               Cancel
//             </button>

//             {/* Proceed button */}
//             <button
//               className="flex-1 bg-gray-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
//               onClick={() => navigate(`/equb/${equb.equbId}/payment`)}
//             >
//               Proceed to Payment
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Equb;




