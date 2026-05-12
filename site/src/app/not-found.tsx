import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-semibold text-zinc-900 dark:text-zinc-50">
        Página não encontrada
      </h1>
      <p className="max-w-md text-zinc-600 dark:text-zinc-400">
        O endereço pode estar incorreto ou a página foi removida.
      </p>
      <Link
        className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        href="/"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
