import { ArrowRight, Search, CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-dark">
      {/* Fondo con gradientes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_80%,rgba(192,57,43,0.15),transparent),radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(74,144,217,0.12),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-dark/90 to-navy/70" />
        {/* Vascular lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          viewBox="0 0 1200 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M-50,350 Q150,80 350,300 T700,250 T1050,320 T1300,200" stroke="#c0392b" strokeWidth="2.5" fill="none" />
          <path d="M0,450 Q250,180 400,380 T750,200 T1000,400 T1300,280" stroke="#4a90d9" strokeWidth="2" fill="none" />
          <path d="M100,150 Q200,400 400,200 T700,400 T950,180 T1250,380" stroke="#c0392b" strokeWidth="1.5" fill="none" />
          <path d="M-100,250 Q100,500 350,250 T600,450 T900,250 T1200,450" stroke="#4a90d9" strokeWidth="1" fill="none" />
        </svg>
        {/* Glow accents */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-navy-light/15 rounded-full blur-3xl" />
      </div>

      <div className="container-site relative z-10 py-8 sm:py-12 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-14">
          {/* Texto */}
          <div className="flex-1 min-w-0">
            <a
              href="/convencion-2026"
              className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-white/90 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 hover:bg-accent/30 transition-colors"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              XXII Convención 2026
            </a>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-4 tracking-tight">
              Sochivas
            </h1>
            <p className="text-base sm:text-xl text-white/70 mb-5 sm:mb-8 max-w-2xl leading-relaxed">
              Sociedad Chilena de Cirugía Vascular y Endovascular
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
              <a href="/la-sociedad" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-navy font-semibold text-sm rounded-lg hover:bg-gray-100 transition-all">
                Conocer más
                <ArrowRight size={16} />
              </a>
              <a href="/directorio" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-white/30 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all">
                <Search size={16} />
                Buscar Especialista
              </a>
            </div>

            {/* Invitación convención — solo mobile */}
            <a
              href="/convencion-2026"
              className="md:hidden mt-6 flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 hover:bg-white/15 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm mb-1">
                  XXII Convención Anual
                </p>
                <div className="flex flex-col gap-0.5 text-white/50 text-xs">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={11} />
                    23 y 24 de abril, 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    Hotel Santa Cruz, Colchagua
                  </span>
                </div>
                <p className="text-accent text-xs font-semibold mt-1.5 flex items-center gap-1">
                  Ver programa <ArrowRight size={12} />
                </p>
              </div>
            </a>
          </div>

          {/* Folleto convención — solo desktop/tablet */}
          <a
            href="/convencion-2026"
            className="hidden md:block md:max-w-[360px] lg:max-w-[420px] shrink-0 group relative"
          >
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-3 bg-navy-light/10 rounded-3xl blur-xl" />
            <div className="relative lg:rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/15 group-hover:border-accent/30 transition-all duration-500 group-hover:shadow-[0_25px_70px_rgba(192,57,43,0.25)]">
                <Image
                  src="/images/convencion-2026-banner.jpg"
                  alt="Programa XXII Convención Anual SOCHIVAS 2026"
                  width={420}
                  height={630}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="text-center text-white/40 text-xs mt-3 group-hover:text-accent transition-colors duration-300">
              Ver programa completo →
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
