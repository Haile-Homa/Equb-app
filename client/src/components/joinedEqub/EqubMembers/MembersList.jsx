import React from "react";
import MemberCard from "./MemberCard";

const MembersList = ({ members }) => {
    if (members.length === 0) {
        return <p className="mt-4 text-gray-500 text-center">No members found for this Equb.</p>;
    }

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {members.map(member => (
                <MemberCard key={member.memberId} member={member} />
            ))}
        </ul>
    );
};

export default MembersList;
