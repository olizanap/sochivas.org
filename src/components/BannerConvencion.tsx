"use client";

import { forwardRef } from "react";

/* ══════════════════════════════════════════════════════════
   DATA — Edita aquí para actualizar el banner
   ══════════════════════════════════════════════════════════ */

const programaJueves = [
  { texto: "Check in PM" },
  { texto: "Encuentro con nuestros auspiciadores" },
  { texto: "Asamblea anual de socios", hora: "19:30 hrs" },
  { texto: "Cena anual", hora: "21:00 hrs" },
];

const programaViernes: { hora: string; texto: string; bold?: boolean; sub?: string }[] = [
  { hora: "09:00–10:00", texto: '"Desayuno con los becados"', sub: "(casos clínicos)" },
  { hora: "10:00–11:30", texto: "Foro: ", bold: true, sub: "Accesos vasculares" },
  { hora: "11:30–12:00", texto: "Café" },
  { hora: "12:00–13:30", texto: "Foro: ", bold: true, sub: "Venas" },
  { hora: "13:30–15:00", texto: "Almuerzo" },
  { hora: "15:00–16:30", texto: "Foro: ", bold: true, sub: "Enfermedad periférica" },
  { hora: "16:30–17:00", texto: "Café" },
  { hora: "17:00–18:30", texto: "Foro: ", bold: true, sub: "Aorta, misceláneos y cierre" },
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

const auspiciadoresRow1 = ["Cencomex", "CICLOMED", "Penumbra", "Prismamed", "Essity", "Apnisity", "VARIFARMA"];
const auspiciadoresRow2 = ["INARI | Stryker", "Medtronic", "TERUMO", "GrupoChic", "Varimed", "AXON Pharma", "VARIFARMA"];
const auspiciadoresRow3 = ["OPTIVISIÓN", "Urgo", "Boston Scientific", "Theodoluz", "BIOHERTZ", "TH Medical", "CAMIR"];

/* ══════════════════════════════════════════════════════════ */

const NAVY = "#1B2E54";
const RED = "#C0392B";
const W = 700;

const BannerConvencion = forwardRef<HTMLDivElement>(function BannerConvencion(_, ref) {
  return (
    <div
      ref={ref}
      style={{
        width: W,
        fontFamily: "'Source Sans 3','Source Sans Pro','Segoe UI',Arial,sans-serif",
        backgroundColor: "#fff",
        color: NAVY,
      }}
    >
      {/* ───────── HEADER: Foto paisaje con logo ───────── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/banner-header.png"
        alt="SOCHIVAS — Sociedad Chilena de Cirugía Vascular y Endovascular"
        style={{ width: "100%", height: "auto", display: "block" }}
      />

      {/* ───────── HERO: Título principal ───────── */}
      <div
        style={{
          background: `linear-gradient(180deg, #eef1f7 0%, #fff 100%)`,
          textAlign: "center",
          padding: "32px 40px 26px",
        }}
      >
        <h1 style={{ fontSize: 34, fontWeight: 800, color: NAVY, lineHeight: 1.15, margin: 0, letterSpacing: 2 }}>
          XXII CONVENCIÓN ANUAL<br />DE ESPECIALISTAS
        </h1>

        {/* Decorative line + italic */}
        <div style={{ marginTop: 10 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ width: 60, height: 1, background: NAVY, opacity: 0.2 }} />
            <span style={{ fontSize: 18, fontStyle: "italic", color: NAVY, fontWeight: 400, opacity: 0.8 }}>
              A micrófono abierto
            </span>
            <div style={{ width: 60, height: 1, background: NAVY, opacity: 0.2 }} />
          </div>
        </div>

        {/* Date + Location */}
        <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 30, fontSize: 11, color: "#666" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontSize: 13 }}>📅</span> 23 y 24 de abril de 2026
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontSize: 13, color: RED }}>📍</span> Hotel Santa Cruz, Valle de Colchagua, Chile
          </span>
        </div>
      </div>

      {/* ───────── PROGRAMA ───────── */}
      <div style={{ display: "flex", gap: 12, padding: "20px 22px 16px" }}>
        {/* JUEVES */}
        <div style={{ flex: "0 0 42%", border: `2px solid ${RED}`, borderRadius: 8, overflow: "hidden" }}>
          <div style={{
            background: RED, color: "#fff", fontWeight: 700, fontSize: 11,
            padding: "7px 14px", textTransform: "uppercase", letterSpacing: 1.5, textAlign: "center",
          }}>
            Jueves 23 de Abril
          </div>
          <div style={{ padding: "12px 14px", fontSize: 11, lineHeight: 1.8 }}>
            {programaJueves.map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span>• {item.texto}</span>
                {item.hora && <span style={{ fontWeight: 700, whiteSpace: "nowrap", marginLeft: 8 }}>{item.hora}</span>}
              </div>
            ))}
            {/* Foto Hotel Santa Cruz */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hotel-santa-cruz.png"
              alt="Hotel Santa Cruz"
              style={{ width: "100%", height: "auto", borderRadius: 6, marginTop: 10, display: "block" }}
            />
          </div>
        </div>

        {/* VIERNES */}
        <div style={{ flex: 1, border: `2px solid ${NAVY}`, borderRadius: 8, overflow: "hidden" }}>
          <div style={{
            background: NAVY, color: "#fff", fontWeight: 700, fontSize: 11,
            padding: "7px 14px", textTransform: "uppercase", letterSpacing: 1.5, textAlign: "center",
          }}>
            Viernes 24 de Abril
          </div>
          <div style={{ padding: "10px 12px" }}>
            {programaViernes.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4, fontSize: 10.5, lineHeight: 1.5 }}>
                <span style={{ color: "#999", fontSize: 9, flexShrink: 0, marginTop: 1 }}>⏱</span>
                <span style={{ color: "#666", whiteSpace: "nowrap", minWidth: 72, fontSize: 10 }}>{item.hora}</span>
                <span>
                  {item.texto}
                  {item.bold && item.sub ? <strong>{item.sub}</strong> : null}
                  {!item.bold && item.sub ? <em style={{ marginLeft: 3 }}>{item.sub}</em> : null}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ───────── SOCIOS PARTICIPANTES ───────── */}
      <div style={{ padding: "8px 22px 14px" }}>
        <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: 14 }}>
          <h3 style={{
            textAlign: "center", fontSize: 14, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: 4, color: NAVY, marginBottom: 12, margin: "0 0 12px",
          }}>
            Socios Participantes
          </h3>
          <div style={{ display: "flex", gap: 16 }}>
            {[sociosCol1, sociosCol2, sociosCol3].map((col, ci) => (
              <div key={ci} style={{ flex: 1 }}>
                {col.map((nombre, ni) => (
                  <div key={ni} style={{ fontSize: 9, lineHeight: 1.7, display: "flex", alignItems: "flex-start", gap: 5 }}>
                    <span style={{ width: 3, height: 3, borderRadius: "50%", background: NAVY, flexShrink: 0, marginTop: 5 }} />
                    {nombre}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ───────── AUSPICIAN ───────── */}
      <div style={{ padding: "4px 22px 24px" }}>
        <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: 12 }}>
          <h3 style={{
            textAlign: "center", fontSize: 12, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: 4, color: NAVY, margin: "0 0 12px",
          }}>
            Auspician
          </h3>
          {[auspiciadoresRow1, auspiciadoresRow2, auspiciadoresRow3].map((row, ri) => (
            <div key={ri} style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
              {row.map((name, ni) => (
                <span
                  key={ni}
                  style={{
                    padding: "4px 12px",
                    fontSize: 9,
                    fontWeight: 700,
                    color: "#374151",
                    border: "1px solid #d1d5db",
                    borderRadius: 4,
                    whiteSpace: "nowrap",
                    letterSpacing: 0.5,
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default BannerConvencion;
