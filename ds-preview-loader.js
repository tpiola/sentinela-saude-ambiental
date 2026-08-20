/* ds-preview-loader.js — carrega os componentes de components/ diretamente no navegador
   quando _ds_bundle.js ainda não foi compilado. Fonte única: os próprios .jsx. */
(function () {
  const FILES = [
    "components/icons/WhatsAppIcon.jsx",
    "components/icons/UiIcon.jsx",
    "components/icons/PestIcon.jsx",
    "components/icons/SocialIcons.jsx",
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
    "components/feedback/LgpdBanner.jsx",
    "components/layout/Logo.jsx",
    "components/layout/SiteHeader.jsx",
    "components/layout/SiteFooter.jsx",
    "components/layout/WhatsAppFloat.jsx",
    "components/layout/MobileStickyBar.jsx",
  ];

  const NAMES = [
    "WhatsAppIcon", "UiIcon", "PestIcon", "SocialIcon", "Button", "Eyebrow", "Badge", "Chip",
    "Card", "FieldPhotoCard", "ServiceRow", "ProcessStep", "TrustItem", "AccentStat",
    "NoteBar", "FaqItem", "PestTile", "SectionHeading", "TextField", "SelectField",
    "RadioPillGroup", "LgpdBanner", "Logo", "LogoSwoosh", "SiteHeader", "SiteFooter",
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
        if (!r.ok) throw new Error("HTTP " + r.status + " ao carregar " + path);
        return r.text();
      }))
    );

    const transformed = sources.map((code) => {
      const stripped = code
        .replace(/^import\s+[^;]+;\s*/gm, "")
        .replace(/^export\s+default\s+/gm, "")
        .replace(/^export\s+/gm, "");
      return Babel.transform(stripped, {
        presets: ["react-classic"],
        filename: "ds-inline.jsx",
      }).code;
    });

    const runner = new Function(
      "React",
      "ReactDOM",
      `
      var exports = {};
      ${transformed.join("\n\n")}
      return { ${NAMES.join(", ")} };
    `
    );

    return runner(window.React, window.ReactDOM);
  };

  window.bootSentinela = async function bootSentinela(base) {
    window.DS = await window.loadSentinelaDS(base);
    const scripts = document.querySelectorAll('script[type="text/x-sentinela-jsx"]');
    for (const s of scripts) {
      let code = "";
      if (s.src) {
        const res = await fetch(s.src);
        if (!res.ok) throw new Error("HTTP " + res.status + " ao carregar " + s.src);
        code = await res.text();
      } else {
        code = s.textContent;
      }
      const out = Babel.transform(code, {
        presets: ["react-classic"],
        filename: s.src || "app.jsx",
      }).code;
      new Function("DS", "React", "ReactDOM", out)(window.DS, window.React, window.ReactDOM);
    }
  };
})();