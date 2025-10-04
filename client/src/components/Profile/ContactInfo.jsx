import React from "react";
import { AiOutlinePhone, AiOutlineCalendar } from "react-icons/ai";
import { profileDummyData } from "../../db/data";


const ContactInfo = () => {
    return (
        <div className="p-4 sm:p-5 border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm space-y-3 sm:space-y-2 bg-white">
            <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2 text-gray-900">
                <AiOutlinePhone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" /> Contact Info
            </h3>
            <p className="text-gray-700 text-sm sm:text-base flex items-center gap-2">
                <AiOutlinePhone className="w-4 h-4 text-blue-500" /> {profileDummyData.phone}
            </p>
            <p className="text-gray-700 text-sm sm:text-base flex items-center gap-2">
                <AiOutlineCalendar className="w-4 h-4 text-blue-500" /> Member Since: {profileDummyData.joinedDate}
            </p>
        </div>
    )
}

export default ContactInfo