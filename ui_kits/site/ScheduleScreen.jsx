/* Solicitar avaliação — recriação de app/agendar/page.tsx (monta a mensagem e abre o WhatsApp). */
window.SentinelaKit = window.SentinelaKit || {};
window.SentinelaKit.ScheduleScreen = function ScheduleScreen({ DS, wa }) {
  const { Eyebrow, Button, TextField, SelectField, RadioPillGroup, Card } = DS;
  const [form, setForm] = React.useState({ problema: "", imovel: "Residência", bairro: "", urgencia: "Hoje" });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(null);
  const set = (k, v) => {
    setForm((s) => ({ ...s, [k]: v }));
    setErrors((e) => { const n = { ...e }; delete n[k]; return n; });
  };

  function submit(event) {
    event.preventDefault();
    const next = {};
    if (!form.problema) next.problema = "Selecione o problema";
    if (!form.bairro.trim()) next.bairro = "Informe o bairro ou a cidade";
    setErrors(next);
    if (Object.keys(next).length) return;
    setSent([
      "Olá, Sentinela. Vim pelo site e gostaria de solicitar uma avaliação.",
      `Ocorrência: ${form.problema}`,
      `Tipo de imóvel: ${form.imovel}`,
      `Bairro/cidade: ${form.bairro.trim()}`,
      `Quando preciso: ${form.urgencia}`,
    ].join("\n"));
  }

  return (
    <main id="conteudo" style={{ background: "var(--brand-surface)", paddingTop: 80, minHeight: "100vh" }}>
      <section style={{ background: "var(--brand-navy)", color: "#fff", padding: "56px 0" }}>
        <div className="container-responsive" style={{ display: "grid", gap: 32, gridTemplateColumns: "minmax(0,.8fr) minmax(0,1.2fr)", alignItems: "end", padding: "0 32px" }}>
          <div>
            <Eyebrow tone="inverse">Avaliação inicial</Eyebrow>
            <h1 style={{ margin: "16px 0 0", maxWidth: "12ch", fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,3.2vw,3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.035em", color: "#fff" }}>
              Conte o que está acontecendo.
            </h1>
          </div>
          <p style={{ margin: 0, maxWidth: "56ch", fontSize: "1rem", lineHeight: 1.75, color: "var(--text-on-inverse-muted)" }}>
            Informe somente o necessário para a equipe confirmar a cobertura e continuar o atendimento no WhatsApp.
          </p>
        </div>
      </section>

      <section style={{ padding: "56px 0" }}>
        <div className="container-responsive" style={{ display: "grid", gap: 32, gridTemplateColumns: "minmax(0,1fr) 320px", padding: "0 32px", alignItems: "start" }}>
          <form onSubmit={submit} noValidate style={{ border: "1px solid var(--border-default)", background: "#fff", padding: 32 }}>
            <div style={{ display: "grid", gap: 24, gridTemplateColumns: "1fr 1fr" }}>
              <SelectField id="problema" label="Qual é o problema?" required options={["Escorpiões", "Baratas ou formigas", "Cupins", "Roedores", "Outro"]} value={form.problema} onChange={(v) => set("problema", v)} error={errors.problema} style={{ gridColumn: "1 / -1" }} />
              <SelectField id="imovel" label="Tipo de imóvel" options={["Residência", "Empresa", "Condomínio", "Outro"]} value={form.imovel} onChange={(v) => set("imovel", v)} placeholder="Residência" />
              <TextField id="bairro" label="Bairro ou cidade" required placeholder="Ex.: Centro, Franca" autoComplete="address-level2" value={form.bairro} onChange={(v) => set("bairro", v)} error={errors.bairro} />
              <RadioPillGroup name="urgencia" legend="Quando precisa do atendimento?" options={["Hoje", "Nesta semana", "Quero orientação"]} value={form.urgencia} onChange={(v) => set("urgencia", v)} style={{ gridColumn: "1 / -1" }} />
            </div>
            <Button variant="lime" type="submit" fullWidth style={{ marginTop: 32 }}>Continuar no WhatsApp</Button>
            <p style={{ margin: "16px 0 0", fontSize: "0.75rem", lineHeight: 1.5, color: "var(--brand-muted)" }}>
              Ao continuar, o navegador monta a mensagem e abre o WhatsApp. O site não armazena esses campos nesta etapa.
            </p>
            {sent ? (
              <Card surface="muted" accent="left" padding="1rem" style={{ marginTop: 16 }}>
                <p style={{ margin: 0, fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--brand-lime-deep)" }}>Mensagem montada</p>
                <pre style={{ margin: "8px 0 12px", whiteSpace: "pre-wrap", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--brand-navy)" }}>{sent}</pre>
                <Button variant="whatsapp" size="md" href={wa(sent)} target="_blank">Abrir conversa</Button>
              </Card>
            ) : null}
          </form>

          <aside style={{ borderTop: "2px solid var(--brand-lime)", background: "var(--brand-navy)", padding: 24, color: "#fff" }}>
            <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 700, color: "#fff" }}>Antes da aplicação</h2>
            <p style={{ margin: "12px 0 0", fontSize: "0.875rem", lineHeight: 1.6, color: "var(--text-on-inverse-muted)" }}>
              A equipe orienta sobre preparação do local, afastamento de pessoas e animais e cuidados após o serviço.
            </p>
            <dl style={{ margin: "24px 0 0", borderTop: "1px solid var(--border-inverse-strong)", paddingTop: 20, display: "grid", gap: 20, fontSize: "0.875rem" }}>
              <div><dt style={{ color: "rgba(255,255,255,0.5)" }}>Cobertura</dt><dd style={{ margin: "4px 0 0", fontWeight: 600 }}>Franca e região — SP</dd></div>
              <div><dt style={{ color: "rgba(255,255,255,0.5)" }}>Horários</dt><dd style={{ margin: "4px 0 0", fontWeight: 600 }}>Segunda a Sábado: 07:00 às 19:00</dd></div>
              <div><dt style={{ color: "rgba(255,255,255,0.5)" }}>Contato</dt><dd style={{ margin: "4px 0 0", fontWeight: 600 }}>(16) 99374-7147</dd></div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
};
