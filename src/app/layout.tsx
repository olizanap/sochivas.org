import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SOCHIVAS — Sociedad Chilena de Cirugía Vascular y Endovascular",
    template: "%s | SOCHIVAS",
  },
  description:
    "Sociedad científica creada en 2013, dedicada al estudio y avance de la Cirugía Vascular y Endovascular en Chile.",
  keywords: [
    "cirugía vascular",
    "endovascular",
    "sochivas",
    "chile",
    "sociedad médica",
    "especialistas vasculares",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={sourceSans.variable}>
      <body className="font-sans antialiased bg-white text-body">
        <TopBar />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
