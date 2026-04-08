"use client";

import { forwardRef } from "react";

/* ══════════════════════════════════════════════════════════
   AUSPICIADORES — Edita aquí para actualizar logos/nombres.
   Cuando tengas el logo real, pon la ruta en `logo`.
   Si no hay logo, se muestra el nombre como texto.
   ══════════════════════════════════════════════════════════ */

type Auspiciador = { nombre: string; logo?: string };

const auspiciadoresRow1: Auspiciador[] = [
  { nombre: "Cencomex" },
  { nombre: "CICLOMED" },
  { nombre: "Penumbra" },
  { nombre: "Prismamed" },
  { nombre: "Essity", logo: "/images/logos/essity.svg" },
  { nombre: "Apnisity" },
  { nombre: "VARIFARMA" },
];

const auspiciadoresRow2: Auspiciador[] = [
  { nombre: "INARI | Stryker" },
  { nombre: "Medtronic", logo: "/images/logos/medtronic.svg" },
  { nombre: "TERUMO" },
  { nombre: "GrupoChic" },
  { nombre: "Varimed" },
  { nombre: "AXON Pharma", logo: "/images/logos/axon-pharma.webp" },
];

const auspiciadoresRow3: Auspiciador[] = [
  { nombre: "OPTIVISIÓN" },
  { nombre: "Urgo", logo: "/images/logos/urgo.png" },
  { nombre: "Boston Scientific" },
  { nombre: "Theodoluz" },
  { nombre: "BIOHERTZ" },
  { nombre: "TH Medical" },
  { nombre: "CAMIR" },
  { nombre: "CMS Medical", logo: "/images/logos/cms-medical.png" },
];

/* ══════════════════════════════════════════════════════════ */

const NAVY = "#1B2E54";

function SponsorItem({ a }: { a: Auspiciador }) {
  if (a.logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={a.logo}
        alt={a.nombre}
        style={{ height: 28, width: "auto", objectFit: "contain" }}
      />
    );
  }
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 700,
        color: "#333",
        whiteSpace: "nowrap",
        letterSpacing: 0.3,
      }}
    >
      {a.nombre}
    </span>
  );
}

const BannerConvencion = forwardRef<HTMLDivElement>(function BannerConvencion(_, ref) {
  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        maxWidth: 794,
        position: "relative",
        fontFamily: "'Source Sans 3','Source Sans Pro','Segoe UI',Arial,sans-serif",
        backgroundColor: "#fff",
      }}
    >
      {/* Imagen base del banner (con zona de auspiciadores en blanco) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/banner-base.png"
        alt="XXII Convención Anual SOCHIVAS 2026"
        style={{ width: "100%", height: "auto", display: "block" }}
      />

      {/* Auspiciadores — se posicionan sobre la zona blanca inferior */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "0 30px 20px",
        }}
      >
        {[auspiciadoresRow1, auspiciadoresRow2, auspiciadoresRow3].map((row, ri) => (
          <div
            key={ri}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 10,
            }}
          >
            {row.map((a, ni) => (
              <SponsorItem key={ni} a={a} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});

export default BannerConvencion;
