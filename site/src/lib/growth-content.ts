export type GrowthPage = {
  slug: string;
  title: string;
  eyebrow: string;
  h1: string;
  description: string;
  problem: string;
  solution: string;
  benefits: string[];
  faq: { question: string; answer: string }[];
  related: { href: string; label: string }[];
};

// Observação: slugs que colidem com redirects permanentes de /servicos/[slug]
// para /pragas/[slug] (ver next.config.ts) ficam de fora — a rota nunca seria
// alcançável, então gerá-la só desperdiçaria build e confundiria o sitemap.
const serviceSeeds: Array<[string, string, string, string, string, string, string, string[]]> = [
  ["dedetizacao", "Dedetização em Franca SP", "Controle integrado", "Dedetização em Franca com inspeção antes da aplicação", "Controle profissional de baratas, formigas, aranhas e outros insetos em residências e empresas de Franca e região.", "Uma aplicação genérica pode dispersar a infestação e expor pessoas, animais e alimentos sem resolver o foco.", "Inspecionamos o ambiente, identificamos sinais e definimos o método com orientação antes e depois do serviço.", ["Inspeção antes da aplicação", "Método definido para o ambiente", "Cuidados informados ao cliente", "Atendimento residencial e empresarial"]],
  ["limpeza-caixa-dagua", "Limpeza de Caixa d'Água em Franca", "Higiene do reservatório", "Limpeza de caixa d'água em Franca com orientação preventiva", "Higienização de reservatórios com procedimento e orientação preventiva em Franca.", "Sedimentos, vedação inadequada e longos intervalos de limpeza podem comprometer a conservação do reservatório.", "O serviço e a preparação são definidos conforme o reservatório, com orientação para conservação e retorno ao uso.", ["Avaliação do reservatório", "Preparação informada antes do serviço", "Comprovante conforme o escopo", "Atendimento para condomínios"]],
];
export const services: GrowthPage[] = serviceSeeds.map(([slug,title,eyebrow,h1,description,problem,solution,benefits]) => ({slug,title,eyebrow,h1,description,problem,solution,benefits,faq:[{question:`Quanto custa ${title.toLowerCase()}?`,answer:"O valor depende da área, dos sinais encontrados e do método indicado. Informe o bairro e a ocorrência para receber orientação inicial."},{question:"O serviço tem garantia?",answer:"Quando aplicável, o prazo, a cobertura e as condições constam na proposta e no comprovante de execução. Elas variam conforme a praga e o ambiente."}],related:[{href:"/servicos",label:"Ver todos os serviços"},{href:"/pragas/escorpiao",label:"Orientação por ocorrência"},{href:"/contato",label:"Solicitar avaliação"}]}));

const marketNames = [["residencias","Residências"],["condominios","Condomínios"],["restaurantes","Restaurantes"],["industrias","Indústrias"],["clinicas","Clínicas"],["escolas","Escolas"],["comercios","Comércios"]] as const;
export const markets: GrowthPage[] = marketNames.map(([slug,name]) => ({slug,title:`Controle de pragas para ${name} em Franca`,eyebrow:"Atendimento por segmento",h1:`Controle de pragas para ${name.toLowerCase()} em Franca`,description:`Plano de controle de pragas para ${name.toLowerCase()} com inspeção, cronograma e registros definidos no escopo.`,problem:"Infestações, falhas de registro e aplicações improvisadas podem afetar pessoas e a operação.",solution:"A Sentinela combina inspeção, execução programada e orientação preventiva conforme a realidade do ambiente.",benefits:["Escopo conforme o ambiente","Cronograma definido após inspeção","Registros previstos no contrato","Atendimento conforme disponibilidade"],faq:[{question:`A Sentinela atende ${name.toLowerCase()}?`,answer:`O atendimento é confirmado conforme área, horários e necessidades informadas para ${name.toLowerCase()}.`},{question:"É possível contratar visitas recorrentes?",answer:"Sim. A frequência de um plano preventivo é definida após avaliação do ambiente."}],related:[{href:"/servicos/dedetizacao",label:"Dedetização"},{href:"/pragas/ratos",label:"Controle de roedores"},{href:"/contato",label:"Pedir proposta"}]}));

const cities = [["dedetizacao-em-franca","Franca","atendimento local"],["dedetizacao-em-patrocinio-paulista","Patrocínio Paulista","rota regional sob consulta"],["dedetizacao-em-cristais-paulista","Cristais Paulista","rota regional sob consulta"],["dedetizacao-em-batatais","Batatais","rota regional sob consulta"]] as const;
export const locations: GrowthPage[] = cities.map(([slug,city,detail]) => ({slug,title:`Dedetização em ${city}`,eyebrow:"Área de atendimento",h1:`Dedetização em ${city} com inspeção do ambiente`,description:`Controle de pragas em ${city} para casas e empresas, com ${detail}.`,problem:`Cada imóvel e ocorrência em ${city} exige leitura do ambiente; soluções genéricas tendem a tratar apenas o sintoma.`,solution:"O atendimento começa com informações básicas. Depois, a equipe confirma cobertura, inspeção, método e cuidados aplicáveis.",benefits:["Confirmação de rota e disponibilidade","Orientação inicial","Método definido após inspeção","Comprovante conforme o escopo"],faq:[{question:`Vocês atendem toda a cidade de ${city}?`,answer:`A cobertura em ${city} depende da rota e da disponibilidade. Informe o bairro e a ocorrência para confirmação.`},{question:"Como pedir avaliação?",answer:"Informe a cidade, o bairro, o tipo de imóvel e, se possível, envie foto ou vídeo do sinal encontrado."}],related:[{href:"/servicos/dedetizacao",label:"Como funciona a dedetização"},{href:"/pragas/escorpiao",label:"Controle de escorpiões"},{href:"/contato",label:"Confirmar atendimento"}]}));

export const allGrowthPages = { services, markets, locations };
