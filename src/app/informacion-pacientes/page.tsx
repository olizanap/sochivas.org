import type { Metadata } from "next";
import { getPacientesTemas } from "@/lib/content";
import PageHeader from "@/components/sections/PageHeader";
import { ArrowUpRight, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Información a Pacientes",
  description:
    "Temas de salud vascular para pacientes. Información proporcionada por especialistas de SOCHIVAS.",
};

export default function InformacionPacientesPage() {
  const temas = getPacientesTemas();

  return (
    <>
      <PageHeader title="Temas de Salud" subtitle="Información a Pacientes" />

      <section className="bg-muted-light">
        <div className="container-site py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {temas.map((tema) => (
              <article key={tema.slug} className="card p-6 group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Heart size={20} className="text-accent" />
                </div>
                <h3 className="font-bold text-navy text-lg mb-3 group-hover:text-accent transition-colors">
                  {tema.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-4">
                  {tema.excerpt}
                </p>
                <a
                  href={tema.url}
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
