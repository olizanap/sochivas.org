"use client";

import { forwardRef } from "react";

/* ── Data ─────────────────────────────────────────────── */

const programaJueves = [
  { texto: "Check in PM" },
  { texto: "Encuentro con nuestros auspiciadores" },
  { texto: "Asamblea anual de socios", hora: "19:30 hrs" },
  { texto: "Cena anual", hora: "21:00 hrs" },
];

const programaViernes = [
  { hora: "09:00–10:00", titulo: '"Desayuno con los becados"', sub: "(casos clínicos)" },
  { hora: "10:00–11:30", titulo: "Foro:", bold: "Accesos vasculares" },
  { hora: "11:30–12:00", titulo: "Café" },
  { hora: "12:00–13:30", titulo: "Foro:", bold: "Venas" },
  { hora: "13:30–15:00", titulo: "Almuerzo" },
  { hora: "15:00–16:30", titulo: "Foro:", bold: "Enfermedad periférica" },
  { hora: "16:30–17:00", titulo: "Café" },
  { hora: "17:00–18:30", titulo: "Foro:", bold: "Aorta, misceláneos y cierre" },
];

const sociosCol1 = [
  "Dr. Alonso Bulboa", "Dr. Patricio Huerta", "Dr. Juan Carlos Bravo",
  "Dr. Carlos Torres", "Dr. Alexis Bustos", "Dr. Juan Pablo Moreno",
  "Dr. Francisco Acuña", "Dr. Cristian Salas", "Dr. Juan Marin", "Dr. Benigno Valda",
];
const sociosCol2 = [
  "Dr. Victor Vera", "Dra. Andrea Gomez", "Dr. Leopoldo Marine",
  "Dr. Carlos Torres", "Dr. Eitan Schwartz", "Dr. Rodrigo Julio",
  "Dr. Victor Bianchi", "Dr. Michel Bergoeing", "Dr. Albrecht Kramer", "Dr. Alfonso Velasquez",
];
const sociosCol3 = [
  "Dra. Francisca Gonzalez", "Dr. Juan Bombin", "Dra. Beatriz Retamales",
  "Dr. Nelson Sepulveda", "Dr. Alejo Chavez", "Dra. Stephanie Siegel",
  "Dr. Lucien Chassin-Trubert", "Dr. Ranfis Valerio", "Dr. Juan Pablo Fuenzalida",
  "Dr. Vicente Rodriguez", "Dr. Felipe Corvalan", "Dr. Gabriel Cassorla", "Dr. Ivan Galleguillos",
];

const auspiciadores = [
  ["Cencomex", "CICLOMED", "Penumbra", "Prismamed", "Essity", "Apnisity", "VARIFARMA"],
  ["INARI | Stryker", "Medtronic", "TERUMO", "GrupoChic", "Varimed", "AXON Pharma", "VARIFARMA"],
  ["OPTIVISIÓN", "Urgo", "Boston Scientific", "Theodoluz", "BIOHERTZ", "TH Medical", "CAMIR"],
];

/* ── Styles ───────────────────────────────────────────── */

const S = {
  page: {
    width: 700,
    fontFamily: "'Source Sans 3', 'Source Sans Pro', 'Segoe UI', Arial, sans-serif",
    backgroundColor: "#fff",
    color: "#1B2E54",
  },
  /* Header */
  header: {
    background: "linear-gradient(180deg, #f0f2f7 0%, #e4e8f0 100%)",
    textAlign: "center" as const,
    padding: "24px 20px 18px",
  },
  headerSub: {
    fontSize: 10.5,
    fontWeight: 600,
    letterSpacing: 1.2,
    textTransform: "uppercase" as const,
    color: "#1B2E54",
    lineHeight: 1.6,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 800,
    letterSpacing: 4,
    color: "#1B2E54",
    marginTop: 4,
  },
  /* Landscape hero */
  hero: {
    position: "relative" as const,
    overflow: "hidden" as const,
    background: "linear-gradient(135deg, #3a6e2c 0%, #7ba84a 25%, #b5c45a 45%, #8fb34b 60%, #4a7a30 80%, #2d5a1e 100%)",
    minHeight: 220,
  },
  heroOverlay: {
    position: "absolute" as const,
    inset: 0,
    background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(27,46,84,0.35) 60%, rgba(27,46,84,0.7) 100%)",
  },
  heroContent: {
    position: "relative" as const,
    zIndex: 2,
    textAlign: "center" as const,
    padding: "40px 30px 28px",
    color: "#fff",
  },
  heroTitle: {
    fontSize: 30,
    fontWeight: 800,
    lineHeight: 1.15,
    textShadow: "0 2px 12px rgba(0,0,0,0.4)",
    letterSpacing: 1.5,
  },
  heroItalic: {
    fontSize: 17,
    fontStyle: "italic" as const,
    fontWeight: 400,
    marginTop: 8,
    opacity: 0.9,
    textShadow: "0 1px 6px rgba(0,0,0,0.3)",
  },
  heroMeta: {
    marginTop: 14,
    fontSize: 10.5,
    opacity: 0.85,
    display: "flex" as const,
    justifyContent: "center" as const,
    gap: 20,
  },
  /* Programa */
  progWrap: {
    display: "flex" as const,
    gap: 10,
    padding: "16px 20px 12px",
  },
  boxJueves: {
    flex: "0 0 40%",
    border: "1.5px solid #C0392B",
    borderRadius: 6,
    overflow: "hidden" as const,
  },
  boxViernes: {
    flex: 1,
    border: "1.5px solid #1B2E54",
    borderRadius: 6,
    overflow: "hidden" as const,
  },
  boxHeaderRed: {
    background: "#C0392B",
    color: "#fff",
    fontWeight: 700,
    fontSize: 10,
    padding: "5px 10px",
    textTransform: "uppercase" as const,
    letterSpacing: 1.2,
    textAlign: "center" as const,
  },
  boxHeaderBlue: {
    background: "#1B2E54",
    color: "#fff",
    fontWeight: 700,
    fontSize: 10,
    padding: "5px 10px",
    textTransform: "uppercase" as const,
    letterSpacing: 1.2,
    textAlign: "center" as const,
  },
  /* Socios */
  secTitle: {
    textAlign: "center" as const,
    fontSize: 13,
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: 3,
    color: "#1B2E54",
    marginBottom: 8,
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: "50%",
    background: "#1B2E54",
    flexShrink: 0,
    marginTop: 5,
  },
  /* Auspiciadores */
  sponsorTag: {
    padding: "3px 8px",
    fontSize: 8.5,
    fontWeight: 700,
    color: "#1B2E54",
    border: "1px solid #ccc",
    borderRadius: 3,
    whiteSpace: "nowrap" as const,
    letterSpacing: 0.3,
  },
} as const;

