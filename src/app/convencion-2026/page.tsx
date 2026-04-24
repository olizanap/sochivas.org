import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, MapPin, FileText } from "lucide-react";
import { getConvencion } from "@/lib/content";

export function generateMetadata(): Metadata {
  const conv = getConvencion();
  return {
    title: `${conv.numero} ${conv.title} ${conv.fechaInicio?.slice(0, 4) || ""}`.trim(),
    description: `${conv.numero} ${conv.title} — ${conv.subtitle}. ${conv.fechasTexto}, ${conv.lugar}.`,
  };
}

export default function Convencion2026Page() {
  const conv = getConvencion();

  return (
    <section className="bg-navy-dark">
      <div className="container-site pt-10 md:pt-14 pb-10 md:pb-14">
        <p className="text-white/50 text-xs uppercase tracking-widest mb-2">
          {conv.numero} {conv.title}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          {conv.subtitle || `${conv.numero} ${conv.title} de Especialistas`}
        </h1>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/70 text-sm mb-8">
          {conv.fechasTexto && (
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} />
              {conv.fechasTexto}
            </span>
          )}
          {conv.lugar && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} />
              {conv.lugar}
            </span>
          )}
          {conv.programaPdf && (
            <a
              href={conv.programaPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent hover:text-white transition-colors font-semibold"
            >
              <FileText size={14} />
              Descargar programa (PDF)
            </a>
          )}
        </div>

        {conv.banner && (
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
              <Image
                src={conv.banner}
                alt={`Programa ${conv.numero} ${conv.title} SOCHIVAS`}
                width={800}
                height={1200}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        )}

        {conv.content && conv.content.trim() && (
          <div className="max-w-3xl mx-auto mt-10 text-white/80 leading-relaxed whitespace-pre-line">
            {conv.content.trim()}
          </div>
        )}
      </div>
    </section>
  );
}
