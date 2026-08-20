/* Home — recriação de app/page.tsx de Alta Conversão para WhatsApp e Prova Local. */
window.SentinelaKit = window.SentinelaKit || {};
window.SentinelaKit.HomeScreen = function HomeScreen({ DS, A, wa, go }) {
  const { Eyebrow, Button, WhatsAppIcon, SectionHeading, ServiceRow, ProcessStep, TrustItem, NoteBar, FieldPhotoCard, FaqItem, PestTile, Chip, TrustCtaTrio, GoogleReviewBadge, Card } = DS;
  const [openFaq, setOpenFaq] = React.useState(0);

  const services = [
    ["01", "Escorpiões", "Ocorrências dentro de casa, quintais, ralos e áreas de circulação.", "Inspeção minuciosa dos abrigos, orientação preventiva e eliminação com produto específico.", "campo/inspecao-caixa-visita-escorpiao-franca-sp.webp"],
    ["02", "Baratas e formigas", "Infestações em cozinhas, despensas, comércios e áreas técnicas.", "Aplicação em gel e micropulverização direcionada sem cheiro e sem sujeira.", "campo/desinsetizacao-ambiente-interno-franca-sp.webp"],
    ["03", "Cupins", "Sinais em móveis, batentes, forros, estruturas e áreas externas.", "Vistoria técnica para identificar a espécie (solo ou madeira) antes do tratamento definitivo.", "campo/dedetizacao-residencial-entrada-franca-sp.webp"],
    ["04", "Roedores (Ratos)", "Vestígios, danos em embalagens, ruídos e circulação em áreas internas.", "Controle com pontos de monitoramento seguros (porta-iscas com chave) e laudo de acompanhamento.", "campo/termonebulizacao-bueiro-franca-sp.webp"],
    ["05", "Empresas e condomínios", "Prevenção recorrente, exigências sanitárias e proteção contínua.", "Plano de controle integrado, cronograma programado e comprovante técnico oficial ANVISA.", "campo/atendimento-camara-municipal-franca-sp.webp"],
  ];

  const faq = [
    ["Encontrei um escorpião ou baratas em casa. O que devo fazer agora?", "Mantenha distância, afaste crianças e animais e não tente capturar com as mãos. Em caso de picada, procure atendimento médico imediato. Para eliminar o foco com segurança, chame a Sentinela pelo WhatsApp para um atendimento prioritário."],
    ["O produto tem cheiro forte? Preciso sair de casa?", "Utilizamos produtos modernos de última geração, a maioria inodora e com baixíssima toxicidade para humanos e animais. A equipe passa todas as orientações simples de afastamento temporário (geralmente apenas durante a secagem)."],
    ["É seguro para animais de estimação (cães e gatos) e crianças?", "Sim! A segurança da sua família é prioridade absoluta. Utilizamos formulações registradas e técnicas que impedem o contato de pets com os produtos aplicados."],
    ["Como recebo o orçamento e quanto tempo demora?", "Você pode solicitar pelo WhatsApp agora mesmo. Descreva o que viu ou envie uma foto/vídeo para receber uma estimativa imediata sem nenhum compromisso."],
    ["Fornecem laudo e comprovante para empresas e condomínios?", "Sim. Entregamos documentação técnica completa, com registro dos produtos utilizados, responsável técnico e cronograma exigido pela Vigilância Sanitária."],
  ];

  const pests = [
    ["escorpiao", "Escorpiões"],
    ["baratas", "Baratas"],
    ["cupins", "Cupins"],
    ["ratos", "Ratos"],
    ["formigas", "Formigas"],
    ["aranhas", "Aranhas"],
    ["mosquitos", "Mosquitos"],
    ["caixa-dagua", "Caixa d'água"]
  ];

  const cidades = ["Franca", "Batatais", "Cristais Paulista", "Orlândia", "Ituverava", "São Joaquim da Barra", "Pedregulho", "Patrocínio Paulista", "Restinga"];

  return (
    <main id="conteudo">
      {/* HERO SECTION DE ALTA CONVERSÃO */}
      <section style={{ position: "relative", background: "linear-gradient(170deg, #001b38 0%, #002347 60%, #003066 100%)", color: "#fff", paddingTop: 88, overflow: "hidden" }}>
        <div className="container-responsive" style={{ display: "grid", gap: 40, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", alignItems: "center", padding: "48px 24px 64px" }}>
          <div style={{ maxWidth: 740, zIndex: 2 }} className="animate-fade-up">
            
            {/* BADGE DE PLANTÃO ATIVO */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 16px", borderRadius: 999, background: "rgba(37, 211, 102, 0.14)", border: "1px solid rgba(37, 211, 102, 0.5)", marginBottom: 18 }} className="animate-radar">
              <span className="live-dot"></span>
              <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "var(--brand-lime)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                Plantão Ativo · Resposta em até 15 min em Franca e região
              </span>
            </div>

            <h1 style={{ margin: "12px 0 0", fontFamily: "var(--font-heading)", fontSize: "clamp(2.15rem, 4.2vw, 4.25rem)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.04em", color: "#fff" }}>
              Livre-se de escorpiões, baratas e cupins hoje mesmo em Franca.
            </h1>

            <p style={{ margin: "20px 0 0", maxWidth: "58ch", fontSize: "1.125rem", lineHeight: 1.7, color: "var(--text-on-inverse-muted)" }}>
              Controle profissional de pragas com técnicos experientes, <strong style={{ color: "#fff" }}>produtos sem cheiro forte</strong> e total segurança para sua família e pets. Atendimento rápido residencial, comercial e condomínios.
            </p>

            {/* CTAS PRINCIPAIS */}
            <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap", alignItems: "center" }}>
              <Button
                variant="whatsapp"
                size="lg"
                className="btn-whatsapp-glow hover-lift"
                href={wa("Olá, Sentinela! Gostaria de um orçamento gratuito para controle de pragas no meu imóvel em Franca/SP.")}
                target="_blank"
                icon={<WhatsAppIcon size={22} />}
                style={{ padding: "16px 28px", fontSize: "1.0625rem", fontWeight: 800, borderRadius: 8, boxShadow: "0 8px 24px rgba(37, 211, 102, 0.35)" }}
              >
                Solicitar Orçamento Grátis no WhatsApp
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                className="hover-lift"
                onClick={() => go("agendar")}
                style={{ padding: "16px 24px", fontSize: "1rem", borderRadius: 8 }}
              >
                Simular Avaliação Online
              </Button>
            </div>

            <p style={{ margin: "16px 0 0", fontSize: "0.875rem", color: "var(--text-on-inverse-muted)", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <span>🕒 Atendimento rápido:</span>
              <strong style={{ color: "#fff" }}>Segunda a Sábado das 07h às 19h · Domingo das 08h às 17h</strong>
            </p>

            {/* DIFERENCIAIS DE CONFIANÇA */}
            <ul style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", listStyle: "none", margin: "28px 0 0", padding: "20px 0 0", borderTop: "1px solid var(--border-inverse)", fontSize: "0.875rem", color: "var(--text-on-inverse-muted)" }}>
              <li style={{ display: "flex", gap: 8, alignItems: "center" }} className="hover-lift">
                <span style={{ color: "var(--brand-lime)", fontWeight: 800, fontSize: "1.2rem" }}>✓</span>
                <span>Orçamento 100% gratuito</span>
              </li>
              <li style={{ display: "flex", gap: 8, alignItems: "center" }} className="hover-lift">
                <span style={{ color: "var(--brand-lime)", fontWeight: 800, fontSize: "1.2rem" }}>✓</span>
                <span>Seguro para pets e crianças</span>
              </li>
              <li style={{ display: "flex", gap: 8, alignItems: "center" }} className="hover-lift">
                <span style={{ color: "var(--brand-lime)", fontWeight: 800, fontSize: "1.2rem" }}>✓</span>
                <span>Laudo técnico e garantia</span>
              </li>
            </ul>
          </div>

          {/* FOTO HERO COM REGISTRO REAL E EFEITO LIFT */}
          <figure style={{ position: "relative", margin: 0, minHeight: 460, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "0 24px 60px rgba(0,0,0,0.35)" }} className="hover-lift animate-fade-up">
            <img
              src={A("campo/dedetizacao-residencial-entrada-franca-sp.webp")}
              alt="Técnico da Sentinela aplicando controle de pragas na porta de residência em Franca SP"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", transition: "transform 0.6s ease" }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.04)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            />
            <figcaption style={{ position: "absolute", insetInline: 0, bottom: 0, padding: 24, paddingTop: 96, background: "linear-gradient(to top, rgba(0,20,40,0.95) 0%, rgba(0,20,40,0.6) 60%, transparent 100%)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "var(--brand-lime)" }}></span>
                <p style={{ margin: 0, fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--brand-lime)" }}>Serviço Real em Franca/SP</p>
              </div>
              <p style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 700, color: "#fff" }}>Aplicação técnica e segura com EPI completo</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* TRUST STRIP COM GOOGLE 5.0 ESTRELAS */}
      <section aria-label="Informações de atendimento e reputação" style={{ borderBlock: "1px solid var(--border-default)", background: "#fff", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
        <dl className="container-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", margin: 0, padding: "0 24px" }}>
          <div className="hover-lift" style={{ padding: "16px" }}><TrustItem label="WhatsApp Direto" value="(16) 99374-7147" href={wa()} /></div>
          <div className="hover-lift" style={{ padding: "16px", borderLeft: "1px solid var(--border-default)" }}><TrustItem label="Reputação Google" value="5.0 ★ Avaliações Máximas" /></div>
          <div className="hover-lift" style={{ padding: "16px", borderLeft: "1px solid var(--border-default)" }}><TrustItem label="Experiência Comprovada" value="11+ Anos · Câmara de Franca" /></div>
          <div className="hover-lift" style={{ padding: "16px", borderLeft: "1px solid var(--border-default)" }}><TrustItem label="Região Atendida" value="Franca e Cidades Vizinhas" /></div>
        </dl>
      </section>

      {/* NOVA SEÇÃO: DIAGNÓSTICO RÁPIDO POR FOTO/VÍDEO NO WHATSAPP COM GLOW */}
      <section style={{ background: "var(--brand-surface)", padding: "64px 0", borderBottom: "1px solid var(--border-default)" }}>
        <div className="container-responsive" style={{ padding: "0 24px" }}>
          <div style={{ background: "linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)", border: "2px solid var(--brand-lime)", borderRadius: 16, padding: "40px 32px", boxShadow: "0 16px 40px rgba(0,35,71,0.08)", display: "grid", gap: 32, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", alignItems: "center" }} className="hover-lift">
            <div>
              <span style={{ display: "inline-block", padding: "6px 14px", background: "rgba(143, 206, 42, 0.2)", borderRadius: 999, color: "var(--brand-lime-deep)", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em" }}>
                Avaliação Rápida Sem Custo
              </span>
              <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)", fontWeight: 800, color: "var(--brand-navy)", lineHeight: 1.15 }}>
                Viu um inseto ou sinal de praga? Envie a foto no WhatsApp.
              </h2>
              <p style={{ margin: "14px 0 0", fontSize: "1.0625rem", lineHeight: 1.6, color: "var(--brand-muted)" }}>
                Não sabe qual espécie é ou qual o melhor tratamento? Tire uma foto ou grave um vídeo rápido. Nosso técnico identifica na hora e passa o valor sem que você precise esperar dias por uma visita.
              </p>
              <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", marginTop: 24 }}>
                <div style={{ padding: 14, background: "#fff", borderRadius: 10, border: "1px solid var(--border-default)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }} className="hover-lift">
                  <strong style={{ color: "var(--brand-navy)", display: "block", fontSize: "0.875rem" }}>1. Fotografe</strong>
                  <span style={{ fontSize: "0.8125rem", color: "var(--brand-muted)" }}>Tire foto da praga ou do local afetado</span>
                </div>
                <div style={{ padding: 14, background: "#fff", borderRadius: 10, border: "1px solid var(--border-default)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }} className="hover-lift">
                  <strong style={{ color: "var(--brand-navy)", display: "block", fontSize: "0.875rem" }}>2. Envie no WhatsApp</strong>
                  <span style={{ fontSize: "0.8125rem", color: "var(--brand-muted)" }}>Clique no botão e envie a imagem</span>
                </div>
                <div style={{ padding: 14, background: "#fff", borderRadius: 10, border: "1px solid var(--border-default)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }} className="hover-lift">
                  <strong style={{ color: "var(--brand-navy)", display: "block", fontSize: "0.875rem" }}>3. Receba o Laudo</strong>
                  <span style={{ fontSize: "0.8125rem", color: "var(--brand-muted)" }}>Diagnóstico e orçamento imediato</span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center", background: "linear-gradient(145deg, #002347 0%, #001730 100%)", padding: "36px 28px", borderRadius: 14, color: "#fff", textAlign: "center", boxShadow: "0 12px 32px rgba(0,35,71,0.25)" }} className="hover-lift">
              <div className="animate-float">
                <WhatsAppIcon size={52} style={{ color: "#25D366", filter: "drop-shadow(0 4px 12px rgba(37, 211, 102, 0.4))" }} />
              </div>
              <div>
                <h3 style={{ margin: 0, color: "#fff", fontSize: "1.35rem", fontWeight: 800 }}>Orçamento via WhatsApp</h3>
                <p style={{ margin: "6px 0 0", fontSize: "0.875rem", color: "var(--text-on-inverse-muted)" }}>Resposta em minutos com atendimento humanizado</p>
              </div>
              <Button
                variant="whatsapp"
                size="lg"
                fullWidth
                href={wa("Olá! Tenho uma foto da praga/local e gostaria da avaliação de vocês.")}
                target="_blank"
                className="btn-whatsapp-glow hover-lift"
                style={{ padding: "16px 20px", fontWeight: 800, borderRadius: 8, fontSize: "1rem" }}
              >
                Enviar Foto no WhatsApp Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ESCORPIÃO — ALERTA E URGÊNCIA SEGURA */}
      <section style={{ background: "var(--brand-navy)", color: "#fff" }}>
        <div className="container-responsive" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(280px,0.9fr)", padding: "0 0 0 32px" }}>
          <div style={{ padding: "64px 32px 64px 0" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", background: "rgba(232, 160, 32, 0.2)", border: "1px solid var(--gbp-ambar)", borderRadius: 6, marginBottom: 14 }}>
              <span style={{ color: "var(--gbp-ambar)", fontWeight: 800, fontSize: "0.8125rem" }}>⚠️ RISCO GRAVE EM FRANCA</span>
            </div>
            <h2 style={{ margin: "10px 0 0", maxWidth: "20ch", fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff" }}>
              Encontrou escorpião em casa? Não tente pegar com as mãos.
            </h2>
            <p style={{ margin: "16px 0 0", maxWidth: "56ch", fontSize: "1.0625rem", lineHeight: 1.75, color: "var(--text-on-inverse-muted)" }}>
              Escorpiões se abrigam em ralos, caixas de passagem e entulho. Uma aplicação errada pode espalhar a praga para o interior dos quartos. A Sentinela possui o protocolo exato de inspeção e combate sem colocar sua família em perigo.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
              <Button variant="whatsapp" size="lg" href={wa("URGENTE: Encontrei escorpião no imóvel em Franca/SP. Preciso de atendimento imediato no bairro:")} target="_blank" icon={<WhatsAppIcon size={20} />}>
                Chamar Atendimento Urgente
              </Button>
            </div>
          </div>
          <figure style={{ position: "relative", margin: 0, minHeight: 360, overflow: "hidden" }}>
            <img src={A("campo/inspecao-caixa-visita-escorpiao-franca-sp.webp")} alt="Inspeção de caixa de visita para controle de escorpiões em Franca SP" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }} />
            <figcaption style={{ position: "absolute", insetInline: 0, bottom: 0, padding: 16, paddingTop: 64, background: "var(--overlay-photo)" }}>
              <p style={{ margin: 0, fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--brand-lime)" }}>Inspeção Especializada</p>
              <p style={{ margin: "4px 0 0", fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 600, color: "#fff" }}>Caixas de passagem e ralos em Franca/SP</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SERVIÇOS POR DIAGNÓSTICO */}
      <section style={{ background: "#fff", padding: "80px 0" }} aria-labelledby="servicos-title">
        <div className="container-responsive" style={{ padding: "0 32px" }}>
          <div style={{ display: "grid", gap: 32, gridTemplateColumns: "minmax(0,0.8fr) minmax(0,1.2fr)", alignItems: "end", borderBottom: "1px solid var(--border-default)", paddingBottom: 40 }}>
            <SectionHeading eyebrow="Soluções Especializadas" title="Controle definitivo com método comprovado." id="servicos-title" />
            <p style={{ margin: 0, maxWidth: "62ch", fontSize: "1rem", lineHeight: 1.75, color: "var(--brand-muted)", justifySelf: "end" }}>
              Tratamento sob medida para cada tipo de imóvel. Utilizamos técnicas modernas que combinam barreira química, gel direcionado e atomização para resolver a infestação na raiz.
            </p>
          </div>
          <div>
            {services.map(([n, t, ctx, resp, img]) => (
              <ServiceRow key={n} number={n} title={t} context={ctx} response={resp} thumbSrc={A(img)} thumbAlt={`Serviço de dedetização de ${t} em Franca`} href={wa(`Gostaria de saber o valor para controle de ${t}.`)} />
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <NoteBar ctaLabel="Conversar sobre documentação" href={wa("Preciso de laudo técnico e contrato empresarial.")}>
              Precisa de documentação para empresa ou condomínio? Entregamos comprovante técnico e laudo oficial conforme as normas da Vigilância Sanitária.
            </NoteBar>
          </div>
        </div>
      </section>

      {/* PROCESSO CLARO EM 3 ETAPAS */}
      <section style={{ background: "var(--brand-navy)", padding: "80px 0" }}>
        <div className="container-responsive" style={{ padding: "0 32px" }}>
          <SectionHeading tone="inverse" align="center" eyebrow="Como funciona o atendimento" title="Do primeiro contato à garantia do imóvel protegido" lead="Sem complicação: orçamento rápido, técnico no horário marcado e acompanhamento pós-serviço." />
          <ol style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(3,1fr)", margin: "56px 0 0", padding: 0 }}>
            <ProcessStep number="01" title="1. Contato via WhatsApp" text="Você informa o problema e a localização. Nossa equipe faz uma triagem imediata e envia a proposta." ctaLabel="Chamar no WhatsApp" href={wa()} />
            <ProcessStep number="02" title="2. Aplicação com Segurança" text="Técnico credenciado realiza a vistoria e a aplicação com produtos registrados e procedimentos que protegem sua família." />
            <ProcessStep number="03" title="3. Garantia e Laudo" text="Entrega de certificado de execução, orientações preventivas e suporte para qualquer dúvida." ctaLabel="Tirar Dúvidas" href={wa()} />
          </ol>
          <div style={{ marginTop: 48, maxWidth: 900, marginInline: "auto" }}>
            <TrustCtaTrio onNavigate={go} />
          </div>
        </div>
      </section>

      {/* GALERIA DE CAMPO REAL */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-responsive" style={{ padding: "0 32px" }}>
          <SectionHeading eyebrow="Registros Reais de Campo" title="Equipe própria atuando em Franca — 100% fotos reais." lead="Veja nossos técnicos em ação em residências, empresas e órgãos públicos como a Câmara Municipal de Franca." />
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(3,1fr)", marginTop: 48 }}>
            <FieldPhotoCard style={{ gridColumn: "span 2" }} aspect="2 / 1" src={A("campo/atendimento-camara-municipal-franca-sp.webp")} alt="Termonebulização na Câmara Municipal de Franca SP" location="Centro · Franca SP" title="Câmara Municipal de Franca" caption="Atendimento institucional oficial — mesmo padrão de excelência aplicado na sua casa ou empresa." />
            <FieldPhotoCard src={A("campo/termonebulizacao-bueiro-franca-sp.webp")} alt="Termonebulização em bueiro urbano em Franca SP" location="Área urbana · Franca SP" title="Controle em Galerias e Bueiros" caption="Tratamento preventivo e curativo em pontos críticos de circulação de escorpiões e roedores." />
            <FieldPhotoCard src={A("campo/desinsetizacao-ambiente-interno-franca-sp.webp")} alt="Desinsetização profissional em ambiente interno em Franca SP" location="Ambiente interno · Franca SP" title="Aplicação Interna Segura" caption="Pulverização de precisão em rodapés e frestas, sem sujeira e com produto seguro." />
            <FieldPhotoCard src={A("campo/limpeza-caixa-dagua-altura-franca-sp.webp")} alt="Limpeza de caixa d'água em altura em Franca SP" location="Reservatório · Franca SP" title="Limpeza de Caixa d'Água" caption="Higienização completa e desinfecção com emissão de laudo de potabilidade." />
            <FieldPhotoCard src={A("campo/dedetizacao-residencial-entrada-franca-sp.webp")} alt="Dedetização residencial na entrada de imóvel em Franca SP" location="Residencial · Franca SP" title="Barreira Química Perimetral" caption="Bloqueio na entrada do imóvel para impedir a invasão de pragas vindas da rua." />
          </div>
        </div>
      </section>

      {/* SEÇÃO B2B E CONDOMÍNIOS */}
      <section style={{ background: "var(--brand-navy)", padding: "80px 0", color: "#fff" }}>
        <div className="container-responsive" style={{ display: "grid", gap: 48, gridTemplateColumns: "minmax(0,1.05fr) minmax(0,.95fr)", alignItems: "center", padding: "0 32px" }}>
          <div>
            <SectionHeading tone="inverse" eyebrow="Empresas, Condomínios e Órgãos Públicos" title="Contratos de manutenção preventiva com laudo e zero interrupção." lead="Atendimento programado com cronograma preventivo, relatórios técnicos e cumprimento integral das normas da ANVISA e Vigilância Sanitária em Franca e região." />
            <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
              <Button variant="lime" size="lg" href={wa("Olá! Gostaria de uma proposta de controle de pragas para empresa/condomínio.")} target="_blank">
                Solicitar Proposta Comercial
              </Button>
              <Button variant="outline-light" size="lg" onClick={() => go("b2b")}>
                Conhecer Soluções B2B
              </Button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 20px", marginTop: 32, borderTop: "1px solid var(--border-inverse-strong)", paddingTop: 24 }}>
              {["Condomínios Residenciais", "Indústrias e Galpões", "Clínicas e Consultórios", "Restaurantes e Bares", "Escolas", "Comércios em Geral"].map((s) => (
                <span key={s} style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--brand-lime)" }}>• {s}</span>
              ))}
            </div>
          </div>
          <figure style={{ position: "relative", margin: 0, minHeight: 460, overflow: "hidden", borderRadius: 12, border: "1px solid var(--border-inverse)" }}>
            <img src={A("campo/atendimento-camara-municipal-franca-sp.webp")} alt="Termonebulização na Câmara Municipal de Franca SP" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
            <figcaption style={{ position: "absolute", insetInline: 0, bottom: 0, padding: 20, paddingTop: 64, background: "var(--overlay-photo)" }}>
              <p style={{ margin: 0, fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--brand-lime)" }}>Registro Institucional Oficial</p>
              <p style={{ margin: "4px 0 0", fontFamily: "var(--font-heading)", fontSize: "1.125rem", fontWeight: 600, color: "#fff" }}>Câmara Municipal de Franca</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ÁREA DE ATENDIMENTO & PRAGAS */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-responsive" style={{ padding: "0 32px" }}>
          <SectionHeading align="center" eyebrow="Cobertura Regional" title="Atendimento rápido em todos os bairros de Franca e região" lead="Consulte a disponibilidade para seu endereço pelo WhatsApp. Resposta imediata." />
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(4,1fr)", marginTop: 48 }}>
            {[["campo/atendimento-camara-municipal-franca-sp.webp", "Centro e Comércio", "Centro"], ["campo/aplicacao-jardim-francano-franca-sp.webp", "Casas e Sobrados", "Jardim Francano"], ["campo/controle-pragas-city-petropolis-franca-sp.webp", "Residencial e Comercial", "City Petrópolis"], ["campo/escorpiao-residencial-baldassari-franca-sp.webp", "Foco em Escorpiões", "Residencial Baldassari"]].map(([src, hi, name]) => (
              <FieldPhotoCard key={name} src={A(src)} alt={`Atendimento da Sentinela no bairro ${name} em Franca SP`} location={hi} title={name} aspect="4 / 5" showCaptionBelow={false} />
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginTop: 32 }}>
            {cidades.map((c) => <Chip key={c} href={wa(`Gostaria de saber se atendem na cidade de ${c}.`)}>{c} — SP</Chip>)}
          </div>
          <h3 style={{ margin: "48px 0 20px", textAlign: "center", fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 700, color: "var(--brand-navy)" }}>Selecione a praga para atendimento imediato:</h3>
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}>
            {pests.map(([p, l]) => <PestTile key={p} pest={p} label={l} href={wa(`Preciso de dedetização para ${l}.`)} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--brand-surface)", padding: "80px 0" }}>
        <div style={{ margin: "0 auto", maxWidth: "48rem", padding: "0 24px" }}>
          <SectionHeading align="center" eyebrow="Dúvidas Frequentes" title="Tudo o que você precisa saber antes de contratar" />
          <ul style={{ display: "grid", gap: 14, listStyle: "none", margin: "48px 0 0", padding: 0 }}>
            {faq.map(([q, a], i) => (
              <FaqItem key={q} question={q} answer={a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </ul>
        </div>
      </section>

      {/* CTA FINAL COM ALTO IMPACTO */}
      <section style={{ borderTop: "1px solid var(--border-default)", background: "linear-gradient(135deg, #002347 0%, #001730 100%)", color: "#fff", padding: "72px 0" }}>
        <div className="container-responsive" style={{ display: "grid", gap: 36, gridTemplateColumns: "minmax(220px,280px) minmax(0,1fr) auto", alignItems: "center", padding: "0 32px" }}>
          <div style={{ position: "relative", minHeight: 220, overflow: "hidden", borderRadius: 12, border: "2px solid var(--brand-lime)" }}>
            <img src={A("campo/dedetizacao-residencial-entrada-franca-sp.webp")} alt="Técnico da Sentinela em atendimento residencial em Franca SP" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
          </div>
          <div>
            <span style={{ fontSize: "0.8125rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--brand-lime)" }}>Atendimento no mesmo dia</span>
            <h2 style={{ margin: "12px 0 0", maxWidth: "18ch", fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.15, color: "#fff" }}>
              Proteja seu imóvel hoje mesmo com a Sentinela.
            </h2>
            <p style={{ margin: "14px 0 0", maxWidth: "56ch", lineHeight: 1.7, color: "var(--text-on-inverse-muted)" }}>
              WhatsApp: <strong style={{ color: "#fff" }}>(16) 99374-7147</strong> · Atendimento humanizado e rápido de segunda a sábado das 07h às 19h e domingo das 08h às 17h em Franca e região.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Button variant="whatsapp" size="lg" className="btn-whatsapp-glow" href={wa("Olá, Sentinela! Gostaria de solicitar um orçamento agora.")} target="_blank" icon={<WhatsAppIcon size={22} />}>
              Chamar no WhatsApp
            </Button>
            <Button variant="outline-light" size="lg" onClick={() => go("agendar")}>
              Preencher Solicitação
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

