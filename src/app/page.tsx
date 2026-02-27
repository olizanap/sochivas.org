import Hero from "@/components/sections/Hero";
import NewsCard from "@/components/sections/NewsCard";
import Sidebar from "@/components/sections/Sidebar";
import { getNoticias } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const noticias = getNoticias();
  const featured = noticias[0];
  const rest = noticias.slice(1);

  return (
    <>
      <Hero />

      {/* News + Sidebar 2-column layout */}
      <section className="bg-muted-light">
        <div className="container-site py-12 md:py-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main column */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="section-subtitle">Últimas publicaciones</p>
                  <h2 className="section-title !mb-0">Informativos</h2>
                </div>
                <a
                  href="/noticias"
                  className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  Ver todas <ArrowRight size={16} />
                </a>
              </div>

              {/* Featured */}
              {featured && (
                <div className="mb-6">
                  <NewsCard noticia={featured} featured />
                </div>
              )}

              {/* Rest */}
              <div className="space-y-4">
                {rest.map((n) => (
                  <NewsCard key={n.slug} noticia={n} />
                ))}
              </div>

              <div className="mt-8 sm:hidden">
                <a href="/noticias" className="btn-primary w-full justify-center">
                  Ver todas las noticias <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 xl:w-96 shrink-0">
              <Sidebar recentPosts={noticias} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
