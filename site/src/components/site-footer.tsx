import Link from "next/link";
import { BRAND } from "@/lib/brand";

export function SiteFooter() {
  const ano = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--brand-border)] bg-[color:var(--brand-navy)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-black tracking-tight text-white">SENTINELA</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Controle integrado de pragas urbanas com laudo técnico ANVISA, garantia contratual e responsabilidade ambiental.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-lime)] mb-4">Links</h4>
            <ul className="space-y-2.5">
              <li><a href="/" className="text-sm text-white/60 hover:text-white transition-colors">Início</a></li>
              <li><a href="/servicos" className="text-sm text-white/60 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="/sobre" className="text-sm text-white/60 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="/faq" className="text-sm text-white/60 hover:text-white transition-colors">Dúvidas</a></li>
            </ul>
          </div>

          {/* Contato + Crédito */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-lime)] mb-4">Contato</h4>
            <ul className="space-y-2.5">
              <li>
                <a href={`https://wa.me/${BRAND.phoneE164}`} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
                  WhatsApp: ({BRAND.phoneDisplay})
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="text-sm text-white/60 hover:text-white transition-colors">
                  {BRAND.email}
                </a>
              </li>
              <li className="text-sm text-white/40">{BRAND.addressFull}</li>
            </ul>
          </div>
        </div>

        {/* Divider + Créditos */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col items-center gap-3 text-center md:flex-row md:justify-between">
          <p className="text-xs text-white/40">
            &copy; {ano} Sentinela Saúde Ambiental. CNPJ: {BRAND.cnpj}
          </p>
          <p className="text-xs text-white/40">
            Sistema criado por{" "}
            <a
              href="https://www.reidasvendas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--brand-lime)] hover:brightness-110 underline underline-offset-2 transition-all"
            >
              Rei das Vendas
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
