import React, { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.min.js";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

const PdfViewer = ({ pdfUrl }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const loadPdf = async () => {
            const container = containerRef.current;
            const loadingTask = pdfjsLib.getDocument(pdfUrl);
            const pdf = await loadingTask.promise;
            container.innerHTML = "";

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: 2 });
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                await page.render({ canvasContext: context, viewport }).promise;

                canvas.style.width = "100%";
                canvas.style.height = "auto";
                canvas.style.display = "block";
                canvas.style.marginBottom = "24px";

                container.appendChild(canvas);
            }
        };

        if (pdfUrl) loadPdf();
    }, [pdfUrl]);

    return (
        <div
            ref={containerRef}
            className="w-full h-[60vh] overflow-y-auto border rounded-xl shadow border-slate-500 p-2"
        />
    );
};

export default PdfViewer;
