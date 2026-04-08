"use client";

import { forwardRef } from "react";

const programaJueves = [
  "Check in PM",
  "Encuentro con nuestros auspiciadores",
  "Asamblea anual de socios       19:30 hrs",
  "Cena anual                              21:00 hrs",
];

const programaViernes = [
  { hora: "09:00 – 10:00", titulo: '"Desayuno con los becados"', sub: "(casos clínicos)" },
  { hora: "10:00 – 11:30", titulo: "Foro: Accesos vasculares", bold: true },
  { hora: "11:30 – 12:00", titulo: "Café" },
  { hora: "12:00 – 13:30", titulo: "Foro: Venas", bold: true },
  { hora: "13:30 – 15:00", titulo: "Almuerzo" },
  { hora: "15:00 – 16:30", titulo: "Foro: Enfermedad periférica", bold: true },
  { hora: "16:30 – 17:00", titulo: "Café" },
  { hora: "17:00 – 18:30", titulo: "Foro: Aorta, misceláneos y cierre", bold: true },
];

const sociosCol1 = [
  "Dr. Alonso Bulboa",
  "Dr. Patricio Huerta",
  "Dr. Juan Carlos Bravo",
  "Dr. Carlos Torres",
  "Dr. Alexis Bustos",
  "Dr. Juan Pablo Moreno",
  "Dr. Francisco Acuña",
  "Dr. Cristian Salas",
  "Dr. Juan Marin",
  "Dr. Benigno Valda",
];

const sociosCol2 = [
  "Dr. Victor Vera",
  "Dra. Andrea Gomez",
  "Dr. Leopoldo Marine",
  "Dr. Carlos Torres",
  "Dr. Eitan Schwartz",
  "Dr. Rodrigo Julio",
  "Dr. Victor Bianchi",
  "Dr. Michel Bergoeing",
  "Dr. Albrecht Kramer",
  "Dr. Alfonso Velasquez",
];

const sociosCol3 = [
  "Dra. Francisca Gonzalez",
  "Dr. Juan Bombin",
  "Dra. Beatriz Retamales",
  "Dr. Nelson Sepulveda",
  "Dr. Alejo Chavez",
  "Dra. Stephanie Siegel",
  "Dr. Lucien Chassin-Trubert",
  "Dr. Ranfis Valerio",
  "Dr. Juan Pablo Fuenzalida",
  "Dr. Vicente Rodriguez",
  "Dr. Felipe Corvalan",
  "Dr. Gabriel Cassorla",
  "Dr. Ivan Galleguillos",
];

const auspiciadores = [
  ["Cencomex", "Ciclomed", "Penumbra", "Prismamed", "Essity", "Apnisity", "Varifarma"],
  ["Inari | Stryker", "Medtronic", "Terumo", "GrupoChic", "Varimed", "Axon Pharma", "Varifarma"],
  ["Optivisión", "Urgo", "Boston Scientific", "Theodoluz", "Biohertz", "TH Medical", "Camir"],
];

const SochivasLogo = () => (
  <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="48" stroke="#8B7355" strokeWidth="2" fill="white" />
    <circle cx="50" cy="50" r="42" fill="#1a2f5e" />
    <path d="M50 18 C35 18, 25 30, 25 42 C25 55, 38 58, 50 50 C62 42, 75 45, 75 58 C75 70, 65 82, 50 82" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" />
    <circle cx="35" cy="35" r="8" fill="#c0392b" opacity="0.9" />
  </svg>
);

