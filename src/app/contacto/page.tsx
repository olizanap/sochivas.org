"use client";

import { useState } from "react";
import PageHeader from "@/components/sections/PageHeader";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader title="Contacto" subtitle="Escríbenos" />

      <section className="bg-muted-light">
        <div className="container-site py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-bold text-navy text-base mb-4">
                  Información de contacto
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy">Email</p>
                      <a
                        href="mailto:contacto@sochivas.cl"
                        className="text-muted hover:text-accent"
                      >
                        contacto@sochivas.cl
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy">Dirección</p>
                      <p className="text-muted">Santiago, Chile</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy">Teléfono</p>
                      <p className="text-muted">Consultar por email</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 bg-navy text-white">
                <h3 className="font-bold text-base mb-2">¿Eres especialista?</h3>
                <p className="text-sm text-white/70 mb-4">
                  Si eres cirujano vascular y deseas asociarte, contáctanos
                  para más información sobre membresía.
                </p>
                <a
                  href="#area-socios"
                  className="text-sm font-semibold text-white underline"
                >
                  Área de Socios →
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-6 md:p-8">
                <h3 className="font-bold text-navy text-lg mb-6">
                  Envíanos un mensaje
                </h3>

                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Send size={28} className="text-green-600" />
                    </div>
                    <h4 className="font-bold text-navy text-lg mb-2">
                      Mensaje enviado
                    </h4>
                    <p className="text-muted text-sm">
                      Gracias por contactarnos. Te responderemos a la brevedad.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-1.5">
                          Nombre
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full border border-gray-200 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full border border-gray-200 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">
                        Asunto
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-200 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">
                        Mensaje
                      </label>
                      <textarea
                        rows={5}
                        required
                        className="w-full border border-gray-200 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors resize-none"
                      />
                    </div>
                    <button type="submit" className="btn-accent">
                      <Send size={16} />
                      Enviar mensaje
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
