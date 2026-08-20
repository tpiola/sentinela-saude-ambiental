/* TermiteScreen — Subpágina Especializada em Cupins e Prejuízos Patrimoniais em Franca/SP */
window.SentinelaKit = window.SentinelaKit || {};
window.SentinelaKit.TermiteScreen = function TermiteScreen({ DS, A, wa, go }) {
  const { Button, WhatsAppIcon, FaqItem } = DS;
  const [openFaq, setOpenFaq] = React.useState(0);

  const faqCupim = [
    ["Como sei se o madeiramento está infestado por cupins?", "Os principais sinais são: pozinho fino acumulado no chão (fezes de cupim de madeira seca), pequenos furos na madeira, túneis de terra avermelhada subindo por paredes/rodapés (cupim subterrâneo) ou asas descartadas após revoadas em dias quentes. A madeira soa oca ao bater."],
    ["O tratamento contra cupins danifica meus móveis ou forros?", "Não. Utilizamos brocas milimétricas e injetores pressurizados especiais com agulhas finas para introduzir o cupinicida diretamente nas galerias internas, preservando a estética e a estrutura dos móveis e batentes."],
    ["Qual a diferença entre cupim de madeira seca e cupim de solo (subterrâneo)?", "O cupim de madeira seca habita exclusivamente a peça afetada (móveis, portas). Já o cupim subterrâneo constrói ninhos gigantescos no solo ou alvenaria e circula por túneis de terra até alcançar telhados e forros, com poder de destruição até 10x mais rápido."],
    ["Qual a garantia do serviço de descupinização?", "Emitimos termo de garantia formal de 1 a 2 anos para tratamentos de descupinização estrutural, com acompanhamento técnico e revisões programadas."]
  ];

  return (
    <main id="conteudo-cupins" className="animate-fade-up">
      {/* HERO CUPINS: RISCO PATRIMONIAL */}
      <section style={{ position: "relative", background: "linear-gradient(175deg, #1c1005 0%, #001f3f 60%, #001730 100%)", color: "#fff", paddingTop: 96, paddingBottom: 64, borderBottom: "3px solid #e8a020" }}>
        <div className="container-responsive" style={{ padding: "0 24px" }}>
          
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 16px", borderRadius: 999, background: "rgba(232, 160, 32, 0.15)", border: "1px solid rgba(232, 160, 32, 0.5)", marginBottom: 24 }}>
            <span style={{ fontSize: "1rem" }}>🪵</span>
            <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "#f59e0b", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Alerta de Prejuízo Estrutural em Franca/SP
            </span>
          </div>

          <div style={{ display: "grid", gap: 48, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", alignItems: "center" }}>
            <div>
              <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 4vw, 3.85rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff" }}>
                Cupins destroem o madeiramento em silêncio. O prejuízo médio passa de R$ 25.000.
              </h1>
              
              <p style={{ margin: "20px 0 0", fontSize: "1.1875rem", lineHeight: 1.65, color: "rgba(255,255,255,0.9)" }}>
                Quando você nota pequenos furos ou pó fino no chão, <strong style={{ color: "#f59e0b" }}>mais de 60% da parte interna da madeira já virou pó</strong>. O madeiramento perde sustentação mecânica e pode desabar.
              </p>

              <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="btn-whatsapp-glow hover-lift"
                  href={wa("URGENTE: Suspeito de cupins no meu imóvel em Franca/SP. Gostaria de uma vistoria técnica.")}
                  target="_blank"
                  icon={<WhatsAppIcon size={22} />}
                  style={{ padding: "18px 28px", fontSize: "1.0625rem", fontWeight: 800, borderRadius: 8 }}
                >
                  Solicitar Vistoria Gratuita de Cupim
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="hover-lift"
                  onClick={() => go("agendar")}
                  style={{ padding: "18px 24px", fontSize: "0.95rem", borderRadius: 8 }}
                >
                  📅 Agendar Avaliação
                </Button>
              </div>

              <ul style={{ display: "grid", gap: 8, listStyle: "none", margin: "24px 0 0", padding: 0, fontSize: "0.875rem", color: "rgba(255,255,255,0.8)" }}>
                <li>✓ Identificação exata da espécie (Madeira Seca vs. Subterrâneo)</li>
                <li>✓ Injeção pressurizada nas galerias sem estragar móveis nobres</li>
                <li>✓ Termo de garantia técnica formal de até 2 anos</li>
              </ul>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 16, overflow: "hidden", border: "2px solid #f59e0b", boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}>
                <img
                  src={A("campo/dedetizacao-parque-progresso-franca-sp.webp")}
                  alt="Descupinização técnica em batente de madeira no Parque Progresso Franca SP"
                  style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", insetInline: 0, bottom: 0, padding: 20, background: "linear-gradient(to top, rgba(0,18,38,0.95) 0%, rgba(0,18,38,0.7) 60%, transparent 100%)" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#f59e0b", textTransform: "uppercase", letterSpacing: "0.1em" }}>Parque Progresso · Franca/SP</span>
                  <p style={{ margin: "4px 0 0", color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>Tratamento profundo em batentes e estruturas de forro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 2: AS DUAS ESPÉCIES QUE ATACAM FRANCA */}
      <section style={{ background: "#ffffff", padding: "72px 0", borderBottom: "1px solid var(--border-default)" }}>
        <div className="container-responsive" style={{ padding: "0 24px" }}>
          <div style={{ maxWidth: 840, margin: "0 auto", textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "var(--brand-lime-deep)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Diagnóstico Biológico
            </span>
            <h2 style={{ margin: "12px 0 0", fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--brand-navy)" }}>
              Identificamos o Tipo de Cupim Antes de Iniciar o Tratamento
            </h2>
            <p style={{ margin: "14px 0 0", fontSize: "1.0625rem", color: "var(--brand-muted)", lineHeight: 1.6 }}>
              Aplicar veneno de madeira em cupim de solo não resolve; o ninho continua no chão alimentando milhares de operárias. Conheça as espécies mais comuns em Franca:
            </p>
          </div>

          <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))" }}>
            <div style={{ background: "var(--brand-surface)", padding: 32, borderRadius: 12, border: "1px solid var(--border-default)" }} className="hover-lift">
              <h3 style={{ margin: 0, fontSize: "1.25rem", color: "var(--brand-navy)", fontWeight: 800 }}>1. Cupim de Madeira Seca (Cryptotermes brevis)</h3>
              <p style={{ margin: "12px 0 0", fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--brand-muted)" }}>
                Ataca móveis, portas, armários planejados, batentes e molduras de quadros. O sinal característico é o pozinho granulado cilíndrico que cai no chão.
              </p>
              <div style={{ marginTop: 20, padding: "12px 16px", background: "#fff", borderRadius: 8, borderLeft: "3px solid #f59e0b" }}>
                <strong style={{ color: "var(--brand-navy)", fontSize: "0.875rem" }}>Solução Sentinela:</strong>
                <span style={{ display: "block", fontSize: "0.8125rem", color: "var(--brand-muted)", marginTop: 2 }}>Injeção e pulverização com cupinicida de ação de contato e profundidade.</span>
              </div>
            </div>

            <div style={{ background: "var(--brand-surface)", padding: 32, borderRadius: 12, border: "1px solid var(--border-default)" }} className="hover-lift">
              <h3 style={{ margin: 0, fontSize: "1.25rem", color: "var(--brand-navy)", fontWeight: 800 }}>2. Cupim Subterrâneo ou de Solo (Coptotermes gestroi)</h3>
              <p style={{ margin: "12px 0 0", fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--brand-muted)" }}>
                O mais destrutivo. Constrói túneis de terra por dentro de conduítes elétricos, tijolos e tubulações para alcançar forros, vigas de telhado e pisos laminados.
              </p>
              <div style={{ marginTop: 20, padding: "12px 16px", background: "#fff", borderRadius: 8, borderLeft: "3px solid #dc2626" }}>
                <strong style={{ color: "#dc2626", fontSize: "0.875rem" }}>Solução Sentinela:</strong>
                <span style={{ display: "block", fontSize: "0.8125rem", color: "var(--brand-muted)", marginTop: 2 }}>Barreira química perimetral no solo e calda antitermo no ponto focal.</span>
              </div>
            </div>
          </div>

          {/* CTA INTERCALADO */}
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Button variant="whatsapp" size="lg" className="btn-whatsapp-glow hover-lift" href={wa("Olá, Rogério! Encontrei túneis/pozinho de cupim e gostaria da sua avaliação.")} target="_blank">
              Enviar Foto do Dano no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ CUPINS */}
      <section style={{ background: "var(--brand-surface)", padding: "72px 0", borderBottom: "1px solid var(--border-default)" }}>
        <div className="container-responsive" style={{ maxWidth: 840, padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.4rem)", fontWeight: 800, color: "var(--brand-navy)" }}>
              Dúvidas Frequentes sobre Cupins
            </h2>
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            {faqCupim.map(([q, a], idx) => (
              <FaqItem
                key={idx}
                question={q}
                answer={a}
                open={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};