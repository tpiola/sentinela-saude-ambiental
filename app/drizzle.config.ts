import "dotenv/config";
import { defineConfig } from "drizzle-kit";

// URL sintaticamente válida para o drizzle-kit quando só há schema local (generate).
// Para `db:migrate` e `db:push`, use DATABASE_URL real no ambiente.
const connectionString =
  process.env.DATABASE_URL ?? "mysql://127.0.0.1:3306/drizzle_kit_placeholder";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "mysql",
  dbCredentials: {
    url: connectionString,
  },
});
