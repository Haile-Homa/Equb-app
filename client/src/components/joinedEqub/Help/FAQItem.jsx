import { FiChevronDown, FiChevronUp, FiHelpCircle } from "react-icons/fi";


const FAQItem = ({ item, isActive, onToggle }) => {
    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden">
            <button
                onClick={onToggle}
                className="flex justify-between items-center w-full p-4 bg-white hover:bg-slate-50 transition-colors font-medium text-gray-800"
            >
                <span className="flex items-center space-x-2">
                    <FiHelpCircle className="w-5 h-5 text-blue-500" />
                    <span>{item.q}</span>
                </span>
                {isActive ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {isActive && (
                <div className="p-4 bg-white text-gray-700 border-t border-slate-200">
                    {item.a}
                </div>
            )}
        </div>
    )
}

export default FAQItem