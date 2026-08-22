"use client";

import { useEffect, useMemo, useState } from "react";
import {
  addLead,
  PRAGAS_OPTIONS,
  readLeads,
  removeLead,
  resetLeads,
  updateLeadStatus,
  LEAD_STATUS_LABELS,
  LEAD_STATUS_ORDER,
  type Lead,
  type LeadStatus,
} from "@/lib/infraestrutura/leads";
import { Badge, Card, SectionTitle } from "./ui";

const STATUS_TONES: Record<LeadStatus, "lime" | "navy" | "accent" | "amber"> = {
  novo: "accent",
  contatado: "amber",
  agendado: "lime",
  concluido: "navy",
};

interface LeadFormState {
  nome: string;
  whatsapp: string;
  praga: string;
  bairro: string;
}

const EMPTY_FORM: LeadFormState = {
  nome: "",
  whatsapp: "",
  praga: PRAGAS_OPTIONS[0],
  bairro: "",
};

export function PanelCrm() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filter, setFilter] = useState<LeadStatus | "todos">("todos");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<LeadFormState>(EMPTY_FORM);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    setLeads(readLeads());
  }, []);

  const filtered = useMemo(() => {
    let next = leads;
    if (filter !== "todos") next = next.filter((lead) => lead.status === filter);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      next = next.filter(
        (lead) =>
          lead.nome.toLowerCase().includes(q) ||
          lead.bairro.toLowerCase().includes(q) ||
          lead.praga.toLowerCase().includes(q) ||
          lead.whatsapp.toLowerCase().includes(q),
      );
    }
    return [...next].sort((a, b) => b.criadoEm - a.criadoEm);
  }, [leads, filter, search]);

  function handleAdd(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    if (!form.nome.trim() || !form.whatsapp.trim() || !form.bairro.trim()) {
      setFormError("Preencha nome, WhatsApp e bairro.");
      return;
    }

    const lead = addLead({
      nome: form.nome.trim(),
      whatsapp: form.whatsapp.trim(),
      praga: form.praga,
      bairro: form.bairro.trim(),
      status: "novo",
      origem: "Manual",
    });

    setLeads(readLeads());
    setForm(EMPTY_FORM);
    setShowForm(false);
    void lead;
  }

  function handleStatusChange(id: string, status: LeadStatus) {
    const next = updateLeadStatus(id, status);
    setLeads(next);
  }

  function handleDelete(id: string) {
    setLeads(removeLead(id));
  }

  function handleReset() {
    setLeads(resetLeads());
  }

  function handleExportCsv() {
    const header = ["Nome", "WhatsApp", "Praga", "Bairro", "Status", "Origem", "Criado em"];
    const rows = leads.map((lead) => [
      lead.nome,
      lead.whatsapp,
      lead.praga,
      lead.bairro,
      LEAD_STATUS_LABELS[lead.status],
      lead.origem,
      new Date(lead.criadoEm).toLocaleString("pt-BR"),
    ]);
    const csv = [header, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(";"))
      .join("\n");

    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sentinela-leads.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">
      <Card className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-display text-lg font-bold text-brand-navy">
            {leads.length} lead{leads.length === 1 ? "" : "s"}
          </p>
          <p className="text-sm text-brand-muted">
            Persistência local (localStorage) — sem backend
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setShowForm((current) => !current)}
            className="inline-flex min-h-10 items-center justify-center bg-brand-lime px-4 text-sm font-bold text-brand-navy-heading transition-colors hover:bg-brand-green-light"
          >
            {showForm ? "Cancelar" : "+ Adicionar lead"}
          </button>
          <button
            type="button"
            onClick={handleExportCsv}
            className="inline-flex min-h-10 items-center justify-center bg-brand-navy px-4 text-sm font-bold text-white transition-colors hover:bg-brand-navy-soft"
          >
            Exportar CSV
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex min-h-10 items-center justify-center border border-brand-border px-4 text-sm font-bold text-brand-muted transition-colors hover:text-brand-navy"
          >
            Restaurar exemplo
          </button>
        </div>
      </Card>

      {showForm && (
        <Card>
          <SectionTitle title="Novo lead" />
          <form onSubmit={handleAdd} className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold text-brand-navy">Nome</span>
              <input
                value={form.nome}
                onChange={(event) => setForm({ ...form, nome: event.target.value })}
                className="mt-2 min-h-12 w-full border border-brand-border bg-white px-3 outline-none focus:border-brand-accent"
                placeholder="Nome do contato"
              />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-brand-navy">WhatsApp</span>
              <input
                value={form.whatsapp}
                onChange={(event) => setForm({ ...form, whatsapp: event.target.value })}
                className="mt-2 min-h-12 w-full border border-brand-border bg-white px-3 outline-none focus:border-brand-accent"
                placeholder="(16) 99999-9999"
              />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-brand-navy">Praga</span>
              <select
                value={form.praga}
                onChange={(event) => setForm({ ...form, praga: event.target.value })}
                className="mt-2 min-h-12 w-full border border-brand-border bg-white px-3 outline-none focus:border-brand-accent"
              >
                {PRAGAS_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-bold text-brand-navy">Bairro</span>
              <input
                value={form.bairro}
                onChange={(event) => setForm({ ...form, bairro: event.target.value })}
                className="mt-2 min-h-12 w-full border border-brand-border bg-white px-3 outline-none focus:border-brand-accent"
                placeholder="Ex.: Centro, Franca"
              />
            </label>
            {formError && (
              <p className="text-sm text-red-700 sm:col-span-2">{formError}</p>
            )}
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center bg-brand-navy px-5 font-bold text-white transition-colors hover:bg-brand-navy-soft sm:col-span-2"
            >
              Salvar lead
            </button>
          </form>
        </Card>
      )}

      <Card>
        <div className="flex flex-wrap items-center gap-3">
          <SectionTitle title="Leads" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="ml-auto min-h-10 w-full max-w-xs border border-brand-border bg-white px-3 text-sm outline-none focus:border-brand-accent"
            placeholder="Buscar por nome, bairro, praga..."
          />
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {(["todos", ...LEAD_STATUS_ORDER] as const).map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setFilter(status)}
              className={`inline-flex min-h-9 items-center rounded-full px-3 text-xs font-bold transition-colors ${
                filter === status
                  ? "bg-brand-navy text-white"
                  : "bg-brand-surface text-brand-muted hover:text-brand-navy"
              }`}
            >
              {status === "todos" ? "Todos" : LEAD_STATUS_LABELS[status]}
            </button>
          ))}
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b-2 border-brand-border text-xs uppercase tracking-wider text-brand-muted">
                <th className="py-2 pr-3">Nome</th>
                <th className="py-2 pr-3">WhatsApp</th>
                <th className="py-2 pr-3">Praga</th>
                <th className="py-2 pr-3">Bairro</th>
                <th className="py-2 pr-3">Status</th>
                <th className="py-2 pr-3">Criado</th>
                <th className="py-2 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-brand-muted">
                    Nenhum lead encontrado.
                  </td>
                </tr>
              ) : (
                filtered.map((lead) => (
                  <tr key={lead.id} className="border-b border-brand-border last:border-0">
                    <td className="py-3 pr-3 font-bold text-brand-navy">{lead.nome}</td>
                    <td className="py-3 pr-3 text-brand-muted">{lead.whatsapp}</td>
                    <td className="py-3 pr-3">{lead.praga}</td>
                    <td className="py-3 pr-3 text-brand-muted">{lead.bairro}</td>
                    <td className="py-3 pr-3">
                      <Badge tone={STATUS_TONES[lead.status]}>
                        {LEAD_STATUS_LABELS[lead.status]}
                      </Badge>
                    </td>
                    <td className="py-3 pr-3 text-xs text-brand-muted">
                      {new Date(lead.criadoEm).toLocaleDateString("pt-BR")}
                    </td>
                    <td className="py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <select
                          value={lead.status}
                          onChange={(event) =>
                            handleStatusChange(lead.id, event.target.value as LeadStatus)
                          }
                          className="min-h-9 border border-brand-border bg-white px-2 text-xs outline-none focus:border-brand-accent"
                          aria-label={`Alterar status de ${lead.nome}`}
                        >
                          {LEAD_STATUS_ORDER.map((status) => (
                            <option key={status} value={status}>
                              {LEAD_STATUS_LABELS[status]}
                            </option>
                          ))}
                        </select>
                        <button
                          type="button"
                          onClick={() => handleDelete(lead.id)}
                          className="inline-flex min-h-9 items-center justify-center border border-red-200 px-2 text-xs font-bold text-red-600 transition-colors hover:bg-red-50"
                          aria-label={`Excluir ${lead.nome}`}
                        >
                          Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
