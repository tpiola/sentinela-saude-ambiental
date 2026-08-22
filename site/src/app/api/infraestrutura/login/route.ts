import { NextResponse } from "next/server";
import {
  AUTH_COOKIE_MAX_AGE,
  AUTH_COOKIE_NAME,
  INFRAESTRUTURA_PASSWORD,
  INFRAESTRUTURA_USER,
  computeAuthToken,
} from "@/lib/infraestrutura-auth";

interface LoginBody {
  username?: string;
  password?: string;
}

export async function POST(request: Request) {
  let body: LoginBody;
  try {
    body = (await request.json()) as LoginBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Requisição inválida." },
      { status: 400 },
    );
  }

  const username = body.username ?? "";
  const password = body.password ?? "";

  const valid =
    username === INFRAESTRUTURA_USER && password === INFRAESTRUTURA_PASSWORD;

  if (!valid) {
    return NextResponse.json(
      { ok: false, error: "Usuário ou senha incorretos." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(AUTH_COOKIE_NAME, computeAuthToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: AUTH_COOKIE_MAX_AGE,
  });

  return response;
}
