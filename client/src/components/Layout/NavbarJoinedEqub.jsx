import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoHomeOutline, IoArrowBackOutline } from "react-icons/io5";
import { AiOutlineUnlock } from 'react-icons/ai';
import { FaRegBell } from "react-icons/fa";
import { NotificationContext } from "../../context/NotificationContext";

const NavbarJoinedEqub = () => {

    
    const { notificationsCount } = useContext(NotificationContext);
    const location = useLocation();
    const navigate = useNavigate();



    // Special route: /equb/:equbId/joined should show Home icon
    const showHomeIcon =
        /^\/equb\/[^/]+\/joined$/.test(location.pathname);

    // All other dynamic /equb routes + /help should show Back arrow
    const showBackArrow =
        !showHomeIcon && (
            /^\/equb\/[^/]+$/.test(location.pathname) ||            // /equb/:equbId
            /^\/equb\/[^/]+\/payment$/.test(location.pathname) ||   // /equb/:equbId/payment
            /^\/equb\/[^/]+\/members$/.test(location.pathname) ||   // /equb/:equbId/members
            /^\/equb\/[^/]+\/lottery$/.test(location.pathname) ||   // /equb/:equbId/lottery
            /^\/equb\/[^/]+\/info$/.test(location.pathname) ||      // /equb/:equbId/info
            location.pathname === "/help"                            // /help
        );

    return (
        <div
            className="flex items-center justify-between fixed top-0 left-0 right-0 h-16 md:h-[70px] px-4 z-50
                 bg-light-brand-tertiary  "
        >
            {/* Left section: Home or Back arrow */}
            <div className="flex items-center justify-center w-10">
                {showHomeIcon ? (
                    <Link to="/">
                        <IoHomeOutline color="white" className="w-6 h-6" />
                    </Link>
                ) : showBackArrow ? (
                    <button onClick={() => navigate(-1)}>
                        <IoArrowBackOutline color="white" className="w-6 h-6" />
                    </button>
                ) : (
                    <IoHomeOutline color="white" className="w-6 h-6" />
                )}
            </div>

            {/* Centered Title */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
                <span className="font-medium text-white text-lg">Joined Equb</span>
            </div>

            {/* Right section: Lock + Notifications */}
            <div className="flex items-center space-x-4 ml-auto">
                <AiOutlineUnlock color="white" className="w-6 h-6" />
                <Link to="/notifications" className="relative">
                    <FaRegBell color="white" className="w-6 h-6" />
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

export default NavbarJoinedEqub;
