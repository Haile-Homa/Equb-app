import React from "react";
import { MdHistoryEdu } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { useHistory } from "../context/HistoryContext"; // import hook



const History = () => {


    const navigate = useNavigate();
    const { history } = useHistory(); // get history from context


    return (

        <div className="space-y-6 mb-6 mt-5 md:px-6">
            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b-4 w-[200px] pb-1 mx-auto text-center border-gray-200">
                Equb History
            </h2>

            {/* History List */}
            <div className="space-y-4">
                {history.length > 0 ? (
                    history.map((item) => (
                        <div
                            key={item.historyId}
                            className="flex items-center p-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
                        >
                            {/* Icon */}
                            <MdHistoryEdu size={40} color="#63b3ed" />

                            {/* Text + Status */}
                            <div className="ml-4 flex-1">
                                <h3 className="text-lg font-semibold text-gray-800">{item.equbName}</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    <span className="font-medium">Action:</span> {item.action}{" "}
                                    {item.amount && `- $${item.amount}`}
                                </p>
                                <p className="text-gray-500 text-sm mt-1">
                                    <span className="font-medium">Type:</span> {item.type} |{" "}
                                    <span className="font-medium">Date:</span> {item.date}
                                </p>

                                {/* Status below text */}
                                <div
                                    className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-medium
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
                    <p className="text-center text-gray-500">No history found.</p>
                )}
            </div>
        </div>


    );
};


export default History