import { Calendar, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Noticia } from "@/lib/content";

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsCard({
  noticia,
  featured = false,
}: {
  noticia: Noticia;
  featured?: boolean;
}) {
  const badgeClass =
    noticia.categoryColor === "red" ? "badge-red" : "badge-blue";

  const imgSrc = noticia.image && noticia.image !== "/images/journal-club.jpg"
    ? noticia.image
    : "/images/header-web-sochivas.png";

  if (featured) {
    return (
      <article className="card group">
        <div className="relative h-52 bg-navy/5 overflow-hidden">
          <Image
            src={imgSrc}
            alt={noticia.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className={cn("badge", badgeClass)}>{noticia.category}</span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-muted text-xs mb-3">
            <Calendar size={13} />
            <time dateTime={noticia.date}>{formatDate(noticia.date)}</time>
          </div>
          <h3 className="text-lg font-bold text-navy leading-snug mb-3 group-hover:text-accent transition-colors">
            <a href={noticia.url}>
              {noticia.title}
            </a>
          </h3>
          <p className="text-sm text-muted leading-relaxed line-clamp-3">
            {noticia.excerpt}
          </p>
          <a
            href={noticia.url}
            className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-4 hover:underline"
          >
            Leer más <ArrowUpRight size={14} />
          </a>
        </div>
      </article>
    );
  }

  return (
    <article className="card group flex flex-col sm:flex-row">
      <div className="relative sm:w-48 h-40 sm:h-auto bg-navy/5 overflow-hidden shrink-0">
        <Image
          src={imgSrc}
          alt={noticia.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 z-10">
          <span className={cn("badge text-[10px]", badgeClass)}>
            {noticia.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-2 text-muted text-xs mb-2">
          <Calendar size={12} />
          <time dateTime={noticia.date}>{formatDate(noticia.date)}</time>
        </div>
        <h3 className="text-base font-bold text-navy leading-snug mb-2 group-hover:text-accent transition-colors">
          <a href={noticia.url}>
            {noticia.title}
          </a>
        </h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-2">
          {noticia.excerpt}
        </p>
        <a
          href={noticia.url}
          className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-3 hover:underline"
        >
          Leer más <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  );
}
