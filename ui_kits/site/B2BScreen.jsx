/* Empresas e condomínios — recriação de app/condominio/page.tsx + sections/b2b-section. */
window.SentinelaKit = window.SentinelaKit || {};
window.SentinelaKit.B2BScreen = function B2BScreen({ DS, A, wa, go }) {
  const { Eyebrow, Button, WhatsAppIcon, SectionHeading, Card, TrustItem, Chip, AccentStat, UiIcon, NoteBar } = DS;

  const beneficios = [
    ["document", "Comprovante técnico do serviço", "Registros e documentação previstos no escopo contratado, para apresentar à administração e à fiscalização."],
    ["calendar", "Cronograma preventivo", "Visitas programadas sem interromper a operação, com registro fotográfico a cada atendimento."],
    ["shield", "Protocolo por ambiente", "Método definido conforme praga, estrutura e circulação de pessoas — área comum, garagem, lixeira e caixa d'água."],
    ["phone", "Canal direto com a equipe", "Ocorrência entre visitas é tratada pelo mesmo técnico que conhece o condomínio."],
  ];

  return (
    <main id="conteudo">
      <section style={{ background: "var(--brand-navy)", color: "#fff", paddingTop: 88 }}>
        <div className="container-responsive" style={{ display: "grid", gap: 48, gridTemplateColumns: "minmax(0,1.05fr) minmax(0,.95fr)", alignItems: "center", padding: "48px 32px 64px" }}>
          <div>
            <Eyebrow tone="inverse">Contratos e órgãos públicos</Eyebrow>
            <h1 style={{ margin: "16px 0 0", maxWidth: "18ch", fontFamily: "var(--font-heading)", fontSize: "clamp(2.25rem,3.6vw,3.25rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.035em", color: "#fff" }}>
              O mesmo padrão da Câmara Municipal no seu condomínio.
            </h1>
            <p style={{ margin: "24px 0 0", maxWidth: "60ch", fontSize: "1.0625rem", lineHeight: 1.75, color: "var(--text-on-inverse-muted)" }}>
              Condomínios, indústrias, comércios e clínicas em Franca e região contam com a Sentinela para controle preventivo, documentação do serviço e atendimento que não para a operação.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <Button variant="lime" href={wa("Gostaria de solicitar um orçamento para controle de pragas em condomínio/empresa.")} target="_blank">Orçamento empresarial</Button>
              <Button variant="outline-light" onClick={() => go("agendar")}>Solicitar visita técnica</Button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32, borderTop: "1px solid var(--border-inverse-strong)", paddingTop: 24 }}>
              {["Condomínios residenciais", "Shoppings e galerias", "Indústrias e galpões", "Clínicas", "Restaurantes e bares", "Escolas e creches"].map((s) => (
                <span key={s} style={{ fontSize: "0.875rem", color: "var(--text-on-inverse-muted)" }}>{s}</span>
              ))}
            </div>
          </div>
          <figure style={{ position: "relative", margin: 0, minHeight: 460, overflow: "hidden", border: "1px solid var(--border-inverse)" }}>
            <img src={A("campo/atendimento-camara-municipal-franca-sp.webp")} alt="Termonebulização na Câmara Municipal de Franca SP" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
            <figcaption style={{ position: "absolute", insetInline: 0, bottom: 0, padding: 20, paddingTop: 72, background: "var(--overlay-photo)" }}>
              <p style={{ margin: 0, fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--brand-lime)" }}>Registro institucional</p>
              <p style={{ margin: "4px 0 0", fontFamily: "var(--font-heading)", fontSize: "1.125rem", fontWeight: 600, color: "#fff" }}>Câmara Municipal de Franca</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-responsive" style={{ padding: "0 32px" }}>
          <SectionHeading eyebrow="O que entra no contrato" title="Prevenção com registro, não visita solta." lead="O escopo é montado a partir da vistoria: pontos de controle, periodicidade e documentação são definidos antes da contratação." />
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(2,1fr)", marginTop: 40 }}>
            {beneficios.map(([icon, t, d]) => (
              <Card key={t} surface="white" padding="1.5rem" style={{ display: "flex", gap: 16 }}>
                <span style={{ display: "inline-flex", height: 44, width: 44, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-md)", background: "rgba(143,206,42,0.14)", color: "var(--brand-lime-deep)" }}>
                  <UiIcon name={icon} size={20} />
                </span>
                <div>
                  <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "1.0625rem", fontWeight: 700, color: "var(--brand-navy)" }}>{t}</h3>
                  <p style={{ margin: "6px 0 0", fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--brand-muted)" }}>{d}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--brand-surface)", borderBlock: "1px solid var(--border-default)", padding: "48px 0" }}>
        <div className="container-responsive" style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(4,1fr)", padding: "0 32px" }}>
          <AccentStat value="Franca e região" label="Atendimento local com equipe própria" />
          <AccentStat value="Residencial" label="Casas e apartamentos" />
          <AccentStat value="Empresarial" label="Empresas, condomínios e órgãos públicos" />
          <AccentStat value="Inspeção" label="Diagnóstico antes do tratamento" />
        </div>
      </section>

      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-responsive" style={{ padding: "0 32px" }}>
          <SectionHeading align="center" eyebrow="Cobertura" title="Municípios consultados para atendimento" />
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginTop: 32 }}>
            {["Franca", "Batatais", "Cristais Paulista", "Orlândia", "Ituverava", "São Joaquim da Barra", "Pedregulho", "Patrocínio Paulista", "Restinga"].map((c) => (
              <Chip key={c} href="#">{c} — SP</Chip>
            ))}
          </div>
          <dl className="container-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, margin: "48px 0 0", padding: 0, borderTop: "1px solid var(--border-default)" }}>
            <TrustItem label="WhatsApp comercial" value="(16) 99374-7147" href={wa()} />
            <TrustItem label="CNPJ" value="30.438.427/0001-37" />
            <TrustItem label="Horários" value="Seg a sáb 07h–19h · dom 08h–17h" />
          </dl>
          <div style={{ marginTop: 32 }}>
            <NoteBar ctaLabel="Solicitar conversa técnica" href={wa()}>
              A rota, o escopo e os documentos previstos são confirmados antes da contratação — sem promessa de prazo que o escopo não garante.
            </NoteBar>
          </div>
        </div>
      </section>
    </main>
  );
};
