import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { termsData } from "../../db/data";
import PdfViewer from "../../components/TermsPolicy/PdfViewer";
import TermsActions from "../../components/TermsPolicy/TermsActions";
import ContinueButton from "../../components/TermsPolicy/ContinueButton";

const TermsPolicy = () => {

    const { equbId } = useParams();
    const navigate = useNavigate();
    const pdfUrl = termsData[equbId]?.pdfUrl;
    const [accepted, setAccepted] = useState(false);

    const handleContinue = () => {
        if (accepted) {
            navigate(`/equb/${equbId}/joined`);
        }
    };

    if (!pdfUrl) {
        return <p className="p-6">❌ No Terms PDF found for this Equb.</p>;
    }

    return (
        <div className="flex flex-col items-center p-2">
            <div className="mt-4">
                <h1 className="text-xl font-medium text-gray-800 mb-6 border-b w-[200px] pb-1 border-slate-400 text-center mx-auto">
                    Terms & Policy
                </h1>

                <PdfViewer pdfUrl={pdfUrl} />

                <TermsActions
                    accepted={accepted}
                    setAccepted={setAccepted}
                    pdfUrl={pdfUrl}
                    equbId={equbId}
                />

                <ContinueButton accepted={accepted} onContinue={handleContinue} />
            </div>
        </div>
    );
};

export default TermsPolicy;














