import React from "react";
import { MdHistoryEdu } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { useHistory } from "../context/HistoryContext";

const History = () => {
    const navigate = useNavigate();
    const { history } = useHistory();

    return (
        <div className="space-y-4 sm:space-y-6 mb-6 mt-4 sm:mt-5 px-4 sm:px-6">
            {/* Title */}
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 border-b-2 sm:border-b-4 w-[140px] sm:w-[200px] pb-1 mx-auto text-center border-gray-200">
                Equb History
            </h2>

            {/* History List */}
            <div className="space-y-3 sm:space-y-4">
                {history.length > 0 ? (
                    history.map((item) => (
                        <div
                            key={item.historyId}
                            className="flex items-start sm:items-center p-3 sm:p-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200 bg-white"
                        >
                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <MdHistoryEdu size={32} className="sm:size-10 text-blue-400" />
                            </div>

                            {/* Text + Status */}
                            <div className="ml-3 sm:ml-4 flex-1 min-w-0">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
                                    {item.equbName}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                                    <span className="font-medium">Action:</span> {item.action}{" "}
                                    {item.amount && `- $${item.amount}`}
                                </p>
                                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                                    <span className="font-medium">Type:</span> {item.type} |{" "}
                                    <span className="font-medium">Date:</span> {item.date}
                                </p>

                                {/* Status */}
                                <div
                                    className={`mt-2 inline-block px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium
                                        ${item.status === "success"
                                            ? "bg-green-100 text-green-700"
                                            : item.status === "pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-gray-100 text-gray-700"
                                        }`}
                                >
                                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-8 sm:py-12">
                        <MdHistoryEdu size={48} className="mx-auto text-gray-400 mb-3" />
                        <p className="text-gray-500 text-sm sm:text-base">No history found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default History;