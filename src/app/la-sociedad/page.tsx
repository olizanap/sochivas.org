import type { Metadata } from "next";
import { getSociedad } from "@/lib/content";
import PageHeader from "@/components/sections/PageHeader";
import { Target, Eye, BookOpen, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "La Sociedad",
  description:
    "SOCHIVAS es una sociedad científica creada en 2013 dedicada al estudio y avance de la Cirugía Vascular y Endovascular en Chile.",
};

const pilares = [
  {
    icon: BookOpen,
    title: "Formación Continua",
    text: "Perfeccionar los conocimientos médico quirúrgicos de la especialidad mediante actividades académicas de excelencia.",
  },
  {
    icon: Users,
    title: "Comunidad Profesional",
    text: "Agrupar a los médicos cirujanos que ejercen preferentemente la especialidad de cirugía vascular y endovascular.",
  },
  {
    icon: Target,
    title: "Referente Nacional",
    text: "Ser el referente nacional técnico y profesional para organismos públicos, privados y pacientes.",
  },
  {
    icon: Eye,
    title: "Progreso Científico",
    text: "Propender al progreso de la Cirugía Vascular y Endovascular y promover el buen desempeño profesional.",
  },
];

export default function LaSociedadPage() {
  const sociedad = getSociedad();

  return (
    <>
      <PageHeader title="Somos" subtitle="La Sociedad" />

      <section className="bg-white">
        <div className="container-site py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="prose prose-lg text-body leading-[1.8]">
              <p className="text-lg leading-relaxed">
                <strong className="text-navy">SOCHIVAS</strong> es una sociedad
                científica creada en el año 2013 y cuyos fines son:
              </p>
              <p>
                Estudiar y debatir las materias y los problemas de la
                especialidad médica de cirugía vascular periférica o
                endovascular en sus diversos aspectos, con el propósito de dar a
                conocer a sus Miembros el más amplio conocimiento de ellos,
                agrupando a los médicos cirujanos que ejercen preferentemente la
                especialidad, perfeccionar los conocimientos médico quirúrgicos
                de la especialidad, propender al progreso de la Cirugía Vascular
                y Endovascular y promover el buen desempeño de las acciones
                profesionales de sus Miembros.
              </p>
            </div>

            <div className="mt-10 p-6 md:p-8 bg-muted-light rounded-xl border border-gray-100">
              <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <Target size={22} className="text-accent" />
                Misión
              </h2>
              <p className="text-body leading-relaxed">
                Agrupar y contactar a los especialistas en Cirugía Vascular y
                Endovascular acreditados que ejercen en Chile a fin de favorecer
                el intercambio de ideas, experiencia y coordinación de
                actividades académicas.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Por otra parte, ser el referente nacional técnico y profesional
                para organismos públicos y privados, así como también para
                pacientes que buscan médicos especialistas en Cirugía vascular y
                endovascular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="bg-muted-light">
        <div className="container-site py-12 md:py-16">
          <p className="section-subtitle">Nuestros pilares</p>
          <h2 className="section-title mb-10">¿Qué hacemos?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map((p) => (
              <div key={p.title} className="card p-6">
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-4">
                  <p.icon size={24} className="text-navy" />
                </div>
                <h3 className="font-bold text-navy text-base mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
