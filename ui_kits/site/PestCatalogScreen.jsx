/* PestCatalogScreen — Catálogo Técnico Completo dos 10 Serviços e Pragas em Franca/SP */
window.SentinelaKit = window.SentinelaKit || {};
window.SentinelaKit.PestCatalogScreen = function PestCatalogScreen({ DS, A, wa, go, initialPest = "escorpiao" }) {
  const { Button, WhatsAppIcon, FaqItem } = DS;
  const [selected, setSelected] = React.useState(initialPest);

  const PEST_DETAILS = {
    escorpiao: {
      titulo: "Escorpiões & Animais Peçonhentos",
      especie: "Tityus serrulatus (Escorpião-Amarelo) e Tityus bahiensis",
      badge: "Emergência Sanitária & Risco Grave",
      cor: "#dc2626",
      icone: "🦂",
      perigo: "Risco de óbito em crianças, idosos e animais. O veneno neurotóxico provoca dor insuportável, arritmia e edema pulmonar agudo. Reproduz-se por partenogênese (fêmeas geram até 40 filhotes sem macho).",
      onde: "Ralos, caixas de gordura, caixas de inspeção de esgoto, entulhos e frestas de alvenaria.",
      tratamento: "Aplicação de choque com inseticida microencapsulado de liberação gradual, barreira química perimetral e eliminação simultânea da cadeia de baratas (alimento principal).",
      garantia: "Garantia formal com termo de execução e assistência técnica.",
      img: "campo/inspecao-caixa-visita-escorpiao-franca-sp.webp"
    },
    cupins: {
      titulo: "Cupins (Madeira Seca & Solo)",
      especie: "Cryptotermes brevis e Coptotermes gestroi (Subterrâneo)",
      badge: "Alto Prejuízo Patrimonial",
      cor: "#d97706",
      icone: "🪵",
      perigo: "Destruição silenciosa de vigas, batentes, forros e pisos laminados. A madeira mantém a casca externa intacta enquanto o interior é consumido. Prejuízos de até R$ 80.000 em imóveis.",
      onde: "Móveis embutidos, rodapés, estruturas de telhado, alvenaria oca e conduítes elétricos.",
      tratamento: "Injeção pressurizada de calda cupinicida nas galerias internas sem danificar a mobília nobre e barreira química no solo contra cupins subterrâneos.",
      garantia: "Garantia estendida de 1 a 2 anos com certificado técnico.",
      img: "campo/dedetizacao-parque-progresso-franca-sp.webp"
    },
    baratas: {
      titulo: "Baratas (Esgoto & Francesinha)",
      especie: "Periplaneta americana (Voadeira) e Blattella germanica (Francesinha)",
      badge: "Vetor de Doenças & Contaminação",
      cor: "#9a3412",
      icone: "🪳",
      perigo: "Carregam bactérias patogênicas (Salmonella, E. coli), fungos e ovos de vermes das galerias de esgoto diretamente para alimentos e bancadas de cozinhas e restaurantes.",
      onde: "Caixas de gordura, motores de geladeiras, frestas de armários, rodapés e encanamentos.",
      tratamento: "Combinação de iscas em gel de alta atratividade (sem necessidade de esvaziar armários) e micropulverização residual em caixas e ralos.",
      garantia: "Garantia de 3 a 6 meses com controle do ciclo de ninfas.",
      img: "campo/termonebulizacao-bueiro-franca-sp.webp"
    },
    ratos: {
      titulo: "Ratos & Roedores Urbanos",
      especie: "Rattus norvegicus (Ratazana), Rattus rattus (Rato de Telhado) e Mus musculus",
      badge: "Risco Biológico & Danos Elétricos",
      cor: "#4b5563",
      icone: "🐀",
      perigo: "Transmissão de leptospirose pela urina, hantavirose e tifo murino. Roem fiações elétricas causando curto-circuitos e riscos reais de incêndio.",
      onde: "Forros, tubulações de esgoto, depósitos de lixo, motores de maquinários e quintais.",
      tratamento: "Desratização estratégica com porta-iscas blindados com trava de segurança (intocáveis por pets e crianças), raticidas anticoagulantes de dose única e pó de contato.",
      garantia: "Mapeamento dos pontos de iscagem com revisões periódicas.",
      img: "campo/atendimento-camara-municipal-franca-sp.webp"
    },
    aranhas: {
      titulo: "Aranhas (Armadeira & Marrom)",
      especie: "Phoneutria (Armadeira) e Loxosceles (Aranha-Marrom)",
      badge: "Veneno Necrosante & Dor Aguda",
      cor: "#7c2d12",
      icone: "🕷️",
      perigo: "A aranha-marrom provoca picada com necrose tecidual severa e formação de úlceras de difícil cicatrização. A armadeira é agressiva e causa dor intensa e taquicardia.",
      onde: "Dentro de calçados, atrás de quadros, roupas guardadas, forros e materiais de construção.",
      tratamento: "Atomização de frestas internas, desalojamento controlado com barreira inseticida perimetral de longa permanência.",
      garantia: "Garantia com suporte para eliminação de criadouros.",
      img: "campo/escorpiao-residencial-baldassari-franca-sp.webp"
    },
    formigas: {
      titulo: "Formigas Cortadeiras & Caseiras",
      especie: "Atta sexdens (Saúva), Monomorium pharaonis (Faraó) e Tapinoma",
      badge: "Contaminação Cruzada & Danos em Jardins",
      cor: "#047857",
      icone: "🐜",
      perigo: "Formigas urbanas transitam por lixeiras e banheiros antes de subir em alimentos, sendo vetores mecânicos graves de bactérias. Formigas cortadeiras desfolham jardins inteiros em uma noite.",
      onde: "Jardins, tomadas elétricas, frestas de azulejos e bancadas de cozinha.",
      tratamento: "Iscas granuladas hormonais que as operárias transportam para o interior do formigueiro, eliminando a rainha e o ninho na raiz.",
      garantia: "Proteção contínua da área verde e ambientes internos.",
      img: "campo/aplicacao-jardim-francano-franca-sp.webp"
    },
    mosquitos: {
      titulo: "Mosquitos, Pernilongos & Dengue",
      especie: "Aedes aegypti e Culex quinquefasciatus",
      badge: "Transmissores de Dengue, Zika e Chikungunya",
      cor: "#0284c7",
      icone: "🦟",
      perigo: "Franca enfrenta picos sazonais de Dengue. O mosquito reproduz-se em água parada e pica silenciosamente durante o dia.",
      onde: "Ralos pluviais, calhas entupidas, pratos de plantas, piscinas e áreas sombreadas.",
      tratamento: "Termonebulização espacial (fumacê profissional) para abate imediato de mosquitos adultos e larvicidas biológicos nos reservatórios e ralos.",
      garantia: "Alívio imediato e proteção para eventos e condomínios.",
      img: "campo/dedetizacao-residencial-entrada-franca-sp.webp"
    },
    pulgas: {
      titulo: "Pulgas e Carrapatos em Pets",
      especie: "Ctenocephalides felis (Pulga) e Rhipicephalus sanguineus (Carrapato)",
      badge: "Febre Maculosa & Sofrimento Animal",
      cor: "#9333ea",
      icone: "🐾",
      perigo: "O carrapato-estrela transmite a Febre Maculosa Brasileira (altamente letal se não tratada rápido). Pulgas causam dermatites alérgicas graves e anemias em cães e gatos.",
      onde: "Casinhas de cachorro, frestas de assoalhos, carpetes, muros e gramados.",
      tratamento: "Combinação de adulticidas de alto poder de choque com IGR (Reguladores de Crescimento de Insetos), que esterilizam os ovos e larvas no ambiente.",
      garantia: "Ambiente desinfectado e seguro para o retorno dos pets.",
      img: "campo/controle-pragas-city-petropolis-franca-sp.webp"
    },
    vespas: {
      titulo: "Marimbondos, Abelhas & Vespas",
      especie: "Polistes (Marimbondo-Caboclo) e Apis mellifera",
      badge: "Choque Anafilático & Ataques em Bando",
      cor: "#eab308",
      icone: "🐝",
      perigo: "Ataques em enxame com dezenas de ferroadas simultâneas que podem causar fechamento de glote e óbito por anafilaxia em poucos minutos.",
      onde: "Beirais de telhados, forros, ocos de árvores, caixas d'água e postes.",
      tratamento: "Remoção técnica especializada com macacão apícola integral, aplicação direcionada com equipamento pressurizado sem risco aos vizinhos.",
      garantia: "Remoção segura e vedação preventiva do ponto de nidificação.",
      img: "campo/desinsetizacao-ambiente-interno-franca-sp.webp"
    },
    "caixa-dagua": {
      titulo: "Higienização de Caixa d'Água",
      especie: "Limpeza, Desinfecção Bacteriológica & Laudo de Potabilidade",
      badge: "Saúde Coletiva & Exigência ANVISA",
      cor: "#0284c7",
      icone: "💧",
      perigo: "Caixas sem limpeza acumulam biofilme bacteriano, fezes de pombos/morcegos, lodo e larvas de mosquitos, contaminando toda a água de consumo da casa ou empresa.",
      onde: "Reservatórios residenciais de 500L a 2.000L e caixas d'água industriais/condomínios de grande porte.",
      tratamento: "Esgotamento técnico, escovação mecânica sem abrasão, desinfecção com bactericida de grau alimentício, teste de estanqueidade e emissão de laudo técnico sanitário.",
      garantia: "Laudo oficial válido por 6 meses conforme a RDC da ANVISA.",
      img: "campo/limpeza-caixa-dagua-altura-franca-sp.webp"
    }
  };

  const p = PEST_DETAILS[selected] || PEST_DETAILS.escorpiao;

  return (
    <main id="conteudo-catalogo" className="animate-fade-up" style={{ background: "var(--brand-surface)", paddingTop: 96, paddingBottom: 80 }}>
      <div className="container-responsive" style={{ padding: "0 24px" }}>
        
        {/* CABEÇALHO DO CATÁLOGO */}
        <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 40px" }}>
          <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "var(--brand-lime-deep)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Controle Integrado de Pragas · Franca/SP
          </span>
          <h1 style={{ margin: "10px 0 0", fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900, color: "var(--brand-navy)" }}>
            Catálogo Completo de Espécies & Tratamentos
          </h1>
          <p style={{ margin: "12px auto 0", fontSize: "1.0625rem", color: "var(--brand-muted)", lineHeight: 1.6 }}>
            Selecione a praga abaixo para conhecer o diagnóstico biológico, os riscos para o seu imóvel e o protocolo técnico executado pela Sentinela.
          </p>
        </div>

        {/* NAVEGAÇÃO INTERATIVA ENTRE AS 10 PRAGAS (SEM EMOJIS, DESIGN SÓBRIO) */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 40 }}>
          {Object.entries(PEST_DETAILS).map(([key, item]) => {
            const active = selected === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelected(key)}
                className="hover-lift"
                style={{
                  padding: "10px 18px",
                  borderRadius: 8,
                  border: active ? `2px solid ${item.cor}` : "1px solid var(--border-default)",
                  background: active ? "#001833" : "#ffffff",
                  color: active ? "#ffffff" : "var(--brand-navy)",
                  fontWeight: active ? 800 : 600,
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  boxShadow: active ? `0 4px 14px rgba(0,0,0,0.15)` : "none",
                  transition: "all 0.2s ease"
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: item.cor }}></span>
                <span>{item.titulo.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* CARD PRINCIPAL DO SERVIÇO SELECIONADO */}
        <div style={{ background: "#ffffff", borderRadius: 16, border: "1px solid var(--border-default)", overflow: "hidden", boxShadow: "0 12px 36px rgba(0,35,71,0.06)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))" }}>
          
          {/* LADO TEXTO & AUTORIDADE */}
          <div style={{ padding: "36px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", background: "rgba(0,0,0,0.05)", borderLeft: `3px solid ${p.cor}`, borderRadius: 4, marginBottom: 16 }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: p.cor, textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.badge}</span>
            </div>

            <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 2.5vw, 2.2rem)", fontWeight: 900, color: "var(--brand-navy)" }}>
              {p.titulo}
            </h2>
            <span style={{ display: "block", marginTop: 4, fontSize: "0.875rem", color: "var(--brand-muted)", fontStyle: "italic" }}>
              {p.especie}
            </span>

            {/* RISCO REAL */}
            <div style={{ marginTop: 24, padding: "16px", background: "var(--brand-surface)", borderRadius: 10, border: "1px solid var(--border-default)" }}>
              <strong style={{ display: "block", fontSize: "0.8125rem", color: p.cor, textTransform: "uppercase", letterSpacing: "0.08em" }}>⚠️ Riscos & Gravidade</strong>
              <p style={{ margin: "6px 0 0", fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--brand-navy)" }}>
                {p.perigo}
              </p>
            </div>

            {/* ONDE SE ABRIGA */}
            <div style={{ marginTop: 16 }}>
              <strong style={{ display: "block", fontSize: "0.8125rem", color: "var(--brand-muted)", textTransform: "uppercase" }}>📍 Principais Focos e Acessos:</strong>
              <span style={{ display: "block", marginTop: 4, fontSize: "0.9375rem", color: "var(--brand-navy)", lineHeight: 1.5 }}>{p.onde}</span>
            </div>

            {/* PROTOCOLO SENTINELA */}
            <div style={{ marginTop: 16 }}>
              <strong style={{ display: "block", fontSize: "0.8125rem", color: "var(--brand-lime-deep)", textTransform: "uppercase" }}>🛡️ Protocolo Sentinela:</strong>
              <span style={{ display: "block", marginTop: 4, fontSize: "0.9375rem", color: "var(--brand-navy)", lineHeight: 1.5 }}>{p.tratamento}</span>
            </div>

            {/* AÇÕES DE CONVERSÃO */}
            <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <Button
                variant="whatsapp"
                size="lg"
                className="btn-whatsapp-glow hover-lift"
                href={wa(`CHAMADA DE URGÊNCIA: Preciso de orçamento para controle de ${p.titulo} no meu imóvel em Franca/SP.`)}
                target="_blank"
                icon={<WhatsAppIcon size={22} />}
                style={{ padding: "16px 28px", fontSize: "1rem", fontWeight: 800, borderRadius: 8 }}
              >
                Orçamento no WhatsApp
              </Button>
              <a
                href="#agendar"
                className="hover-lift"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 22px", background: "var(--brand-surface)", color: "var(--brand-navy)", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: "0.9375rem", border: "1px solid var(--border-default)" }}
              >
                📅 Agendar Vistoria
              </a>
            </div>
          </div>

          {/* LADO FOTO DOCUMENTAL REAL */}
          <div style={{ position: "relative", minHeight: 380, background: "#001020" }}>
            <img
              src={A(p.img)}
              alt={p.titulo + " em Franca SP"}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{ position: "absolute", insetInline: 0, bottom: 0, padding: 24, background: "linear-gradient(to top, rgba(0,14,31,0.95) 0%, rgba(0,14,31,0.6) 60%, transparent 100%)", color: "#fff" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--brand-lime)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Registro Real Sentinela Saúde Ambiental</span>
              <p style={{ margin: "4px 0 0", color: "#fff", fontWeight: 700, fontSize: "1.0625rem" }}>{p.garantia}</p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};