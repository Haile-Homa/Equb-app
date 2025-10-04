import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FiBell,
    FiGlobe,
    FiMail,
    FiPhone,
    FiTrash2
} from 'react-icons/fi';

import SettingGoTo from '../components/Settings/SettingGoTo';
import SettingLangSelect from '../components/Settings/SettingLangSelect';
import SettingsDelete from '../components/Settings/SettingsDelete';

const Settings = () => {

    const navigate = useNavigate();

    return (

        <div className=" pl-2 space-y-10 mt-6 ">

            {/* Header */}
            <header className="mb-8">
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">Settings</h1>
                <p className="text-gray-500 mt-1">Manage your Settings, notifications, and account options.</p>
            </header>




            {/* Settings Sections */}
            <div className="space-y-8">
                {/* General */}
                <section className="rounded-2xl border border-slate-400 p-4 ">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">General</h2>
                    <div className="divide-y divide-gray-100">
                        <SettingGoTo
                            icon={FiBell}
                            title="Notifications"
                            onClick={() => navigate('/notifications')}
                            color="indigo"
                        />

                        <SettingLangSelect
                            icon={FiGlobe}
                            title="Language"
                            options={["English", "Amharic"]}
                            color="green"
                        />
                    </div>
                </section>





                {/* Support */}
                <section className="rounded-2xl border border-slate-400 p-4 ">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">Support</h2>
                    <div className="divide-y divide-gray-100">
                        <SettingGoTo
                            icon={FiMail}
                            title="Send Feedback"
                            onClick={() => alert("Feedback form coming soon!")}
                            color="blue"
                        />

                        <SettingGoTo
                            icon={FiPhone}
                            title="Contact Us"
                            onClick={() => alert("Contact page coming soon!")}
                            color="purple"
                        />
                    </div>
                </section>



                {/* Account */}
                <section className="rounded-2xl border border-slate-400 p-4 ">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">Account Actions</h2>
                    <div className="divide-y divide-gray-100">
                        <SettingsDelete
                            icon={FiTrash2}
                            title="Delete Account"
                            color="red"
                        />

                    </div>
                </section>




                {/* Footer */}
                <div className="text-center pt-8 text-xs text-gray-400">
                    App Version 1.0.0
                </div>

            </div>
        </div>
    );
};

export default Settings;





























// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//     FiChevronRight,
//     FiBell,
//     FiGlobe,
//     FiMail,
//     FiPhone,
//     FiTrash2
// } from "react-icons/fi";

// // --- Reusable Component for a Clickable Setting Item ---
// // This improves code readability and maintainability.
// const SettingLinkItem = ({ icon: Icon, title, onClick, color, isDestructive = false, detail = null }) => (
//     <button
//         onClick={onClick}
//         className={`w-full flex items-center justify-between py-3 px-4 transition-colors duration-150 rounded-lg ${isDestructive ? 'hover:bg-red-50' : 'hover:bg-gray-50'}`}
//     >
//         <div className="flex items-center space-x-4">
//             {/* Icon container provides visual separation and emphasis */}
//             <div className={`p-2 rounded-lg ${isDestructive ? 'bg-red-100' : `${color}-100`}`}>
//                 <Icon className={`text-xl ${isDestructive ? 'text-red-600' : `${color}-600`}`} />
//             </div>
//             <span className={`font-medium ${isDestructive ? 'text-red-600' : 'text-gray-800'}`}>{title}</span>
//         </div>

//         {/* Optional detail text or indicator */}
//         {detail && <span className="text-sm text-gray-500 mr-2">{detail}</span>}

//         {/* Chevron only for navigation items */}
//         {!detail && <FiChevronRight className={`text-xl ${isDestructive ? 'text-red-400' : 'text-gray-400'}`} />}
//     </button>
// );

// // --- Reusable Component for a Select Setting Item ---
// const SettingSelectItem = ({ icon: Icon, title, color, options }) => (
//     <div className="flex items-center justify-between py-3 px-4 transition-colors duration-150 rounded-lg hover:bg-gray-50">
//         <div className="flex items-center space-x-4">
//             <div className={`p-2 rounded-lg ${color}-100`}>
//                 <Icon className={`text-xl ${color}-600`} />
//             </div>
//             <span className="font-medium text-gray-800">{title}</span>
//         </div>
//         <select
//             className="border border-gray-300 rounded-lg px-3 py-1 text-sm text-gray-700 bg-white focus:ring-indigo-500 focus:border-indigo-500 appearance-none transition-colors duration-150 cursor-pointer"
//         >
//             {options.map(option => (
//                 <option key={option} value={option}>{option}</option>
//             ))}
//         </select>
//     </div>
// );


// const Settings = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="max-w-xl mx-auto p-2 sm:p-6 bg-gray-50 min-h-screen">
//             {/* Page Header - Enhanced typography and spacing */}
//             <header className="mb-8 p-2">
//                 <h1 className="text-4xl font-extrabold text-gray-900">Settings</h1>
//                 <p className="text-gray-500 mt-1">Manage your app preferences and account details.</p>
//             </header>

//             <div className="space-y-8">

//                 {/* ACCOUNT & APP PREFERENCES SECTION */}
//                 <section>
//                     <h2 className="text-lg font-semibold text-gray-700 mb-2 px-2">General</h2>
//                     <div className="bg-white border border-gray-200 rounded-xl shadow-sm divide-y divide-gray-100">

//                         {/* Notifications */}
//                         <SettingLinkItem
//                             icon={FiBell}
//                             title="Notifications"
//                             onClick={() => navigate('/notifications')}
//                             color="indigo"
//                         />

//                         {/* Language */}
//                         <SettingSelectItem
//                             icon={FiGlobe}
//                             title="Language"
//                             options={["English", "Amharic", "Oromo"]}
//                             color="green"
//                         />
//                     </div>
//                 </section>

//                 {/* --- */}

//                 {/* SUPPORT & FEEDBACK SECTION */}
//                 <section>
//                     <h2 className="text-lg font-semibold text-gray-700 mb-2 px-2">Support</h2>
//                     <div className="bg-white border border-gray-200 rounded-xl shadow-sm divide-y divide-gray-100">

//                         {/* Send Feedback */}
//                         <SettingLinkItem
//                             icon={FiMail}
//                             title="Send Feedback"
//                             onClick={() => { /* Open feedback modal or form */ }}
//                             color="blue"
//                         />

//                         {/* Contact Us */}
//                         <SettingLinkItem
//                             icon={FiPhone}
//                             title="Contact Us"
//                             onClick={() => { /* Navigate to contact page */ }}
//                             color="purple"
//                         />
//                     </div>
//                 </section>

//                 {/* --- */}

//                 {/* DANGER ZONE SECTION */}
//                 <section>
//                     <h2 className="text-lg font-semibold text-red-700 mb-2 px-2">Account Actions</h2>
//                     <div className="bg-white border border-gray-200 rounded-xl shadow-sm">

//                         {/* Delete Account */}
//                         <SettingLinkItem
//                             icon={FiTrash2}
//                             title="Delete Account"
//                             onClick={() => {
//                                 if (window.confirm("Are you sure you want to delete your account? This action is permanent.")) {
//                                     // Add actual account deletion logic here
//                                 }
//                             }}
//                             color="red"
//                             isDestructive={true}
//                         />
//                     </div>
//                 </section>

//                 {/* App Version Footer */}
//                 <div className="text-center pt-4 text-xs text-gray-400">
//                     App Version 1.0
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Settings;