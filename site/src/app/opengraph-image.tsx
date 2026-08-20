import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BRAND } from "@/lib/brand";

export const alt = `${BRAND.name} — Controle de pragas em Franca SP`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadMontserratBold() {
  try {
    const response = await fetch(
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } },
    );
    const css = await response.text();
    const match = css.match(/src: url\((.+?)\) format\('truetype'\)/);
    if (!match) return null;
    const fontResponse = await fetch(match[1]);
    return await fontResponse.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Image() {
  const [logoData, montserratBold] = await Promise.all([
    readFile(join(process.cwd(), "public/brand/logo-brasao.png")),
    loadMontserratBold(),
  ]);
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 88px",
          background:
            "linear-gradient(135deg, #002347 0%, #001428 100%)",
          color: "#ffffff",
          fontFamily: montserratBold ? "Montserrat" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <img src={logoSrc} width={92} height={61} alt="" />
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: "-0.01em",
            }}
          >
            SENTINELA SAÚDE AMBIENTAL
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.12,
            maxWidth: 980,
            letterSpacing: "-0.02em",
          }}
        >
          Controle profissional de pragas em Franca e região
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 28,
            color: "#c7d6e8",
            maxWidth: 820,
          }}
        >
          Inspeção antes da aplicação, orientação técnica e documentação do
          serviço.
        </div>

        <div style={{ display: "flex", marginTop: 48, gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#8fce2a",
              color: "#001428",
              fontSize: 24,
              fontWeight: 800,
              padding: "12px 28px",
              borderRadius: 999,
            }}
          >
            Franca / SP
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "2px solid rgba(255,255,255,0.35)",
              fontSize: 24,
              fontWeight: 700,
              padding: "12px 28px",
              borderRadius: 999,
            }}
          >
            (16) 99374-7147
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: montserratBold
        ? [
            {
              name: "Montserrat",
              data: montserratBold,
              style: "normal",
              weight: 800,
            },
          ]
        : undefined,
    },
  );
}
