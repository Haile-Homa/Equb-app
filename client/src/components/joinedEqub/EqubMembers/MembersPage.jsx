import React from "react";
import { useParams } from "react-router-dom";
import { membersDummyData } from "../../../db/data";
import MembersList from "./MembersList";

const MembersPage = () => {
    const { equbId } = useParams();
    const equbMembers = membersDummyData.filter(member => member.equbId === equbId);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-medium flex items-center gap-2 mb-8 border-b w-[120px] pb-1 border-slate-400">
                Members
            </h1>

            <MembersList members={equbMembers} />
        </div>
    );
};

export default MembersPage;
