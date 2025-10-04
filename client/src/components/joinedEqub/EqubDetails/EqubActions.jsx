import { useNavigate } from "react-router-dom";


const EqubActions = ({ equbId }) => {

    const navigate = useNavigate();
    return (
        <div className="flex flex-col md:flex-row gap-4 mt-2">
            <button
                className="flex-1 text-gray-600 font-medium hover:underline text-center"
                onClick={() => navigate("/")}
            >
                Cancel
            </button>
            <button
                className="flex-1 bg-gray-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                onClick={() => navigate(`/equb/${equbId}/payment`)}
            >
                Proceed to Payment
            </button>
        </div>
    )
}

export default EqubActions