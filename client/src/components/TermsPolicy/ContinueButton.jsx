import React from 'react'

const ContinueButton = ({ accepted, onContinue }) => {
    return (
        <div className="mt-2 text-center">
            <button
                onClick={onContinue}
                disabled={!accepted}
                className={`w-full px-4 py-2 rounded-lg font-semibold text-lg transition ${accepted
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
            >
                Continue
            </button>
        </div>
    )
}

export default ContinueButton