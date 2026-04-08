import type { Metadata } from "next";
import {
  CalendarDays,
  MapPin,
  Clock,
  Coffee,
  UtensilsCrossed,
  Users,
} from "lucide-react";
import BannerConvencionSection from "./BannerConvencionSection";

export const metadata: Metadata = {
  title: "XXII Convención Anual 2026",
  description:
    "XXII Convención Anual de Especialistas SOCHIVAS — A micrófono abierto. 23 y 24 de abril de 2026, Hotel Santa Cruz, Valle de Colchagua, Chile.",
};

const programaJueves = [
  { hora: "PM", titulo: "Check in", icon: "clock" },
  { hora: "", titulo: "Encuentro con nuestros auspiciadores", icon: "users" },
  { hora: "19:30 hrs", titulo: "Asamblea anual de socios", icon: "users" },
  { hora: "21:00 hrs", titulo: "Cena anual", icon: "utensils" },
];

const programaViernes = [
  {
    hora: "09:00 – 10:00",
    titulo: '"Desayuno con los becados"',
    subtitulo: "Casos clínicos",
    tipo: "actividad",
  },
  {
    hora: "10:00 – 11:30",
    titulo: "Foro: Accesos vasculares",
    tipo: "foro",
  },
  { hora: "11:30 – 12:00", titulo: "Café", tipo: "pausa" },
  { hora: "12:00 – 13:30", titulo: "Foro: Venas", tipo: "foro" },
  { hora: "13:30 – 15:00", titulo: "Almuerzo", tipo: "pausa" },
  {
    hora: "15:00 – 16:30",
    titulo: "Foro: Enfermedad periférica",
    tipo: "foro",
  },
  { hora: "16:30 – 17:00", titulo: "Café", tipo: "pausa" },
  {
    hora: "17:00 – 18:30",
    titulo: "Foro: Aorta, misceláneos y cierre",
    tipo: "foro",
  },
];

const sociosCol1 = [
  "Dr. Alonso Bulboa",
  "Dr. Patricio Huerta",
  "Dr. Juan Carlos Bravo",
  "Dr. Carlos Torres",
  "Dr. Alexis Bustos",
  "Dr. Juan Pablo Moreno",
  "Dr. Francisco Acuña",
  "Dr. Cristian Salas",
  "Dr. Juan Marin",
  "Dr. Benigno Valda",
];

const sociosCol2 = [
  "Dr. Victor Vera",
  "Dra. Andrea Gomez",
  "Dr. Leopoldo Marine",
  "Dr. Carlos Torres",
  "Dr. Eitan Schwartz",
  "Dr. Rodrigo Julio",
  "Dr. Victor Bianchi",
  "Dr. Michel Bergoeing",
  "Dr. Albrecht Kramer",
  "Dr. Alfonso Velasquez",
];

const sociosCol3 = [
  "Dra. Francisca Gonzalez",
  "Dr. Juan Bombin",
  "Dra. Beatriz Retamales",
  "Dr. Nelson Sepulveda",
  "Dr. Alejo Chavez",
  "Dra. Stephanie Siegel",
  "Dr. Lucien Chassin-Trubert",
  "Dr. Ranfis Valerio",
  "Dr. Juan Pablo Fuenzalida",
  "Dr. Vicente Rodriguez",
  "Dr. Felipe Corvalan",
  "Dr. Gabriel Cassorla",
  "Dr. Ivan Galleguillos",
];

const auspiciadores = [
  "Cencomex",
  "Ciclomed",
  "Penumbra",
  "Prismamed",
  "Essity",
  "Inari Medical",
  "Stryker",
  "Medtronic",
  "Terumo",
  "Grupo Chic",
  "Varimed",
  "Axon Pharma",
  "Varifarma",
  "Optivisión",
  "Urgo Medical",
  "Vitalmed",
  "LeMare",
  "Boston Scientific",
  "Theodoluz",
  "Biohertz",
  "TH Medical",
  "Camir",
  "CMS Medical",
];

function TipoIcon({ tipo }: { tipo: string }) {
  switch (tipo) {
    case "pausa":
      return <Coffee size={16} className="text-amber-600" />;
    case "foro":
      return <Users size={16} className="text-navy" />;
    default:
      return <Clock size={16} className="text-accent" />;
  }
}

export default function Convencion2026Page() {
  return (
    <>
      {/* Header + Banner integrados */}
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
              <BannerConvencionSection />
            </div>
          </div>
        </div>
      </section>

      {/* Programa */}
      <section className="bg-muted-light">
        <div className="container-site py-12 md:py-16">
          <p className="section-subtitle">Programa</p>
          <h2 className="section-title mb-10">Agenda del Evento</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Jueves */}
            <div className="card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="badge badge-red">Jueves</span>
                <h3 className="text-lg font-bold text-navy">23 de Abril</h3>
              </div>
              <ul className="space-y-4">
                {programaJueves.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0">
                      {item.icon === "utensils" ? (
                        <UtensilsCrossed size={16} className="text-accent" />
                      ) : item.icon === "users" ? (
                        <Users size={16} className="text-navy" />
                      ) : (
                        <Clock size={16} className="text-muted" />
                      )}
                    </span>
                    <div>
                      <p className="font-semibold text-navy text-sm">
                        {item.titulo}
                      </p>
                      {item.hora && (
                        <p className="text-xs text-muted">{item.hora}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Viernes */}
            <div className="card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="badge badge-blue">Viernes</span>
                <h3 className="text-lg font-bold text-navy">24 de Abril</h3>
              </div>
              <ul className="space-y-3">
                {programaViernes.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 p-2 rounded-lg ${
                      item.tipo === "foro" ? "bg-navy/5" : ""
                    }`}
                  >
                    <span className="mt-0.5 shrink-0">
                      <TipoIcon tipo={item.tipo} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <span className="text-xs font-mono text-muted whitespace-nowrap">
                          {item.hora}
                        </span>
                        <p
                          className={`text-sm ${
                            item.tipo === "foro"
                              ? "font-bold text-navy"
                              : "text-body"
                          }`}
                        >
                          {item.titulo}
                        </p>
                      </div>
                      {item.subtitulo && (
                        <p className="text-xs text-muted italic mt-0.5">
                          {item.subtitulo}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Socios Participantes */}
      <section className="bg-white">
        <div className="container-site py-12 md:py-16">
          <p className="section-subtitle">Socios</p>
          <h2 className="section-title mb-10">Socios Participantes</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[sociosCol1, sociosCol2, sociosCol3].map((col, ci) => (
              <ul key={ci} className="space-y-2">
                {col.map((nombre) => (
                  <li
                    key={nombre}
                    className="flex items-center gap-2 text-sm text-body"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {nombre}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* Auspiciadores */}
      <section className="bg-muted-light border-t border-gray-200">
        <div className="container-site py-12 md:py-16">
          <p className="section-subtitle text-center">Patrocinadores</p>
          <h2 className="section-title text-center mb-10">Auspician</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {auspiciadores.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="bg-white border border-gray-200 rounded-lg px-5 py-3 text-sm font-semibold text-navy/70 hover:text-navy hover:border-accent/30 transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sede */}
      <section className="bg-white">
        <div className="container-site py-12 md:py-16">
          <div className="card p-6 md:p-8 border-l-4 border-l-accent">
            <h3 className="text-lg font-bold text-navy mb-3">Sede del Evento</h3>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-body">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-accent shrink-0" />
                <span>
                  <strong>Hotel Santa Cruz</strong>, Valle de Colchagua, Chile
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays size={16} className="text-accent shrink-0" />
                <span>23 y 24 de abril de 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