/* ── Mountains / Hills SVG for landscape ─────────────── */

const LandscapeSVG = () => (
  <svg
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    viewBox="0 0 700 220"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
  >
    {/* Sky gradient */}
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a8d8ea" />
        <stop offset="100%" stopColor="#e8f0e4" />
      </linearGradient>
      <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#5a8a3c" />
        <stop offset="100%" stopColor="#3d6b28" />
      </linearGradient>
      <linearGradient id="hill2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7ba84a" />
        <stop offset="100%" stopColor="#5a8a3c" />
      </linearGradient>
      <linearGradient id="valley" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8fb34b" />
        <stop offset="100%" stopColor="#6e9a38" />
      </linearGradient>
    </defs>
    <rect width="700" height="220" fill="url(#sky)" />
    {/* Mountains */}
    <path d="M0,130 Q80,40 180,90 Q280,30 380,80 Q480,20 580,70 Q650,45 700,60 L700,220 L0,220Z" fill="url(#hill1)" opacity="0.5" />
    <path d="M0,160 Q100,80 200,120 Q320,70 420,110 Q540,60 650,100 L700,90 L700,220 L0,220Z" fill="url(#hill2)" opacity="0.6" />
    {/* Vineyard rows */}
    <path d="M0,180 Q175,140 350,160 Q525,140 700,170 L700,220 L0,220Z" fill="url(#valley)" opacity="0.7" />
    {/* Vineyard lines */}
    {[170, 180, 190, 200].map((y, i) => (
      <path
        key={i}
        d={`M0,${y + i * 2} Q175,${y - 15 + i * 3} 350,${y - 5 + i * 2} Q525,${y - 15 + i * 3} 700,${y + i * 2}`}
        stroke="#4a7a30"
        strokeWidth="0.8"
        opacity="0.4"
        fill="none"
      />
    ))}
  </svg>
);

/* ── Hotel illustration (simplified) ─────────────────── */

const HotelSVG = () => (
  <svg viewBox="0 0 200 130" fill="none" style={{ width: "100%", height: "auto", borderRadius: 6 }}>
    {/* Background */}
    <defs>
      <linearGradient id="hotelSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#87CEEB" />
        <stop offset="100%" stopColor="#b8dbe8" />
      </linearGradient>
    </defs>
    <rect width="200" height="130" rx="6" fill="url(#hotelSky)" />
    {/* Hills behind */}
    <path d="M0,60 Q50,30 100,50 Q150,25 200,45 L200,130 L0,130Z" fill="#5a8a3c" opacity="0.4" />
    {/* Hotel building - main */}
    <rect x="30" y="40" width="140" height="80" rx="3" fill="#c9a96e" />
    <rect x="30" y="40" width="140" height="12" rx="2" fill="#8B4513" />
    {/* Windows */}
    {[0, 1, 2, 3, 4].map((col) =>
      [0, 1, 2].map((row) => (
        <rect
          key={`${col}-${row}`}
          x={42 + col * 26}
          y={58 + row * 22}
          width={14}
          height={12}
          rx={1}
          fill="#5a3a1a"
          opacity="0.7"
        />
      ))
    )}
    {/* Balconies */}
    {[0, 1, 2, 3, 4].map((col) =>
      [0, 1, 2].map((row) => (
        <rect
          key={`b-${col}-${row}`}
          x={40 + col * 26}
          y={70 + row * 22}
          width={18}
          height={2}
          rx={1}
          fill="#8B6914"
          opacity="0.6"
        />
      ))
    )}
    {/* Roof detail */}
    <rect x="30" y="38" width="140" height="4" fill="#6b3410" />
    {/* Ground */}
    <rect x="0" y="118" width="200" height="12" fill="#4a7a30" opacity="0.5" />
    {/* Trees */}
    <circle cx="15" cy="105" r="12" fill="#3d6b28" />
    <circle cx="185" cy="108" r="10" fill="#3d6b28" />
    <circle cx="10" cy="95" r="8" fill="#5a8a3c" />
    <circle cx="190" cy="100" r="7" fill="#5a8a3c" />
  </svg>
);

