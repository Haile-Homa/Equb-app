import React from "react";
import { HiDownload } from "react-icons/hi";

const TermsActions = ({ accepted, setAccepted, pdfUrl, equbId }) => {
    return (
        <div className="mt-4 w-full max-w-4xl flex items-center justify-center space-x-4">
            <label className="flex items-center space-x-3">
                <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    className="w-5 h-5 accent-blue-500"
                />
                <span className="text-gray-700 font-medium text-lg">
                    I agree to the Terms & Policy
                </span>
            </label>

            <a
                href={pdfUrl}
                download={`terms-${equbId}.pdf`}
                className="px-2 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition flex items-center justify-center"
                title="Download PDF"
            >
                <HiDownload className="w-4 h-4" />
            </a>
        </div>
    )
}

export default TermsActions