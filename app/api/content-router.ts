import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { services, plans, posts } from "../db/schema";
import { eq } from "drizzle-orm";

export const contentRouter = createRouter({
  services: createRouter({
    list: publicQuery.query(async () => {
      const db = getDb();
      return db.select().from(services).where(eq(services.active, true));
    }),

    bySlug: publicQuery
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const db = getDb();
        const results = await db
          .select()
          .from(services)
          .where(eq(services.slug, input.slug))
          .limit(1);
        return results[0] || null;
      }),
  }),

  plans: createRouter({
    list: publicQuery.query(async () => {
      const db = getDb();
      return db.select().from(plans).where(eq(plans.active, true));
    }),
  }),

  posts: createRouter({
    list: publicQuery.query(async () => {
      const db = getDb();
      return db.select().from(posts).where(eq(posts.published, true));
    }),

    bySlug: publicQuery
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const db = getDb();
        const results = await db
          .select()
          .from(posts)
          .where(eq(posts.slug, input.slug))
          .limit(1);
        return results[0] || null;
      }),
  }),
});
