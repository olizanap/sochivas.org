import type { Metadata } from "next";
import Image from "next/image";
import { getDirectorio } from "@/lib/content";
import PageHeader from "@/components/sections/PageHeader";
import { User, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Directorio",
  description: "Directorio 2024-2025 de la Sociedad Chilena de Cirugía Vascular y Endovascular.",
};

const ejecutivoPhotos: Record<string, string> = {
  "Dr. Juan Pablo Moreno": "/images/dr1.png",
  "Dra. Sandra Osorio": "/images/dr2.png",
  "Dr. Eitan Schwartz": "/images/dr3.png",
  "Dr. Francisco Vargas": "/images/dr4.png",
};

export default function DirectorioPage() {
  const dir = getDirectorio();

  return (
    <>
      <PageHeader
        title="Directorio"
        subtitle={`Período ${dir.periodo}`}
      />

      <section className="bg-white">
        <div className="container-site py-12 md:py-16">
          {/* Comité Ejecutivo */}
          <div className="mb-14">
            <p className="section-subtitle">Liderazgo</p>
            <h2 className="section-title mb-8">Comité Ejecutivo</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dir.ejecutivo.map((m) => (
                <div key={m.nombre} className="card p-6 text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-navy/10">
                    {ejecutivoPhotos[m.nombre] ? (
                      <Image
                        src={ejecutivoPhotos[m.nombre]}
                        alt={m.nombre}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-navy/10 to-navy/5 flex items-center justify-center">
                        <User size={32} className="text-navy/40" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-navy text-base mb-1">
                    {m.nombre}
                  </h3>
                  <p className="text-sm text-accent font-medium">{m.cargo}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Directores */}
          <div>
            <p className="section-subtitle">Comités</p>
            <h2 className="section-title mb-8">Directores</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dir.directores.map((m) => (
                <div key={m.nombre} className="card p-6 text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-accent/10">
                    <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                      <Award size={28} className="text-accent/40" />
                    </div>
                  </div>
                  <h3 className="font-bold text-navy text-base mb-1">
                    {m.nombre}
                  </h3>
                  <p className="text-sm text-muted font-medium">{m.cargo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
