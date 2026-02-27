import type { Metadata } from "next";
import Image from "next/image";
import { getWebinars, getActiveWebinar } from "@/lib/content";
import PageHeader from "@/components/sections/PageHeader";
import {
  PlayCircle,
  Calendar,
  User,
  Video,
  ArrowRight,
  Clock,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Webinars",
  description:
    "Journal Club Interuniversitario SOCHIVAS. Webinars mensuales de actualización en cirugía vascular y endovascular.",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/
  );
  if (match) return `https://www.youtube.com/embed/${match[1]}`;
  return null;
}

export default function WebinarsPage() {
  const active = getActiveWebinar();
  const allWebinars = getWebinars();
  const pastWebinars = allWebinars.filter((w) => !w.active);

  return (
    <>
      <PageHeader
        title="Webinars"
        subtitle="Journal Club Interuniversitario SOCHIVAS"
      />

      {/* Webinar activo */}
      {active && (
        <section className="bg-navy-dark text-white">
          <div className="container-site py-12 md:py-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center gap-2 bg-accent/20 border border-accent/30 text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Webinar del mes
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Video / Thumbnail */}
              <div className="lg:col-span-3">
                {active.videoUrl && getYouTubeEmbedUrl(active.videoUrl) ? (
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                    <iframe
                      src={getYouTubeEmbedUrl(active.videoUrl)!}
                      title={active.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-navy">
                    <Image
                      src={active.thumbnailUrl}
                      alt={active.title}
                      fill
                      className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                        <Clock size={36} className="text-white" />
                      </div>
                      <p className="text-lg font-bold">Próximamente</p>
                      <p className="text-sm text-white/60 mt-1">
                        El video estará disponible después de la sesión
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4 leading-snug">
                  {active.title}
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {active.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar size={16} className="text-accent shrink-0" />
                    <span>{formatDate(active.date)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <User size={16} className="text-accent shrink-0" />
                    <div>
                      <span className="font-semibold">{active.speaker}</span>
                      <span className="text-white/50 ml-1">
                        — {active.speakerRole}
                      </span>
                    </div>
                  </div>
                </div>

                {active.videoUrl && (
                  <a
                    href={active.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent inline-flex"
                  >
                    <PlayCircle size={18} />
                    Ver en YouTube
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Archivo de webinars */}
      <section className="bg-muted-light">
        <div className="container-site py-12 md:py-16">
          <p className="section-subtitle">Archivo</p>
          <h2 className="section-title mb-8">Sesiones anteriores</h2>

          {pastWebinars.length === 0 ? (
            <p className="text-muted text-sm">
              No hay sesiones anteriores disponibles aún.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastWebinars.map((webinar) => {
                const embedUrl = getYouTubeEmbedUrl(webinar.videoUrl);
                return (
                  <article key={webinar.slug || webinar.date} className="card group overflow-hidden">
                    {/* Thumbnail */}
                    <div className="relative aspect-video bg-navy/5 overflow-hidden">
                      {embedUrl ? (
                        <a
                          href={webinar.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block relative w-full h-full"
                        >
                          <Image
                            src={webinar.thumbnailUrl}
                            alt={webinar.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                              <PlayCircle size={28} className="text-white" />
                            </div>
                          </div>
                          <div className="absolute top-3 right-3">
                            <span className="bg-accent text-white text-[10px] font-bold uppercase px-2 py-1 rounded">
                              <Video size={10} className="inline mr-1" />
                              Video
                            </span>
                          </div>
                        </a>
                      ) : (
                        <Image
                          src={webinar.thumbnailUrl}
                          alt={webinar.title}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-4 text-xs text-muted mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {formatDate(webinar.date)}
                        </span>
                      </div>

                      <h3 className="font-bold text-navy text-base leading-snug mb-2 group-hover:text-accent transition-colors">
                        {webinar.title}
                      </h3>

                      <div className="flex items-center gap-2 text-xs text-muted mb-3">
                        <User size={12} />
                        <span>{webinar.speaker}</span>
                      </div>

                      <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4">
                        {webinar.description}
                      </p>

                      {embedUrl ? (
                        <a
                          href={webinar.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:underline"
                        >
                          <PlayCircle size={14} />
                          Ver grabación
                          <ArrowRight size={14} />
                        </a>
                      ) : (
                        <span className="text-xs text-muted/60 italic">
                          Video no disponible
                        </span>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="container-site py-12 text-center">
          <div className="max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-navy mb-3">
              ¿Quieres participar?
            </h3>
            <p className="text-sm text-muted mb-6">
              El Journal Club Interuniversitario se realiza una vez al mes y está
              abierto a cirujanos vasculares, residentes y fellows. Contáctanos
              para más información.
            </p>
            <a href="/contacto" className="btn-primary inline-flex">
              Contactar SOCHIVAS
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
