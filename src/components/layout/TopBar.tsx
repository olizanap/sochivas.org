import { User } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-navy-dark text-white text-xs">
      <div className="container-site flex items-center justify-between h-9">
        <span className="tracking-wide">
          Sociedad Chilena de Cirugía Vascular y Endovascular
        </span>
        <a
          href="#area-socios"
          className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
        >
          <User size={14} />
          <span className="hidden sm:inline">Área Socios</span>
        </a>
      </div>
    </div>
  );
}