/* ── SOCHIVAS Logo SVG ───────────────────────────────── */

const SochivasLogo = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="47" stroke="#B8933A" strokeWidth="2.5" fill="white" />
    <circle cx="50" cy="50" r="40" fill="#1B2E54" />
    <path
      d="M50 20 C38 20, 28 30, 28 40 C28 52, 38 56, 50 48 C62 40, 72 44, 72 56 C72 68, 62 80, 50 80"
      stroke="white"
      strokeWidth="7"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="38" cy="34" r="7" fill="#C0392B" />
  </svg>
);

/* ── Clock icon ──────────────────────────────────────── */

const ClockIcon = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
    <circle cx="8" cy="8" r="7" stroke="#999" strokeWidth="1.5" />
    <path d="M8 4V8L11 10" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ── Main Component ──────────────────────────────────── */

const BannerConvencion = forwardRef<HTMLDivElement>(function BannerConvencion(_, ref) {
  return (
    <div ref={ref} style={S.page}>
      {/* ─── Header ─── */}
      <div style={S.header}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
          <SochivasLogo />
        </div>
        <div style={S.headerSub}>
          Sociedad Chilena de<br />Cirugía Vascular y Endovascular
        </div>
        <div style={S.headerTitle}>SOCHIVAS</div>
      </div>

      {/* ─── Hero landscape ─── */}
      <div style={S.hero}>
        <LandscapeSVG />
        <div style={S.heroOverlay} />
        <div style={S.heroContent}>
          <div style={S.heroTitle}>
            XXII CONVENCIÓN ANUAL<br />DE ESPECIALISTAS
          </div>
          <div style={S.heroItalic}>— A micrófono abierto —</div>
          <div style={S.heroMeta}>
            <span>📅 23 y 24 de abril de 2026</span>
            <span>📍 Hotel Santa Cruz, Valle de Colchagua, Chile</span>
          </div>
        </div>
      </div>

      {/* ─── Programa ─── */}
      <div style={S.progWrap}>
        {/* Jueves */}
        <div style={S.boxJueves}>
          <div style={S.boxHeaderRed}>Jueves 23 de Abril</div>
          <div style={{ padding: "10px 12px" }}>
            {programaJueves.map((item, i) => (
              <div key={i} style={{ fontSize: 10, lineHeight: 1.6, display: "flex", justifyContent: "space-between" }}>
                <span>• {item.texto}</span>
                {item.hora && <span style={{ fontWeight: 700 }}>{item.hora}</span>}
              </div>
            ))}
            {/* Hotel illustration */}
            <div style={{ marginTop: 10 }}>
              <HotelSVG />
            </div>
          </div>
        </div>

        {/* Viernes */}
        <div style={S.boxViernes}>
          <div style={S.boxHeaderBlue}>Viernes 24 de Abril</div>
          <div style={{ padding: "8px 10px" }}>
            {programaViernes.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 5, fontSize: 10, lineHeight: 1.4 }}>
                <ClockIcon />
                <span style={{ color: "#666", whiteSpace: "nowrap", minWidth: 68 }}>{item.hora}</span>
                <span>
                  {item.titulo}
                  {item.bold && <strong> {item.bold}</strong>}
                  {item.sub && <span style={{ fontStyle: "italic" }}> {item.sub}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Socios Participantes ─── */}
      <div style={{ padding: "6px 20px 10px" }}>
        <div style={{ borderTop: "1px solid #ddd", paddingTop: 10 }}>
          <div style={S.secTitle}>Socios Participantes</div>
          <div style={{ display: "flex", gap: 12 }}>
            {[sociosCol1, sociosCol2, sociosCol3].map((col, ci) => (
              <div key={ci} style={{ flex: 1 }}>
                {col.map((nombre, ni) => (
                  <div key={ni} style={{ fontSize: 8.5, lineHeight: 1.7, display: "flex", alignItems: "flex-start", gap: 4 }}>
                    <span style={S.dot} />
                    {nombre}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Auspiciadores ─── */}
      <div style={{ padding: "4px 20px 18px" }}>
        <div style={{ borderTop: "1px solid #ddd", paddingTop: 8 }}>
          <div style={{ ...S.secTitle, fontSize: 11, marginBottom: 10 }}>Auspician</div>
          {auspiciadores.map((row, ri) => (
            <div key={ri} style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 6, marginBottom: 6 }}>
              {row.map((name, ni) => (
                <span key={ni} style={S.sponsorTag}>{name}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default BannerConvencion;
