import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME, isAuthTokenValid } from "@/lib/infraestrutura-auth";

const DEEPSEEK_VISION_MODEL =
  process.env.DEEPSEEK_VISION_MODEL ?? "deepseek-v4-flash-vision-exp";

const SYSTEM_PROMPT = `Você é a especialista em controle de pragas da Sentinela Saúde Ambiental (dedetizadora em Franca/SP, 11+ anos). Analise a foto recebida e responda APENAS em português, de forma objetiva e técnica, no seguinte formato:

ANIMAL/PRAGA: identifique o que aparece (escorpião, barata, cupim, rato, formiga, mosquito, outro) ou, se não houver animal, descreva o risco do ambiente.

AMBIENTE: descreva em 1 linha o local/contexto da foto (interno/externo, residencial/comercial, sinais de infestação).

CUIDADOS IMEDIATOS: 3 a 4 orientações de segurança agora (crianças, pets, não tocar, vedar acesso, quando procurar atendimento médico).

PREPARAÇÃO PARA A VISITA: 2 a 3 orientações de como preparar o local antes da inspeção técnica.

Se a foto não permitir identificar nada com segurança, diga isso claramente e peça uma foto mais próxima/nítida.`;

interface VisionBody {
  image?: string;
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  if (!isAuthTokenValid(token)) {
    return NextResponse.json({ ok: false, error: "Não autorizado." }, { status: 401 });
  }

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "DEEPSEEK_API_KEY não configurada no ambiente." },
      { status: 500 },
    );
  }

  let body: VisionBody;
  try {
    body = (await request.json()) as VisionBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Requisição inválida." }, { status: 400 });
  }

  const image = body.image;
  if (!image || typeof image !== "string") {
    return NextResponse.json({ ok: false, error: "Imagem ausente." }, { status: 400 });
  }

  // Aceita data URL ou base64 puro
  const dataUrl = image.startsWith("data:") ? image : `data:image/jpeg;base64,${image}`;

  try {
    const upstream = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: DEEPSEEK_VISION_MODEL,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: [
              { type: "text", text: "Identifique a praga/risco desta foto:" },
              { type: "image_url", image_url: { url: dataUrl } },
            ],
          },
        ],
        max_tokens: 700,
        temperature: 0.2,
      }),
    });

    if (!upstream.ok) {
      const errText = await upstream.text().catch(() => "");
      return NextResponse.json(
        { ok: false, error: `Falha na análise (${upstream.status}). ${errText.slice(0, 200)}` },
        { status: 502 },
      );
    }

    const data = (await upstream.json()) as {
      choices?: { message?: { content?: string } }[];
    };

    const content = data.choices?.[0]?.message?.content?.trim();
    if (!content) {
      return NextResponse.json({ ok: false, error: "Resposta vazia da IA." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, analysis: content, model: DEEPSEEK_VISION_MODEL });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: `Erro ao chamar a IA: ${String(error).slice(0, 200)}` },
      { status: 502 },
    );
  }
}
