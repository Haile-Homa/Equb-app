import { AiOutlineMoneyCollect } from "react-icons/ai";
import { profileDummyData } from "../../db/data";
import OverviewItem from "./OverviewItem";

const SavingsOverview = () => {
    return (
        <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl sm:rounded-2xl shadow-xl">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                <AiOutlineMoneyCollect className="w-4 h-4 sm:w-5 sm:h-5" /> Savings Overview
            </h3>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                <OverviewItem label="Total Savings" value={profileDummyData.savings} />
                <OverviewItem label="Contributions" value={profileDummyData.contributions} />
                <OverviewItem label="Winnings" value={profileDummyData.winnings} />
            </div>
        </div>
    )
}

export default SavingsOverview







