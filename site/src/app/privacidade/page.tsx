import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BRAND } from "@/lib/brand";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata = buildPageMetadata({
  title: "Política de Privacidade",
  description:
    "Informações sobre coleta, uso, compartilhamento e direitos relacionados aos dados pessoais tratados pela Sentinela Saúde Ambiental.",
  path: "/privacidade",
});

const sectionClass = "border-t border-[color:var(--brand-border)] pt-8";
const headingClass =
  "font-[family-name:var(--font-heading)] text-xl font-bold text-[color:var(--brand-navy)]";
const paragraphClass = "mt-3 leading-7 text-[color:var(--brand-muted)]";
const listClass =
  "mt-4 list-disc space-y-2 pl-5 leading-7 text-[color:var(--brand-muted)]";

export default function PrivacidadePage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="min-h-screen bg-white pt-20">
        <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-green-deep)]">
            Proteção de dados
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-4 leading-7 text-[color:var(--brand-muted)]">
            Esta política explica como os dados pessoais informados pelo site são
            tratados para atendimento, mensuração autorizada e cumprimento de
            obrigações aplicáveis.
          </p>
          <p className="mt-3 text-sm text-[color:var(--brand-muted)]">
            Última atualização: 18 de agosto de 2026
          </p>

          <div className="mt-12 space-y-8">
            <section className={sectionClass}>
              <h2 className={headingClass}>1. Controlador e contato</h2>
              <p className={paragraphClass}>
                O controlador dos dados tratados por este site é{" "}
                <strong className="text-[color:var(--brand-navy)]">
                  {BRAND.name}
                </strong>
                , CNPJ {BRAND.cnpj}, com endereço em {BRAND.addressFull}.
              </p>
              <p className={paragraphClass}>
                Solicitações sobre privacidade podem ser enviadas para{" "}
                <a
                  href={`mailto:${BRAND.email}`}
                  className="font-semibold text-[color:var(--brand-navy)] underline underline-offset-4"
                >
                  {BRAND.email}
                </a>
                .
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>2. Dados tratados</h2>
              <p className={paragraphClass}>
                Dependendo da interação, podemos tratar:
              </p>
              <ul className={listClass}>
                <li>dados enviados voluntariamente durante o atendimento pelo WhatsApp;</li>
                <li>bairro ou cidade, tipo de ocorrência, imóvel e prazo informado;</li>
                <li>
                  nome, e-mail e mensagem quando fornecidos em outros canais de
                  contato;
                </li>
                <li>
                  página de origem, referência e parâmetros de campanha, como UTMs,
                  para identificar a origem do pedido;
                </li>
                <li>
                  dados técnicos necessários à segurança e operação, como data,
                  horário, navegador e registros de requisição;
                </li>
                <li>
                  dados de navegação para analytics e publicidade somente após a
                  escolha de aceitar a medição, quando essas ferramentas estiverem
                  configuradas.
                </li>
              </ul>
              <p className={paragraphClass}>
                Não solicitamos dados de saúde ou outras informações pessoais
                sensíveis no formulário inicial. Evite incluí-los nas mensagens.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>3. Finalidades</h2>
              <ul className={listClass}>
                <li>receber e encaminhar pedidos de avaliação e orçamento;</li>
                <li>confirmar área de atendimento e organizar o contato comercial;</li>
                <li>manter registros necessários ao atendimento solicitado;</li>
                <li>proteger o site contra abuso, fraude e automações indevidas;</li>
                <li>
                  medir o desempenho do site e das campanhas quando houver
                  consentimento para as tecnologias de medição;
                </li>
                <li>cumprir obrigações legais, regulatórias ou exercer direitos.</li>
              </ul>
              <p className={paragraphClass}>
                A base legal aplicável depende da finalidade e pode incluir
                procedimentos preliminares a pedido do titular, execução de
                contrato, cumprimento de obrigação legal, legítimo interesse ou
                consentimento.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>4. Fluxo do formulário</h2>
              <p className={paragraphClass}>
                Ao concluir o formulário de avaliação, o navegador monta uma mensagem
                com os campos preenchidos e abre o WhatsApp. Esses campos não são
                enviados a uma rota de armazenamento da Sentinela pelo site nessa etapa.
              </p>
              <p className={paragraphClass}>
                O WhatsApp é um serviço independente. Ao abrir ou enviar a mensagem,
                o tratamento também fica sujeito às políticas e configurações desse
                serviço.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>5. Fornecedores e compartilhamento</h2>
              <p className={paragraphClass}>
                Os dados podem ser tratados por fornecedores estritamente necessários
                à operação, como:
              </p>
              <ul className={listClass}>
                <li>
                  fornecedor de hospedagem e entrega do site, para operação e
                  registros técnicos necessários à segurança;
                </li>
                <li>WhatsApp/Meta, quando o visitante continua o atendimento;</li>
                <li>
                  Google Analytics, Google Tag Manager, Google Ads ou Meta Pixel,
                  somente quando configurados e autorizados pela escolha de medição;
                </li>
                <li>
                  prestadores técnicos autorizados, quando necessários para manter o
                  site e as automações.
                </li>
              </ul>
              <p className={paragraphClass}>
                Não vendemos dados pessoais. Alguns fornecedores podem operar
                infraestrutura em outros países, observando suas políticas,
                contratos e mecanismos aplicáveis de proteção de dados.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>6. Cookies e medição</h2>
              <p className={paragraphClass}>
                O site pode armazenar uma preferência local para lembrar se o
                visitante aceitou ou recusou a medição. Tags analíticas e
                publicitárias configuradas pelo site somente devem ser carregadas
                após a aceitação.
              </p>
              <p className={paragraphClass}>
                A recusa não impede o acesso ao conteúdo, ao formulário ou ao
                WhatsApp. A preferência pode ser alterada apagando os dados do site
                no navegador até que seja disponibilizado um controle específico na
                interface.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>7. Retenção</h2>
              <p className={paragraphClass}>
                Os dados são mantidos pelo período necessário para atender a
                solicitação, administrar a relação comercial, cumprir obrigações e
                exercer direitos. O prazo pode variar conforme a finalidade e será
                revisto quando o dado deixar de ser necessário, ressalvadas as
                hipóteses legais de conservação.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>8. Direitos do titular</h2>
              <p className={paragraphClass}>
                Nos termos da LGPD, o titular pode solicitar, conforme aplicável:
              </p>
              <ul className={listClass}>
                <li>confirmação da existência de tratamento e acesso aos dados;</li>
                <li>correção de informações incompletas, inexatas ou desatualizadas;</li>
                <li>
                  anonimização, bloqueio ou eliminação de dados desnecessários,
                  excessivos ou tratados em desconformidade;
                </li>
                <li>informações sobre compartilhamento;</li>
                <li>revogação do consentimento;</li>
                <li>
                  eliminação de dados tratados com consentimento, respeitadas as
                  hipóteses legais de conservação;
                </li>
                <li>outros direitos previstos na legislação aplicável.</li>
              </ul>
              <p className={paragraphClass}>
                A solicitação deve permitir a verificação da identidade do
                requerente. Procuraremos atender imediatamente quando possível ou
                informar os motivos que impeçam a providência imediata. Pedidos de
                acesso completo observarão os prazos legais aplicáveis.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>9. Segurança</h2>
              <p className={paragraphClass}>
                Adotamos medidas administrativas e técnicas compatíveis com a
                operação para reduzir riscos de acesso não autorizado, perda,
                alteração ou divulgação indevida. Nenhum sistema é absolutamente
                imune a incidentes; por isso, controles e fornecedores devem ser
                revistos periodicamente.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>10. Atualizações</h2>
              <p className={paragraphClass}>
                Esta política pode ser atualizada para refletir mudanças no site,
                nas ferramentas ou nas obrigações aplicáveis. A data de revisão será
                alterada nesta página. Mudanças relevantes não serão tratadas como
                consentimento automático para finalidades que exijam nova autorização.
              </p>
            </section>
          </div>

          <div className="mt-12 border-t border-[color:var(--brand-border)] pt-6">
            <Link
              href="/"
              className="text-sm font-semibold text-[color:var(--brand-navy)] underline underline-offset-4"
            >
              ← Voltar ao início
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
