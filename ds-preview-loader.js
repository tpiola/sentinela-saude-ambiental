/* ds-preview-loader.js — carrega os componentes de components/ diretamente no navegador
   quando _ds_bundle.js ainda não foi compilado. Fonte única: os próprios .jsx. */
(function () {
  const FILES = [
    "components/icons/WhatsAppIcon.jsx",
    "components/icons/UiIcon.jsx",
    "components/icons/PestIcon.jsx",
    "components/buttons/Button.jsx",
    "components/badges/Eyebrow.jsx",
    "components/badges/Badge.jsx",
    "components/badges/Chip.jsx",
    "components/cards/Card.jsx",
    "components/cards/FieldPhotoCard.jsx",
    "components/cards/ServiceRow.jsx",
    "components/cards/ProcessStep.jsx",
    "components/cards/TrustItem.jsx",
    "components/cards/AccentStat.jsx",
    "components/cards/NoteBar.jsx",
    "components/content/FaqItem.jsx",
    "components/content/PestTile.jsx",
    "components/content/SectionHeading.jsx",
    "components/content/GoogleReviewBadge.jsx",
    "components/content/GbpMap.jsx",
    "components/buttons/TrustCta.jsx",
    "components/forms/TextField.jsx",
    "components/forms/RadioPillGroup.jsx",
    "components/layout/Logo.jsx",
    "components/layout/SiteHeader.jsx",
    "components/layout/SiteFooter.jsx",
    "components/layout/WhatsAppFloat.jsx",
    "components/layout/MobileStickyBar.jsx",
  ];

  const NAMES = [
    "WhatsAppIcon", "UiIcon", "PestIcon", "Button", "Eyebrow", "Badge", "Chip",
    "Card", "FieldPhotoCard", "ServiceRow", "ProcessStep", "TrustItem", "AccentStat",
    "NoteBar", "FaqItem", "PestTile", "SectionHeading", "TextField", "SelectField",
    "RadioPillGroup", "Logo", "LogoSwoosh", "SiteHeader", "SiteFooter",
    "GoogleReviewBadge", "GbpMap", "gbpJsonLd", "TrustCta", "TrustCtaTrio",
    "WhatsAppFloat", "MobileStickyBar",
  ];

  function findBundleNamespace() {
    for (const key of Object.keys(window)) {
      try {
        const value = window[key];
        if (value && typeof value === "object" && value.SiteHeader && value.Button && value.PestIcon) return value;
      } catch (_) {
        /* propriedades cross-origin do window (frames) — ignore */
      }
    }
    return null;
  }

  window.loadSentinelaDS = async function loadSentinelaDS(base) {
    const bundled = findBundleNamespace();
    if (bundled) return bundled;

    const sources = await Promise.all(
      FILES.map((path) => fetch(base + path).then((r) => {
        if (!r.ok) throw new Error("Falha ao carregar " + path);
        return r.text();
      })),
    );

    const merged = sources
      .map((src) =>
        src
          .split("\n")
          .filter((line) => !/^\s*import\b/.test(line))
          .map((line) => line.replace(/^export\s+(default\s+)?/, ""))
          .join("\n"),
      )
      .join("\n");

    const code =
      "(function (React) {\n" + merged + "\nreturn {" + NAMES.join(", ") + "};\n})";
    const compiled = Babel.transform(code, { presets: [[Babel.availablePresets.react, { runtime: "classic" }]] }).code;
    // eslint-disable-next-line no-eval
    return eval(compiled)(window.React);
  };

  /**
   * Compila e executa todos os <script type="text/jsx"> da página (inline ou com src),
   * injetando DS, React e ReactDOM. Substitui o processamento automático do Babel.
   */
  window.bootSentinela = async function bootSentinela(base) {
    const DS = await window.loadSentinelaDS(base);
    const blocks = Array.from(document.querySelectorAll('script[type="text/x-sentinela-jsx"]'));
    for (const block of blocks) {
      const source = block.src
        ? await fetch(block.src).then((r) => r.text())
        : block.textContent;
      const compiled = Babel.transform(source, {
        presets: [[Babel.availablePresets.react, { runtime: "classic" }]],
      }).code;
      // eslint-disable-next-line no-new-func
      new Function("DS", "React", "ReactDOM", compiled)(DS, window.React, window.ReactDOM);
    }
    return DS;
  };
})();