const BannerConvencion = forwardRef<HTMLDivElement>(function BannerConvencion(_, ref) {
  return (
    <div
      ref={ref}
      style={{
        width: 794,
        minHeight: 1123,
        fontFamily: "'Source Sans 3', 'Source Sans Pro', Arial, sans-serif",
        backgroundColor: "#fff",
        color: "#1a2f5e",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(180deg, #f8f9fc 0%, #eef1f7 100%)",
          textAlign: "center",
          padding: "28px 20px 20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
          <SochivasLogo />
        </div>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "#1a2f5e", lineHeight: 1.5 }}>
          Sociedad Chilena de<br />
          Cirugía Vascular y Endovascular
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: 3, color: "#1a2f5e", marginTop: 6 }}>
          SOCHIVAS
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a2f5e 0%, #0d1f3c 100%)",
          color: "white",
          textAlign: "center",
          padding: "30px 30px 24px",
        }}
      >
        <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, margin: 0, letterSpacing: 1 }}>
          XXII CONVENCIÓN ANUAL<br />DE ESPECIALISTAS
        </h1>
        <div style={{ marginTop: 10, fontStyle: "italic", fontSize: 18, opacity: 0.85, fontWeight: 400 }}>
          — A micrófono abierto —
        </div>
        <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 24, fontSize: 12, opacity: 0.8 }}>
          <span>📅 23 y 24 de abril de 2026</span>
          <span>📍 Hotel Santa Cruz, Valle de Colchagua, Chile</span>
        </div>
      </div>

      {/* Programa */}
      <div style={{ display: "flex", gap: 12, padding: "20px 24px 16px", fontSize: 11 }}>
        {/* Jueves */}
        <div style={{ flex: "0 0 38%", border: "2px solid #c0392b", borderRadius: 8, overflow: "hidden" }}>
          <div style={{ background: "#c0392b", color: "white", fontWeight: 700, fontSize: 11, padding: "6px 12px", textTransform: "uppercase", letterSpacing: 1 }}>
            Jueves 23 de Abril
          </div>
          <div style={{ padding: "10px 12px" }}>
            {programaJueves.map((item, i) => (
              <div key={i} style={{ marginBottom: 5, fontSize: 10.5, lineHeight: 1.4 }}>
                • {item}
              </div>
            ))}
          </div>
        </div>

        {/* Viernes */}
        <div style={{ flex: 1, border: "2px solid #1a2f5e", borderRadius: 8, overflow: "hidden" }}>
          <div style={{ background: "#1a2f5e", color: "white", fontWeight: 700, fontSize: 11, padding: "6px 12px", textTransform: "uppercase", letterSpacing: 1 }}>
            Viernes 24 de Abril
          </div>
          <div style={{ padding: "8px 10px" }}>
            {programaViernes.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 8, marginBottom: 4, fontSize: 10, lineHeight: 1.4 }}>
                <span style={{ color: "#888", whiteSpace: "nowrap", minWidth: 75 }}>🕐 {item.hora}</span>
                <span style={{ fontWeight: item.bold ? 700 : 400 }}>
                  {item.titulo}
                  {item.sub && <span style={{ fontWeight: 400, fontStyle: "italic", marginLeft: 4 }}>{item.sub}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Socios Participantes */}
      <div style={{ padding: "8px 24px 12px" }}>
        <h3 style={{ textAlign: "center", fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10, color: "#1a2f5e" }}>
          Socios Participantes
        </h3>
        <div style={{ display: "flex", gap: 16 }}>
          {[sociosCol1, sociosCol2, sociosCol3].map((col, ci) => (
            <div key={ci} style={{ flex: 1 }}>
              {col.map((nombre, ni) => (
                <div key={ni} style={{ fontSize: 9, lineHeight: 1.6, display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#c0392b", flexShrink: 0 }} />
                  {nombre}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Auspiciadores */}
      <div style={{ padding: "10px 24px 20px", borderTop: "1px solid #e5e7eb" }}>
        <h3 style={{ textAlign: "center", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12, color: "#1a2f5e" }}>
          Auspician
        </h3>
        {auspiciadores.map((row, ri) => (
          <div
            key={ri}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 8,
            }}
          >
            {row.map((name, ni) => (
              <div
                key={ni}
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: 4,
                  padding: "4px 10px",
                  fontSize: 9,
                  fontWeight: 700,
                  color: "#374151",
                  whiteSpace: "nowrap",
                }}
              >
                {name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});

export default BannerConvencion;
