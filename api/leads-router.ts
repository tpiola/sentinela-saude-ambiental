import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { leads } from "../db/schema";
import { and, desc, eq, gte } from "drizzle-orm";

const DEDUPE_WINDOW_MS = 15 * 60 * 1000;

function normalizePhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11) return `55${digits}`;
  return digits;
}

export const leadsRouter = createRouter({
  list: publicQuery.query(async () => {
    const db = getDb();
    return db.select().from(leads).orderBy(leads.createdAt);
  }),

  create: publicQuery
    .input(
      z.object({
        name: z.string().min(2).max(255),
        phone: z.string().min(8).max(20),
        email: z.string().email().optional().or(z.literal("")),
        city: z.string().optional().or(z.literal("")),
        pestType: z.string().optional().or(z.literal("")),
        propertyType: z.enum(["residencia", "empresa", "condominio", "outro"]).optional(),
        urgency: z.enum(["baixa", "media", "alta"]).optional(),
        message: z.string().optional().or(z.literal("")),
        source: z.string().default("site"),
        dedupeKey: z.string().min(12).max(191).optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const phone = normalizePhone(input.phone);
      const recentCutoff = new Date(Date.now() - DEDUPE_WINDOW_MS);

      const duplicateByKey = input.dedupeKey
        ? await db
            .select({ id: leads.id })
            .from(leads)
            .where(eq(leads.dedupeKey, input.dedupeKey))
            .limit(1)
        : [];

      if (duplicateByKey[0]) {
        return { success: true, id: Number(duplicateByKey[0].id), deduped: true };
      }

      const duplicateByRecentLead = await db
        .select({ id: leads.id })
        .from(leads)
        .where(
          and(
            eq(leads.phone, phone),
            eq(leads.pestType, input.pestType || ""),
            eq(leads.propertyType, input.propertyType || "outro"),
            eq(leads.source, input.source),
            gte(leads.createdAt, recentCutoff),
          ),
        )
        .orderBy(desc(leads.createdAt))
        .limit(1);

      if (duplicateByRecentLead[0]) {
        return { success: true, id: Number(duplicateByRecentLead[0].id), deduped: true };
      }

      const result = await db.insert(leads).values({
        name: input.name,
        phone,
        email: input.email || null,
        city: input.city || null,
        pestType: input.pestType || null,
        propertyType: input.propertyType || null,
        urgency: input.urgency || "media",
        message: input.message || null,
        source: input.source,
        dedupeKey: input.dedupeKey || null,
      });
      return { success: true, id: Number(result[0].insertId), deduped: false };
    }),

  updateStatus: publicQuery
    .input(
      z.object({
        id: z.number(),
        status: z.enum(["novo", "contatado", "orcamento", "fechado", "perdido"]),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      await db
        .update(leads)
        .set({ status: input.status })
        .where(eq(leads.id, input.id));
      return { success: true };
    }),
});
