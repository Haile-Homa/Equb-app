import React, { useState } from "react";
import { helpDummyData } from "../../../db/data";
import { FiHelpCircle } from "react-icons/fi";

import FAQItem from "./FAQItem";
import SupportSection from "./SupportSection";
import GuidelinesSection from "./GuidelinesSection";

const Help = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="p-2 max-w-4xl mx-auto space-y-6 mt-6">

            {/* Header */}
            <div className="flex items-center border-b w-[200px] md:w-[300px] pb-1 border-slate-400 space-x-2">
                <FiHelpCircle className="w-6 h-6 text-blue-600" />
                <h1 className="text-2xl font-bold">Help & FAQs</h1>
            </div>

            <p className="text-gray-600">
                Need assistance? Browse FAQs below or contact support directly.
            </p>

            {/* FAQ Section */}
            <div className="space-y-3">
                {helpDummyData.faq.map((item, index) => (
                    <FAQItem
                        key={index}
                        item={item}
                        isActive={activeIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>


            {/* Support Section */}
            <SupportSection contact={helpDummyData.supportContact} />


            {/* Guidelines Section */}
            <GuidelinesSection guidelines={helpDummyData.guidelines} />

        </div>
    );
};

export default Help;
















// import React, { useState } from "react";
// import { helpDummyData } from "../../db/data";
// import { FiChevronDown, FiChevronUp, FiHelpCircle } from "react-icons/fi";

// const FAQItem = ({ item, isActive, onToggle }) => (
//   <div className="border border-slate-200 rounded-lg overflow-hidden">
//     <button
//       onClick={onToggle}
//       className="flex justify-between items-center w-full p-4 bg-white hover:bg-slate-50 transition-colors font-medium text-gray-800"
//     >
//       <span className="flex items-center space-x-2">
//         <FiHelpCircle className="w-5 h-5 text-blue-500" />
//         <span>{item.q}</span>
//       </span>
//       {isActive ? <FiChevronUp /> : <FiChevronDown />}
//     </button>
//     {isActive && (
//       <div className="p-4 bg-white text-gray-700 border-t border-slate-200">
//         {item.a}
//       </div>
//     )}
//   </div>
// );

// const SupportSection = ({ contact }) => (
//   <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
//     <h2 className="font-semibold text-lg mb-2 flex items-center space-x-2">
//       <FiHelpCircle className="w-5 h-5 text-blue-600" />
//       <span>Contact Support</span>
//     </h2>
//     <p>
//       Email:{" "}
//       <a
//         className="text-blue-600 hover:underline"
//         href={`mailto:${contact.email}`}
//       >
//         {contact.email}
//       </a>
//     </p>
//     <p>
//       Phone:{" "}
//       <a
//         className="text-blue-600 hover:underline"
//         href={`tel:${contact.phone}`}
//       >
//         {contact.phone}
//       </a>
//     </p>
//     <p>
//       Telegram:{" "}
//       <a
//         className="text-blue-600 hover:underline"
//         href={`https://t.me/${contact.telegram.replace("@", "")}`}
//       >
//         {contact.telegram}
//       </a>
//     </p>
//   </div>
// );

// const GuidelinesSection = ({ guidelines }) => (
//   <div className="p-4 border border-blue-200 rounded-lg bg-blue-100">
//     <h2 className="font-semibold text-lg mb-2 flex items-center space-x-2">
//       <FiHelpCircle className="w-5 h-5 text-blue-600" />
//       <span>Guidelines</span>
//     </h2>
//     <ul className="list-disc list-inside text-gray-700 space-y-1">
//       {guidelines.map((rule, idx) => (
//         <li key={idx}>{rule}</li>
//       ))}
//     </ul>
//   </div>
// );


// const Help = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleToggle = (index) => {
//     setActiveIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <div className="p-2 max-w-4xl mx-auto space-y-6 mt-6">
//       {/* Header */}
//       <div className="flex items-center border-b w-[200px] md:w-[300px] pb-1 border-slate-400 space-x-2">
//         <FiHelpCircle className="w-6 h-6 text-blue-600" />
//         <h1 className="text-2xl font-bold">Help & FAQs</h1>
//       </div>
//       <p className="text-gray-600">
//         Need assistance? Browse FAQs below or contact support directly.
//       </p>

//       {/* FAQ Section */}
//       <div className="space-y-3">
//         {helpDummyData.faq.map((item, index) => (
//           <FAQItem
//             key={index}
//             item={item}
//             isActive={activeIndex === index}
//             onToggle={() => handleToggle(index)}
//           />
//         ))}
//       </div>

//       {/* Support Section */}
//       <SupportSection contact={helpDummyData.supportContact} />

//       {/* Guidelines Section */}
//       <GuidelinesSection guidelines={helpDummyData.guidelines} />
//     </div>
//   );
// };

// export default Help;







