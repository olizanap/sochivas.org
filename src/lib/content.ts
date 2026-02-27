import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content");

export interface Noticia {
  title: string;
  date: string;
  category: string;
  categoryColor: string;
  excerpt: string;
  slug: string;
  url: string;
  image: string;
  content: string;
}

export interface PacienteTema {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  url: string;
  content: string;
}

export interface DirectorioMember {
  cargo: string;
  nombre: string;
}

export interface DirectorioData {
  title: string;
  periodo: string;
  ejecutivo: DirectorioMember[];
  directores: DirectorioMember[];
}

export interface SociedadData {
  title: string;
  content: string;
}

function getMarkdownFiles(subdir: string) {
  const dir = path.join(contentDir, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      return { ...data, content } as Record<string, unknown> & { content: string };
    });
}

export function getNoticias(): Noticia[] {
  return getMarkdownFiles("noticias")
    .map((item) => ({
      title: String(item.title || ""),
      date: String(item.date || ""),
      category: String(item.category || "Noticias"),
      categoryColor: String(item.categoryColor || "blue"),
      excerpt: String(item.excerpt || ""),
      slug: String(item.slug || ""),
      url: String(item.url || "#"),
      image: String(item.image || ""),
      content: item.content,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPacientesTemas(): PacienteTema[] {
  return getMarkdownFiles("pacientes")
    .map((item) => ({
      title: String(item.title || ""),
      date: String(item.date || ""),
      excerpt: String(item.excerpt || ""),
      slug: String(item.slug || ""),
      url: String(item.url || "#"),
      content: item.content,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getSociedad(): SociedadData {
  const filePath = path.join(contentDir, "sociedad.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return { title: String(data.title || ""), content };
}

export function getDirectorio(): DirectorioData {
  const filePath = path.join(contentDir, "directorio.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: String(data.title || "Directorio"),
    periodo: String(data.periodo || ""),
    ejecutivo: [
      { cargo: "Presidente", nombre: "Dr. Juan Pablo Moreno" },
      { cargo: "Vice Presidenta", nombre: "Dra. Sandra Osorio" },
      { cargo: "Secretario", nombre: "Dr. Eitan Schwartz" },
      { cargo: "Tesorero", nombre: "Dr. Francisco Vargas" },
    ],
    directores: [
      { cargo: "Presidente Comité Científico", nombre: "Dr. Alonso Bulboa" },
      { cargo: "Presidente Comité de Credenciales", nombre: "Dr. Leopoldo Mariné Massa" },
      { cargo: "Presidente Comité de Comunicaciones", nombre: "Dr. Carlo Zúñiga" },
      { cargo: "Presidente Comité Gremial", nombre: "Dr. Rodrigo Julio Araya" },
    ],
  };
}
