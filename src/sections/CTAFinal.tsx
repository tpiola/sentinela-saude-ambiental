import { createWhatsAppUrl } from '@/lib/whatsapp';

export default function CTAFinal() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#002D62] py-24 md:py-32"
      aria-labelledby="cta-h"
    >
      {/* Background mint glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E6FFFA]/5 blur-[100px]" />

      <div className="sentinel-container relative z-10 text-center">
        <span className="text-[.68rem] font-black uppercase tracking-[.22em] text-[#E6FFFA]/60">
          Pronto para Proteger Seu Ambiente
        </span>
        <h2 id="cta-h" className="sentinel-heading-xl mt-4 text-white">
          Sua Paz de Volta.
          <br />
          <span className="text-[#E6FFFA]">Comece agora.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[560px] text-[1rem] leading-[1.85] text-white/60">
          Informe a cidade, tipo de local e o problema observado. Nossa equipe retorna
          em minutos com orientação e o serviço indicado para o seu caso.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={createWhatsAppUrl('Olá! Quero uma avaliação para controle de pragas em Franca SP.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex min-h-14 items-center overflow-hidden rounded-full px-10 text-sm font-black uppercase tracking-[.1em]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#D4A017] via-[#F5C842] to-[#D4A017] bg-[length:200%_100%] animate-[band-shimmer_3s_linear_infinite]" />
            <span className="relative flex items-center gap-2.5 text-[#002D62]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Solicitar Avaliação Agora
            </span>
          </a>

          <a
            href="tel:+5516993747147"
            className="inline-flex min-h-14 items-center rounded-full border border-white/15 bg-white/5 px-10 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
          >
            📞 (16) 99374-7147
          </a>
        </div>

        {/* Guarantee strip */}
        <div className="mx-auto mt-12 flex max-w-[640px] flex-wrap justify-center gap-6 border-t border-white/10 pt-8">
          {['Sem compromisso', 'Resposta em minutos', 'Técnico certificado', 'Insumos premium'].map((item) => (
            <span key={item} className="flex items-center gap-2 text-[.72rem] font-semibold text-white/40">
              <span className="h-1 w-1 rounded-full bg-[#E6FFFA]/40" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
