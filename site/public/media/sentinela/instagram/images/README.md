# Instagram — imagens

Coloque aqui JPG/WEBP estáveis nomeados em ASCII, por exemplo `01-feed-lancamento.jpg`, exportados pelo time de marketing ou pelo Instagram (download de dados / arte aprovada).

Depois atualize em `site/src/lib/brand.ts`:

- `instagramGalleryImages`: array `{ src: "/media/sentinela/instagram/images/...", alt: "…" }`.

O site **não** preencheu esta pasta automaticamente: o perfil público não expõe CDN confiável sem login.
