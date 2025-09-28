import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { NotificationContext } from "../../context/NotificationContext";



const Navbar = () => {


    // ✅ grab only what you need from context
    const { notificationsCount } = useContext(NotificationContext);

    return (
        <div className="fixed top-0 left-0 right-0
             bg-light-brand-primary text-white p-4 py-5
             flex justify-between items-center shadow-md
             w-full lg:h-10 mx-auto  lg:border-x-2 lg:border-gray-300 lg:z-50 ">



            {/* Left section */}
            <div className="flex items-center justify-center space-x-2">
                <Link to="/">
                    <img src={assets.home_white_svg} alt="Home" className="w-6 h-6" />
                </Link>
                <span className="font-bold text-md pl-1 mt-2">X-Equb</span>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-4">
                <Link to="/notifications" className="relative">
                    <img src={assets.bell_white_svg} alt="Notifications" className="w-6 h-6" />

                    {/* Badge */}
                    {notificationsCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white 
                             text-xs font-bold px-1.5 py-0.5 rounded-full animate-bounce">
                            {notificationsCount}
                        </span>
                    )}
                </Link>
            </div>
        </div>
    );
};

export default Navbar