import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import { ArrowUpRight, Calendar, MapPin, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Extensión",
  description: "Cursos, convenciones y actividades de extensión de SOCHIVAS.",
};

const cursos = [
  {
    title: "XII° Convención Anual SOCHIVAS 2026",
    date: "23 y 24 de abril, 2026",
    location: "Hotel Santa Cruz, Valle de Colchagua",
    description:
      "La próxima Convención Anual de la Sociedad Chilena de Cirugía Vascular y Endovascular reunirá a los principales expertos del país.",
    url: "https://convencion2026.sochivas.cl",
    highlight: true,
  },
  {
    title: "XI Convención Anual SOCHIVAS 2025",
    date: "2025",
    location: "Hotel The Singular, Puerto Natales",
    description:
      "La Sociedad Chilena de Cirugía Vascular y Endovascular (SOCHIVAS) ha anunciado la realización de su XI Convención Anual, que tendrá lugar en el prestigioso Hotel The Singular, en Puerto Natales.",
    url: "/noticias",
  },
  {
    title: "Curso SOCHIVAS de Enfermedades Vasculares para Atención Primaria",
    date: "Octubre 2025",
    location: "Colegio Médico de Chile",
    description:
      "Rotundo éxito en el Curso SOCHIVAS de Enfermedades Vasculares para Atención Primaria, realizado en colaboración con el Colegio Médico de Chile.",
    url: "/noticias",
  },
  {
    title: "VII Curso Online Accesos Vasculares para Hemodiálisis",
    date: "2021",
    location: "Online",
    description:
      "Curso especializado en accesos vasculares para hemodiálisis, modalidad online.",
    url: "/extension",
  },
  {
    title: "Curso Online Hemodiálisis 2021",
    date: "2021",
    location: "Online",
    description: "Curso de formación continua en hemodiálisis, modalidad virtual.",
    url: "/extension",
  },
  {
    title: "Curso de Atención Primaria — Módulo 1: Pie Diabético",
    date: "13, 20, 27 de octubre, y 3 de noviembre 2020",
    location: "Online",
    description:
      "Módulo dedicado al pie diabético dentro del programa de formación para profesionales de atención primaria.",
    url: "/extension",
  },
  {
    title: "92° Congreso Chileno e Internacional de Cirugía",
    date: "6 al 8 de diciembre de 2020",
    location: "Chile",
    description:
      "Participación de SOCHIVAS en el 92° Congreso Chileno e Internacional de Cirugía.",
    url: "/extension",
  },
];

export default function ExtensionPage() {
  return (
    <>
      <PageHeader title="Extensión" subtitle="Cursos y Convenciones" />

      <section className="bg-muted-light">
        <div className="container-site py-12 md:py-16">
          {/* CTA Cursos */}
          <a
            href="https://info.cursosochivas.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-10 p-6 md:p-8 bg-navy text-white rounded-xl hover:bg-navy-dark transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">
                  Plataforma de Cursos SOCHIVAS
                </h2>
                <p className="text-white/70 text-sm">
                  Accede a todos los cursos online disponibles
                </p>
              </div>
              <ExternalLink
                size={24}
                className="text-white/50 group-hover:text-white transition-colors"
              />
            </div>
          </a>

          <div className="space-y-6">
            {cursos.map((curso) => (
              <article
                key={curso.title}
                className={`card p-6 md:p-8 group ${
                  curso.highlight ? "border-2 border-accent/20" : ""
                }`}
              >
                {curso.highlight && (
                  <span className="badge badge-red mb-4 inline-block">
                    Próximo evento
                  </span>
                )}
                <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-accent transition-colors">
                  {curso.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {curso.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {curso.location}
                  </span>
                </div>
                <p className="text-sm text-body leading-relaxed mb-4">
                  {curso.description}
                </p>
                <a
                  href={curso.url}
                  {...(curso.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:underline"
                >
                  Ver más <ArrowUpRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
