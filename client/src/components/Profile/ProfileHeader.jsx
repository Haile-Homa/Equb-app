import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { profileDummyData } from "../../db/data";

const ProfileHeader = () => {

    const hasAvatar = !!profileDummyData.avatar;

    return (
        <div className="flex flex-col items-center text-center">

            {hasAvatar ? (
                <img
                    src={profileDummyData.avatar}
                    alt="avatar"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-blue-300 shadow-xl object-cover"
                />
            ) : (
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-blue-300 shadow-xl flex items-center justify-center bg-blue-100">
                    <AiOutlineUser className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" />
                </div>
            )}

            <h2 className="text-2xl  font-bold mt-4 text-gray-900">{profileDummyData.name}</h2>
            <p className="text-gray-500 text-sm sm:text-base flex items-center gap-1 mt-1">
                <AiOutlineUser className="w-4 h-4 text-blue-500" /> {profileDummyData.location}
            </p>
        </div>
    );
};

export default ProfileHeader;
