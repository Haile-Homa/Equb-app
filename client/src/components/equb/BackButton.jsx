import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const BackButton = () => {
    const navigate = useNavigate();
    return (
        <div
            className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-light-brand-secondary"
            onClick={() => navigate("/")}
        >
            <AiOutlineArrowLeft className="w-6 h-6" />
            <span className="font-medium">Back</span>
        </div>
    )
}

export default BackButton
