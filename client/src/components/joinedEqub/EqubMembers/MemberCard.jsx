import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const MemberCard = ({ member }) => (
    <li className="flex items-center gap-3 p-3 border border-slate-300 rounded-lg shadow-sm hover:shadow-md transition">
        <AiOutlineUser className="text-gray-400 w-5 h-5" />
        <span className="font-medium text-gray-900">{member.name}</span>
    </li>
);

export default MemberCard;
