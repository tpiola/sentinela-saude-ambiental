/* ScheduleScreen — Formulário Profissional de Agendamento, Supabase Ready & Calendly */
window.SentinelaKit = window.SentinelaKit || {};
window.SentinelaKit.ScheduleScreen = function ScheduleScreen({ DS, wa }) {
  const { Button, WhatsAppIcon } = DS;
  const [form, setForm] = React.useState({
    nome: "",
    telefone: "",
    praga: "Escorpiões",
    imovel: "Residência (Casa/Sobrado)",
    bairro: "",
    urgencia: "Plantão Hoje / Urgente",
    observacao: ""
  });
  const [loading, setLoading] = React.useState(false);
  const [sentSuccess, setSentSuccess] = React.useState(false);

  const set = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const leadPayload = {
      nome: form.nome,
      telefone: form.telefone,
      praga: form.praga,
      tipo_imovel: form.imovel,
      bairro_cidade: form.bairro,
      urgencia: form.urgencia,
      observacao: form.observacao,
      origem: "site_oficial_sentinela",
      criado_em: new Date().toISOString()
    };

    // Salva localmente e simula persistência Supabase
    try {
      const stored = JSON.parse(localStorage.getItem("leads_sentinela") || "[]");
      stored.push(leadPayload);
      localStorage.setItem("leads_sentinela", JSON.stringify(stored));
      console.log("[Supabase Lead Ready]:", leadPayload);
    } catch (err) {
      console.warn("Storage warning:", err);
    }

    const mensagemFormatada = [
      `🚨 *SOLICITAÇÃO DE VISTORIA — SENTINELA*`,
      `👤 *Nome:* ${form.nome || "Não informado"}`,
      `📞 *Contato:* ${form.telefone || "Não informado"}`,
      `🎯 *Praga:* ${form.praga}`,
      `🏠 *Imóvel:* ${form.imovel}`,
      `📍 *Local:* ${form.bairro || "Franca/SP"}`,
      `⏱️ *Urgência:* ${form.urgencia}`,
      form.observacao ? `📝 *Detalhes:* ${form.observacao}` : ""
    ].filter(Boolean).join("\n");

    setLoading(false);
    setSentSuccess(true);

    const url = "https://wa.me/5516993747147?text=" + encodeURIComponent(mensagemFormatada);
    window.open(url, "_blank");
  }

  return (
    <main id="conteudo-agendar" className="animate-fade-up" style={{ background: "var(--brand-surface)", paddingTop: 96, paddingBottom: 80 }}>
      <div className="container-responsive" style={{ maxWidth: 860, padding: "0 24px" }}>
        
        {/* CABEÇALHO DA PÁGINA */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "var(--brand-lime-deep)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Agendamento & Triagem Técnica
          </span>
          <h1 style={{ margin: "10px 0 0", fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900, color: "var(--brand-navy)" }}>
            Solicitar Vistoria e Avaliação
          </h1>
          <p style={{ margin: "12px auto 0", maxWidth: 640, fontSize: "1.0625rem", color: "var(--brand-muted)", lineHeight: 1.6 }}>
            Preencha os dados do imóvel abaixo para receber o atendimento técnico prioritário no WhatsApp ou agende diretamente na agenda do especialista.
          </p>
        </div>

        {/* BOX CALENDLY / AGENDAMENTO DIRETO */}
        <div style={{ background: "linear-gradient(145deg, #002347 0%, #001730 100%)", color: "#fff", padding: "24px 28px", borderRadius: 12, marginBottom: 32, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16, border: "1px solid var(--brand-lime)" }}>
          <div>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--brand-lime)", textTransform: "uppercase" }}>Agenda Online</span>
            <strong style={{ display: "block", fontSize: "1.1rem", color: "#fff", marginTop: 2 }}>Prefere marcar uma data e hora exata?</strong>
            <p style={{ margin: "2px 0 0", fontSize: "0.875rem", color: "rgba(255,255,255,0.75)" }}>Acesse nossa agenda técnica integrada no Calendly.</p>
          </div>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noreferrer"
            className="hover-lift"
            style={{ padding: "12px 22px", background: "var(--brand-lime)", color: "var(--brand-navy)", fontWeight: 800, borderRadius: 6, textDecoration: "none", fontSize: "0.9375rem" }}
          >
            📅 Abrir Agenda Calendly
          </a>
        </div>

        {/* FORMULÁRIO PROFISSIONAL */}
        <form onSubmit={handleSubmit} style={{ background: "#ffffff", padding: "36px", borderRadius: 16, border: "1px solid var(--border-default)", boxShadow: "0 12px 32px rgba(0,35,71,0.06)" }}>
          <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))" }}>
            
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "var(--brand-navy)", marginBottom: 6 }}>Seu Nome Completo *</label>
              <input
                type="text"
                required
                placeholder="Ex: João da Silva"
                value={form.nome}
                onChange={(e) => set("nome", e.target.value)}
                style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid var(--border-default)", fontSize: "1rem", boxSizing: "border-box" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "var(--brand-navy)", marginBottom: 6 }}>Telefone / WhatsApp *</label>
              <input
                type="tel"
                required
                placeholder="(16) 99999-9999"
                value={form.telefone}
                onChange={(e) => set("telefone", e.target.value)}
                style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid var(--border-default)", fontSize: "1rem", boxSizing: "border-box" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "var(--brand-navy)", marginBottom: 6 }}>Qual praga foi vista? *</label>
              <select
                value={form.praga}
                onChange={(e) => set("praga", e.target.value)}
                style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid var(--border-default)", fontSize: "1rem", boxSizing: "border-box", background: "#fff" }}
              >
                <option value="Escorpiões">Escorpiões (Foco em Ralos/Caixas)</option>
                <option value="Cupins">Cupins (Móveis / Forros / Estruturas)</option>
                <option value="Baratas e Formigas">Baratas e Formigas</option>
                <option value="Roedores (Ratos)">Roedores (Ratos / Camundongos)</option>
                <option value="Aranhas / Animais Peçonhentos">Aranhas e Animais Peçonhentos</option>
                <option value="Limpeza de Caixa d'Água">Higienização de Caixa d'Água</option>
                <option value="Outro / Múltiplas pragas">Outro / Avaliação Geral</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "var(--brand-navy)", marginBottom: 6 }}>Tipo de Imóvel</label>
              <select
                value={form.imovel}
                onChange={(e) => set("imovel", e.target.value)}
                style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid var(--border-default)", fontSize: "1rem", boxSizing: "border-box", background: "#fff" }}
              >
                <option value="Residência (Casa/Sobrado)">Residência (Casa/Sobrado)</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Condomínio Residencial">Condomínio Residencial</option>
                <option value="Comércio / Restaurante">Comércio / Restaurante</option>
                <option value="Indústria / Galpão">Indústria / Galpão</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "var(--brand-navy)", marginBottom: 6 }}>Bairro ou Cidade *</label>
              <input
                type="text"
                required
                placeholder="Ex: City Petrópolis, Franca"
                value={form.bairro}
                onChange={(e) => set("bairro", e.target.value)}
                style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid var(--border-default)", fontSize: "1rem", boxSizing: "border-box" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "var(--brand-navy)", marginBottom: 6 }}>Quando precisa do atendimento?</label>
              <select
                value={form.urgencia}
                onChange={(e) => set("urgencia", e.target.value)}
                style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid var(--border-default)", fontSize: "1rem", boxSizing: "border-box", background: "#fff" }}
              >
                <option value="Plantão Hoje / Urgente">🚨 Plantão Hoje (Urgente)</option>
                <option value="Nesta semana">📅 Nesta semana</option>
                <option value="Apenas orçamento preventivo">💬 Apenas orçamento preventivo</option>
              </select>
            </div>

          </div>

          <div style={{ marginTop: 20 }}>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "var(--brand-navy)", marginBottom: 6 }}>Observações Adicionais (Opcional)</label>
            <textarea
              rows={3}
              placeholder="Descreva onde viu a praga, se possui animais em casa ou horários de preferência..."
              value={form.observacao}
              onChange={(e) => set("observacao", e.target.value)}
              style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid var(--border-default)", fontSize: "0.9375rem", boxSizing: "border-box" }}
            />
          </div>

          <div style={{ marginTop: 28 }}>
            <Button
              type="submit"
              variant="whatsapp"
              size="lg"
              fullWidth
              disabled={loading}
              className="btn-whatsapp-glow hover-lift"
              icon={<WhatsAppIcon size={22} />}
              style={{ padding: "18px 24px", fontSize: "1.0625rem", fontWeight: 800, borderRadius: 8 }}
            >
              {loading ? "Processando..." : "Enviar Solicitação & Iniciar Atendimento"}
            </Button>
          </div>

          {sentSuccess && (
            <div style={{ marginTop: 20, padding: "14px 18px", background: "rgba(37, 211, 102, 0.15)", border: "1px solid #25D366", borderRadius: 8, color: "#004d1a", fontSize: "0.9375rem", fontWeight: 700, textAlign: "center" }}>
              ✓ Solicitação enviada! Abrindo conversa com o técnico no WhatsApp...
            </div>
          )}

          <p style={{ margin: "16px 0 0", fontSize: "0.8125rem", color: "var(--brand-muted)", textAlign: "center", lineHeight: 1.5 }}>
            🔒 Seus dados são confidenciais e utilizados estritamente para o orçamento técnico da Sentinela Saúde Ambiental.
          </p>
        </form>
      </div>
    </main>
  );
};