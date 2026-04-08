"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import BannerConvencion from "@/components/BannerConvencion";

export default function BannerPage() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const downloadPDF = async () => {
    if (!bannerRef.current) return;
    setLoading(true);
    try {
      const dataUrl = await toPng(bannerRef.current, {
        pixelRatio: 3,
        quality: 1,
      });

      const img = new Image();
      img.src = dataUrl;
      await new Promise((resolve) => (img.onload = resolve));

      const pdfWidth = 210;
      const pdfHeight = (img.height * pdfWidth) / img.width;

      const pdf = new jsPDF({
        orientation: pdfHeight > pdfWidth ? "portrait" : "landscape",
        unit: "mm",
        format: [pdfWidth, pdfHeight],
      });

      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("XXII-Convencion-SOCHIVAS-2026.pdf");
    } catch (err) {
      console.error("Error generando PDF:", err);
      alert("Error al generar el PDF. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  const downloadPNG = async () => {
    if (!bannerRef.current) return;
    setLoading(true);
    try {
      const dataUrl = await toPng(bannerRef.current, {
        pixelRatio: 3,
        quality: 1,
      });
      const link = document.createElement("a");
      link.download = "XXII-Convencion-SOCHIVAS-2026.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Error generando PNG:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Toolbar */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-sm font-bold text-navy">Banner Convención 2026</h1>
            <p className="text-xs text-muted">Editable en React — sin logos alucinados</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={downloadPNG}
              disabled={loading}
              className="px-4 py-2 text-sm font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              {loading ? "Generando..." : "Descargar PNG"}
            </button>
            <button
              onClick={downloadPDF}
              disabled={loading}
              className="px-4 py-2 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50"
            >
              {loading ? "Generando..." : "Descargar PDF"}
            </button>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden mx-auto" style={{ maxWidth: 794 }}>
          <BannerConvencion ref={bannerRef} />
        </div>
        <p className="text-center text-xs text-muted mt-4">
          Para editar el contenido, modifica el archivo <code className="bg-gray-200 px-1 rounded">src/components/BannerConvencion.tsx</code>
        </p>
      </div>
    </div>
  );
}
