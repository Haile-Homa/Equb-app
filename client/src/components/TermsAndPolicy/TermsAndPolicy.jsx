// src/components/TermsAndPolicy/TermsAndPolicy.jsx
import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { equbDummyData, termsData } from "../../db/data";

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const TermsAndPolicy = () => {
  const { equbId } = useParams();
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  // Initialize the default layout plugin
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // Find the current equb and its PDF URL
  const equb = equbDummyData.find(item => item.equbId === equbId);
  const terms = termsData[equbId];

  useEffect(() => {
    if (terms && terms.pdfUrl) {
      setPdfUrl(terms.pdfUrl);
    }
  }, [equbId, terms]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
      setScrolledToBottom(isAtBottom);
    }
  };

  const handleAccept = () => {
    if (scrolledToBottom) {
      alert("Terms accepted! Welcome to the Equb!");
      navigate("/dashboard");
    }
  };

  const handleDecline = () => {
    if (window.confirm("Are you sure you want to decline the terms?")) {
      navigate("/");
    }
  };

  const handleDownload = () => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `terms-${equb?.name || 'equb'}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // If equb not found
  if (!equb) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-red-600">Equb not found</h1>
        <button 
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen items-center p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">📜 Terms & Policy - {equb.name}</h1>
      <p className="text-gray-600 mb-6">Please read the terms carefully before accepting</p>

      {/* Equb Details Card */}
      <div className="w-full max-w-4xl mb-6 p-4 bg-white rounded-lg shadow border">
        <h3 className="font-semibold text-lg mb-2">Equb Details:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          <div><span className="font-medium">Type:</span> {equb.type.charAt(0).toUpperCase() + equb.type.slice(1)}</div>
          <div><span className="font-medium">Category:</span> {equb.category}</div>
          <div><span className="font-medium">Duration:</span> {equb.duration}</div>
          <div><span className="font-medium">Members:</span> {equb.totalMembers}</div>
          <div><span className="font-medium">Amounts:</span> {equb.amounts.join(", ")} ETB</div>
          <div><span className="font-medium">Fee:</span> {equb.processingFee}</div>
        </div>
      </div>

      {/* PDF Viewer with Worker */}
      <div className="w-full max-w-4xl mb-4">
        {pdfUrl ? (
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="w-full h-[600px] overflow-y-auto border rounded-xl shadow bg-white"
          >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer
                fileUrl={pdfUrl}
                plugins={[defaultLayoutPluginInstance]}
                renderLoader={(percentages) => (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading PDF... {Math.round(percentages)}%</p>
                    </div>
                  </div>
                )}
              />
            </Worker>
          </div>
        ) : (
          <div className="w-full h-96 flex items-center justify-center border rounded-xl bg-white">
            <p className="text-gray-500">PDF terms not available for this Equb</p>
          </div>
        )}
      </div>

      {/* Scroll to bottom indicator */}
      <div className="w-full max-w-4xl mb-4">
        {!scrolledToBottom && (
          <div className="text-orange-600 flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
            <span className="text-lg">⚠️</span>
            <span>Please scroll to the bottom of the PDF to read all terms before accepting</span>
          </div>
        )}

        {scrolledToBottom && (
          <div className="text-green-600 flex items-center gap-2 p-3 bg-green-50 rounded-lg">
            <span className="text-lg">✅</span>
            <span>You've read all terms. You can now accept and join the Equb.</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-4xl">
        <button
          onClick={handleDecline}
          className="flex-1 px-6 py-3 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium transition-colors"
        >
          Decline
        </button>

        <button
          onClick={handleAccept}
          disabled={!scrolledToBottom}
          className={`flex-1 px-6 py-3 rounded-lg text-white font-medium transition-colors ${
            scrolledToBottom 
              ? "bg-green-600 hover:bg-green-700" 
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Accept & Join
        </button>

        <button
          onClick={handleDownload}
          disabled={!pdfUrl}
          className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
            pdfUrl
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          📥 Export PDF
        </button>
      </div>
    </div>
  );
};

export default TermsAndPolicy;


// import React, { useState, useRef } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Document, Page, pdfjs } from "react-pdf";

// // Import your dummy data and PDF mapping
// import { equbDummyData } from "../../db/data";
// import { termsData } from "../../db/data";

// // Setup PDF.js worker
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




// const TermsAndPolicy = () => {
//   const { equbId } = useParams(); // get Equb ID from URL
//   const navigate = useNavigate();
//   const [numPages, setNumPages] = useState(null);
//   const [scrolledToBottom, setScrolledToBottom] = useState(false);
//   const scrollRef = useRef(null);

//   // Find equb from dummy data
//   const equb = equbDummyData.find((e) => e.equbId === equbId);
//   const pdfInfo = termsData[equbId];

//   if (!equb || !pdfInfo) {
//     return <h1 className="text-center mt-20 text-red-600">Equb not found</h1>;
//   }

//   const handleScroll = () => {
//     const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
//     if (scrollTop + clientHeight >= scrollHeight - 5) {
//       setScrolledToBottom(true);
//     }
//   };

//   const handleAccept = () => {
//     navigate(`/equb/join-success?equbId=${equbId}`);
//   };

//   const handleDecline = () => {
//     navigate("/");
//   };

//   return (
//     <div className="flex flex-col min-h-screen items-center p-6 bg-gray-50">
//       <h1 className="text-3xl font-bold mb-4">Terms & Policy - {equb.name}</h1>

//       {/* PDF Viewer */}
//       <div
//         ref={scrollRef}
//         onScroll={handleScroll}
//         className="w-full max-w-2xl h-96 overflow-y-scroll border rounded-xl shadow bg-white p-2"
//       >
//         <Document
//           file={pdfInfo.pdfUrl}
//           onLoadSuccess={({ numPages }) => setNumPages(numPages)}
//         >
//           {numPages &&
//             Array.from({ length: numPages }, (_, index) => (
//               <Page
//                 key={`page_${index + 1}`}
//                 pageNumber={index + 1}
//                 width={600} // adjust width to fit container
//               />
//             ))}
//         </Document>
//       </div>

//       {/* Accept / Decline Buttons */}
//       <div className="flex gap-4 mt-6">
//         <button
//           onClick={handleDecline}
//           className="px-6 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800"
//         >
//           Decline
//         </button>
//         <button
//           onClick={handleAccept}
//           disabled={!scrolledToBottom}
//           className={`px-6 py-2 rounded-lg text-white ${
//             scrolledToBottom
//               ? "bg-green-600 hover:bg-green-700"
//               : "bg-gray-400 cursor-not-allowed"
//           }`}
//         >
//           Accept & Join
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TermsAndPolicy;
