import { BRAND } from "@/lib/brand";

export interface PestData {
  slug: string;
  name: string;
  icon: string; // emoji
  description: string;
  whyAppears: string;
  risks: {
    headline: string;
    items: { emoji: string; title: string; desc: string }[];
  };
  treatment: {
    headline: string;
    steps: { numero: string; title: string; desc: string; icone: string }[];
  };
  dryingTime: string;
  revisitTime: string;
  preventionTips: string[];
  faq: { q: string; a: string }[];
  seoKeywords: string[];
}

export const pests: PestData[] = [
  {
    slug: "escorpiao",
    name: "Escorpiões",
    icon: "🦂",
    description:
      "O escorpião-amarelo (Tityus serrulatus) é a espécie mais perigosa do Brasil e altamente prevalente em Franca/SP. Em 2024, Franca registrou 777 acidentes com escorpiões — um aumento de 24% em relação ao ano anterior. A espécie se reproduz por partenogênese (sem necessidade de macho), o que acelera sua proliferação em áreas urbanas. O veneno neurotóxico pode causar insuficiência respiratória e cardíaca, sendo crianças e idosos os grupos de maior risco.",
    whyAppears:
      "Escorpiões buscam abrigo em entulhos, telhas, frestas, ralos e caixas de gordura. O principal atrativo é a presença de baratas — sua fonte primária de alimentação. O período crítico em Franca vai de outubro a março, com pico no verão chuvoso. Temperaturas acima de 25°C e umidade elevada aumentam a atividade dos escorpiões, que saem de seus esconderijos para caçar à noite.",
    risks: {
      headline: "Por que escorpiões são perigosos?",
      items: [
        {
          emoji: "🧪",
          title: "Veneno neurotóxico",
          desc: "O veneno do escorpião-amarelo contém toxinas que atacam o sistema nervoso. Em crianças com menos de 7 anos, pode causar edema pulmonar agudo, choque cardiogênico e óbito em poucas horas se não houver soroterapia imediata.",
        },
        {
          emoji: "🏠",
          title: "Invadem residências",
          desc: "Escorpiões entram por ralos sem tela, frestas em paredes, telhados e caixas de gordura. Buscam abrigo escuro durante o dia e saem à noite para caçar, frequentemente dentro de quartos e banheiros.",
        },
        {
          emoji: "👶",
          title: "Crianças são as principais vítimas",
          desc: "O peso corporal reduzido faz com que o veneno se espalhe mais rapidamente no organismo infantil. Crianças de até 9 anos representam a maioria dos casos graves e óbitos por picada de escorpião no Brasil.",
        },
        {
          emoji: "🐕",
          title: "Animais domésticos também sofrem",
          desc: "Cães e gatos são curiosos e frequentemente tentam caçar escorpiões, resultando em picadas dolorosas que exigem atendimento veterinário de urgência. Gatos são particularmente vulneráveis ao veneno.",
        },
      ],
    },
    treatment: {
      headline: "Como é feita a dedetização de escorpiões?",
      steps: [
        {
          numero: "01",
          title: "Vistoria Técnica Detalhada",
          desc: "O técnico inspeciona todos os ambientes do imóvel: ralos, frestas, batentes, caixas de gordura, sótãos, porões, jardins e áreas externas. São identificados pontos de entrada, abrigos e presença de baratas (alimento dos escorpiões).",
          icone: "🔍",
        },
        {
          numero: "02",
          title: "Aplicação de Inseticida Residual",
          desc: "Aplicação de inseticida microencapsulado de alta persistência em rodapés, frestas, ralos e perímetro externo. O produto cria barreira química duradoura e é registrado na ANVISA com baixa toxicidade para humanos e pets.",
          icone: "🧪",
        },
        {
          numero: "03",
          title: "Eliminação de Baratas (Fonte de Alimento)",
          desc: "Aplicação de gel inseticida em pontos estratégicos (cozinhas, banheiros, áreas de serviço) para eliminar baratas — principal alimento do escorpião-amarelo. Sem alimento, o ambiente fica hostil para escorpiões.",
          icone: "🪳",
        },
        {
          numero: "04",
          title: "Laudo Técnico e Recomendações",
          desc: "Emitimos laudo técnico com registro fotográfico, produtos utilizados, mapa de aplicação e recomendações preventivas. O documento tem validade para Vigilância Sanitária e seguradoras.",
          icone: "📋",
        },
      ],
    },
    dryingTime: "2 a 4 horas (pulverização) — aguardar secagem completa antes de retornar ao ambiente.",
    revisitTime: "Reforço recomendado a cada 60 dias durante o período crítico (outubro a março). Para residências com histórico de infestação, recomendamos visita a cada 30 dias.",
    preventionTips: [
      "Instale telas milimétricas (abertura máxima de 1 mm) em todos os ralos e grelhas de escoamento",
      "Vede frestas, rachaduras em paredes e batentes de portas com silicone ou massa acrílica",
      "Remova entulhos, madeira empilhada e materiais de construção do quintal",
      "Mantenha a grama aparada e elimine plantas trepadeiras próximas às paredes",
      "Sacuda roupas de cama, toalhas e calçados antes de usar — escorpiões se escondem em tecidos",
      "Contrate desinsetização preventiva contra baratas (fonte de alimento dos escorpiões)",
      "Instale soleiras nas portas externas — vedação física impede a entrada",
    ],
    faq: [
      {
        q: "O que fazer se encontrar um escorpião dentro de casa?",
        a: "Mantenha distância e nunca tente pegar com as mãos. Feche o local e contate um profissional imediatamente. Se houver vítima (especialmente criança ou idoso), procure o pronto-socorro mais próximo e, se possível, colete o escorpião em um pote para identificação da espécie. Depois, chame a Sentinela para vistoria completa.",
      },
      {
        q: "Qual o período mais crítico para escorpiões em Franca/SP?",
        a: "De outubro a março, com pico nos meses de dezembro a fevereiro (verão chuvoso). O calor e a umidade aceleram o metabolismo e a reprodução dos escorpiões. O ideal é iniciar o plano preventivo em setembro, antes do período de pico. Em 2024, Franca registrou 777 acidentes — a prevenção é fundamental.",
      },
      {
        q: "O plano preventivo elimina baratas também?",
        a: "Sim. O escorpião-amarelo se alimenta principalmente de baratas. Nosso plano preventivo inclui desinsetização para eliminar a fonte de alimento, tornando o ambiente hostil para escorpiões. Sem baratas, o risco de escorpiões dentro de casa cai drasticamente.",
      },
      {
        q: "Quanto tempo após a aplicação posso voltar para casa?",
        a: "Para aplicação líquida (pulverização), o tempo de secagem é de 2 a 4 horas. Após a secagem completa, o ambiente pode ser ocupado normalmente. Para gel inseticida, não há necessidade de afastamento. Sempre siga as orientações do técnico no momento do serviço.",
      },
    ],
    seoKeywords: [
      "escorpião Franca",
      "controle de escorpiões Franca",
      "dedetizadora escorpião Franca SP",
      "acidente escorpião Franca",
      "escorpião amarelo",
      "plano preventivo escorpião",
      "Sentinela Saúde Ambiental escorpião",
    ],
  },
  {
    slug: "baratas",
    name: "Baratas",
    icon: "🪳",
    description:
      "As baratas estão entre as pragas urbanas mais comuns e perigosas do mundo. As espécies mais frequentes em ambientes urbanos são a barata-de-esgoto (Periplaneta americana), a barata-alemã (Blattella germanica) e a barata-de-bando (Blatta orientalis). Elas são vetores mecânicos de mais de 40 patógenos, incluindo bactérias como Salmonella, E. coli e Staphylococcus, além de fungos, vírus e parasitas intestinais. Suas fezes, secreções e carcaças são potentes alérgenos que podem desencadear crises de asma e rinite alérgica, especialmente em crianças.",
    whyAppears:
      "Baratas são atraídas por restos de alimentos, gordura acumulada, lixo mal acondicionado e umidade. Cozinhas, áreas de serviço, depósitos e dutos de esgoto são os principais focos. A barata-alemã se reproduz em velocidade alarmante — uma única fêmea pode gerar até 300 descendentes em 3 meses. Infestações em apartamentos geralmente se espalham através de tubulações e shafts elétricos.",
    risks: {
      headline: "Riscos das baratas para a saúde",
      items: [
        {
          emoji: "🦠",
          title: "Transmissão de doenças",
          desc: "Baratas carregam em suas patas e corpo bactérias como Salmonella (causa intoxicação alimentar), E. coli (infecções intestinais), Staphylococcus e Pseudomonas. Podem transmitir hepatite A, febre tifoide, gastroenterites e verminoses.",
        },
        {
          emoji: "🤧",
          title: "Alergias e asma",
          desc: "Fezes, saliva, secreções e fragmentos de carcaça de baratas contêm proteínas alergênicas potentes. Estudos mostram que 60% das crianças asmáticas em áreas urbanas são sensibilizadas a alérgenos de barata — principal gatilho de crises em ambientes peridomiciliares.",
        },
        {
          emoji: "🍽️",
          title: "Contaminação de alimentos",
          desc: "Baratas defecam e regurgitam enquanto se alimentam, contaminando alimentos, utensílios de cozinha e superfícies de preparo. Mesmo alimentos armazenados em embalagens finas podem ser contaminados através de pequenas perfurações.",
        },
        {
          emoji: "⚡",
          title: "Danos a equipamentos",
          desc: "Baratas se abrigam em eletrodomésticos (motores de geladeira, micro-ondas, cafeteiras) e equipamentos eletrônicos, causando curtos-circuitos e mau funcionamento. Seus excrementos corroem componentes eletrônicos ao longo do tempo.",
        },
      ],
    },
    treatment: {
      headline: "Como é feita a dedetização de baratas?",
      steps: [
        {
          numero: "01",
          title: "Inspeção e Identificação",
          desc: "O técnico identifica a espécie de barata presente (cada uma exige estratégia diferente), localiza focos principais e rotas de infestação. Pontos críticos incluem motores de geladeira, batentes de portas, frestas em azulejos e dutos de esgoto.",
          icone: "🔍",
        },
        {
          numero: "02",
          title: "Aplicação de Gel Inseticida",
          desc: "Aplicação de gel inseticida de última geração em pontos estratégicos. O gel contém atrativo alimentar e age por ingestão — as baratas levam o produto ao ninho e contaminam outras por contato secundário (efeito dominó), eliminando a colônia em até 72 horas.",
          icone: "💉",
        },
        {
          numero: "03",
          title: "Pulverização Perimetral (se necessário)",
          desc: "Para infestações severas, combinamos gel com pulverização residual de baixa toxicidade em rodapés, cantos, frestas e áreas externas. O produto cria barreira protetora duradoura e elimina baratas que transitam pelo perímetro tratado.",
          icone: "🧪",
        },
        {
          numero: "04",
          title: "Monitoramento Pós-Tratamento",
          desc: "Instalamos armadilhas adesivas de monitoramento para verificar a eficácia do tratamento. Em caso de atividade residual, fazemos reforço direcionado sem custo adicional dentro do período de garantia.",
          icone: "📊",
        },
      ],
    },
    dryingTime: "Gel inseticida: sem necessidade de afastamento. Pulverização: 1 a 2 horas para secagem completa.",
    revisitTime: "Reforço recomendado a cada 3 meses para residências. Estabelecimentos comerciais (restaurantes, padarias, supermercados): manutenção mensal exigida pela Vigilância Sanitária.",
    preventionTips: [
      "Mantenha a cozinha sempre limpa — não deixe louça suja durante a noite",
      "Armazene alimentos em potes herméticos de vidro ou plástico rígido com vedação",
      "Retire o lixo orgânico diariamente e mantenha lixeiras tampadas",
      "Vede frestas, rachaduras em azulejos e batentes com silicone",
      "Instale grelhas e telas em ralos e dutos de esgoto",
      "Repare vazamentos — umidade atrai baratas",
      "Não acumule jornais, revistas e caixas de papelão (abrigo ideal para baratas)",
    ],
    faq: [
      {
        q: "Por que as baratas voltam mesmo depois de dedetizar?",
        a: "Baratas podem reinfestar quando há fonte de alimento disponível ou rotas de entrada não vedadas. A barata-alemã deposita ootecas (cápsulas com ovos) em locais protegidos — se essas não forem atingidas pelo tratamento, novos insetos eclodem em até 28 dias. Por isso o reforço programado é essencial para quebrar o ciclo reprodutivo.",
      },
      {
        q: "O gel inseticida é seguro para crianças e pets?",
        a: "Sim. O gel é aplicado em pontos estratégicos fora do alcance (atrás de eletrodomésticos, dentro de caixas de tomada, frestas altas). Além disso, as formulações modernas contêm amargante (Bitrex) que repele a ingestão acidental por crianças e animais. Orientamos sobre os pontos aplicados após o serviço.",
      },
      {
        q: "Quanto tempo leva para eliminar todas as baratas?",
        a: "O efeito do gel é progressivo: em 24 a 72 horas já se observa redução significativa. A eliminação completa da colônia ocorre em 7 a 15 dias, pois as baratas que tiveram contato com o gel contaminam outras no ninho. Para infestações severas, recomendamos 2 aplicações com intervalo de 15 dias.",
      },
      {
        q: "Baratas podem subir pelo ralo do banheiro?",
        a: "Sim, a barata-de-esgoto (Periplaneta americana) sobe por tubulações e ralos, especialmente à noite. A solução é instalar ralos com sistema de fechamento (abre/fecha) ou telas removíveis. Durante a dedetização, aplicamos produto específico nas caixas de gordura e tubulações.",
      },
    ],
    seoKeywords: [
      "dedetização de baratas Franca",
      "baratas Franca SP",
      "controle de baratas",
      "desinsetização baratas Franca",
      "gel inseticida baratas",
      "barata alemã dedetização",
      "Sentinela Saúde Ambiental baratas",
    ],
  },
  {
    slug: "ratos",
    name: "Ratos",
    icon: "🐀",
    description:
      "Os ratos são uma das pragas urbanas mais perigosas, responsáveis pela transmissão de mais de 55 doenças aos seres humanos. As três espécies mais comuns são o rato-de-telhado (Rattus rattus), a ratazana-de-esgoto (Rattus norvegicus) e o camundongo (Mus musculus). Roedores contaminam alimentos, roem fiação elétrica (causando curtos-circuitos e incêndios), danificam estruturas e se reproduzem em taxas alarmantes — um casal de ratos pode gerar até 2.000 descendentes em um ano em condições favoráveis.",
    whyAppears:
      "Ratos são atraídos por três fatores: alimento, água e abrigo. Lixo mal acondicionado, ração de animais de estimação exposta, grãos armazenados inadequadamente e frutas caídas no quintal são os principais atrativos. Esgotos abertos ou danificados, terrenos baldios com entulho e forros de telhado com acesso facilitado oferecem abrigo ideal para colônias de roedores.",
    risks: {
      headline: "Riscos dos ratos para a saúde",
      items: [
        {
          emoji: "🦠",
          title: "Leptospirose",
          desc: "Transmitida pela urina de ratos infectados, a leptospirose pode causar insuficiência renal, hemorragia pulmonar e óbito. Em períodos de chuva, a urina contaminada se mistura com a água de enchentes, aumentando o risco de surtos. Franca já registrou casos da doença associados a áreas com infestação de roedores.",
        },
        {
          emoji: "🤒",
          title: "Hantavirose e outras doenças",
          desc: "Ratos transmitem hantavirose (síndrome pulmonar grave), peste bubônica (através da pulga do rato), salmonelose, tifo murino, coriomeningite linfocítica e toxoplasmose. As fezes secas de ratos, quando aspiradas, liberam partículas virais no ar que podem ser inaladas.",
        },
        {
          emoji: "⚡",
          title: "Incêndios por roedura de fios",
          desc: "Ratos roem constantemente para desgastar os dentes que crescem sem parar. Fios elétricos roídos são causa frequente de curtos-circuitos e incêndios residenciais e comerciais. Estima-se que até 25% dos incêndios de causa desconhecida possam estar relacionados a roedores.",
        },
        {
          emoji: "🏚️",
          title: "Danos estruturais e contaminação",
          desc: "Ratos escavam túneis que comprometem fundações e pisos. Roem tubulações de água e gás, causando vazamentos. Suas fezes e urina contaminam estoques de alimentos, forros, isolamentos térmicos e sistemas de ar-condicionado.",
        },
      ],
    },
    treatment: {
      headline: "Como é feita a desratização profissional?",
      steps: [
        {
          numero: "01",
          title: "Inspeção e Mapeamento",
          desc: "O técnico identifica espécie, rotas de entrada, trilhas (marcas de gordura ao longo de paredes), fezes e ninhos. Mapeia pontos críticos: forros, porões, shafts, caixas de gordura, tubulações de esgoto e áreas externas.",
          icone: "🔍",
        },
        {
          numero: "02",
          title: "Instalação de Iscas em Porta-Iscas Blindados",
          desc: "Raticidas modernos são instalados em porta-iscas plásticos selados e invioláveis — seguros para crianças e animais domésticos. As iscas contêm atrativos alimentares e anticoagulantes de dose única, que eliminam o roedor em 3 a 5 dias sem causar desconfiança na colônia.",
          icone: "📦",
        },
        {
          numero: "03",
          title: "Vedação de Acessos (Exclusão)",
          desc: "Identificamos e orientamos a vedação de todos os pontos de entrada: frestas acima de 1 cm, aberturas em telhados, tubulações desprotegidas, ralos sem tela e vãos sob portas. A exclusão física é a medida mais duradoura de controle de roedores.",
          icone: "🔧",
        },
        {
          numero: "04",
          title: "Monitoramento Contínuo",
          desc: "Após o tratamento inicial, mantemos armadilhas de monitoramento e porta-iscas para verificar atividade residual. Em contratos empresariais, fornecemos relatório técnico mensal com mapa de pontos, consumo de iscas e recomendações.",
          icone: "📋",
        },
      ],
    },
    dryingTime: "Não há aplicação líquida — apenas iscas sólidas em porta-iscas. Sem necessidade de afastamento do imóvel.",
    revisitTime: "Primeiro mês: visitas semanais para reposição de iscas e monitoramento. Manutenção preventiva: visita mensal para verificação dos porta-iscas. Em caso de nova atividade, reforço imediato sem custo adicional.",
    preventionTips: [
      "Armazene alimentos em recipientes herméticos — ratos roem embalagens plásticas e de papelão",
      "Mantenha lixeiras sempre tampadas e retire o lixo orgânico diariamente",
      "Vede frestas e aberturas com tela metálica ou argamassa (ratos adultos passam por vãos de apenas 1,5 cm)",
      "Instale telas ou grelhas em ralos e dutos de esgoto",
      "Não deixe ração de animais de estimação exposta durante a noite",
      "Apare árvores e galhos que tocam o telhado — são pontes de acesso para o rato-de-telhado",
      "Mantenha terrenos limpos, sem entulho ou vegetação alta",
    ],
    faq: [
      {
        q: "As iscas podem intoxicar meu cachorro ou gato?",
        a: "Nossas iscas são instaladas exclusivamente em porta-iscas plásticos blindados e lacrados, fisicamente invioláveis por crianças e animais domésticos. São fixados em locais estratégicos (atrás de eletrodomésticos, dentro de forros, sob escadas). As formulações modernas também contêm amargante (Bitrex) que repele ingestão acidental.",
      },
      {
        q: "Onde o rato morre depois de comer a isca? Vai feder?",
        a: "Os raticidas modernos são anticoagulantes que causam morte em 3 a 5 dias. O animal sente sede e geralmente sai do ninho em busca de água, morrendo em locais externos ou de fácil localização. Em caso de morte em local inacessível (dentro de paredes), o odor se dissipa em 7 a 10 dias — utilizamos produtos neutralizadores de odor se necessário.",
      },
      {
        q: "Em quanto tempo os ratos somem depois da desratização?",
        a: "Redução da atividade visível em 5 a 10 dias após instalação das iscas. A eliminação completa da colônia ocorre em 15 a 21 dias. Monitoramos semanalmente no primeiro mês para garantir a eficácia e repor iscas consumidas.",
      },
      {
        q: "Como saber se tem rato em casa?",
        a: "Os principais sinais são: fezes alongadas (semelhantes a grãos de arroz escuros) em cantos e armários, marcas de gordura ao longo de paredes (trilhas), ruídos noturnos no forro ou entre paredes (arranhões, corridas), embalagens roídas e odor forte de amônia (urina de rato). Ao identificar qualquer sinal, chame um profissional para avaliação.",
      },
    ],
    seoKeywords: [
      "desratização Franca",
      "controle de ratos Franca SP",
      "dedetização de ratos",
      "ratazana esgoto Franca",
      "rato de telhado Franca",
      "rato em casa o que fazer",
      "Sentinela Saúde Ambiental ratos",
    ],
  },
  {
    slug: "cupins",
    name: "Cupins",
    icon: "🪵",
    description:
      "Cupins são insetos xilófagos (comedores de madeira) que causam prejuízos estimados em R$ 2 bilhões por ano no Brasil. As duas categorias principais são os cupins subterrâneos (Coptotermes gestroi), que constroem túneis no solo e atacam edificações pela base, e os cupins de madeira seca (Cryptotermes brevis), que infestam móveis, portas, batentes e estruturas de telhado sem contato com o solo. Uma colônia madura de cupins subterrâneos pode consumir até 400g de celulose por dia, comprometendo silenciosamente a integridade estrutural de imóveis.",
    whyAppears:
      "Cupins são atraídos por celulose — madeira, papel, papelão, livros, e até gesso acartonado. Os subterrâneos precisam de umidade e constroem túneis desde o solo até a edificação. Os de madeira seca infestam através de revoadas (enxameação) que ocorrem em dias quentes e úmidos de primavera e verão — os alados (siriris) entram por janelas abertas, frestas e telhados.",
    risks: {
      headline: "Riscos dos cupins para o patrimônio",
      items: [
        {
          emoji: "🏚️",
          title: "Comprometimento estrutural",
          desc: "Cupins subterrâneos atacam vigas de sustentação, barrotes de telhado, pisos de madeira e rodapés. O ataque é silencioso — a madeira pode parecer intacta externamente enquanto está completamente oca por dentro. Colapsos parciais de telhados e pisos são riscos reais em infestações avançadas.",
        },
        {
          emoji: "🪑",
          title: "Destruição de móveis e patrimônio",
          desc: "Cupins de madeira seca atacam móveis, portas, janelas, batentes, molduras, livros e documentos. Peças de valor, antiguidades e documentos importantes podem ser destruídos em meses sem sinal externo visível (os orifícios são minúsculos, de 1 a 2 mm).",
        },
        {
          emoji: "💰",
          title: "Prejuízo financeiro elevado",
          desc: "O custo de reparo de danos estruturais por cupins pode ultrapassar 10x o valor de um tratamento preventivo. Em imóveis comerciais e industriais, a paralisação para reformas causadas por cupins gera prejuízos ainda maiores por interrupção das atividades.",
        },
        {
          emoji: "📉",
          title: "Desvalorização do imóvel",
          desc: "Imóveis com histórico de cupim perdem valor de mercado significativamente. Laudos de vistoria técnica apontam infestação como vício oculto, gerando passivos em transações imobiliárias. O tratamento documentado valoriza e protege o patrimônio.",
        },
      ],
    },
    treatment: {
      headline: "Como é feita a descupinização profissional?",
      steps: [
        {
          numero: "01",
          title: "Diagnóstico Técnico",
          desc: "Vistoria completa do imóvel para identificar a espécie de cupim, a extensão da infestação e os danos estruturais. Utilizamos equipamentos como umidímetro, sonar e câmera termográfica para detectar colônias em paredes e estruturas ocultas.",
          icone: "🔍",
        },
        {
          numero: "02",
          title: "Barreira Química de Solo",
          desc: "Para cupins subterrâneos: injeção de cupinicida de longa duração (até 10 anos) no solo ao redor da edificação, criando barreira química contínua. O produto é aplicado sob pisos, ao longo de paredes externas e em pontos de contato solo-estrutura.",
          icone: "🧪",
        },
        {
          numero: "03",
          title: "Injeção em Madeira Atingida",
          desc: "Para cupins de madeira seca: injeção de cupinicida diretamente nas galerias internas da madeira atacada, através dos orifícios existentes. O produto se difunde pelo sistema de túneis, eliminando toda a colônia. Madeiras severamente comprometidas devem ser substituídas.",
          icone: "💉",
        },
        {
          numero: "04",
          title: "Garantia e Monitoramento",
          desc: "Emitimos certificado de garantia contratual (3 a 10 anos conforme o tipo de tratamento). Instalamos estações de monitoramento com iscas de celulose para detecção precoce de nova atividade de cupins subterrâneos.",
          icone: "🛡️",
        },
      ],
    },
    dryingTime: "Barreira de solo: 4 a 6 horas para absorção completa do produto no solo. Injeção em madeira: não requer afastamento (aplicação localizada).",
    revisitTime: "Inspeção anual de garantia durante o período contratual (3 a 10 anos). Para imóveis comerciais: monitoramento semestral. Estações de monitoramento são verificadas a cada 60 dias em áreas de alto risco.",
    preventionTips: [
      "Elimine contato direto entre madeira e solo — use bases de concreto ou metal",
      "Mantenha distância mínima de 30 cm entre o solo e estruturas de madeira (vigas, barrotes)",
      "Trate previamente toda madeira utilizada em construção ou reforma com preservante cupinicida",
      "Conserte vazamentos — umidade no solo e em estruturas atrai cupins subterrâneos",
      "Instale telas em janelas durante a primavera e verão (período de revoada)",
      "Evite armazenar papelão, livros e documentos diretamente no chão ou em áreas úmidas",
      "Realize inspeção preventiva anual em forros, porões e estruturas de madeira expostas",
    ],
    faq: [
      {
        q: "Quanto tempo dura o tratamento contra cupim?",
        a: "A barreira química de solo tem eficácia comprovada de 5 a 10 anos, dependendo do produto utilizado, tipo de solo e condições climáticas. Oferecemos garantia contratual formal durante todo o período. Para cupins de madeira seca, o tratamento é curativo e elimina a infestação ativa — a garantia cobre reinfestação das mesmas peças tratadas.",
      },
      {
        q: "Cupim pode voltar depois do tratamento?",
        a: "O tratamento elimina a colônia ativa. Novas infestações podem ocorrer por fontes externas (revoadas, imóveis vizinhos, lenha contaminada). Por isso a barreira química contínua e o monitoramento regular são fundamentais. Com manutenção adequada, a reinfestação é rapidamente detectada e tratada.",
      },
      {
        q: "Como saber se os móveis têm cupim?",
        a: "Sinais clássicos: grânulos fecais (pó fino similar a serragem) acumulados sob o móvel, pequenos orifícios de 1-2 mm na superfície da madeira, som oco ao bater na peça, presença de alados (siriris) próximos a janelas e luminárias. Na dúvida, solicite vistoria técnica — o diagnóstico precoce salva o móvel.",
      },
      {
        q: "O tratamento contra cupim é tóxico para pessoas?",
        a: "Os produtos utilizados são registrados na ANVISA e aplicados de forma localizada (barreira de solo, injeção em madeira). Durante a aplicação, orientamos o afastamento do local tratado pelo tempo técnico necessário (4 a 6 horas). Após a absorção/secagem, não há risco para ocupação normal do imóvel.",
      },
    ],
    seoKeywords: [
      "descupinização Franca",
      "cupim Franca SP",
      "controle de cupins",
      "cupim subterrâneo Franca",
      "cupim de madeira seca",
      "barreira química cupim",
      "Sentinela Saúde Ambiental cupins",
    ],
  },
  {
    slug: "aranhas",
    name: "Aranhas",
    icon: "🕷️",
    description:
      "O Brasil abriga três gêneros de aranhas de importância médica: Phoneutria (armadeira), Loxosceles (aranha-marrom) e Latrodectus (viúva-negra). A aranha-marrom é a mais perigosa em ambientes urbanos — sua picada indolor inicial evolui para necrose tecidual, insuficiência renal e até óbito em casos graves. A armadeira possui veneno neurotóxico e é considerada a aranha mais agressiva do mundo. Mesmo aranhas não peçonhentas, como a aranha-de-jardim e a aranha-lobo, causam desconforto psicológico e alergias em pessoas sensíveis.",
    whyAppears:
      "Aranhas acompanham suas presas (insetos). Ambientes com infestação de moscas, mosquitos, baratas e formigas atraem aranhas. Elas buscam locais escuros e abrigados: cantos de parede, atrás de móveis, sótãos, porões, jardins densos, caixas de luz e telhas. A aranha-marrom se esconde em sapatos, roupas guardadas, roupas de cama e atrás de quadros. Períodos de chuva aumentam a atividade de aranhas que buscam abrigo dentro de casa.",
    risks: {
      headline: "Riscos das aranhas para pessoas e pets",
      items: [
        {
          emoji: "🏥",
          title: "Picada da aranha-marrom (Loxosceles)",
          desc: "Picada indolor inicial — a vítima não percebe. Após 6 a 12 horas surge mancha escura, bolha e necrose progressiva da pele. Casos graves evoluem para hemólise intravascular, insuficiência renal aguda e podem ser fatais. Crianças são particularmente vulneráveis à forma sistêmica do envenenamento.",
        },
        {
          emoji: "⚠️",
          title: "Picada da armadeira (Phoneutria)",
          desc: "Dor intensa e imediata no local da picada. O veneno neurotóxico causa sudorese, taquicardia, hipertensão, priapismo em homens e, em casos graves, edema pulmonar e choque. A armadeira assume postura agressiva quando se sente ameaçada, saltando até 40 cm.",
        },
        {
          emoji: "🧒",
          title: "Crianças e idosos são os mais vulneráveis",
          desc: "Assim como com escorpiões, o peso corporal reduzido torna o envenenamento mais grave em crianças e idosos. O veneno atinge concentração proporcionalmente maior no organismo, acelerando os efeitos sistêmicos. Todo acidente com aranha deve ser avaliado em pronto-socorro.",
        },
        {
          emoji: "🐕",
          title: "Animais domésticos também correm risco",
          desc: "Cães e gatos curiosos frequentemente tentam caçar aranhas e são picados. Filhotes e animais de pequeno porte correm maior risco. A picada da aranha-marrom em pets também causa necrose tecidual e pode ser fatal sem tratamento veterinário rápido.",
        },
      ],
    },
    treatment: {
      headline: "Como é feita a dedetização de aranhas?",
      steps: [
        {
          numero: "01",
          title: "Vistoria de Abrigos",
          desc: "O técnico inspeciona sistematicamente todos os potenciais abrigos: cantos superiores, atrás de móveis, quadros e cortinas, sótãos, porões, áreas externas, jardins, depósitos e caixas de ferramentas. Identifica espécies presentes e nível de infestação.",
          icone: "🔍",
        },
        {
          numero: "02",
          title: "Remoção Mecânica de Teias e Ootecas",
          desc: "Remoção de todas as teias visíveis com aspirador ou vassoura de cerdas duras — isso também remove ootecas (sacos de ovos) que podem conter centenas de aranhas jovens. Limpeza completa dos cantos com remoção de poeira acumulada.",
          icone: "🧹",
        },
        {
          numero: "03",
          title: "Aplicação de Inseticida Residual",
          desc: "Pulverização de inseticida microencapsulado de longa duração em todos os cantos, frestas, batentes, beirais, jardins e perímetro externo. O produto forma barreira protetora que elimina aranhas e insetos (suas presas) por contato e residualmente.",
          icone: "🧪",
        },
        {
          numero: "04",
          title: "Controle da Cadeia Alimentar",
          desc: "Eliminação da fonte de alimento das aranhas: aplicação complementar contra moscas, mosquitos, formigas e outros insetos que atraem aranhas. Sem presas, o ambiente fica hostil e aranhas buscam outros locais.",
          icone: "🔗",
        },
      ],
    },
    dryingTime: "2 a 4 horas para secagem completa do produto aplicado. Aguardar orientação do técnico para retorno seguro ao ambiente.",
    revisitTime: "Reforço a cada 3 meses para manutenção da barreira protetora. Em áreas externas extensas (chácaras, sítios), recomendamos visita a cada 60 dias no verão.",
    preventionTips: [
      "Remova teias regularmente — isso elimina ootecas e desencoraja novas aranhas",
      "Vede frestas em paredes, batentes e telhados por onde aranhas podem entrar",
      "Instale telas de malha fina em janelas e portas",
      "Mantenha jardins aparados e elimine vegetação densa próxima às paredes",
      "Sacuda roupas, calçados e roupas de cama antes de usar (aranhas se escondem em tecidos)",
      "Elimine insetos voadores e rasteiros (fonte de alimento das aranhas)",
      "Mantenha sótãos, porões e depósitos organizados e livres de entulho",
    ],
    faq: [
      {
        q: "Como diferenciar uma aranha-marrom de outras aranhas?",
        a: "A aranha-marrom (Loxosceles) mede de 2 a 4 cm com as pernas estendidas, tem cor marrom uniforme e uma mancha em formato de violino no cefalotórax (parte da frente do corpo). Possui 6 olhos em 3 pares (maioria das aranhas tem 8) e não constrói teias geométricas — faz fios irregulares em cantos. Se encontrar uma, não toque e chame um profissional.",
      },
      {
        q: "Fui picado por aranha, o que fazer?",
        a: "Lave o local com água e sabão, aplique compressa fria e procure imediatamente um pronto-socorro. Se possível, capture a aranha (mesmo morta) em um pote para identificação da espécie — isso orienta o tratamento. Não faça torniquete, não corte o local, não chupe o veneno e não aplique substâncias caseiras.",
      },
      {
        q: "A dedetização elimina todos os tipos de aranha?",
        a: "Sim, o inseticida residual de amplo espectro elimina aranhas peçonhentas e não-peçonhentas. A combinação de remoção mecânica de teias + aplicação química + controle de presas (insetos) é a abordagem mais eficaz para eliminação completa e prevenção de reinfestação.",
      },
      {
        q: "Aranhas são mais ativas em alguma época do ano?",
        a: "Sim, aranhas são mais ativas na primavera e verão (outubro a março), que coincide com o período de reprodução e maior disponibilidade de presas (insetos). Chuvas fortes também levam aranhas a buscar abrigo dentro de residências. Reforços preventivos no verão são recomendados.",
      },
    ],
    seoKeywords: [
      "dedetização de aranhas Franca",
      "aranhas Franca SP",
      "controle de aranhas",
      "aranha marrom Franca",
      "armadeira Franca",
      "picada de aranha o que fazer",
      "Sentinela Saúde Ambiental aranhas",
    ],
  },
  {
    slug: "formigas",
    name: "Formigas",
    icon: "🐜",
    description:
      "Formigas são a praga número 1 em reclamações de residências e estabelecimentos comerciais no Brasil. Embora não sejam vetores primários de doenças graves como ratos e baratas, algumas espécies têm importância médica por transitarem em esgotos e lixeiras antes de caminhar sobre alimentos e utensílios. As principais espécies urbanas incluem a formiga-doceira (Monomorium pharaonis), a formiga-fantasma (Tapinoma melanocephalum), a formiga-louca (Paratrechina longicornis), a formiga-carpinteira (Camponotus spp.) e a formiga-de-fogo (Solenopsis invicta), cuja picada causa reações alérgicas severas.",
    whyAppears:
      "Formigas são atraídas por resíduos de alimentos, especialmente açúcares, gorduras e proteínas. Migalhas no chão, louça suja, lixeiras abertas e ração de pets são os principais atrativos. As formigas seguem trilhas de feromônio deixadas por batedoras — uma vez estabelecida a rota, milhares de operárias a percorrem diariamente. Pequenas frestas em azulejos, batentes, janelas e rodapés são portas de entrada para as colônias.",
    risks: {
      headline: "Riscos das formigas para a saúde",
      items: [
        {
          emoji: "🏥",
          title: "Contaminação hospitalar",
          desc: "A formiga-fantasma (Tapinoma melanocephalum) é vetor mecânico de patógenos em ambientes hospitalares. Estudos documentam formigas carregando bactérias multirresistentes como Staphylococcus aureus (MRSA), Pseudomonas aeruginosa e Klebsiella pneumoniae entre leitos e UTIs.",
        },
        {
          emoji: "🍽️",
          title: "Contaminação de alimentos",
          desc: "Formigas transitam por esgotos, lixeiras e fezes de animais antes de caminhar sobre alimentos em cozinhas residenciais e comerciais. Podem carregar Salmonella, E. coli, Streptococcus e ovos de parasitas. A ANVISA exige controle de formigas em estabelecimentos alimentícios.",
        },
        {
          emoji: "🐜",
          title: "Formiga-de-fogo: picadas dolorosas",
          desc: "A formiga-de-fogo (Solenopsis invicta) possui ferrão e veneno. Sua picada causa dor intensa, bolha com pus e, em pessoas alérgicas, pode desencadear anafilaxia (reação alérgica generalizada com risco de morte). Crianças brincando no quintal são as vítimas mais frequentes.",
        },
        {
          emoji: "⚡",
          title: "Danos a equipamentos elétricos",
          desc: "Formigas são atraídas por campos eletromagnéticos e se infiltram em tomadas, disjuntores e equipamentos eletrônicos, causando curtos-circuitos. A formiga-louca é particularmente associada a danos em equipamentos de ar-condicionado e painéis elétricos.",
        },
      ],
    },
    treatment: {
      headline: "Como é feita a dedetização de formigas?",
      steps: [
        {
          numero: "01",
          title: "Identificação da Espécie e Rastreamento",
          desc: "Cada espécie de formiga exige estratégia diferente. O técnico identifica a espécie, segue as trilhas para localizar o(s) ninho(s) e determina a fonte de atração (alimento, umidade, abrigo). Formigas carpinteiras, por exemplo, requerem abordagem específica em madeira.",
          icone: "🔍",
        },
        {
          numero: "02",
          title: "Aplicação de Gel Inseticida",
          desc: "Gel com atrativo específico (açúcar ou proteína, conforme a espécie) aplicado em pontos estratégicos ao longo das trilhas. As operárias levam o gel ao ninho, alimentam a rainha e as larvas, eliminando toda a colônia em 7 a 14 dias por efeito cascata.",
          icone: "💉",
        },
        {
          numero: "03",
          title: "Barreira Perimetral (Pulverização)",
          desc: "Aplicação de inseticida residual de longa duração em rodapés, frestas, batentes e perímetro externo. Cria barreira química que impede a entrada de novas formigas e elimina as que transitam pela área tratada.",
          icone: "🧪",
        },
        {
          numero: "04",
          title: "Vedação e Recomendações",
          desc: "Orientação sobre vedação de frestas, armazenamento correto de alimentos e eliminação de fontes de atração. A combinação de tratamento químico + medidas preventivas é a chave para controle duradouro.",
          icone: "📋",
        },
      ],
    },
    dryingTime: "Gel inseticida: sem necessidade de afastamento. Pulverização: 1 a 2 horas para secagem completa.",
    revisitTime: "Reforço a cada 3 a 4 meses para manutenção da barreira. Em estabelecimentos comerciais (restaurantes, padarias): manutenção mensal obrigatória para licença sanitária.",
    preventionTips: [
      "Mantenha a cozinha rigorosamente limpa — migalhas e resíduos açucarados são o principal atrativo",
      "Armazene alimentos em potes herméticos — especialmente açúcar, mel, doces e cereais",
      "Sele rachaduras em azulejos, batentes e rodapés com silicone",
      "Retire o lixo orgânico diariamente e mantenha lixeiras tampadas",
      "Limpe imediatamente qualquer derramamento de líquidos açucarados (refrigerante, suco)",
      "Não deixe ração de animais de estimação exposta durante todo o dia",
      "Apare galhos de árvores que tocam a edificação (pontes naturais para formigas)",
    ],
    faq: [
      {
        q: "Por que as formigas voltam mesmo depois da dedetização?",
        a: "As formigas podem voltar quando há reinfestação por colônias externas ou quando o ninho principal (com a rainha) não foi atingido. Por isso usamos gel com efeito cascata — as operárias levam o produto ao ninho para eliminar a rainha. Além disso, orientamos a vedação de acessos e eliminação de fontes de alimento para prevenir novas infestações.",
      },
      {
        q: "O gel inseticida é seguro para crianças e pets?",
        a: "Sim. O gel é aplicado em pontos estratégicos fora do alcance: frestas, atrás de eletrodomésticos, dentro de caixas de tomada e em trilhas elevadas. As formulações contêm amargante (Bitrex) que repele ingestão acidental. Após o serviço, informamos todos os pontos de aplicação para sua segurança.",
      },
      {
        q: "Quanto tempo leva para eliminar todas as formigas?",
        a: "Com gel inseticida, a redução visível começa em 24 a 48 horas. A eliminação da colônia (incluindo rainha) ocorre em 7 a 14 dias, pois depende do tempo para o veneno ser distribuído a todos os membros da colônia via trofalaxia (alimentação boca-a-boca entre formigas).",
      },
      {
        q: "Formiga carpinteira pode danificar a estrutura da casa?",
        a: "Sim. Diferente dos cupins, as formigas carpinteiras (Camponotus spp.) não comem madeira — elas a escavam para construir ninhos. Com o tempo, madeiramento de telhado, batentes e estruturas podem ficar comprometidos. O sinal típico é um pó fino (serragem) sob peças de madeira atacadas e ruídos noturnos (as formigas fazem barulho ao escavar).",
      },
    ],
    seoKeywords: [
      "dedetização de formigas Franca",
      "formigas Franca SP",
      "controle de formigas",
      "formiga doceira dedetização",
      "formiga carpinteira Franca",
      "gel inseticida formigas",
      "Sentinela Saúde Ambiental formigas",
    ],
  },
  {
    slug: "mosquitos",
    name: "Mosquitos",
    icon: "🦟",
    description:
      "Mosquitos são os animais mais letais do planeta, responsáveis por mais de 1 milhão de mortes humanas por ano segundo a OMS. O Aedes aegypti transmite dengue, zika, chikungunya e febre amarela urbana. O Culex quinquefasciatus (pernilongo comum) causa desconforto e reações alérgicas. No Brasil, os casos de dengue explodiram nos últimos anos — em 2024 foram mais de 6 milhões de casos prováveis com milhares de óbitos. Franca/SP está em área endêmica e o controle do mosquito é prioridade de saúde pública, especialmente em residências, condomínios e empresas com áreas externas.",
    whyAppears:
      "Mosquitos precisam de água parada para se reproduzir. Qualquer recipiente com água limpa acumulada é um criadouro potencial: pratos de vasos, calhas entupidas, pneus, garrafas, lajes com poças, piscinas sem tratamento, caixas d'água destampadas e até tampinhas de garrafa. O ciclo do ovo ao mosquito adulto leva apenas 7 a 10 dias em temperaturas acima de 25°C. Uma única fêmea deposita até 400 ovos em sua vida.",
    risks: {
      headline: "Riscos dos mosquitos para a saúde",
      items: [
        {
          emoji: "🦟",
          title: "Dengue, Zika e Chikungunya",
          desc: "O Aedes aegypti transmite 4 sorotipos de dengue — a segunda infecção por sorotipo diferente tem maior risco de dengue hemorrágica, que pode ser fatal. A zika causa microcefalia em fetos durante a gestação. A chikungunya causa dores articulares crônicas que podem durar anos.",
        },
        {
          emoji: "🌙",
          title: "Pernilongo comum: desconforto e alergia",
          desc: "O Culex quinquefasciatus é o mosquito mais comum em áreas urbanas. Suas picadas causam coceira intensa, reações alérgicas locais e, em pessoas sensíveis, podem evoluir para infecções secundárias por coçadura. O zumbido noturno causa privação de sono.",
        },
        {
          emoji: "👶",
          title: "Crianças, gestantes e idosos são grupos de risco",
          desc: "Crianças pequenas e idosos têm maior risco de complicações por dengue. Gestantes infectadas por zika correm risco de transmissão ao feto com consequências neurológicas graves. A proteção desses grupos é prioridade no controle de mosquitos.",
        },
        {
          emoji: "🏢",
          title: "Impacto em negócios e condomínios",
          desc: "Áreas externas de restaurantes, hotéis, clubes e condomínios com mosquitos geram reclamações de clientes/moradores e risco de notificação pela Vigilância Sanitária. Ambientes comerciais com criadouros podem ser multados e interditados.",
        },
      ],
    },
    treatment: {
      headline: "Como é feito o controle de mosquitos?",
      steps: [
        {
          numero: "01",
          title: "Inspeção de Criadouros",
          desc: "Vistoria completa do imóvel para identificar e eliminar todo e qualquer recipiente com água parada. Calhas, ralos externos, lajes, vasos de plantas, pneus, piscinas, caixas d'água, bandejas de ar-condicionado e bromélias são inspecionados sistematicamente.",
          icone: "🔍",
        },
        {
          numero: "02",
          title: "Aplicação de Larvicida Biológico",
          desc: "Em criadouros que não podem ser eliminados (ralos, caixas de passagem, lagos ornamentais), aplicamos larvicida biológico à base de Bacillus thuringiensis israelensis (BTI), que elimina larvas sem toxicidade para humanos, pets e outros animais.",
          icone: "🦠",
        },
        {
          numero: "03",
          title: "Nebulização / Termonebulização (Fumacê)",
          desc: "Aplicação de inseticida em névoa fina (nebulização) ou fumaça (termonebulização) para eliminar mosquitos adultos em áreas externas e internas. O tratamento atinge os insetos em voo e em repouso na vegetação. Utilizado em casos de infestação ativa ou prevenção de eventos.",
          icone: "💨",
        },
        {
          numero: "04",
          title: "Barreira Residual Perimetral",
          desc: "Aplicação de inseticida residual de longa duração em paredes externas, muros, jardins e vegetação perimetral. O produto elimina mosquitos que pousam nas superfícies tratadas por até 30 dias, criando zona de proteção ao redor do imóvel.",
          icone: "🛡️",
        },
      ],
    },
    dryingTime: "Nebulização: 30 minutos a 1 hora para dispersão da névoa e sedimentação das partículas. Termonebulização: 1 a 2 horas para dissipação completa da fumaça.",
    revisitTime: "Barreira residual: reforço a cada 30 dias durante o verão (novembro a abril). Controle de criadouros: inspeção mensal. Eventos e festas: aplicação preventiva 24 a 48 horas antes.",
    preventionTips: [
      "Elimine água parada de pratos de vasos, calhas, pneus, garrafas e qualquer recipiente externo",
      "Tampe caixas d'água, cisternas e reservatórios com vedação adequada",
      "Trate piscinas com cloro semanalmente e mantenha a filtração funcionando",
      "Instale telas de malha fina em janelas e portas em áreas de repouso",
      "Use repelentes corporais aprovados pela ANVISA, especialmente ao amanhecer e entardecer",
      "Mantenha terrenos e jardins limpos, com grama aparada e sem acúmulo de entulho",
      "Substitua água de vasos de plantas por areia grossa ou utilize pratos com furos para drenagem",
    ],
    faq: [
      {
        q: "A nebulização (fumacê) é segura para crianças e pets?",
        a: "Sim, quando realizada conforme protocolo técnico. Utilizamos inseticidas de baixa toxicidade aprovados pela ANVISA para aplicação ambiental. Orientamos o afastamento de pessoas e animais durante a aplicação e por 1 a 2 horas após, até a dissipação completa. Após esse período, não há risco para ocupação normal do ambiente.",
      },
      {
        q: "Quanto tempo dura o efeito do controle de mosquitos?",
        a: "A nebulização elimina os mosquitos adultos presentes no momento — o efeito é imediato. A barreira residual protege por 20 a 30 dias. No entanto, novos mosquitos nascem continuamente de criadouros não eliminados. Por isso, o controle de criadouros (eliminação de água parada) é o pilar mais importante do programa.",
      },
      {
        q: "O controle de mosquitos elimina o Aedes aegypti?",
        a: "Sim. A nebulização e a barreira residual eliminam mosquitos adultos de todas as espécies, incluindo Aedes aegypti. O larvicida biológico (BTI) é específico para larvas de mosquitos e não afeta outros organismos. A combinação das três frentes (criadouros + larvicida + adulticida) é a estratégia recomendada pelo Ministério da Saúde.",
      },
      {
        q: "Posso fazer controle de mosquitos só no verão?",
        a: "O verão é o período crítico, mas mosquitos se reproduzem o ano todo em regiões tropicais como Franca/SP. O ideal é manter controle contínuo, com intensificação no verão (novembro a abril). Para residências e condomínios, recomendamos inspeção mensal de criadouros e barreira residual bimestral.",
      },
    ],
    seoKeywords: [
      "controle de mosquitos Franca",
      "dedetização de mosquitos",
      "fumacê Franca SP",
      "Aedes aegypti Franca",
      "nebulização mosquito Franca",
      "dengue Franca prevenção",
      "Sentinela Saúde Ambiental mosquitos",
    ],
  },
];

export function getPestBySlug(slug: string): PestData | undefined {
  return pests.find((p) => p.slug === slug);
}

export function getAllPestSlugs(): string[] {
  return pests.map((p) => p.slug);
}
