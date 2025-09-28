import React from "react";

import { profileDummyData } from "../db/data";



const Profile = () => {
    return (
        <div className="px-1 space-y-8 pt-6">
            {/* ==== HEADER ==== */}
            <div className="flex flex-col items-center text-center">
                <img
                    src={profileDummyData.avatar}
                    alt="avatar"
                    className="w-24 h-24 rounded-full border-4 border-blue-300 shadow-lg"
                />
                <h2 className="text-2xl font-bold mt-3">{profileDummyData.name}</h2>
                <p className="text-sm text-gray-500"> {profileDummyData.location}</p>
            </div>

            {/* ==== STATS SECTION ==== */}
            <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-blue-100 rounded-2xl shadow">
                    <p className="text-xl font-bold text-blue-600">
                        {profileDummyData.totalEqubsJoined}
                    </p>
                    <p className="text-gray-600 text-sm">Joined</p>
                </div>
                <div className="p-4 bg-green-100 rounded-2xl shadow">
                    <p className="text-xl font-bold text-green-600">
                        {profileDummyData.activeEqubs}
                    </p>
                    <p className="text-gray-600 text-sm">Active</p>
                </div>
                <div className="p-4 bg-yellow-100 rounded-2xl shadow">
                    <p className="text-xl font-bold text-yellow-600">
                        {profileDummyData.completedEqubs}
                    </p>
                    <p className="text-gray-600 text-sm">Completed</p>
                </div>
            </div>

            {/* ==== SAVINGS OVERVIEW ==== */}
            <div className="p-5 bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-2xl shadow-lg">
                <h3 className="text-lg font-semibold mb-2">💰 Savings Overview</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <p className="text-xl font-bold">{profileDummyData.savings} ETB</p>
                        <p className="text-sm opacity-80">Total Savings</p>
                    </div>
                    <div>
                        <p className="text-xl font-bold">{profileDummyData.contributions} ETB</p>
                        <p className="text-sm opacity-80">Contributions</p>
                    </div>
                    <div>
                        <p className="text-xl font-bold">{profileDummyData.winnings} ETB</p>
                        <p className="text-sm opacity-80">Winnings</p>
                    </div>
                </div>
            </div>

            {/* ==== CONTACT INFO ==== */}
            <div className="p-5 border rounded-2xl ">
                <h3 className="text-lg font-semibold mb-3"> Contact Info</h3>
                <p className="text-gray-700"><strong>Phone:</strong> {profileDummyData.phone}</p>
                <p className="text-gray-700"><strong>Member Since:</strong> {profileDummyData.joinedDate}</p>
            </div>

            {/* ==== BADGES / ACHIEVEMENTS ==== */}
            {/* <div className="p-5 bg-white border rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3">🏆 Achievements</h3>
                <div className="flex space-x-3">
                    <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm">
                        Gold Saver
                    </span>
                    <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm">
                        1 Year Member
                    </span>
                    <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">
                        Community Builder
                    </span>
                </div>
            </div> */}

        </div>
    );
}

export default Profile

















// 3️⃣ Sections in This Profile Page

// ✨ This design includes all possible UI for a profile page:

// Header 🖼️ → Avatar, name, email, location, bio

// Stats 📊 → Joined, Active, Completed Equbs

// Savings Overview 💰 → Total savings, contributions, winnings

// Contact Info 📞 → Email, phone, joined date

// Badges / Achievements 🏆 → show rewards & milestones

// Social Links 🌐 → LinkedIn, Twitter, Instagram

// 4️⃣ Next Steps

// ✅ Add edit buttons to update profile fields.

// ✅ Add upload avatar feature.

// ✅ Add dark mode with your theme config.

// ✅ Link Achievements to user activity milestones.