import React from "react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileStats from "../../components/Profile/ProfileStats";
import SavingsOverview from "../../components/Profile/SavingsOverview";
import ContactInfo from "../../components/Profile/ContactInfo";


const Profile = () => {
    return (
        <div className="px-4 sm:px-6 py-6 max-w-4xl mx-auto space-y-6 ">
            <ProfileHeader />
            <ProfileStats />
            <SavingsOverview />
            <ContactInfo />
        </div>
    )
}

export default Profile



// import React from "react";
// import { AiOutlineUser, AiOutlinePhone, AiOutlineCalendar, AiOutlineMoneyCollect, AiOutlineBarChart, AiOutlineTrophy } from "react-icons/ai";
// import { profileDummyData } from "../db/data";

// const Profile = () => {
//     const hasAvatar = !!profileDummyData.avatar;

//     return (
//         <div className="px-4 sm:px-6 py-6 max-w-4xl mx-auto space-y-6 sm:space-y-8">

//             {/* ==== HEADER ==== */}
//             <div className="flex flex-col items-center text-center">
//                 {hasAvatar ? (
//                     <img
//                         src={profileDummyData.avatar}
//                         alt="avatar"
//                         className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-blue-300 shadow-xl object-cover"
//                     />
//                 ) : (
//                     <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-blue-300 shadow-xl flex items-center justify-center bg-blue-100">
//                         <AiOutlineUser className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500" />
//                     </div>
//                 )}
//                 <h2 className="text-2xl sm:text-3xl font-bold mt-4 text-gray-900">{profileDummyData.name}</h2>
//                 <p className="text-gray-500 text-sm sm:text-base flex items-center gap-1 mt-1">
//                     <AiOutlineUser className="w-4 h-4 text-blue-500" /> {profileDummyData.location}
//                 </p>
//             </div>

//             {/* ==== STATS SECTION ==== */}
//             <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
//                 <div className="p-3 sm:p-4 bg-blue-50 rounded-xl sm:rounded-2xl shadow hover:shadow-lg transition-all duration-200">
//                     <AiOutlineBarChart className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-blue-600 mb-1 sm:mb-2" />
//                     <p className="text-lg sm:text-xl font-bold text-blue-600">
//                         {profileDummyData.totalEqubsJoined}
//                     </p>
//                     <p className="text-gray-600 text-xs sm:text-sm">Joined</p>
//                 </div>
//                 <div className="p-3 sm:p-4 bg-green-50 rounded-xl sm:rounded-2xl shadow hover:shadow-lg transition-all duration-200">
//                     <AiOutlineBarChart className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" />
//                     <p className="text-lg sm:text-xl font-bold ">
//                         {profileDummyData.activeEqubs}
//                     </p>
//                     <p className="text-gray-600 text-xs sm:text-sm">Active</p>
//                 </div>
//                 <div className="p-3 sm:p-4 bg-yellow-50 rounded-xl sm:rounded-2xl shadow hover:shadow-lg transition-all duration-200">
//                     <AiOutlineTrophy className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-yellow-600 mb-1 sm:mb-2" />
//                     <p className="text-lg sm:text-xl font-bold text-yellow-600">
//                         {profileDummyData.completedEqubs}
//                     </p>
//                     <p className="text-gray-600 text-xs sm:text-sm">Completed</p>
//                 </div>
//             </div>

//             {/* ==== SAVINGS OVERVIEW ==== */}
//             <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl sm:rounded-2xl shadow-xl">
//                 <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
//                     <AiOutlineMoneyCollect className="w-4 h-4 sm:w-5 sm:h-5" /> Savings Overview
//                 </h3>
//                 <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
//                     <div>
//                         <p className="text-lg sm:text-xl font-bold">{profileDummyData.savings} ETB</p>
//                         <p className="text-xs sm:text-sm opacity-90">Total Savings</p>
//                     </div>
//                     <div>
//                         <p className="text-lg sm:text-xl font-bold">{profileDummyData.contributions} ETB</p>
//                         <p className="text-xs sm:text-sm opacity-90">Contributions</p>
//                     </div>
//                     <div>
//                         <p className="text-lg sm:text-xl font-bold">{profileDummyData.winnings} ETB</p>
//                         <p className="text-xs sm:text-sm opacity-90">Winnings</p>
//                     </div>
//                 </div>
//             </div>

//             {/* ==== CONTACT INFO ==== */}
//             <div className="p-4 sm:p-5 border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm space-y-3 sm:space-y-2 bg-white">
//                 <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2 text-gray-900">
//                     <AiOutlinePhone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" /> Contact Info
//                 </h3>
//                 <p className="text-gray-700 text-sm sm:text-base flex items-center gap-2">
//                     <AiOutlinePhone className="w-4 h-4 text-blue-500" /> {profileDummyData.phone}
//                 </p>
//                 <p className="text-gray-700 text-sm sm:text-base flex items-center gap-2">
//                     <AiOutlineCalendar className="w-4 h-4 text-blue-500" /> Member Since: {profileDummyData.joinedDate}
//                 </p>
//             </div>

//         </div>
//     );
// };

// export default Profile;







