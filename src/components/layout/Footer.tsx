import { Heart, Mail, MapPin, ExternalLink } from "lucide-react";
import Logo from "./Logo";

const quickLinks = [
  { label: "La Sociedad", href: "/la-sociedad" },
  { label: "Directorio", href: "/directorio" },
  { label: "Noticias", href: "/noticias" },
  { label: "Extensión", href: "/extension" },
  { label: "Info. Pacientes", href: "/informacion-pacientes" },
  { label: "Contacto", href: "/contacto" },
];

const externalLinks = [
  { label: "Buscar Especialista", href: "/directorio" },
  { label: "Convención 2026", href: "https://convencion2026.sochivas.cl", external: true },
  { label: "Cursos Online", href: "https://info.cursosochivas.cl", external: true },
  { label: "Webinars Journal Club", href: "/webinars" },
  { label: "Galería", href: "#galeria" },
  { label: "Área Socios", href: "#area-socios" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo compact white />
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Sociedad científica fundada en 2013, dedicada al estudio y avance
              de la Cirugía Vascular y Endovascular en Chile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Recursos
            </h4>
            <ul className="space-y-2">
              {externalLinks.map((link) => {
                const isExternal = "external" in link && link.external;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      {isExternal && <ExternalLink size={11} />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Santiago, Chile</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a
                  href="mailto:contacto@sochivas.cl"
                  className="hover:text-white transition-colors"
                >
                  contacto@sochivas.cl
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} SOCHIVAS — Sociedad Chilena de Cirugía
            Vascular y Endovascular. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1">
            Hecho con <Heart size={12} className="text-accent" /> en Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
