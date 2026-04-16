import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "XXII Convención Anual 2026",
  description:
    "XXII Convención Anual de Especialistas SOCHIVAS — A micrófono abierto. 23 y 24 de abril de 2026, Hotel Santa Cruz, Valle de Colchagua, Chile.",
};

export default function Convencion2026Page() {
  return (
    <section className="bg-navy-dark">
      <div className="container-site pt-10 md:pt-14 pb-10 md:pb-14">
        <p className="text-white/50 text-xs uppercase tracking-widest mb-2">
          Convención 2026
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          XXII Convención Anual de Especialistas
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
            <Image
              src="/images/convencion-2026-banner.jpg"
              alt="Programa XXII Convención Anual SOCHIVAS 2026"
              width={800}
              height={1200}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
