/* PestScreen — Subpágina de Escorpiões & Animais Peçonhentos em Franca/SP */
window.SentinelaKit = window.SentinelaKit || {};
window.SentinelaKit.PestScreen = function PestScreen({ DS, A, wa, go }) {
  const { Button, WhatsAppIcon, FaqItem } = DS;
  const [openFaq, setOpenFaq] = React.useState(0);

  const perigos = [
    {
      nome: "Escorpião-Amarelo (Tityus serrulatus)",
      risco: "Risco de Óbito em Crianças e Idosos",
      desc: "O veneno ataca o sistema nervoso central em minutos, provocando dor insuportável, taquicardia e edema pulmonar. Reproduz-se por partenogênese (a fêmea gera até 40 filhotes sem macho).",
      acao: "Tratamento de choque microencapsulado nas caixas de inspeção e esgoto.",
      cor: "#dc2626"
    },
    {
      nome: "Aranha-Marrom e Armadeira (Phoneutria)",
      risco: "Necrose Tecidual e Dor Paralisante",
      desc: "Costumam se esconder dentro de sapatos, toalhas, gavetas e entulhos de quintais em Franca. A picada da aranha-marrom gera necrose progressiva que destrói a pele.",
      acao: "Pulverização perimetral e atomização em forros e frestas de alvenaria.",
      cor: "#ea580c"
    },
    {
      nome: "Marimbondos e Vespas Sociais",
      risco: "Choque Anafilático e Fechamento de Glote",
      desc: "Ataques em enxame com múltiplas ferroadas simultâneas. Extremamente perigosos para crianças alérgicas ou pessoas desavisadas em beirais e árvores.",
      acao: "Remoção técnica especializada com vestimenta de proteção total.",
      cor: "#f59e0b"
    }
  ];

  const faqPest = [
    ["Por que o escorpião é tão frequente em Franca?", "Franca possui ampla rede subterrânea de galerias pluviais antigas com alta densidade de baratas (alimento do escorpião). No calor e nas chuvas, o esgoto inunda e empurra os escorpiões para cima através de ralos, caixas de gordura e pias."],
    ["Qual o primeiro socorro em caso de picada de escorpião?", "Lave o local com água e sabão e vá IMEDIATAMENTE para o pronto-socorro mais próximo (UPA Franca). Se possível e com segurança, tire foto do animal para identificação médica. Nunca faça torniquetes ou furos na pele."],
    ["A aplicação da Sentinela impede o escorpião de subir?", "Sim. Criamos uma barreira química residual nas paredes das caixas de esgoto e ralos com inseticidas de laboratório que quebram a cutícula de quitina e causam a morte por contato prolongado."]
  ];

  return (
    <main id="conteudo-escorpiao" className="animate-fade-up">
      {/* HERO URGÊNCIA ESCORPIÃO */}
      <section style={{ position: "relative", background: "linear-gradient(175deg, #1f0505 0%, #001730 60%, #000c1a 100%)", color: "#fff", paddingTop: 96, paddingBottom: 64, borderBottom: "3px solid #dc2626" }}>
        <div className="container-responsive" style={{ padding: "0 24px" }}>
          
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 16px", borderRadius: 999, background: "rgba(220, 38, 38, 0.15)", border: "1px solid rgba(220, 38, 38, 0.5)", marginBottom: 24 }}>
            <span style={{ fontSize: "1.1rem" }}>⚠️</span>
            <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "#f87171", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Emergência Sanitária · Risco Grave em Franca/SP
            </span>
          </div>

          <div style={{ display: "grid", gap: 48, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", alignItems: "center" }}>
            <div>
              <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 4vw, 3.85rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff" }}>
                Picada de escorpião é emergência médica e pode ser fatal.
              </h1>
              
              <p style={{ margin: "20px 0 0", fontSize: "1.1875rem", lineHeight: 1.65, color: "rgba(255,255,255,0.9)" }}>
                Não tente resolver com veneno de supermercado. Bloqueamos os ninhos nas caixas de inspeção com <strong style={{ color: "#f87171" }}>formulações de ação neurotóxica específica</strong> para eliminar o foco de imediato.
              </p>

              <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="btn-whatsapp-glow hover-lift"
                  href={wa("EMERGÊNCIA: Encontrei escorpião no imóvel em Franca/SP. Preciso de atendimento imediato!")}
                  target="_blank"
                  icon={<WhatsAppIcon size={22} />}
                  style={{ padding: "18px 28px", fontSize: "1.0625rem", fontWeight: 800, borderRadius: 8, background: "#dc2626" }}
                >
                  Chamar Plantão Urgente no WhatsApp
                </Button>
                <a
                  href="tel:16993747147"
                  className="hover-lift"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "18px 22px", background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  📞 (16) 99374-7147
                </a>
              </div>

              <div style={{ marginTop: 24, fontSize: "0.85rem", color: "rgba(255,255,255,0.75)" }}>
                ✓ Atendimento prioritário para residências com crianças e animais de estimação.
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 16, overflow: "hidden", border: "2px solid #dc2626", boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}>
                <img
                  src={A("campo/inspecao-caixa-visita-escorpiao-franca-sp.webp")}
                  alt="Inspeção e controle de escorpião em caixa de esgoto em Franca SP"
                  style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", insetInline: 0, bottom: 0, padding: 20, background: "linear-gradient(to top, rgba(20,0,0,0.95) 0%, rgba(20,0,0,0.7) 60%, transparent 100%)" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#f87171", textTransform: "uppercase", letterSpacing: "0.1em" }}>Inspeção em Caixa de Visita</span>
                  <p style={{ margin: "4px 0 0", color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>Eliminação de abrigos subterrâneos em Franca/SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO DE PRAGAS PERIGOSAS */}
      <section style={{ background: "#ffffff", padding: "72px 0", borderBottom: "1px solid var(--border-default)" }}>
        <div className="container-responsive" style={{ padding: "0 24px" }}>
          <div style={{ maxWidth: 840, margin: "0 auto", textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "#dc2626", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Espécies Críticas em Franca
            </span>
            <h2 style={{ margin: "12px 0 0", fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--brand-navy)" }}>
              Animais Peçonhentos e os Riscos para Sua Família
            </h2>
          </div>

          <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))" }}>
            {perigos.map((p, idx) => (
              <div key={idx} style={{ background: "var(--brand-surface)", padding: 32, borderRadius: 12, borderTop: `4px solid ${p.cor}`, borderRight: "1px solid var(--border-default)", borderBottom: "1px solid var(--border-default)", borderLeft: "1px solid var(--border-default)" }} className="hover-lift">
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: p.cor, textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.risco}</span>
                <h3 style={{ margin: "8px 0 0", fontSize: "1.25rem", color: "var(--brand-navy)", fontWeight: 800 }}>{p.nome}</h3>
                <p style={{ margin: "12px 0 0", fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--brand-muted)" }}>{p.desc}</p>
                <div style={{ marginTop: 20, padding: "12px 16px", background: "#fff", borderRadius: 8, border: "1px solid var(--border-default)" }}>
                  <strong style={{ color: "var(--brand-navy)", fontSize: "0.8125rem" }}>Protocolo Sentinela:</strong>
                  <p style={{ margin: "4px 0 0", fontSize: "0.8125rem", color: "var(--brand-muted)" }}>{p.acao}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA INTERCALADO */}
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <Button variant="whatsapp" size="lg" className="btn-whatsapp-glow hover-lift" href={wa("Olá, Rogério! Encontrei animal peçonhento em casa e preciso de vistoria urgente.")} target="_blank">
              Falar Agora com o Rogério no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ ESCORPIÃO */}
      <section style={{ background: "var(--brand-surface)", padding: "72px 0", borderBottom: "1px solid var(--border-default)" }}>
        <div className="container-responsive" style={{ maxWidth: 840, padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.4rem)", fontWeight: 800, color: "var(--brand-navy)" }}>
              Dúvidas sobre Escorpiões e Picadas
            </h2>
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            {faqPest.map(([q, a], idx) => (
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