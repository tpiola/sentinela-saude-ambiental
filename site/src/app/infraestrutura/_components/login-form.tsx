"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  nextPath: string;
}

export function LoginForm({ nextPath }: LoginFormProps) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!username.trim() || !password) {
      setError("Informe usuário e senha.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/infraestrutura/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password }),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        setError(data.error ?? "Não foi possível entrar. Tente novamente.");
        setLoading(false);
        return;
      }

      router.replace(nextPath);
      router.refresh();
    } catch {
      setError("Erro de conexão. Tente novamente.");
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-navy px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-lime font-display text-2xl font-extrabold text-brand-navy-heading">
            S
          </div>
          <h1 className="mt-5 font-display text-2xl font-bold text-white">
            Sentinela Saúde Ambiental
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Área restrita — painel de infraestrutura
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl sm:p-8"
        >
          <label htmlFor="username" className="block">
            <span className="text-sm font-bold text-brand-navy">Usuário</span>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="mt-2 min-h-12 w-full border border-brand-border bg-white px-3 text-brand-navy outline-none focus:border-brand-accent"
              placeholder="Usuário"
            />
          </label>

          <label htmlFor="password" className="mt-5 block">
            <span className="text-sm font-bold text-brand-navy">Senha</span>
            <div className="relative mt-2">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="min-h-12 w-full border border-brand-border bg-white px-3 pr-12 text-brand-navy outline-none focus:border-brand-accent"
                placeholder="••••••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-wide text-brand-muted hover:text-brand-navy"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </label>

          {error && (
            <p
              role="alert"
              className="mt-4 border-l-4 border-red-500 bg-red-50 px-3 py-2 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-brand-navy font-bold text-white transition-colors hover:bg-brand-navy-soft disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar no painel"}
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-brand-muted">
            Acesso restrito à equipe interna. Credenciais são protegidas por
            cookie httpOnly.
          </p>
        </form>
      </div>
    </main>
  );
}
