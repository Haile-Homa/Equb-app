// src/components/TermsAndPolicy/PdfViewer.jsx
import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";

// ✅ Use CDN worker
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://unpkg.com/pdfjs-dist@5.4.149/build/pdf.worker.min.js";

const PdfViewer = ({ pdfUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        console.log("📄 PDF URL:", pdfUrl);

        // Load PDF
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        console.log("✅ PDF loaded:", pdf);

        // Get first page
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1.5 });

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = { canvasContext: context, viewport };
        await page.render(renderContext).promise;

        console.log("✅ Page rendered successfully");
      } catch (err) {
        console.error("❌ Error loading PDF:", err);
      }
    };

    loadPdf();
  }, [pdfUrl]);

  return <canvas ref={canvasRef} className="w-full border rounded" />;
};

export default PdfViewer;
