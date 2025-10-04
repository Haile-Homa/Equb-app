import { FiHelpCircle } from "react-icons/fi";

const GuidelinesSection = ({ guidelines }) => {
    return (
        <div className="p-4 border border-blue-200 rounded-lg bg-blue-100">
            <h2 className="font-semibold text-lg mb-2 flex items-center space-x-2">
                <FiHelpCircle className="w-5 h-5 text-blue-600" />
                <span>Guidelines</span>
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
                {guidelines.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                ))}
            </ul>
        </div>
    )
}

export default GuidelinesSection