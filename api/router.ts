import { authRouter } from "./auth-router";
import { leadsRouter } from "./leads-router";
import { contactsRouter } from "./contacts-router";
import { contentRouter } from "./content-router";
import { createRouter, publicQuery } from "./middleware";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  auth: authRouter,
  leads: leadsRouter,
  contacts: contactsRouter,
  content: contentRouter,
});

export type AppRouter = typeof appRouter;
