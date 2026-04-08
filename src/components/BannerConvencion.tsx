"use client";

import { forwardRef } from "react";

/* ══════════════════════════════════════════════════════════
   AUSPICIADORES — Edita aquí para actualizar logos/nombres.
   Cuando tengas el logo real, pon la ruta en `logo`.
   Si no hay logo, se muestra el nombre como texto.
   ══════════════════════════════════════════════════════════ */

type Auspiciador = { nombre: string; logo?: string };

const auspiciadoresRow1: Auspiciador[] = [
  { nombre: "Cencomex", logo: "/images/logos/cencomex.png" },
  { nombre: "Ciclomed", logo: "/images/logos/ciclomed.png" },
  { nombre: "Penumbra", logo: "/images/logos/penumbra.png" },
  { nombre: "Prismamed", logo: "/images/logos/prismamed.png" },
  { nombre: "Essity", logo: "/images/logos/essity.svg" },
  { nombre: "Inari Medical", logo: "/images/logos/inari-medical.png" },
  { nombre: "Stryker", logo: "/images/logos/stryker.png" },
  { nombre: "Medtronic", logo: "/images/logos/medtronic.png" },
];

const auspiciadoresRow2: Auspiciador[] = [
  { nombre: "Terumo", logo: "/images/logos/terumo.png" },
  { nombre: "Grupo Chic" },
  { nombre: "Varimed", logo: "/images/logos/varimed.png" },
  { nombre: "Axon Pharma", logo: "/images/logos/axon-pharma.webp" },
  { nombre: "Varifarma", logo: "/images/logos/varifarma.png" },
  { nombre: "Optivisión" },
  { nombre: "Urgo Medical", logo: "/images/logos/urgo.png" },
  { nombre: "Vitalmed", logo: "/images/logos/vitalmed.png" },
];

const auspiciadoresRow3: Auspiciador[] = [
  { nombre: "LeMare", logo: "/images/logos/lemare.png" },
  { nombre: "Boston Scientific", logo: "/images/logos/boston-scientific.png" },
  { nombre: "Theodoluz", logo: "/images/logos/theodoluz.png" },
  { nombre: "Biohertz", logo: "/images/logos/biohertz.png" },
  { nombre: "TH Medical", logo: "/images/logos/th-medical.png" },
  { nombre: "Camir", logo: "/images/logos/camir.png" },
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
        style={{ height: 22, maxWidth: 80, width: "auto", objectFit: "contain" }}
      />
    );
  }
  return (
    <span
      style={{
        fontSize: 9,
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
              flexWrap: "nowrap",
              gap: 12,
              marginBottom: 6,
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
