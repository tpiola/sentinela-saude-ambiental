"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { calendarBookingHref } from "@/lib/integrations";
import { Calendar, Clock, MapPin, CheckCircle } from "lucide-react";

export function GoogleCalendarBookingSection() {
    const href = calendarBookingHref();

  const benefits = [
    { icon: Calendar, text: "Escolha data e horário online" },
    { icon: Clock, text: "Confirmação automática por e-mail" },
    { icon: MapPin, text: "Atendemos " + BRAND.coverageSummary },
    { icon: CheckCircle, text: "Sem taxa de visita de diagnóstico" },
      ];

  return (
        <section
                id="agendar"
                className="scroll-mt-28 bg-gradient-to-br from-[color:var(--brand-navy)] via-[color:var(--brand-navy-soft)] to-[#004080] py-20 md:py-28"
              >
              <div className="mx-auto max-w-5xl px-4 md:px-6">
                      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        {/* Left: copy */}
                                <motion.div
                                              initial={{ opacity: 0, x: -20 }}
                                              whileInView={{ opacity: 1, x: 0 }}
                                              viewport={{ once: true }}
                                            >
                                            <p className="text-xs font-bold tracking-widest text-[color:var(--brand-lime)] uppercase">
                                                          Agendamento Online
                                            </p>p>
                                            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-4xl leading-tight">
                                                          Agende sua visita técnica com facilidade
                                            </h2>h2>
                                            <p className="mt-4 text-white/75 text-lg leading-relaxed">
                                                          Escolha o melhor dia e horário direto pelo Google Agenda.
                                                          Confirmação automática e lembrete antes do atendimento —
                                                          sem burocracia, sem espera.
                                            </p>p>
                                
                                            <ul className="mt-8 space-y-4">
                                              {benefits.map(({ icon: Icon, text }) => (
                                                              <li key={text} className="flex items-center gap-3">
                                                                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-lime)]/20 text-[color:var(--brand-lime)]">
                                                                                                    <Icon className="h-5 w-5" aria-hidden />
                                                                                </span>span>
                                                                                <span className="text-white/85 font-medium">{text}</span>span>
                                                              </li>li>
                                                            ))}
                                            </ul>ul>
                                </motion.div>motion.div>
                      
                        {/* Right: CTA card */}
                                <motion.div
                                              initial={{ opacity: 0, x: 20 }}
                                              whileInView={{ opacity: 1, x: 0 }}
                                              viewport={{ once: true }}
                                              transition={{ delay: 0.1 }}
                                              className="rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm p-8 text-center shadow-2xl"
                                            >
                                            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[color:var(--brand-lime)] shadow-lg">
                                                          <Calendar className="h-10 w-10 text-[color:var(--brand-navy)]" aria-hidden />
                                            </div>div>
                                
                                            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
                                                          Agende agora
                                            </h3>h3>
                                            <p className="mt-2 text-white/70">
                                                          Horários disponíveis de segunda a sábado, 07h às 19h
                                            </p>p>
                                
                                            <a
                                                            href={href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="mt-8 inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-[color:var(--brand-lime)] px-8 py-3 font-[family-name:var(--font-heading)] text-base font-bold text-[color:var(--brand-navy)] shadow-lg transition hover:bg-[color:var(--brand-green-light)] active:scale-95"
                                                          >
                                                          Abrir Google Agenda →
                                            </a>a>
                                
                                            <p className="mt-4 text-sm text-white/50">
                                                          Gratuito · Sem compromisso · Cancele a qualquer momento
                                            </p>p>
                                
                                            <div className="mt-6 border-t border-white/15 pt-6">
                                                          <p className="text-xs text-white/50 mb-3">Prefere falar diretamente?</p>p>
                                                          <a
                                                                            href={"https://wa.me/" + BRAND.phoneE164 + "?text=" + encodeURIComponent("Olá, Sentinela! Quero agendar uma visita técnica.")}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/50 px-5 py-2 text-sm font-semibold text-[#25D366] hover:bg-[#25D366]/10 transition"
                                                                          >
                                                                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>svg>
                                                                          WhatsApp: {BRAND.phoneDisplay}
                                                          </a>a>
                                            </div>div>
                                </motion.div>motion.div>
                      </div>div>
              </div>div>
        </section>section>
      );
}</section>
