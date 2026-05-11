import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { contacts } from "../db/schema";

export const contactsRouter = createRouter({
  list: publicQuery.query(async () => {
    const db = getDb();
    return db.select().from(contacts).orderBy(contacts.createdAt);
  }),

  create: publicQuery
    .input(
      z.object({
        name: z.string().min(2).max(255),
        email: z.string().email().optional().or(z.literal("")),
        phone: z.string().optional().or(z.literal("")),
        subject: z.string().optional().or(z.literal("")),
        message: z.string().min(5),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db.insert(contacts).values({
        name: input.name,
        email: input.email || null,
        phone: input.phone || null,
        subject: input.subject || null,
        message: input.message,
      });
      return { success: true, id: Number(result[0].insertId) };
    }),
});
