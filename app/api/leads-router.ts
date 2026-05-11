import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { leads } from "../db/schema";
import { eq } from "drizzle-orm";

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
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db.insert(leads).values({
        name: input.name,
        phone: input.phone,
        email: input.email || null,
        city: input.city || null,
        pestType: input.pestType || null,
        propertyType: input.propertyType || null,
        urgency: input.urgency || "media",
        message: input.message || null,
        source: input.source,
      });
      return { success: true, id: Number(result[0].insertId) };
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
