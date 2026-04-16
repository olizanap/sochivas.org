"use client";

import { forwardRef } from "react";

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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/convencion-2026-banner.jpg"
        alt="XXII Convención Anual SOCHIVAS 2026"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
});

export default BannerConvencion;
