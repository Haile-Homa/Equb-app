import React from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets"; // your icons

const footerItems = [
    { name: "Home", icon: assets.home_black_svg, activeIcon: assets.home_brand_svg, path: "/" },
    { name: "History", icon: assets.history_black_svg, activeIcon: assets.history_brand_svg, path: "/history" },
    { name: "Profile", icon: assets.profile_circle_black_svg, activeIcon: assets.profile_circle_brand_svg, path: "/profile" },
    { name: "Settings", icon: assets.settings_black_svg, activeIcon: assets.settings_brand_svg, path: "/settings" },
];

const Footer = () => {
    const location = useLocation(); // ✅ Get current route

    return (
        <div
            className="
                        fixed bottom-0 left-0 right-0 
                        border-t-2 rounded-t-2xl bg-light-background p-3 
                        flex justify-around shadow-inner w-full 
                        border-x-2 border-gray-300 

              /* ⬇️ Sidebar mode on lg */
                        lg:top-0 lg:bottom-0 lg:left-0 lg:w-56 lg:h-screen
                        lg:flex-col lg:items-start lg:justify-start 
                        lg:rounded-none lg:border-t-0 lg:border-r-2  lg:pt-20 

 
 
                        ">


            {footerItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                    <Link
                        to={item.path}
                        key={item.name}
                        className="
                               flex flex-col items-center justify-center
                              text-gray-800 hover:text-light-brand-secondary
                               lg:flex-row lg:items-center lg:justify-start 
                               lg:w-full lg:px-6 lg:py-3 lg:text-left 
                                ">

                        <img
                            src={isActive ? item.activeIcon : item.icon}
                            alt={item.name}
                            className="w-6 h-6 mb-1 lg:mb-0 lg:mr-3 transition-colors duration-200"
                        />
                        <span
                            className={`text-sm ${isActive ? "text-light-brand-secondary font-bold" : ""
                                }`}
                        >
                            {item.name}
                        </span>
                    </Link>
                );
            })}
        </div>

    );
};

export default Footer;













// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { assets } from "../../assets/assets"; // your icons


// const footerItems = [
//     { name: "Home", icon: assets.home_black_svg, activeIcon: assets.home_brand_svg, path: "/" },
//     { name: "History", icon: assets.history_black_svg, activeIcon: assets.history_brand_svg, path: "/history" },
//     { name: "Profile", icon: assets.profile_circle_black_svg, activeIcon: assets.profile_circle_brand_svg, path: "/profile" },
//     { name: "Settings", icon: assets.settings_black_svg, activeIcon: assets.settings_brand_svg, path: "/settings" },
// ];



// const Footer = () => {
//     const location = useLocation(); // ✅ Get current route

//     return (
//         <div
//             className="fixed bottom-0 left-0 right-0 border-t-2 rounded-t-2xl
//              bg-light-background p-3 flex justify-around shadow-inner
//              w-full lg:w-full lg:h-14  mx-auto border-x-2 border-gray-300  "

//         >

//             {footerItems.map((item) => {
//                 const isActive = location.pathname === item.path;

//                 return (
//                     <Link
//                         to={item.path}
//                         key={item.name}
//                         className={`h-15 flex  flex-col items-center text-gray-800 hover:text-light-brand-secondary`}
//                     >
//                         <img
//                             src={isActive ? item.activeIcon : item.icon} // ✅ Change icon if active
//                             alt={item.name}
//                             className="w-6 h-6 mb-1 transition-colors duration-200"
//                         />
//                         <span
//                             className={`text-sm ${isActive ? "text-light-brand-secondary font-bold" : ""}`}
//                         >
//                             {item.name}
//                         </span>
//                     </Link>
//                 );
//             })}
//         </div>
//     );
// };
// export default Footer