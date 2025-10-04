import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContributionCard from "../components/joinedEqub/ContributionCard";
import ImageSlider from "../components/Slider/ImageSlider";
import MenuCard from "../components/joinedEqub/MenuCard";
import {
  AiOutlineWallet,
  AiOutlineCreditCard,
  AiOutlineTeam,
  AiOutlineExperiment,
  AiOutlineInfoCircle,
  AiOutlineQuestionCircle
} from "react-icons/ai";


const JoinedEqub = () => {
  const { equbId } = useParams();
  const navigate = useNavigate();


  // Memoize currentUser so it doesn't reset state on each render
  const currentUser = useMemo(() => ({
    name: "alemu tsige",
    balance: 5000,
    account: "7090151238080",
    date: "Oct 1, 2025 01:39:06 AM"
  }), []);




  const menuItems = [
    { title: "Equb", icon: AiOutlineWallet, path: `/equb/${equbId}` },
    { title: "Payment", icon: AiOutlineCreditCard, path: `/equb/${equbId}/payment` },
    { title: "Members", icon: AiOutlineTeam, path: `/equb/${equbId}/members` },
    { title: "Lottery", icon: AiOutlineExperiment, path: `/equb/${equbId}/lottery` },
    { title: "Info", icon: AiOutlineInfoCircle, path: `/equb/${equbId}/info` },
    { title: "Help", icon: AiOutlineQuestionCircle, path: `/help` },
  ];



  return (
    <div className="pl-2 space-y-10 mt-6">

      {/* User Contribution Card */}
      <ContributionCard
        equbName={currentUser.name}
        balance={currentUser.balance}
        showAmountToggle={true}
        account={currentUser.account}
        date={currentUser.date}
      />


      {/* Image Slider */}
      <div className="w-full">
        <p className="mt-2 text-lg text-gray-600 text-center
                             border-b w-full pb-1 border-slate-400 mx-auto"
        >activity of equb</p>
        <ImageSlider />
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {menuItems.map(item => (
          <MenuCard
            key={item.title}
            title={item.title}
            Icon={item.icon}
            onClick={() => navigate(item.path)}
          />
        ))}
      </div>
    </div>
  );
};

export default JoinedEqub;
