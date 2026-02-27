import type { Metadata } from "next";
import { getNoticias } from "@/lib/content";
import PageHeader from "@/components/sections/PageHeader";
import NewsCard from "@/components/sections/NewsCard";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Últimas noticias e informativos de SOCHIVAS.",
};

export default function NoticiasPage() {
  const noticias = getNoticias();
  const featured = noticias[0];
  const rest = noticias.slice(1);

  return (
    <>
      <PageHeader title="Informativos" subtitle="Noticias" />

      <section className="bg-muted-light">
        <div className="container-site py-12 md:py-16">
          {featured && (
            <div className="mb-8">
              <NewsCard noticia={featured} featured />
            </div>
          )}

          <div className="space-y-4">
            {rest.map((n) => (
              <NewsCard key={n.slug} noticia={n} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
