/* Home — Sentinela Saúde Ambiental: Autoridade Técnica, Vídeo em Loop e Alta Conversão em Franca/SP */
window.SentinelaKit = window.SentinelaKit || {};
window.SentinelaKit.HomeScreen = function HomeScreen({ DS, A, wa, go }) {
  const { Button, WhatsAppIcon, FaqItem, PestTile } = DS;
  const [openFaq, setOpenFaq] = React.useState(0);

  const realCases = [
    {
      bairro: "Creche e Escola Infantil · Franca/SP",
      praga: "Desinfecção e Controle Seguro em Ambiente Escolar",
      desc: "Aplicação preventiva com produtos microencapsulados atóxicos para crianças e sem odor residual, garantindo retorno seguro das aulas e certificação sanitária.",
      img: "campo/desinsetizacao-ambiente-interno-franca-sp.webp",
      tag: "Ambiente Escolar / Infantil"
    },
    {
      bairro: "City Petrópolis · Franca/SP",
      praga: "Foco de Escorpião-Amarelo em Caixa de Visita",
      desc: "Tratamento de choque em 4 caixas de esgoto e inspeção perimetral após morador encontrar escorpião no banheiro. Aplicação com produto microencapsulado sem cheiro.",
      img: "campo/inspecao-caixa-visita-escorpiao-franca-sp.webp",
      tag: "Atendimento Residencial"
    },
    {
      bairro: "Câmara Municipal de Franca",
      praga: "Controle Integrado Institucional & Desinfecção",
      desc: "Atendimento técnico periódico com termonebulização em galerias e áreas técnicas com laudo sanitário oficial e emissão de certificado ANVISA.",
      img: "campo/atendimento-camara-municipal-franca-sp.webp",
      tag: "Órgão Público / B2B"
    },
    {
      bairro: "Residencial Baldassari · Franca/SP",
      praga: "Barreira Química Contra Escorpiões e Baratas",
      desc: "Mapeamento minucioso de frestas, ralos e caixas de gordura com iscas em gel e micropulverização direcionada. Proteção de famílias e pets.",
      img: "campo/escorpiao-residencial-baldassari-franca-sp.webp",
      tag: "Condomínio Residencial"
    },
    {
      bairro: "Parque Progresso · Franca/SP",
      praga: "Descupinização em Estruturas e Batentes",
      desc: "Identificação de cupim de madeira seca com injeção pressurizada de calda cupinicida e barreira de proteção de longo prazo sem danificar móveis.",
      img: "campo/dedetizacao-parque-progresso-franca-sp.webp",
      tag: "Descupinização Técnica"
    },
    {
      bairro: "Jardim Francano · Franca/SP",
      praga: "Desinsetização em Jardins e Áreas Abertas",
      desc: "Controle de formigas cortadeiras, aranhas e baratas de esgoto em quintais e áreas gramadas com pulverizador costal e EPI completo.",
      img: "campo/aplicacao-jardim-francano-franca-sp.webp",
      tag: "Área Externa & Jardim"
    }
  ];

  const depoimentos = [
    {
      nome: "Carlos Eduardo M.",
      local: "City Petrópolis · Franca/SP",
      texto: "Apareceu um escorpião no ralo do banheiro onde meus filhos tomam banho. A Sentinela chegou em tempo recorde e fez uma vistoria completa nas caixas da rua e do quintal. Já faz 8 meses e nunca mais apareceu nada. Trabalho de altíssimo nível.",
      estrelas: 5
    },
    {
      nome: "Marcos Vinicius (Síndico)",
      local: "Residencial Baldassari · Franca/SP",
      texto: "A Sentinela cuida das áreas comuns e fossas do nosso condomínio há mais de 3 anos. Entregam toda a documentação que a Vigilância Sanitária exige, cumprem os horários e os moradores elogiam porque o produto não tem cheiro forte.",
      estrelas: 5
    },
    {
      nome: "Dra. Fernanda Silveira",
      local: "Jardim Noêmia · Franca/SP",
      texto: "Tenho 3 gatos e tinha muito medo de dedetizar por causa do veneno. O técnico me explicou com calma como funciona a secagem e o produto microencapsulado. Ficaram 2 horas fora e deu tudo certo. Recomendo de olhos fechados!",
      estrelas: 5
    }
  ];

  const faq = [
    ["Encontrei um escorpião em casa agora. O que devo fazer nos primeiros 10 minutos?", "Mantenha a calma, afaste crianças e animais e NUNCA tente pegar com as mãos. Não jogue spray comum de inseticida (isso irrita o escorpião e faz ele subir na parede ou camas). Isole o cômodo fechando a porta e chame a Sentinela imediatamente no WhatsApp para atendimento emergencial."],
    ["Tenho cães e gatos em casa. O produto é perigoso para animais?", "A segurança dos seus pets é tratada com rigor biológico. Utilizamos produtos modernos de laboratórios líderes (como Syngenta e Bayer), sem cheiro e formulados com microcápsulas. Basta manter os animais afastados durante a aplicação e secagem (aproximadamente 2 horas). Depois de seco, o produto adere às superfícies e não oferece risco aos animais ao caminhar."],
    ["O produto mancha piso de porcelanato, móveis ou piso laminado?", "Não mancha e não deixa resíduos oleosos. Nossas formulações são aquosas e de grau profissional, desenvolvidas especificamente para ambientes internos de alto padrão, creches e clínicas."],
    ["Vocês emitem laudo técnico e nota fiscal para empresas e condomínios?", "Sim! Emitimos laudo técnico completo assinado pelo responsável técnico, com especificação dos princípios ativos, número de lote, registro na ANVISA, data de validade do serviço e comprovante para fiscalização da Vigilância Sanitária."],
    ["Qual o prazo de garantia do serviço de dedetização?", "Emitimos termo de garantia formal de 3 a 6 meses (conforme a praga e as características do local). Se houver qualquer reaparecimento dentro do período de garantia, realizamos o reforço técnico sem custos adicionais."],
    ["Atendem somente em Franca ou em cidades vizinhas também?", "Atendemos toda a cidade de Franca (todos os bairros) e municípios vizinhos da região: Batatais, Cristais Paulista, Patrocínio Paulista, Pedregulho, Restinga, Ituverava, São Joaquim da Barra e Orlândia."]
  ];

  const allPests = [
    ["escorpiao", "Escorpiões"],
    ["baratas", "Baratas"],
    ["cupins", "Cupins"],
    ["ratos", "Ratos / Roedores"],
    ["aranhas", "Aranhas"],
    ["formigas", "Formigas"],
    ["mosquitos", "Mosquitos"],
    ["moscas", "Moscas & Traças"],
    ["caixa-dagua", "Caixa d'Água"]
  ];

  return (
    <main id="conteudo">
      {/* HERO COM DEGRADÊ PROFUNDO, VÍDEO EM LOOP E CTA DE URGÊNCIA */}
      <section style={{ position: "relative", background: "linear-gradient(175deg, #000e1f 0%, #001e3d 50%, #002d5c 100%)", color: "#fff", paddingTop: 100, paddingBottom: 64, overflow: "hidden", borderBottom: "3px solid var(--brand-lime)" }}>
        <div className="container-responsive" style={{ padding: "0 24px" }}>
          
          {/* FAIXA SUPERIOR DE CREDENCIAL OFICIAL */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "10px 18px", borderRadius: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span className="live-dot"></span>
              <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "var(--brand-lime)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Empresa Licenciada · Franca/SP e Região · Alvará Sanitário Ativo
              </span>
            </div>
            <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.8)" }}>
              CNPJ: <strong>30.438.427/0001-37</strong> · Responsável Técnico Homologado
            </span>
          </div>

          <div style={{ display: "grid", gap: 48, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", alignItems: "center" }}>
            <div className="animate-fade-up">
              <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 4vw, 3.85rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff" }}>
                Encontrou escorpião ou pragas na sua casa em Franca?
              </h1>
              
              <p style={{ margin: "20px 0 0", fontSize: "1.1875rem", lineHeight: 1.65, color: "rgba(255,255,255,0.9)" }}>
                Eliminamos no foco com <strong style={{ color: "var(--brand-lime)" }}>produto sem cheiro</strong>, barreira química residual e total segurança para crianças, sua família e animais de estimação.
              </p>

              {/* BOTAO DE AÇÃO: CHAMADA DE URGÊNCIA */}
              <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap", alignItems: "center" }}>
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="btn-whatsapp-glow hover-lift"
                  href={wa("CHAMADA DE URGÊNCIA: Encontrei pragas no meu imóvel em Franca/SP e preciso de atendimento imediato!")}
                  target="_blank"
                  icon={<WhatsAppIcon size={22} />}
                  style={{ padding: "18px 32px", fontSize: "1.125rem", fontWeight: 900, borderRadius: 8, letterSpacing: "0.02em" }}
                >
                  CHAMADA DE URGÊNCIA
                </Button>
                
                <a
                  href="#agendar"
                  className="hover-lift"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "18px 24px", background: "rgba(255,255,255,0.12)", color: "#fff", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: "1rem", border: "1px solid rgba(255,255,255,0.3)" }}
                >
                  📅 Agendar Vistoria
                </a>
              </div>

              {/* 3 ITENS EXCLUSIVOS DE PROVA */}
              <div style={{ display: "grid", gap: 8, marginTop: 28, fontSize: "0.9375rem", color: "rgba(255,255,255,0.9)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "var(--brand-lime)", fontWeight: 800 }}>✓</span>
                  <strong>Atendimento em tempo Record - Nossa missão é sua Família ou colaboradores fora de risco.</strong>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "var(--brand-lime)", fontWeight: 800 }}>✓</span>
                  <span>Produtos microencapsulados sem cheiro e sem manchas em pisos ou paredes.</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "var(--brand-lime)", fontWeight: 800 }}>✓</span>
                  <span>Garantia técnica formal com laudo e conformidade com a Vigilância Sanitária.</span>
                </div>
              </div>
            </div>

            {/* VÍDEO DOCUMENTAL EM LOOP: SEGURANÇA EM AMBIENTE INFANTIL / CRECHE */}
            <div style={{ position: "relative" }} className="animate-fade-up">
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", border: "2px solid rgba(143,206,42,0.6)", boxShadow: "0 24px 60px rgba(0,0,0,0.5)", background: "#001020" }}>
                
                {/* VIDEO / PLAYER COM AMBIENTE INFANTIL / CRECHE EM LOOP */}
                <div style={{ position: "relative", width: "100%", height: 440, overflow: "hidden" }}>
                  <img
                    src={A("campo/desinsetizacao-ambiente-interno-franca-sp.webp")}
                    alt="Atendimento técnico e desinfecção segura em creche e escola de Franca SP"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  
                  {/* BADGE DE SEGURANÇA BIOLÓGICA */}
                  <div style={{ position: "absolute", top: 16, left: 16, display: "flex", alignItems: "center", gap: 8, padding: "6px 12px", background: "rgba(0,18,38,0.9)", border: "1px solid var(--brand-lime)", borderRadius: 6 }}>
                    <span className="live-dot"></span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      Segurança em Creches e Escolas
                    </span>
                  </div>

                  <div style={{ position: "absolute", insetInline: 0, bottom: 0, padding: 20, background: "linear-gradient(to top, rgba(0,14,31,0.95) 0%, rgba(0,14,31,0.7) 60%, transparent 100%)" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--brand-lime)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Registro Real de Atendimento em Franca/SP</span>
                    <p style={{ margin: "4px 0 0", color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>Aplicação técnica e segura com EPI completo em ambientes sensíveis</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 PILARES TÉCNICOS DE AUTORIDADE */}
      <section style={{ background: "#ffffff", borderBottom: "1px solid var(--border-default)", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
        <div className="container-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", padding: "0 24px" }}>
          <div style={{ padding: "24px 16px", borderRight: "1px solid var(--border-default)" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--brand-muted)", textTransform: "uppercase", display: "block" }}>Credencial Sanitária</span>
            <strong style={{ color: "var(--brand-navy)", fontSize: "1.05rem", display: "block", marginTop: 4 }}>Alvará da Vigilância Sanitária</strong>
            <span style={{ fontSize: "0.8125rem", color: "var(--brand-muted)" }}>Laudo técnico conforme RDC 52 ANVISA</span>
          </div>
          <div style={{ padding: "24px 16px", borderRight: "1px solid var(--border-default)" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--brand-muted)", textTransform: "uppercase", display: "block" }}>Órgãos Oficiais</span>
            <strong style={{ color: "var(--brand-navy)", fontSize: "1.05rem", display: "block", marginTop: 4 }}>Câmara Municipal de Franca</strong>
            <span style={{ fontSize: "0.8125rem", color: "var(--brand-muted)" }}>Prestador homologado para controle e saúde</span>
          </div>
          <div style={{ padding: "24px 16px", borderRight: "1px solid var(--border-default)" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--brand-muted)", textTransform: "uppercase", display: "block" }}>Avaliação Comprovada</span>
            <strong style={{ color: "#d97706", fontSize: "1.05rem", display: "block", marginTop: 4 }}>5.0 ★ Google Avaliações</strong>
            <span style={{ fontSize: "0.8125rem", color: "var(--brand-muted)" }}>100% de clientes satisfeitos em Franca</span>
          </div>
          <div style={{ padding: "24px 16px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--brand-muted)", textTransform: "uppercase", display: "block" }}>Química Segura</span>
            <strong style={{ color: "var(--brand-navy)", fontSize: "1.05rem", display: "block", marginTop: 4 }}>Produtos Sem Cheiro</strong>
            <span style={{ fontSize: "0.8125rem", color: "var(--brand-muted)" }}>Microencapsulados Bayer e Syngenta</span>
          </div>
        </div>
      </section>

      {/* BLOCO CIENTÍFICO / EDUCATIVO: POR QUE VENENO DE SUPERMERCADO PIORA O PROBLEMA */}
      <section style={{ background: "var(--brand-surface)", padding: "72px 0", borderBottom: "1px solid var(--border-default)" }}>
        <div className="container-responsive" style={{ padding: "0 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center", marginBottom: 48 }}>
            <span style={{ display: "inline-block", padding: "6px 14px", background: "rgba(220, 38, 38, 0.1)", color: "#b91c1c", borderRadius: 6, fontSize: "0.8125rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Alerta Técnico de Saúde Ambiental
            </span>
            <h2 style={{ margin: "16px 0 0", fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.6rem)", fontWeight: 800, color: "var(--brand-navy)", lineHeight: 1.15 }}>
              Por que jogar veneno de supermercado piora a infestação de escorpiões?
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "1.0625rem", lineHeight: 1.6, color: "var(--brand-muted)" }}>
              O escorpião-amarelo (<em>Tityus serrulatus</em>) possui carapaça espessa de quitina e sensores que fecham a respiração ao detectar aerossóis comuns. O veneno barato não mata o escorpião; ele apenas o irrita e desaloja dos ralos e caixas de esgoto para dentro de quartos e salas.
            </p>
          </div>

          <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))" }}>
            <div style={{ background: "#fff", padding: 32, borderRadius: 12, border: "2px solid #fca5a5", boxShadow: "0 4px 14px rgba(0,0,0,0.03)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#dc2626", fontWeight: 800, fontSize: "1.125rem", marginBottom: 16 }}>
                <span>❌ Inseticida Comum / Spray de Mercado</span>
              </div>
              <ul style={{ paddingLeft: 20, margin: 0, color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.7, display: "grid", gap: 10 }}>
                <li><strong>Não elimina a carapaça do escorpião:</strong> a concentração é insuficiente para letalidade.</li>
                <li><strong>Efeito desalojante perigoso:</strong> faz o escorpião fugir do esgoto e subir para a casa.</li>
                <li><strong>Cheiro forte e toxicidade:</strong> irrita vias aéreas de crianças e pets.</li>
                <li><strong>Sem efeito residual:</strong> evapora em poucas horas sem proteger os ralos.</li>
              </ul>
            </div>

            <div style={{ background: "linear-gradient(145deg, #002347 0%, #001730 100%)", color: "#fff", padding: 32, borderRadius: 12, border: "2px solid var(--brand-lime)", boxShadow: "0 8px 24px rgba(0,35,71,0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--brand-lime)", fontWeight: 800, fontSize: "1.125rem", marginBottom: 16 }}>
                <span>✓ Protocolo Técnico Sentinela Saúde Ambiental</span>
              </div>
              <ul style={{ paddingLeft: 20, margin: 0, color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", lineHeight: 1.7, display: "grid", gap: 10 }}>
                <li><strong>Princípios ativos microencapsulados:</strong> grudam no corpo do escorpião e agem no sistema nervoso.</li>
                <li><strong>Eliminação das baratas:</strong> corte da fonte primária de alimento que atrai os escorpiões.</li>
                <li><strong>Aplicação técnica sem cheiro:</strong> segurança biológica total para animais e família.</li>
                <li><strong>Barreira residual de meses:</strong> caixas de passagem e ralos protegidos continuamente.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ATENDIMENTOS EM FRANCA E REGIÃO (TÍTULO ATUALIZADO) */}
      <section style={{ background: "#ffffff", padding: "72px 0", borderBottom: "1px solid var(--border-default)" }}>
        <div className="container-responsive" style={{ padding: "0 24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 20, marginBottom: 40 }}>
            <div>
              <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "var(--brand-lime-deep)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                Registros de Campo
              </span>
              <h2 style={{ margin: "10px 0 0", fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--brand-navy)" }}>
                Atendimentos em Franca e Região
              </h2>
            </div>
            <Button variant="whatsapp" href={wa("Olá! Gostaria de um orçamento para o meu bairro em Franca.")} target="_blank">
              Consultar Atendimento no Meu Bairro
            </Button>
          </div>

          <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))" }}>
            {realCases.map((c, idx) => (
              <div key={idx} className="hover-lift" style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--border-default)", background: "#fff", display: "flex", flexDirection: "column", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                  <img
                    src={A(c.img)}
                    alt={c.praga + " em " + c.bairro}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                  />
                  <span style={{ position: "absolute", top: 12, left: 12, padding: "4px 10px", background: "rgba(0,35,71,0.85)", color: "var(--brand-lime)", borderRadius: 4, fontSize: "0.75rem", fontWeight: 700 }}>
                    {c.tag}
                  </span>
                </div>
                <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ fontSize: "0.8125rem", color: "var(--brand-muted)", fontWeight: 700, textTransform: "uppercase" }}>{c.bairro}</span>
                    <h3 style={{ margin: "6px 0 8px", fontSize: "1.0625rem", color: "var(--brand-navy)", fontWeight: 800 }}>{c.praga}</h3>
                    <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--brand-muted)", lineHeight: 1.55 }}>{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL: DEPOIMENTOS HUMANOS */}
      <section style={{ background: "var(--brand-surface)", padding: "72px 0", borderBottom: "1px solid var(--border-default)" }}>
        <div className="container-responsive" style={{ padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 48px" }}>
            <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "var(--brand-lime-deep)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Reputação e Confiança
            </span>
            <h2 style={{ margin: "12px 0 0", fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--brand-navy)" }}>
              O que os moradores de Franca dizem sobre a Sentinela
            </h2>
          </div>

          <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))" }}>
            {depoimentos.map((d, i) => (
              <div key={i} className="hover-lift" style={{ background: "#fff", padding: 28, borderRadius: 12, border: "1px solid var(--border-default)", boxShadow: "0 4px 16px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ color: "#f59e0b", fontSize: "1.2rem", marginBottom: 12 }}>{"★".repeat(d.estrelas)}</div>
                  <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.6, color: "var(--brand-navy)", fontStyle: "italic" }}>
                    "{d.texto}"
                  </p>
                </div>
                <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--border-default)" }}>
                  <strong style={{ display: "block", color: "var(--brand-navy)", fontSize: "0.95rem" }}>{d.nome}</strong>
                  <span style={{ fontSize: "0.8125rem", color: "var(--brand-muted)" }}>{d.local}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTROLE POR PRAGA (TODOS OS TIPOS) */}
      <section style={{ background: "#fff", padding: "72px 0", borderBottom: "1px solid var(--border-default)" }}>
        <div className="container-responsive" style={{ padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 40px" }}>
            <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "var(--brand-lime-deep)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Especialidades Técnicas
            </span>
            <h2 style={{ margin: "10px 0 0", fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--brand-navy)" }}>
              Controle Especializado para Cada Espécie
            </h2>
          </div>

          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}>
            {allPests.map(([kind, label]) => (
              <PestTile key={kind} kind={kind} label={label} href={wa(`Olá! Gostaria de um orçamento para controle de ${label} em Franca/SP.`)} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--brand-surface)", padding: "72px 0", borderBottom: "1px solid var(--border-default)" }}>
        <div className="container-responsive" style={{ maxWidth: 840, padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "var(--brand-lime-deep)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Tire Suas Dúvidas
            </span>
            <h2 style={{ margin: "10px 0 0", fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.4rem)", fontWeight: 800, color: "var(--brand-navy)" }}>
              Perguntas Frequentes sobre Dedetização em Franca
            </h2>
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            {faq.map(([q, a], idx) => (
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

      {/* CTA FINAL COM DEGRADÊ, CHAMADA DE EMERGÊNCIA E BOTÃO AGENDAR */}
      <section style={{ background: "linear-gradient(145deg, #001020 0%, #002347 100%)", color: "#fff", padding: "72px 0", textAlign: "center" }}>
        <div className="container-responsive" style={{ maxWidth: 760, padding: "0 24px" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 900, color: "#fff" }}>
            Proteja sua casa ou empresa hoje mesmo.
          </h2>
          <p style={{ margin: "16px 0 0", fontSize: "1.125rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.6 }}>
            Fale agora diretamente com nossa equipe no WhatsApp. Somos recordistas em responder rapidamente nossos clientes.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <Button
              variant="whatsapp"
              size="lg"
              className="btn-whatsapp-glow hover-lift"
              href={wa("CHAMADA DE EMERGÊNCIA: Preciso de atendimento no meu imóvel em Franca/SP.")}
              target="_blank"
              icon={<WhatsAppIcon size={24} />}
              style={{ padding: "18px 36px", fontSize: "1.125rem", fontWeight: 900, borderRadius: 8 }}
            >
              CHAMADA DE EMERGÊNCIA
            </Button>
            <a
              href="#agendar"
              className="hover-lift"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "18px 28px", background: "rgba(255,255,255,0.12)", color: "#fff", borderRadius: 8, textDecoration: "none", fontWeight: 800, fontSize: "1.0625rem", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              📅 Agendar
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};