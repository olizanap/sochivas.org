import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Agenda",
  description: "Actividades y eventos programados por SOCHIVAS.",
};

const eventos = [
  {
    title: "XII° Convención Anual SOCHIVAS 2026",
    date: "23 y 24 de abril, 2026",
    location: "Hotel Santa Cruz, Valle de Colchagua",
    description:
      "La próxima Convención Anual de SOCHIVAS reunirá a los principales expertos en cirugía vascular y endovascular del país.",
    url: "https://convencion2026.sochivas.cl",
    upcoming: true,
  },
];

export default function AgendaPage() {
  return (
    <>
      <PageHeader title="Actividades" subtitle="Agenda" />

      <section className="bg-muted-light">
        <div className="container-site py-12 md:py-16">
          <div className="mb-8">
            <h2 className="section-title">Próximos Eventos</h2>
          </div>

          {eventos.length > 0 ? (
            <div className="space-y-6">
              {eventos.map((ev) => (
                <article
                  key={ev.title}
                  className="card p-6 md:p-8 border-l-4 border-l-accent group"
                >
                  {ev.upcoming && (
                    <span className="badge badge-red mb-3 inline-block">
                      Próximamente
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-accent transition-colors">
                    {ev.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted mb-3">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={14} />
                      {ev.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {ev.location}
                    </span>
                  </div>
                  <p className="text-sm text-body leading-relaxed mb-4">
                    {ev.description}
                  </p>
                  <a
                    href={ev.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:underline"
                  >
                    Más información <ArrowUpRight size={14} />
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="card p-8 text-center">
              <CalendarDays size={48} className="text-muted/30 mx-auto mb-4" />
              <p className="text-muted">
                No hay eventos programados actualmente.
              </p>
            </div>
          )}

          {/* Calendar placeholder */}
          <div className="mt-12">
            <h2 className="section-title mb-6">Calendario</h2>
            <div className="card p-6">
              <p className="text-sm text-muted flex items-center gap-2">
                <CalendarDays size={16} />
                Eventos en febrero, 2026
              </p>
              <p className="text-xs text-muted/60 mt-2 italic">
                No hay eventos adicionales programados para este mes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
