import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-dark">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/slider-convencion-2025.png"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-dark/95 to-navy/80" />
        {/* Subtle vascular lines overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05]"
          viewBox="0 0 1200 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M100,300 Q250,100 400,300 T700,300 T1000,250 T1300,350" stroke="#c0392b" strokeWidth="3" fill="none" />
          <path d="M0,400 Q200,200 350,350 T650,250 T900,400 T1200,300" stroke="#4a90d9" strokeWidth="2" fill="none" />
          <path d="M50,200 Q150,350 300,200 T550,350 T800,200 T1100,350" stroke="#c0392b" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      <div className="container-site relative z-10 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          {/* Convention badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-white/90 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            XII° Convención Anual 2026 — 23 y 24 de abril, Hotel Santa Cruz, Valle de Colchagua
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            Sochivas
          </h1>
          <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl leading-relaxed">
            Sociedad Chilena de Cirugía Vascular y Endovascular
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/la-sociedad" className="btn-primary !bg-white !text-navy hover:!bg-gray-100">
              Conocer la Sociedad
              <ArrowRight size={18} />
            </a>
            <a
              href="/directorio"
              className="btn-accent"
            >
              <Search size={18} />
              Buscar Especialista
            </a>
          </div>
        </div>

        {/* Dots indicator (decorative) */}
        <div className="flex items-center gap-2 mt-12">
          <span className="w-8 h-2 rounded-full bg-accent" />
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span className="w-2 h-2 rounded-full bg-white/30" />
        </div>
      </div>
    </section>
  );
}
