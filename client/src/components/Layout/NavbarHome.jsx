import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegBell } from 'react-icons/fa';
import { NotificationContext } from "../../context/NotificationContext";

const NavbarHome = () => {
  // ✅ grab only what you need from context
  const { notificationsCount } = useContext(NotificationContext);

  return (
    <div
      className="flex items-center justify-between fixed top-0 left-0 right-0 h-16 md:h-[70px] px-4 z-50
                 bg-light-brand-tertiary  
                ">
      {/* Left section */}
      <div className="flex items-center justify-center space-x-2">
        <Link to="/">
          <IoHomeOutline color="white" className="w-6 h-6" />
        </Link>
      </div>

      {/* Title */}
      <div className="flex text-center">
        <span className="font-medium text-center text-white text-lg">Secure-Equb</span>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        <Link to="/notifications" className="relative">
          <FaRegBell color="white" className="w-6 h-6" />

          {/* Badge */}
          {notificationsCount > 0 && (
            <span
              className="absolute -top-1 -right-1 bg-red-500 text-white 
                text-xs font-bold px-1.5 py-0.5 rounded-full animate-bounce"
            >
              {notificationsCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default NavbarHome;
