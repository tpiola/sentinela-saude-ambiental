/* Página de praga (escorpião) — recriação de app/pragas/[slug]/page-client.tsx. */
window.SentinelaKit = window.SentinelaKit || {};
window.SentinelaKit.PestScreen = function PestScreen({ DS, A, wa, go }) {
  const { Eyebrow, Badge, Button, WhatsAppIcon, SectionHeading, Card, ProcessStep, FaqItem, NoteBar, PestIcon } = DS;
  const [openFaq, setOpenFaq] = React.useState(0);

  const sinais = [
    ["Ralos e caixas de visita", "Abrigo úmido e escuro — o ponto de entrada mais comum em Franca."],
    ["Entulho e material encostado na parede", "Pilhas de tijolo, madeira e vasos criam abrigo permanente no quintal."],
    ["Frestas de rodapé e batente", "Passagem entre a área externa e o interior do imóvel."],
    ["Muro divisório e jardim", "Área verde e serrapilheira sustentam a alimentação do escorpião."],
  ];

  return (
    <main id="conteudo">
      <section style={{ background: "var(--brand-navy)", color: "#fff", paddingTop: 88 }}>
        <div className="container-responsive" style={{ display: "grid", gap: 40, gridTemplateColumns: "minmax(0,1.1fr) minmax(320px,.9fr)", alignItems: "center", padding: "48px 32px 56px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <PestIcon name="escorpiao" size={36} style={{ color: "var(--brand-lime)" }} />
              <Eyebrow tone="inverse">Controle de pragas · escorpião</Eyebrow>
            </div>
            <h1 style={{ margin: "20px 0 0", maxWidth: "22ch", fontFamily: "var(--font-heading)", fontSize: "clamp(2.25rem,3.8vw,3.5rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.04em", color: "#fff" }}>
              Controle de escorpião em Franca e região
            </h1>
            <p style={{ margin: "20px 0 0", maxWidth: "58ch", fontSize: "1.0625rem", lineHeight: 1.75, color: "var(--text-on-inverse-muted)" }}>
              Escorpião não se resolve com aplicação genérica: o trabalho começa pela inspeção dos abrigos e acessos do imóvel. A Sentinela mapeia ralos, caixas de visita, muros e entulho antes de definir o tratamento.
            </p>
            <div style={{ marginTop: 20 }}><Badge pulse>Atendimento prioritário em Franca</Badge></div>
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <Button variant="whatsapp" size="lg" className="btn-whatsapp-glow" href={wa("Encontrei escorpião no imóvel em Franca/SP. Meu bairro é:")} target="_blank" icon={<WhatsAppIcon size={20} />}>Chamar Atendimento Urgente</Button>
              <Button variant="outline-light" size="lg" onClick={() => go("agendar")}>Solicitar inspeção</Button>
            </div>
          </div>
          <figure style={{ position: "relative", margin: 0, minHeight: 420, overflow: "hidden", border: "1px solid var(--border-inverse)" }}>
            <img src={A("campo/escorpiao-residencial-baldassari-franca-sp.webp")} alt="Controle de escorpião em residência no Residencial Baldassari, Franca SP" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <figcaption style={{ position: "absolute", insetInline: 0, bottom: 0, padding: 20, paddingTop: 72, background: "var(--overlay-photo)" }}>
              <p style={{ margin: 0, fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--brand-lime)" }}>Residencial Baldassari · Franca SP</p>
              <p style={{ margin: "4px 0 0", fontFamily: "var(--font-heading)", fontSize: "1.125rem", fontWeight: 600, color: "#fff" }}>Atendimento com foco em escorpião</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-responsive" style={{ padding: "0 32px" }}>
          <SectionHeading eyebrow="O que a equipe procura" title="Onde o escorpião se abriga no seu imóvel" lead="A inspeção percorre os pontos onde a espécie realmente se instala. Sem esse mapeamento, o tratamento não se sustenta." />
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(2,1fr)", marginTop: 40 }}>
            {sinais.map(([t, d]) => (
              <Card key={t} surface="muted" accent="left" padding="1.25rem">
                <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "1.125rem", fontWeight: 700, color: "var(--brand-navy)" }}>{t}</h3>
                <p style={{ margin: "8px 0 0", fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--brand-muted)" }}>{d}</p>
              </Card>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <NoteBar ctaLabel="Falar no WhatsApp" href={wa()}>
              Em caso de picada, procure atendimento de saúde imediatamente. O controle de pragas não substitui atendimento médico.
            </NoteBar>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--brand-navy)", padding: "80px 0" }}>
        <div className="container-responsive" style={{ padding: "0 32px" }}>
          <SectionHeading tone="inverse" eyebrow="Protocolo de escorpião" title="Como a Sentinela conduz o atendimento" />
          <ol style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(3,1fr)", margin: "48px 0 0", padding: 0 }}>
            <ProcessStep number="01" title="Inspeção dos acessos" text="Ralos, caixas de visita, rodapés, muro e área externa são abertos e avaliados um a um." />
            <ProcessStep number="02" title="Tratamento definido pela ocorrência" text="Método e produto registrado escolhidos conforme abrigo, estrutura e circulação de pessoas e animais." />
            <ProcessStep number="03" title="Orientação preventiva" text="Vedação, destinação de entulho e cuidados de rotina para não recriar o abrigo." ctaLabel="Chamar no WhatsApp" href={wa()} />
          </ol>
        </div>
      </section>

      <section style={{ background: "var(--brand-surface)", padding: "80px 0" }}>
        <div style={{ margin: "0 auto", maxWidth: "48rem", padding: "0 24px" }}>
          <SectionHeading align="center" eyebrow="Dúvidas sobre escorpião" title="O que fazer e o que evitar" />
          <ul style={{ display: "grid", gap: 12, listStyle: "none", margin: "40px 0 0", padding: 0 }}>
            {[["Encontrei um escorpião. O que devo fazer?", "Mantenha distância, afaste pessoas e animais e não tente capturá-lo com as mãos. Em caso de picada, procure atendimento de saúde imediatamente."], ["Uma aplicação resolve para sempre?", "Não. A frequência depende da espécie, da estrutura do imóvel e das condições do entorno; ela é definida depois da inspeção."], ["Precisa sair de casa durante o serviço?", "A equipe informa antes do atendimento a preparação, o afastamento e os cuidados necessários para pessoas, animais e alimentos."]].map(([q, a], i) => (
              <FaqItem key={q} question={q} answer={a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};
