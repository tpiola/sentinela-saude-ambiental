export type LeadStatus = "novo" | "contatado" | "agendado" | "concluido";

export interface Lead {
  id: string;
  nome: string;
  whatsapp: string;
  praga: string;
  bairro: string;
  status: LeadStatus;
  criadoEm: number;
  origem: string;
}

const STORAGE_KEY = "sentinela_leads";

export const LEAD_STATUS_LABELS: Record<LeadStatus, string> = {
  novo: "Novo",
  contatado: "Contatado",
  agendado: "Agendado",
  concluido: "Concluído",
};

export const LEAD_STATUS_ORDER: LeadStatus[] = [
  "novo",
  "contatado",
  "agendado",
  "concluido",
];

export const PRAGAS_OPTIONS = [
  "Escorpião",
  "Barata",
  "Cupim",
  "Rato",
  "Formiga",
  "Aranha",
  "Mosquito",
  "Caixa d'água",
  "Outro",
];

function seedLeads(): Lead[] {
  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;
  return [
    {
      id: "seed-1",
      nome: "Mariana Souza",
      whatsapp: "(16) 99999-0001",
      praga: "Escorpião",
      bairro: "Jardim Francano",
      status: "agendado",
      criadoEm: now - 1 * day,
      origem: "WhatsApp",
    },
    {
      id: "seed-2",
      nome: "Carlos Pereira",
      whatsapp: "(16) 99999-0002",
      praga: "Cupim",
      bairro: "City Petrópolis",
      status: "contatado",
      criadoEm: now - 2 * day,
      origem: "Site",
    },
    {
      id: "seed-3",
      nome: "Condomínio Vila Verde",
      whatsapp: "(16) 99999-0003",
      praga: "Rato",
      bairro: "Parque Progresso",
      status: "novo",
      criadoEm: now - 0.2 * day,
      origem: "Indicação",
    },
  ];
}

export function readLeads(): Lead[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const seeded = seedLeads();
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
      return seeded;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Lead[]) : [];
  } catch {
    return [];
  }
}

function persist(leads: Lead[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  } catch {
    // noop
  }
}

export function addLead(input: Omit<Lead, "id" | "criadoEm">): Lead {
  const lead: Lead = {
    ...input,
    id: `lead-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    criadoEm: Date.now(),
  };
  const next = [...readLeads(), lead];
  persist(next);
  return lead;
}

export function updateLeadStatus(id: string, status: LeadStatus): Lead[] {
  const next = readLeads().map((lead) =>
    lead.id === id ? { ...lead, status } : lead,
  );
  persist(next);
  return next;
}

export function removeLead(id: string): Lead[] {
  const next = readLeads().filter((lead) => lead.id !== id);
  persist(next);
  return next;
}

export function resetLeads(): Lead[] {
  const seeded = seedLeads();
  persist(seeded);
  return seeded;
}
