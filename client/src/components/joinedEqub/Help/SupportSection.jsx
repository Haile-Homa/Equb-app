import { FiHelpCircle } from "react-icons/fi";

const SupportSection = ({ contact }) => {
    return (
        <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">

            <h2 className="font-semibold text-lg mb-2 flex items-center space-x-2">
                <FiHelpCircle className="w-5 h-5 text-blue-600" />
                <span>Contact Support</span>
                
            </h2>
            <p>
                Email:{" "}
                <a className="text-blue-600 hover:underline" href={`mailto:${contact.email}`}>
                    {contact.email}
                </a>
            </p>
            <p>
                Phone:{" "}
                <a className="text-blue-600 hover:underline" href={`tel:${contact.phone}`}>
                    {contact.phone}
                </a>
            </p>
            <p>
                Telegram:{" "}
                <a
                    className="text-blue-600 hover:underline"
                    href={`https://t.me/${contact.telegram.replace("@", "")}`}
                >
                    {contact.telegram}
                </a>
            </p>
        </div>
    )
}

export default SupportSection