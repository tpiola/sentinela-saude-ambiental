import Image from "next/image";
import Link from "next/link";
import { BRAND, mapsDirectionsUrl, whatsappHref } from "@/lib/brand";
import { MapEmbed } from "@/components/map-embed";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--brand-border)] bg-[color:var(--brand-navy)] text-white">
      <div className="relative flex justify-center pt-2">
        <div className="relative -mt-10 h-24 w-24">
          <div className="absolute inset-0 rounded-full bg-[color:var(--brand-navy)] ring-2 ring-white/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={BRAND.logoPath}
              alt={`Marca ${BRAND.name}`}
              width={96}
              height={96}
              className="h-full w-full scale-[0.85] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-10 md:px-6 md:pb-14">
        <div className="mb-10 border border-white/10 bg-white/5 px-5 py-5 sm:flex sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-base font-bold text-white sm:text-lg">
              Atendimento em Franca e região
            </h2>
            <p className="mt-1 text-sm text-white/55">
              Confirme a cobertura do seu bairro ou município antes de agendar.
            </p>
          </div>
          <Link
            href="/contato"
            className="mt-4 inline-flex min-h-11 items-center border-b-2 border-[color:var(--brand-lime)] font-bold sm:mt-0"
          >
            Ver contatos
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-xl font-black tracking-tight text-white">SENTINELA</p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
              Controle de pragas com inspeção, orientação preventiva e registro do
              serviço conforme o escopo contratado.
            </p>
            <div className="mt-4 max-w-[240px]">
              <MapEmbed title="Onde estamos" />
            </div>
          </div>

          <nav aria-label="Links do rodapé">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-[color:var(--brand-lime)]">
              Links
            </h2>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-white/60 hover:text-white">Início</Link></li>
              <li><Link href="/servicos" className="text-sm text-white/60 hover:text-white">Serviços</Link></li>
              <li><Link href="/sobre" className="text-sm text-white/60 hover:text-white">Sobre</Link></li>
              <li><Link href="/faq" className="text-sm text-white/60 hover:text-white">Dúvidas</Link></li>
              <li><Link href="/condominio" className="text-sm text-white/60 hover:text-white">Empresas e condomínios</Link></li>
              <li><Link href="/contato" className="text-sm text-white/60 hover:text-white">Contato</Link></li>
              <li><Link href="/privacidade" className="text-sm text-white/60 hover:text-white">Privacidade</Link></li>
              <li><Link href="/blog" className="text-sm text-white/60 hover:text-white">Conteúdos</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-[color:var(--brand-lime)]">
              Contato
            </h2>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`tel:+${BRAND.phoneE164}`}
                  className="text-sm text-white/60 hover:text-white"
                >
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="break-all text-sm text-white/60 hover:text-white"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="text-sm leading-6 text-white/40">{BRAND.addressFull}</li>
              <li>
                <a
                  href={mapsDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[color:var(--brand-lime)] underline underline-offset-2 hover:text-white"
                >
                  Ver rota no mapa →
                </a>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-4">
              <div className="shrink-0 bg-white p-1.5">
                <Image
                  src="/qr-whatsapp.png"
                  alt="QR Code para chamar a Sentinela no WhatsApp"
                  width={104}
                  height={104}
                  className="h-[104px] w-[104px]"
                />
              </div>
              <p className="text-xs leading-5 text-white/50">
                Aponte a câmera do celular para falar direto com a equipe no
                WhatsApp —{" "}
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--brand-lime)] underline underline-offset-2"
                >
                  {BRAND.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center md:flex-row md:justify-between">
          <p className="text-xs text-white/40">
            © {year} {BRAND.name}. CNPJ: {BRAND.cnpj}
          </p>
          <p className="text-xs text-white/40">
            Sistema criado por{" "}
            <a
              href="https://www.reidasvendas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--brand-lime)] underline underline-offset-2"
            >
              Rei das Vendas
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
