import EqubDetails from "./EqubDetails";
import EqubActions from "./EqubActions";


const EqubCard = ({ equb }) => {
    return (
        <div className="border border-slate-500 rounded-xl overflow-hidden flex flex-col md:flex-row gap-6 p-4">
            {equb.imageUrl && (
                <img
                    src={equb.imageUrl}
                    alt={equb.name}
                    className="w-full md:w-1/3 h-48 md:h-full object-cover rounded-lg shadow-sm md:mt-2"
                />
            )}
            <div className="flex-1 flex flex-col justify-between">
                <EqubDetails equb={equb} />
                <EqubActions equbId={equb.equbId} />
            </div>
        </div>
    )
}

export default EqubCard