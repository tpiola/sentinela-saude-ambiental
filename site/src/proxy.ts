import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE_NAME, isAuthTokenValid } from "@/lib/infraestrutura-auth";

const LOGIN_PATH = "/infraestrutura/login";
const DASHBOARD_PATH = "/infraestrutura";

/**
 * Next.js 16 renomeou `middleware` para `proxy`. Este proxy protege todas as
 * rotas sob /infraestrutura: sem cookie de autenticação válido, redireciona
 * para a tela de login preservando o destino original em `?next=`.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthed = isAuthTokenValid(request.cookies.get(AUTH_COOKIE_NAME)?.value);

  if (pathname === LOGIN_PATH) {
    if (isAuthed) {
      return NextResponse.redirect(new URL(DASHBOARD_PATH, request.url));
    }
    return NextResponse.next();
  }

  if (!isAuthed) {
    const loginUrl = new URL(LOGIN_PATH, request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/infraestrutura/:path*"],
};
