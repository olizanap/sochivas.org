import {
  Search,
  ArrowRight,
  CalendarDays,
  PlayCircle,
  Instagram,
  FileText,
} from "lucide-react";
import Image from "next/image";
import type { Noticia } from "@/lib/content";

export default function Sidebar({
  recentPosts,
}: {
  recentPosts: Noticia[];
}) {
  return (
    <aside className="space-y-6">
      {/* Search */}
      <div className="card p-5">
        <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-3">
          Buscar en el sitio
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full border border-gray-200 rounded-lg py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
          />
          <Search
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted"
          />
        </div>
      </div>

      {/* CTA Especialista */}
      <a
        href="/directorio"
        className="card block p-5 bg-accent text-white hover:bg-accent-dark transition-colors group"
      >
        <h3 className="font-bold text-base mb-1">Círculo de confianza</h3>
        <p className="text-sm text-white/80 mb-3">
          Encuentra un especialista vascular certificado
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          Buscar especialista
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </span>
      </a>

      {/* Webinar Journal Club */}
      <a
        href="#videoteca"
        className="card block p-5 bg-navy text-white hover:bg-navy-dark transition-colors group"
      >
        <div className="flex items-center gap-3 mb-2">
          <PlayCircle size={24} />
          <h3 className="font-bold text-base">Webinar Journal Club</h3>
        </div>
        <p className="text-sm text-white/70">
          Revisa las sesiones del Journal Club Interuniversitario
        </p>
      </a>

      {/* Convención 2026 */}
      <a
        href="https://convencion2026.sochivas.cl"
        target="_blank"
        rel="noopener noreferrer"
        className="card block overflow-hidden border-2 border-accent/20 hover:border-accent/40 transition-colors group"
      >
        <div className="relative h-32 overflow-hidden">
          <Image
            src="/images/convencion-2026-banner.png"
            alt="XII° Convención SOCHIVAS 2026"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-navy text-base mb-1">
            XII° Convención 2026
          </h3>
          <p className="text-xs text-muted mb-2">23-24 abril · Hotel Santa Cruz, Valle de Colchagua</p>
          <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold">
            Más información
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </span>
        </div>
      </a>

      {/* Calendar mini */}
      <div className="card p-5">
        <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-3 flex items-center gap-2">
          <CalendarDays size={16} />
          Actividades
        </h3>
        <p className="text-sm text-muted">
          Eventos en febrero, 2026
        </p>
        <p className="text-xs text-muted/60 mt-2 italic">
          No hay eventos programados este mes.
        </p>
      </div>

      {/* Instagram placeholder */}
      <div className="card p-5">
        <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-3 flex items-center gap-2">
          <Instagram size={16} />
          Instagram
        </h3>
        <div className="grid grid-cols-3 gap-1.5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded"
            />
          ))}
        </div>
      </div>

      {/* Entradas recientes */}
      <div className="card p-5">
        <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
          <FileText size={16} />
          Entradas recientes
        </h3>
        <ul className="space-y-3">
          {recentPosts.slice(0, 5).map((post) => (
            <li key={post.slug}>
              <a
                href="/noticias"
                className="text-sm text-body hover:text-accent transition-colors leading-snug block"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
