import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Política de Privacidade — Sentinela Saúde Ambiental",
  description:
    "Política de privacidade e proteção de dados pessoais da Sentinela Saúde Ambiental, em conformidade com a LGPD (Lei 13.709/2018).",
  alternates: { canonical: "/privacidade" },
  robots: { index: false },
};

export default function PrivacidadePage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white pt-20">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm text-[color:var(--brand-muted)]">
            Última atualização: maio de 2026
          </p>

          <div className="prose prose-sm mt-10 max-w-none text-[color:var(--foreground)]">
            <h2>1. Quem somos</h2>
            <p>
              <strong>{BRAND.name}</strong> (sucessora da Better Controle de
              Pragas), empresa de controle integrado de pragas com sede em
              Franca — SP, CNAE 8122-2/00. E-mail de contato:{" "}
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
            </p>

            <h2>2. Dados coletados</h2>
            <p>Coletamos apenas os dados necessários para prestar nossos serviços:</p>
            <ul>
              <li>
                <strong>Dados de contato:</strong> nome, e-mail, telefone/WhatsApp.
              </li>
              <li>
                <strong>Dados de atendimento:</strong> endereço do imóvel (apenas
                cidade/bairro para diagnóstico), tipo de praga, urgência.
              </li>
              <li>
                <strong>Dados de navegação:</strong> cookies de análise (Google
                Analytics 4) para melhorar o site — somente após seu consentimento.
              </li>
            </ul>

            <h2>3. Finalidade e base legal</h2>
            <ul>
              <li>
                <strong>Execução de contrato (Art. 7°, V):</strong> processar
                pedidos de orçamento, agendamentos e atendimentos.
              </li>
              <li>
                <strong>Legítimo interesse (Art. 7°, IX):</strong> envio de
                confirmações de agendamento, lembretes e comunicações sobre o
                serviço contratado.
              </li>
              <li>
                <strong>Consentimento (Art. 7°, I):</strong> envio de
                comunicações de marketing (quando solicitado).
              </li>
            </ul>

            <h2>4. Compartilhamento de dados</h2>
            <p>
              Seus dados <strong>não são vendidos</strong>. Podemos compartilhá-los
              apenas com:
            </p>
            <ul>
              <li>
                Ferramentas de agendamento e calendário (Google Calendar) para
                confirmar visitas técnicas.
              </li>
              <li>
                Ferramentas de análise (Google Analytics) — somente com seu
                consentimento e com dados anonimizados.
              </li>
              <li>
                Autoridades competentes, quando exigido por lei.
              </li>
            </ul>

            <h2>5. Retenção de dados</h2>
            <p>
              Mantemos seus dados pelo tempo necessário para prestar o serviço e
              cumprir obrigações legais — em geral, até 5 anos após o último
              contato, salvo obrigação legal superior.
            </p>

            <h2>6. Seus direitos (LGPD)</h2>
            <p>
              Você pode, a qualquer momento, solicitar via e-mail ({BRAND.email}):
            </p>
            <ul>
              <li>Acesso aos seus dados pessoais.</li>
              <li>Correção de dados incompletos ou inexatos.</li>
              <li>Eliminação dos seus dados (quando não houver obrigação legal).</li>
              <li>Portabilidade dos dados.</li>
              <li>Revogação do consentimento.</li>
              <li>Informação sobre compartilhamento com terceiros.</li>
            </ul>
            <p>Responderemos em até 15 dias úteis.</p>

            <h2>7. Cookies</h2>
            <p>
              Utilizamos cookies estritamente necessários (funcionamento do site) e
              cookies analíticos (Google Analytics 4), estes últimos apenas com seu
              consentimento explícito. Você pode recusar cookies analíticos a
              qualquer momento.
            </p>

            <h2>8. Segurança</h2>
            <p>
              Utilizamos HTTPS (TLS 1.3), acesso restrito e revisão periódica de
              permissões para proteger seus dados.
            </p>

            <h2>9. Alterações nesta política</h2>
            <p>
              Eventuais atualizações serão publicadas nesta página com a data de
              revisão. Uso continuado do site após mudanças constitui aceite das
              novas condições.
            </p>

            <h2>10. Contato</h2>
            <p>
              Dúvidas ou solicitações relacionadas à privacidade:{" "}
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> ou WhatsApp{" "}
              <a href={`https://wa.me/${BRAND.phoneE164}`}>{BRAND.phoneDisplay}</a>.
            </p>
          </div>

          <div className="mt-12 border-t border-[color:var(--brand-border)] pt-6">
            <Link
              href="/"
              className="text-sm font-semibold text-[color:var(--brand-navy)] hover:underline"
            >
              ← Voltar ao início
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
