import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const NavbarTerms = () => {
  const navigate = useNavigate();
  const { equbId } = useParams(); // for potential dynamic links

  return (
    <nav
      className="flex items-center justify-between fixed top-0 left-0 right-0 h-16 md:h-[70px] px-4 z-50
                 bg-light-brand-tertiary text-white"
    >
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center justify-center w-8 h-8"
      >
        <IoArrowBack className="w-6 h-6" />
      </button>

      {/* Title */}
      <div className="flex-1 text-center">
        <h1 className="font-medium text-xl">Terms and Service</h1>
      </div>

      {/* Right link */}
      {/* <div>
        <Link to="/">Home</Link>
      </div> */}
    </nav>
  );
};

export default NavbarTerms;
