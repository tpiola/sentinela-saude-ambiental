export interface PestData {
  slug: string;
  name: string;
  icon: string;
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
      "Escorpiões podem se abrigar em frestas, ralos, entulhos e áreas pouco movimentadas. A ocorrência exige cuidado, especialmente quando há crianças, idosos ou animais no imóvel.",
    whyAppears:
      "Abrigos disponíveis, acesso por tubulações e frestas, acúmulo de materiais e presença de insetos que servem de alimento favorecem a permanência de escorpiões no ambiente.",
    risks: {
      headline: "Por que a ocorrência exige atenção?",
      items: [
        {
          emoji: "⚠️",
          title: "Risco de acidente",
          desc: "Não toque nem tente capturar com as mãos. Em caso de picada, procure atendimento de saúde imediatamente e siga a orientação do serviço médico.",
        },
        {
          emoji: "🏠",
          title: "Abrigos discretos",
          desc: "Ralos, caixas de gordura, frestas, materiais armazenados e áreas externas podem oferecer esconderijos difíceis de perceber sem inspeção.",
        },
        {
          emoji: "🪳",
          title: "Presença de alimento",
          desc: "A atividade de baratas e outros insetos pode favorecer a permanência de escorpiões e precisa ser considerada no plano de controle.",
        },
        {
          emoji: "🔎",
          title: "Origem nem sempre evidente",
          desc: "Apenas aplicar produto sem investigar acessos e abrigos pode não resolver a causa da ocorrência.",
        },
      ],
    },
    treatment: {
      headline: "Como funciona o controle profissional?",
      steps: [
        {
          numero: "01",
          title: "Inspeção do ambiente",
          desc: "Verificação de ralos, frestas, caixas de gordura, áreas externas, materiais acumulados e sinais de atividade de outras pragas.",
          icone: "🔍",
        },
        {
          numero: "02",
          title: "Correção de condições favoráveis",
          desc: "Orientação sobre limpeza, organização, vedação de acessos e redução de abrigos no imóvel.",
          icone: "🧹",
        },
        {
          numero: "03",
          title: "Controle das pragas associadas",
          desc: "Quando necessário, o plano inclui medidas contra baratas e outros insetos que podem servir de alimento.",
          icone: "🪳",
        },
        {
          numero: "04",
          title: "Tratamento tecnicamente indicado",
          desc: "A estratégia é definida após a inspeção, considerando o local, os riscos, as orientações do produto e as medidas ambientais necessárias.",
          icone: "📋",
        },
      ],
    },
    dryingTime:
      "O período de afastamento depende do método e do produto eventualmente utilizado. A equipe informa as orientações específicas antes da aplicação.",
    revisitTime:
      "A necessidade de retorno ou monitoramento é definida conforme os sinais encontrados, as condições do imóvel e a evolução após as medidas iniciais.",
    preventionTips: [
      "Mantenha ralos protegidos e verifique possíveis pontos de acesso",
      "Vede frestas em paredes, portas, rodapés e tubulações",
      "Evite entulho, madeira, telhas e materiais acumulados no quintal",
      "Mantenha jardins e áreas externas organizados",
      "Controle baratas e outros insetos no imóvel",
      "Sacuda calçados, roupas e toalhas guardadas antes do uso",
    ],
    faq: [
      {
        q: "O que fazer ao encontrar um escorpião?",
        a: "Mantenha distância, afaste pessoas e animais e não tente capturá-lo com as mãos. Em caso de picada, procure atendimento de saúde imediatamente. Depois, solicite uma inspeção do ambiente.",
      },
      {
        q: "Somente aplicar inseticida resolve?",
        a: "O controle precisa considerar abrigos, acessos, organização do ambiente e presença de outras pragas. A medida adequada é definida depois da inspeção.",
      },
      {
        q: "É preciso sair do imóvel?",
        a: "Isso depende do método escolhido. Quando houver aplicação química, a equipe informa antecipadamente o período de afastamento e os cuidados necessários.",
      },
      {
        q: "Como reduzir o risco de nova ocorrência?",
        a: "Vedação de acessos, redução de entulho, proteção de ralos e controle de baratas são medidas importantes, acompanhadas de monitoramento quando indicado.",
      },
    ],
    seoKeywords: [
      "escorpião Franca",
      "controle de escorpiões Franca",
      "dedetizadora escorpião Franca SP",
      "escorpião em casa Franca",
      "prevenção de escorpiões",
    ],
  },
  {
    slug: "baratas",
    name: "Baratas",
    icon: "🪳",
    description:
      "Baratas encontram alimento, água e abrigo em cozinhas, áreas de serviço, depósitos, redes de esgoto e frestas. O controle adequado depende da espécie e do nível de atividade.",
    whyAppears:
      "Resíduos de alimentos, gordura, umidade, lixo mal acondicionado e acessos por tubulações ou frestas favorecem a instalação e a circulação das baratas.",
    risks: {
      headline: "Impactos da infestação",
      items: [
        {
          emoji: "🍽️",
          title: "Contaminação de superfícies",
          desc: "A circulação por lixo, ralos e áreas de preparo torna necessária atenção especial em cozinhas e estabelecimentos de alimentos.",
        },
        {
          emoji: "🤧",
          title: "Resíduos no ambiente",
          desc: "Fezes, secreções e fragmentos podem agravar desconfortos respiratórios em pessoas sensíveis.",
        },
        {
          emoji: "🏢",
          title: "Impacto operacional",
          desc: "Em empresas, a infestação pode afetar estoque, imagem, rotina de limpeza e requisitos internos de controle de pragas.",
        },
        {
          emoji: "🔁",
          title: "Reinfestação",
          desc: "Sem corrigir alimento, umidade e acessos, a atividade pode retornar mesmo após uma aplicação.",
        },
      ],
    },
    treatment: {
      headline: "Como funciona o tratamento?",
      steps: [
        {
          numero: "01",
          title: "Identificação e inspeção",
          desc: "Localização de focos, rotas de circulação, fontes de alimento, umidade e possíveis acessos.",
          icone: "🔍",
        },
        {
          numero: "02",
          title: "Aplicação direcionada",
          desc: "Gel, pulverização ou combinação de métodos podem ser indicados conforme a espécie e o ambiente.",
          icone: "🧪",
        },
        {
          numero: "03",
          title: "Orientação preventiva",
          desc: "A equipe indica ajustes de limpeza, armazenamento, descarte de lixo e vedação de frestas.",
          icone: "📋",
        },
        {
          numero: "04",
          title: "Acompanhamento",
          desc: "Quando necessário, o retorno verifica a redução da atividade e define reforços pontuais.",
          icone: "📊",
        },
      ],
    },
    dryingTime:
      "O gel costuma permitir continuidade da rotina em áreas não acessíveis. Em pulverizações, o retorno ao ambiente ocorre somente após o período informado pela equipe.",
    revisitTime:
      "O prazo de acompanhamento varia conforme a espécie, a intensidade da infestação, o tipo de imóvel e as condições encontradas.",
    preventionTips: [
      "Não deixe louça suja ou resíduos de alimentos durante a noite",
      "Armazene alimentos em recipientes bem fechados",
      "Retire o lixo regularmente e mantenha lixeiras tampadas",
      "Corrija vazamentos e fontes de umidade",
      "Vede frestas e proteja ralos quando possível",
      "Mantenha depósitos e áreas técnicas organizados",
    ],
    faq: [
      {
        q: "Qual método é usado contra baratas?",
        a: "Depende da espécie, do foco e do ambiente. O técnico pode indicar gel, pulverização ou uma estratégia combinada.",
      },
      {
        q: "Preciso esvaziar a cozinha?",
        a: "A preparação varia conforme o método. Antes do serviço, a equipe informa quais alimentos, utensílios e áreas precisam ser protegidos ou liberados.",
      },
      {
        q: "Quando a atividade começa a diminuir?",
        a: "O prazo varia com a espécie, o produto, o tamanho da infestação e as condições do ambiente. A avaliação deve considerar a evolução ao longo dos dias seguintes.",
      },
      {
        q: "O que evita o retorno?",
        a: "Limpeza, armazenamento correto, controle de umidade, vedação de acessos e acompanhamento quando indicado ajudam a reduzir reinfestações.",
      },
    ],
    seoKeywords: [
      "dedetização de baratas Franca",
      "controle de baratas Franca SP",
      "baratas em casa Franca",
      "desinsetização Franca",
      "gel para baratas aplicação profissional",
    ],
  },
  {
    slug: "ratos",
    name: "Ratos",
    icon: "🐀",
    description:
      "Roedores procuram alimento, água e abrigo e podem circular por forros, depósitos, quintais, redes de esgoto e áreas de armazenamento. O controle deve combinar monitoramento e bloqueio de acessos.",
    whyAppears:
      "Lixo, ração exposta, alimentos mal armazenados, vegetação, entulho e aberturas em telhados ou tubulações criam condições favoráveis para ratos e camundongos.",
    risks: {
      headline: "Por que controlar rapidamente?",
      items: [
        {
          emoji: "🦠",
          title: "Risco sanitário",
          desc: "Urina, fezes e contato com alimentos ou superfícies exigem limpeza cuidadosa e controle profissional da atividade.",
        },
        {
          emoji: "⚡",
          title: "Danos materiais",
          desc: "Roeduras podem atingir embalagens, madeira, cabos e outros materiais do imóvel.",
        },
        {
          emoji: "📦",
          title: "Perda de estoque",
          desc: "Empresas podem sofrer descarte de produtos, retrabalho de higienização e interrupções na operação.",
        },
        {
          emoji: "🔁",
          title: "Acesso recorrente",
          desc: "Sem vedação e correção das fontes de alimento, novos animais podem voltar a ocupar o local.",
        },
      ],
    },
    treatment: {
      headline: "Como funciona a desratização?",
      steps: [
        {
          numero: "01",
          title: "Mapeamento de sinais",
          desc: "Identificação de fezes, trilhas, roeduras, possíveis ninhos, fontes de alimento e pontos de entrada.",
          icone: "🔍",
        },
        {
          numero: "02",
          title: "Instalação controlada",
          desc: "Iscas ou armadilhas são posicionadas em dispositivos e locais definidos conforme o risco do ambiente.",
          icone: "📦",
        },
        {
          numero: "03",
          title: "Exclusão de acessos",
          desc: "A equipe orienta a vedação de frestas, tubulações, ralos, vãos de portas e acessos pelo telhado.",
          icone: "🔧",
        },
        {
          numero: "04",
          title: "Monitoramento",
          desc: "As visitas de acompanhamento verificam sinais, consumo, funcionamento dos dispositivos e necessidade de ajustes.",
          icone: "📋",
        },
      ],
    },
    dryingTime:
      "Normalmente não há secagem quando são utilizados dispositivos com iscas ou armadilhas. Pessoas e animais não devem manipular os pontos instalados.",
    revisitTime:
      "O plano de retorno é definido pela atividade observada e pelo consumo nos pontos de controle. Contratos preventivos podem exigir verificações recorrentes.",
    preventionTips: [
      "Mantenha alimentos e ração em recipientes resistentes e fechados",
      "Use lixeiras tampadas e retire resíduos regularmente",
      "Vede aberturas em telhados, paredes, portas e tubulações",
      "Proteja ralos e redes de esgoto quando tecnicamente possível",
      "Evite entulho e vegetação alta próximos à edificação",
      "Não mova nem abra dispositivos instalados pela equipe",
    ],
    faq: [
      {
        q: "As iscas oferecem risco a crianças e animais?",
        a: "Todo raticida exige cuidado. Os dispositivos são posicionados para reduzir acesso indevido, mas não devem ser tocados, abertos ou deslocados. Siga todas as orientações da equipe.",
      },
      {
        q: "Quanto tempo leva para controlar a atividade?",
        a: "O prazo varia conforme a espécie, o tamanho da infestação, os acessos e a disponibilidade de alimento. O monitoramento indica a evolução real.",
      },
      {
        q: "O controle inclui vedação?",
        a: "A inspeção identifica os acessos e informa as correções necessárias. A execução da vedação depende do escopo contratado e das condições estruturais do imóvel.",
      },
      {
        q: "Como limpar fezes de rato?",
        a: "Evite varrer a seco ou levantar poeira. Isole a área e siga orientação sanitária adequada; em caso de grande contaminação, procure serviço especializado.",
      },
    ],
    seoKeywords: [
      "desratização Franca",
      "controle de ratos Franca SP",
      "rato em casa Franca",
      "controle de roedores",
      "desratização empresarial Franca",
    ],
  },
  {
    slug: "cupins",
    name: "Cupins",
    icon: "🪵",
    description:
      "Cupins podem atacar móveis, batentes, forros e outros materiais com celulose. Como diferentes espécies exigem métodos distintos, o diagnóstico vem antes da indicação do tratamento.",
    whyAppears:
      "Madeira, papel, umidade, contato com o solo e pontos de entrada durante revoadas podem favorecer a instalação de colônias no imóvel.",
    risks: {
      headline: "Impactos sobre o patrimônio",
      items: [
        {
          emoji: "🪑",
          title: "Danos em madeira",
          desc: "Móveis, portas, batentes, forros e estruturas podem ser atingidos sem sinais externos evidentes no início.",
        },
        {
          emoji: "🏚️",
          title: "Comprometimento progressivo",
          desc: "A extensão do dano deve ser avaliada antes de definir se a peça pode ser tratada ou precisa de reparo ou substituição.",
        },
        {
          emoji: "🔎",
          title: "Espécies diferentes",
          desc: "Cupins de madeira seca e subterrâneos apresentam comportamentos e estratégias de controle distintos.",
        },
        {
          emoji: "💰",
          title: "Custo de reparação",
          desc: "Adiar a inspeção pode aumentar a área afetada e o custo de recuperação do patrimônio.",
        },
      ],
    },
    treatment: {
      headline: "Como funciona a descupinização?",
      steps: [
        {
          numero: "01",
          title: "Diagnóstico da ocorrência",
          desc: "Inspeção de sinais, materiais atingidos, umidade e possíveis conexões com solo ou outras áreas do imóvel.",
          icone: "🔍",
        },
        {
          numero: "02",
          title: "Definição do método",
          desc: "O tratamento pode envolver aplicação localizada, injeção, barreira ou outra técnica adequada à espécie identificada.",
          icone: "🧪",
        },
        {
          numero: "03",
          title: "Proteção da área",
          desc: "A equipe orienta sobre isolamento, preparo, peças que precisam ser removidas e cuidados durante a execução.",
          icone: "🛡️",
        },
        {
          numero: "04",
          title: "Documentação e acompanhamento",
          desc: "O escopo, as condições de garantia quando aplicáveis e as inspeções de retorno são definidos na proposta do serviço.",
          icone: "📋",
        },
      ],
    },
    dryingTime:
      "O período de afastamento varia conforme o método, o produto e o local tratado. A orientação é informada antes do início do serviço.",
    revisitTime:
      "Inspeções posteriores e eventuais garantias dependem do tratamento contratado, da espécie e das condições descritas na proposta.",
    preventionTips: [
      "Evite contato direto de madeira com solo e umidade",
      "Corrija infiltrações e vazamentos",
      "Inspecione periodicamente forros, batentes e móveis",
      "Evite guardar papelão e madeira em áreas úmidas",
      "Observe asas, grânulos ou pó próximos a peças de madeira",
      "Solicite inspeção antes de reformas quando houver sinais de atividade",
    ],
    faq: [
      {
        q: "Todo pó perto da madeira é cupim?",
        a: "Não. O material pode ter outras origens. A inspeção considera o formato dos resíduos, os orifícios, a estrutura da peça e outros sinais.",
      },
      {
        q: "Qual tratamento é usado?",
        a: "O método depende da espécie, do local e da extensão da atividade. Não é responsável indicar uma técnica única antes do diagnóstico.",
      },
      {
        q: "Existe garantia?",
        a: "Quando aplicável, prazo, cobertura e condições são descritos na proposta e no comprovante do serviço. Não há um prazo único para todos os casos.",
      },
      {
        q: "O móvel precisa ser descartado?",
        a: "Nem sempre. A decisão depende do dano e da função da peça. Elementos estruturais comprometidos devem ser avaliados também por profissional habilitado para reparo.",
      },
    ],
    seoKeywords: [
      "descupinização Franca",
      "controle de cupins Franca SP",
      "cupim em móveis Franca",
      "cupim subterrâneo Franca",
      "tratamento de cupins",
    ],
  },
  {
    slug: "aranhas",
    name: "Aranhas",
    icon: "🕷️",
    description:
      "Aranhas podem entrar por frestas ou se instalar onde há abrigo e disponibilidade de insetos. A identificação visual à distância nem sempre é segura, por isso não devem ser manipuladas.",
    whyAppears:
      "Cantos pouco movimentados, caixas, materiais guardados, jardins densos e presença de insetos favorecem abrigo e alimento para aranhas.",
    risks: {
      headline: "Cuidados diante da ocorrência",
      items: [
        {
          emoji: "⚠️",
          title: "Não manipule",
          desc: "Evite tocar ou tentar capturar com as mãos, principalmente quando a espécie não foi identificada.",
        },
        {
          emoji: "👟",
          title: "Abrigos em objetos",
          desc: "Calçados, roupas guardadas, caixas, móveis e materiais pouco movimentados podem servir de esconderijo.",
        },
        {
          emoji: "🦟",
          title: "Presença de insetos",
          desc: "A oferta de presas no ambiente influencia a permanência de aranhas e precisa ser considerada no controle.",
        },
        {
          emoji: "🏥",
          title: "Acidentes exigem avaliação",
          desc: "Em caso de picada ou sintomas, procure atendimento de saúde e não aplique soluções caseiras no local.",
        },
      ],
    },
    treatment: {
      headline: "Como funciona o controle?",
      steps: [
        {
          numero: "01",
          title: "Inspeção de abrigos",
          desc: "Verificação de cantos, depósitos, móveis, forros, jardins, caixas e outros locais com pouca movimentação.",
          icone: "🔍",
        },
        {
          numero: "02",
          title: "Remoção segura",
          desc: "Teias, ootecas e materiais acumulados são removidos com técnica e proteção adequadas ao ambiente.",
          icone: "🧹",
        },
        {
          numero: "03",
          title: "Controle de insetos associados",
          desc: "Quando necessário, o plano inclui medidas contra os insetos que servem de alimento às aranhas.",
          icone: "🔗",
        },
        {
          numero: "04",
          title: "Tratamento direcionado",
          desc: "A eventual aplicação é definida conforme a área, a atividade encontrada e as instruções técnicas do produto.",
          icone: "📋",
        },
      ],
    },
    dryingTime:
      "Quando houver pulverização, o retorno ao ambiente ocorre após o período indicado pela equipe e a secagem completa da área tratada.",
    revisitTime:
      "A frequência de acompanhamento depende da atividade, da área externa, da presença de insetos e das condições de abrigo.",
    preventionTips: [
      "Mantenha depósitos, caixas e materiais organizados",
      "Vede frestas e instale telas quando possível",
      "Sacuda calçados e roupas que ficaram guardados",
      "Remova teias com cuidado e usando proteção",
      "Mantenha jardins aparados e afastados das paredes",
      "Controle outros insetos presentes no ambiente",
    ],
    faq: [
      {
        q: "Como saber se uma aranha é perigosa?",
        a: "A identificação por fotos ou características isoladas pode gerar erro. Não manipule o animal e solicite orientação profissional quando houver ocorrência recorrente.",
      },
      {
        q: "O que fazer após uma picada?",
        a: "Lave o local com água e sabão e procure atendimento de saúde. Não faça torniquete, cortes ou aplicações caseiras.",
      },
      {
        q: "O tratamento elimina todas as aranhas?",
        a: "Nenhum controle responsável deve prometer eliminação absoluta. O objetivo é reduzir a atividade, remover abrigos e controlar condições que favorecem novas ocorrências.",
      },
      {
        q: "Por que elas aparecem novamente?",
        a: "Novos indivíduos podem entrar por áreas externas ou seguir a disponibilidade de insetos. Vedação, organização e acompanhamento ajudam a reduzir o retorno.",
      },
    ],
    seoKeywords: [
      "controle de aranhas Franca",
      "dedetização de aranhas Franca SP",
      "aranha em casa Franca",
      "controle de insetos e aranhas",
      "inspeção de aranhas",
    ],
  },
  {
    slug: "formigas",
    name: "Formigas",
    icon: "🐜",
    description:
      "Formigas exploram alimentos, umidade e pequenas frestas e podem formar trilhas persistentes em residências e empresas. Identificar a espécie e alcançar a colônia são pontos importantes do controle.",
    whyAppears:
      "Migalhas, açúcar, gordura, ração, lixo, vazamentos e acessos por rodapés, azulejos ou instalações favorecem a atividade.",
    risks: {
      headline: "Impactos da infestação",
      items: [
        {
          emoji: "🍽️",
          title: "Circulação em alimentos",
          desc: "Trilhas em cozinhas, despensas e áreas de preparo exigem correção das fontes de alimento e dos acessos.",
        },
        {
          emoji: "🏢",
          title: "Ambientes sensíveis",
          desc: "Clínicas, escolas e estabelecimentos de alimentos precisam de controle compatível com a rotina e os procedimentos internos.",
        },
        {
          emoji: "⚠️",
          title: "Picadas em algumas espécies",
          desc: "Algumas formigas podem causar dor ou reações em pessoas sensíveis. Em reação importante, procure atendimento de saúde.",
        },
        {
          emoji: "🔁",
          title: "Colônias ocultas",
          desc: "Tratar somente as formigas visíveis pode não atingir a colônia e favorecer o retorno da trilha.",
        },
      ],
    },
    treatment: {
      headline: "Como funciona o controle de formigas?",
      steps: [
        {
          numero: "01",
          title: "Identificação e rastreamento",
          desc: "Avaliação das trilhas, pontos de entrada, fontes de alimento e locais prováveis de abrigo.",
          icone: "🔍",
        },
        {
          numero: "02",
          title: "Aplicação adequada à espécie",
          desc: "Gel, isca ou tratamento localizado são definidos conforme o comportamento observado e o ambiente.",
          icone: "🧪",
        },
        {
          numero: "03",
          title: "Correção de atrativos",
          desc: "Limpeza, armazenamento, controle de umidade e descarte de resíduos fazem parte das recomendações.",
          icone: "🧹",
        },
        {
          numero: "04",
          title: "Vedação e acompanhamento",
          desc: "Frestas e acessos são mapeados, e a necessidade de retorno é definida pela evolução da atividade.",
          icone: "📋",
        },
      ],
    },
    dryingTime:
      "Aplicações em gel geralmente são localizadas. Quando houver pulverização, siga o período de afastamento informado pela equipe.",
    revisitTime:
      "O retorno é definido conforme a espécie, o tamanho da colônia, o ambiente e a resposta observada após o tratamento.",
    preventionTips: [
      "Limpe migalhas e resíduos açucarados rapidamente",
      "Mantenha alimentos e ração em recipientes fechados",
      "Retire o lixo e mantenha lixeiras tampadas",
      "Corrija vazamentos e pontos de umidade",
      "Vede frestas em rodapés, azulejos e batentes",
      "Evite aplicar produtos domésticos sobre as iscas instaladas",
    ],
    faq: [
      {
        q: "Por que as formigas voltam?",
        a: "A colônia pode estar fora da área visível ou haver novos acessos e fontes de alimento. O controle precisa combinar tratamento e correções no ambiente.",
      },
      {
        q: "O gel pode ficar perto de crianças e animais?",
        a: "A aplicação deve ser feita em pontos definidos e fora do alcance. Não toque, remova ou aplique outros produtos sobre o gel.",
      },
      {
        q: "Quanto tempo leva para reduzir a atividade?",
        a: "O prazo varia conforme a espécie, o tamanho da colônia e o método escolhido. A equipe orienta o que observar depois do serviço.",
      },
      {
        q: "Formigas em madeira são cupins?",
        a: "Não necessariamente. Algumas formigas utilizam cavidades em madeira, enquanto cupins apresentam outros sinais. A inspeção diferencia a ocorrência.",
      },
    ],
    seoKeywords: [
      "controle de formigas Franca",
      "dedetização de formigas Franca SP",
      "formigas em casa Franca",
      "gel para formigas aplicação profissional",
      "formigas em empresa Franca",
    ],
  },
  {
    slug: "mosquitos",
    name: "Mosquitos",
    icon: "🦟",
    description:
      "Mosquitos se reproduzem em locais com água acumulada e podem causar incômodo e riscos à saúde pública. A eliminação de criadouros é a medida central de prevenção.",
    whyAppears:
      "Pratos de vasos, calhas, recipientes, pneus, ralos, reservatórios destampados e outras fontes de água parada permitem o desenvolvimento de larvas.",
    risks: {
      headline: "Por que o controle deve ser contínuo?",
      items: [
        {
          emoji: "💧",
          title: "Criadouros pequenos",
          desc: "Pequenos volumes de água podem manter o ciclo de reprodução e precisam ser verificados regularmente.",
        },
        {
          emoji: "🦟",
          title: "Novos mosquitos",
          desc: "Tratar apenas os adultos não impede o nascimento de novos indivíduos quando os criadouros permanecem ativos.",
        },
        {
          emoji: "🏢",
          title: "Áreas coletivas",
          desc: "Condomínios e empresas exigem rotina organizada de inspeção de calhas, jardins, ralos e reservatórios.",
        },
        {
          emoji: "🏥",
          title: "Saúde pública",
          desc: "Em caso de febre ou outros sintomas, procure atendimento de saúde. O serviço de controle de pragas não realiza diagnóstico médico.",
        },
      ],
    },
    treatment: {
      headline: "Como funciona o controle de mosquitos?",
      steps: [
        {
          numero: "01",
          title: "Inspeção de água acumulada",
          desc: "Mapeamento de recipientes, calhas, ralos, lajes, piscinas, reservatórios e outros pontos que podem formar criadouros.",
          icone: "🔍",
        },
        {
          numero: "02",
          title: "Eliminação ou correção",
          desc: "A prioridade é remover a água, corrigir drenagem, tampar reservatórios e orientar a rotina de inspeção.",
          icone: "💧",
        },
        {
          numero: "03",
          title: "Tratamento quando indicado",
          desc: "Em pontos que não podem ser eliminados, a equipe avalia métodos permitidos e adequados ao local.",
          icone: "🧪",
        },
        {
          numero: "04",
          title: "Controle de adultos",
          desc: "Aplicações direcionadas podem ser consideradas conforme a infestação, a área e as regras aplicáveis, sempre acompanhadas do controle de criadouros.",
          icone: "📋",
        },
      ],
    },
    dryingTime:
      "O período de afastamento depende do método utilizado. A equipe informa a preparação, o tempo de espera e os cuidados antes da aplicação.",
    revisitTime:
      "A inspeção de criadouros deve ser recorrente. A frequência do serviço profissional depende das condições do imóvel e da atividade observada.",
    preventionTips: [
      "Elimine água parada de recipientes, pneus e pratos de vasos",
      "Limpe calhas e corrija pontos sem drenagem",
      "Mantenha caixas d'água e reservatórios bem tampados",
      "Cuide corretamente de piscinas e fontes ornamentais",
      "Instale telas em janelas e portas quando possível",
      "Inspecione áreas externas e ralos regularmente",
    ],
    faq: [
      {
        q: "O fumacê resolve sozinho?",
        a: "Não. O controle de adultos pode reduzir temporariamente a atividade, mas os criadouros precisam ser eliminados para interromper o ciclo.",
      },
      {
        q: "A aplicação é segura para pessoas e animais?",
        a: "A segurança depende do produto, da dose, do método e do cumprimento das orientações. Pessoas e animais devem permanecer afastados pelo período informado.",
      },
      {
        q: "O serviço elimina o Aedes aegypti?",
        a: "O plano busca reduzir mosquitos e criadouros, mas não deve prometer eliminação absoluta. A prevenção contínua depende também da manutenção do imóvel e do entorno.",
      },
      {
        q: "Com que frequência devo verificar água parada?",
        a: "A inspeção deve fazer parte da rotina do imóvel, especialmente após chuvas e em períodos mais quentes. Recipientes com água precisam ser eliminados ou protegidos.",
      },
    ],
    seoKeywords: [
      "controle de mosquitos Franca",
      "dedetização de mosquitos Franca SP",
      "Aedes aegypti prevenção Franca",
      "controle de criadouros",
      "mosquitos em condomínio Franca",
    ],
  },
];

export function getPestBySlug(slug: string): PestData | undefined {
  return pests.find((pest) => pest.slug === slug);
}

export function getAllPestSlugs(): string[] {
  return pests.map((pest) => pest.slug);
}
