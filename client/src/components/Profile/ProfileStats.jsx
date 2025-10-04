import React from "react";
import { AiOutlineBarChart, AiOutlineTrophy } from "react-icons/ai";
import { profileDummyData } from "../../db/data";
import StatCard from "./StatsCard";


const ProfileStats = () => {
    return (
        <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
            <StatCard
                icon={<AiOutlineBarChart className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-blue-600 mb-1 sm:mb-2" />}
                value={profileDummyData.totalEqubsJoined}
                label="Joined"
                bg=""
                text=""
            />
            <StatCard
                icon={<AiOutlineBarChart className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" />}
                value={profileDummyData.activeEqubs}
                label="Active"
                bg=""
            />
            <StatCard
                icon={<AiOutlineTrophy className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-yellow-600 mb-1 sm:mb-2" />}
                value={profileDummyData.completedEqubs}
                label="Completed"
                bg=""
                text=""
            />
        </div>
    )
}

export default ProfileStats



