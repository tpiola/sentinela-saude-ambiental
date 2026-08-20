/* @ds-bundle: {"format":4,"namespace":"ThiagoPiolaDesignSystem_5bdcb0","components":[{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"SectionLabel","sourcePath":"components/badges/SectionLabel.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"Divider","sourcePath":"components/content/Divider.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"ProvaCard","sourcePath":"components/content/ProvaCard.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"TimelineItem","sourcePath":"components/content/TimelineItem.jsx"},{"name":"TrustCard","sourcePath":"components/content/TrustCard.jsx"},{"name":"FloatingCta","sourcePath":"components/forms/FloatingCta.jsx"},{"name":"NewsletterForm","sourcePath":"components/forms/NewsletterForm.jsx"},{"name":"ThemeToggle","sourcePath":"components/forms/ThemeToggle.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"Header","sourcePath":"components/layout/Header.jsx"},{"name":"Logo","sourcePath":"components/layout/Logo.jsx"}],"sourceHashes":{"components/badges/Badge.jsx":"e20bef121e1c","components/badges/SectionLabel.jsx":"2ecf5165192a","components/buttons/Button.jsx":"ddd6a891f568","components/cards/Card.jsx":"eabad17433b8","components/content/Divider.jsx":"237beddd90e7","components/content/ProjectCard.jsx":"bc4b763962d8","components/content/ProvaCard.jsx":"c8fe16752b57","components/content/StatBlock.jsx":"37d336eb642f","components/content/TimelineItem.jsx":"c32cf0cb3013","components/content/TrustCard.jsx":"a1b51cce3def","components/forms/FloatingCta.jsx":"47e228dadbcb","components/forms/NewsletterForm.jsx":"743b9124a49e","components/forms/ThemeToggle.jsx":"3d6a04ac2de5","components/layout/Footer.jsx":"adf388432d0b","components/layout/Header.jsx":"7f399c546541","components/layout/Logo.jsx":"f531a55d09db"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ThiagoPiolaDesignSystem_5bdcb0 = window.ThiagoPiolaDesignSystem_5bdcb0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/Badge.jsx
try { (() => {
function Badge({
  dot,
  icon,
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `badge ${className}`.trim()
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: "dot-pulse"
  }), icon, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/badges/SectionLabel.jsx
try { (() => {
function SectionLabel({
  index,
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: `text-label ${className}`.trim(),
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.2em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, index), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 8px',
      color: 'var(--border)'
    }
  }, "/"), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  href,
  target,
  rel,
  icon,
  iconEnd,
  disabled,
  onClick,
  className = '',
  children
}) {
  const cls = `btn-${variant} ${className}`.trim();
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon, /*#__PURE__*/React.createElement("span", null, children), iconEnd);
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      target: target,
      rel: rel,
      className: cls,
      onClick: onClick
    }, inner);
  }
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: cls,
    disabled: disabled,
    onClick: onClick
  }, inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
const RADIUS = {
  lg: 10,
  xl: 12,
  '2xl': 16,
  '3xl': 20
};
const PAD = {
  5: 20,
  6: 24,
  7: 28,
  8: 32
};
function Card({
  hover = 'subtle',
  padding = 6,
  radius = '2xl',
  as = 'div',
  href,
  className = '',
  style = {},
  children
}) {
  const Tag = href ? 'a' : as;
  const hoverCls = hover === 'premium' ? 'card-hover-premium' : hover === 'subtle' ? 'card-elevated' : '';
  const cls = `${hoverCls} ${className}`.trim();
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    className: cls,
    style: {
      display: 'block',
      background: 'var(--surface-elevated)',
      border: '1px solid var(--border)',
      borderRadius: RADIUS[radius],
      padding: PAD[padding],
      textDecoration: 'none',
      color: 'inherit',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Divider.jsx
try { (() => {
function Divider({
  variant = 'neutral',
  width = 'full',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `${variant === 'brand' ? 'divider-brand' : 'divider'} ${className}`.trim(),
    style: {
      width: width === 'full' ? '100%' : width
    },
    "aria-hidden": "true"
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Divider.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
const Arrow = () => /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 17L17 7M17 7H8M17 7v9"
}));
const Check = () => /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "var(--brand)",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 12l2 2 4-4"
}));
function ProjectCard({
  index,
  title,
  problem,
  result,
  stack = [],
  href,
  ctaLabel = 'Ver projeto',
  problemLabel = 'Desafio',
  resultLabel = 'Resultado',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `card-hover-premium ${className}`.trim(),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-elevated)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      padding: 28,
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.2em',
      color: 'var(--brand)',
      opacity: 0.6
    }
  }, index), href && /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'var(--muted)'
    },
    "aria-label": `${ctaLabel}: ${title}`
  }, /*#__PURE__*/React.createElement(Arrow, null))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.35,
      color: 'var(--foreground)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--muted)'
    }
  }, problemLabel), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      color: 'var(--muted)',
      lineHeight: 1.55
    }
  }, problem)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--brand)'
    }
  }, resultLabel), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--foreground)',
      lineHeight: 1.55,
      display: 'flex',
      gap: 6,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 3,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Check, null)), /*#__PURE__*/React.createElement("span", null, result)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, stack.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      padding: '2px 8px',
      borderRadius: 8,
      border: '1px solid var(--border)',
      background: 'color-mix(in srgb, var(--brand) 4%, transparent)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--brand)'
    }
  }, s))), href && /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      marginTop: 20,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--brand)',
      textDecoration: 'none'
    }
  }, ctaLabel, " ", /*#__PURE__*/React.createElement(Arrow, null)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ProvaCard.jsx
try { (() => {
function ProvaCard({
  value,
  label,
  detail,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `card-hover-premium ${className}`.trim(),
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      padding: 28,
      textAlign: 'center',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '-0.04em',
      color: 'var(--foreground)',
      marginBottom: 12
    }
  }, value), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.3,
      color: 'var(--foreground)',
      marginBottom: 6
    }
  }, label), detail && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: 'var(--muted)',
      lineHeight: 1.55
    }
  }, detail));
}
Object.assign(__ds_scope, { ProvaCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProvaCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `stat-block ${className}`.trim()
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-value"
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/TimelineItem.jsx
try { (() => {
function TimelineItem({
  company,
  role,
  period,
  description,
  impacts = [],
  last,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `timeline-item ${className}`.trim(),
    style: {
      position: 'relative',
      borderLeft: '1px solid var(--border)',
      padding: '16px 0 16px 24px',
      paddingBottom: last ? 0 : 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      left: -5,
      top: 20,
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--foreground)'
    }
  }, company), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--muted)'
    }
  }, period)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--brand)'
    }
  }, role), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      color: 'var(--muted)'
    }
  }, description), impacts.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '12px 0 0',
      padding: 0,
      listStyle: 'none'
    }
  }, impacts.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 6,
      fontSize: 12,
      lineHeight: 1.5,
      color: 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 6,
      width: 4,
      height: 4,
      flexShrink: 0,
      borderRadius: '50%',
      background: 'var(--brand)'
    }
  }), i))));
}
Object.assign(__ds_scope, { TimelineItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TimelineItem.jsx", error: String((e && e.message) || e) }); }

// components/content/TrustCard.jsx
try { (() => {
const Shield = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 12l2 2 4-4"
}));
const Arrow = () => /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 17L17 7M17 7H8M17 7v9"
}));
function TrustCard({
  label,
  detail,
  href,
  icon,
  className = ''
}) {
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    target: href ? '_blank' : undefined,
    rel: href ? 'noopener noreferrer' : undefined,
    className: `card-hover-premium ${className}`.trim(),
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: 16,
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 10,
      background: 'color-mix(in srgb, var(--brand) 12%, transparent)',
      color: 'var(--brand)'
    }
  }, icon || /*#__PURE__*/React.createElement(Shield, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--foreground)'
    }
  }, label, href && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(Arrow, null))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: 12,
      color: 'var(--muted)'
    }
  }, detail)));
}
Object.assign(__ds_scope, { TrustCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TrustCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/FloatingCta.jsx
try { (() => {
function FloatingCta({
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  ariaLabel = 'WhatsApp',
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: target,
    rel: rel,
    "aria-label": ariaLabel,
    className: `pulse-glow ${className}`.trim(),
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 70,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 56,
      borderRadius: 999,
      background: 'var(--brand)',
      color: '#fff',
      boxShadow: '0 8px 32px var(--brand-glow)',
      textDecoration: 'none'
    }
  }, children || /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  })));
}
Object.assign(__ds_scope, { FloatingCta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FloatingCta.jsx", error: String((e && e.message) || e) }); }

// components/forms/NewsletterForm.jsx
try { (() => {
const {
  useState
} = React;
function NewsletterForm({
  placeholder = 'Seu melhor E-mail',
  ctaLabel = 'Assinar',
  sendingLabel = 'Enviando…',
  successTitle = 'Obrigado por assinar! 🎉',
  successBody = 'Você receberá os próximos conteúdos no seu email.',
  errorMessage = 'Ocorreu um erro. Tente novamente.',
  onSubmit,
  className = ''
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const submit = async e => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    try {
      if (onSubmit) await onSubmit(email.trim());
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };
  if (status === 'success') {
    return /*#__PURE__*/React.createElement("div", {
      className: className,
      style: {
        padding: 32,
        textAlign: 'center',
        border: '1px solid color-mix(in srgb, var(--brand) 20%, transparent)',
        background: 'color-mix(in srgb, var(--brand) 5%, transparent)',
        borderRadius: 16
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16,
        fontWeight: 500,
        color: 'var(--foreground)'
      }
    }, successTitle), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '4px 0 0',
        fontSize: 14,
        color: 'var(--muted)'
      }
    }, successBody));
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    className: className,
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      maxWidth: 460,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: placeholder,
    required: true,
    disabled: status === 'loading',
    style: {
      flex: '1 1 240px',
      padding: '12px 16px',
      borderRadius: 12,
      border: '1px solid var(--border)',
      background: 'var(--surface-elevated)',
      color: 'var(--foreground)',
      fontSize: 14,
      fontFamily: 'var(--font-sans)',
      outline: 'none',
      transition: 'border-color 0.2s, box-shadow 0.2s'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--brand)';
      e.target.style.boxShadow = '0 0 0 3px color-mix(in srgb, var(--brand) 15%, transparent)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border)';
      e.target.style.boxShadow = 'none';
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn-primary",
    disabled: status === 'loading',
    style: {
      whiteSpace: 'nowrap'
    }
  }, status === 'loading' ? sendingLabel : ctaLabel), status === 'error' && /*#__PURE__*/React.createElement("p", {
    style: {
      width: '100%',
      margin: 0,
      fontSize: 12,
      color: '#ef4444',
      textAlign: 'center'
    }
  }, errorMessage));
}
Object.assign(__ds_scope, { NewsletterForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NewsletterForm.jsx", error: String((e && e.message) || e) }); }

// components/forms/ThemeToggle.jsx
try { (() => {
const {
  useState,
  useEffect
} = React;
const Sun = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
}));
const Moon = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
}));
function ThemeToggle({
  className = ''
}) {
  const [isDark, setDark] = useState(false);
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      const dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(dark);
      document.documentElement.classList.toggle('dark', dark);
    } catch {}
  }, []);
  const toggle = () => {
    const next = !isDark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggle,
    "aria-label": isDark ? 'Ativar modo claro' : 'Ativar modo escuro',
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 10,
      border: '1px solid var(--border)',
      background: 'var(--surface-elevated)',
      color: 'var(--muted)',
      cursor: 'pointer',
      transition: 'color 0.2s'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--foreground)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--muted)'
  }, isDark ? /*#__PURE__*/React.createElement(Sun, null) : /*#__PURE__*/React.createElement(Moon, null));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/layout/Logo.jsx
try { (() => {
function Logo({
  src = 'assets/logo.png',
  variant = 'icon',
  height = 120,
  showCredential = false,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Thiago Piola \u2014 Farmac\xEAutico CRF/SP 58.519",
    style: {
      height,
      width: 'auto',
      objectFit: 'contain',
      display: 'block'
    }
  }), variant === 'full' && showCredential && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.15,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--foreground)'
    }
  }, "Thiago Piola"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--muted)',
      letterSpacing: '0.05em'
    }
  }, "Farmac\xEAutico CRF/SP 58.519")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Logo.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
function Footer({
  logoSrc = 'assets/logo.png',
  tagline = 'Farmacêutico CRF/SP 58.519 — Atuação técnico-comercial em saúde.',
  nav = [{
    href: '#trajetoria',
    label: 'Trajetória'
  }, {
    href: '/blog',
    label: 'Blog'
  }, {
    href: '#contato',
    label: 'Contato'
  }],
  contacts = [],
  bottom = `© ${new Date().getFullYear()} Thiago Biasoli Garcia Piola — Todos os direitos reservados.`,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: className,
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid var(--border)',
      background: 'var(--surface-elevated)',
      padding: '80px var(--gutter-desktop) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 1,
      background: 'linear-gradient(90deg, transparent 0%, var(--brand) 50%, transparent 100%)',
      opacity: 0.35
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    className: "orb",
    style: {
      position: 'absolute',
      top: -160,
      right: -160,
      width: 500,
      height: 500,
      background: 'var(--brand)',
      opacity: 0.06
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    className: "orb",
    style: {
      position: 'absolute',
      bottom: -160,
      left: -160,
      width: 400,
      height: 400,
      background: 'var(--brand)',
      opacity: 0.05
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-xl)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 48,
      gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 3fr) minmax(0, 4fr)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    src: logoSrc,
    variant: "full",
    height: 90,
    showCredential: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      maxWidth: 360,
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--muted)'
    }
  }, tagline)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-label",
    style: {
      letterSpacing: '0.24em',
      margin: 0
    }
  }, "Menu"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '20px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, nav.map(item => /*#__PURE__*/React.createElement("li", {
    key: item.href
  }, /*#__PURE__*/React.createElement("a", {
    href: item.href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 14,
      color: 'var(--foreground)',
      opacity: 0.85,
      textDecoration: 'none',
      transition: 'color 0.2s'
    }
  }, item.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-label",
    style: {
      letterSpacing: '0.24em',
      margin: 0
    }
  }, "Contato"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '20px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, contacts.map((c, i) => {
    const Tag = c.href ? 'a' : 'div';
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement(Tag, {
      href: c.href,
      className: "card-elevated",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: 16,
        borderRadius: 12,
        textDecoration: 'none',
        color: 'var(--foreground)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        width: 40,
        height: 40,
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'color-mix(in srgb, var(--brand) 10%, transparent)',
        color: 'var(--brand)'
      }
    }, c.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 14,
        fontWeight: 600
      }
    }, c.label), c.secondary && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        marginTop: 2,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--muted)',
        letterSpacing: '0.05em',
        textTransform: 'uppercase'
      }
    }, c.secondary))));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 64,
      paddingTop: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 1,
      background: 'linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--brand) 25%, transparent) 50%, transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--muted)',
      opacity: 0.6,
      letterSpacing: '0.05em'
    }
  }, bottom))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/layout/Header.jsx
try { (() => {
function Header({
  logoSrc = 'assets/logo.png',
  logoHeight = 100,
  showCredential = true,
  nav = [{
    href: '#trajetoria',
    label: 'Trajetória'
  }, {
    href: '/blog',
    label: 'Blog'
  }, {
    href: '#contato',
    label: 'Contato'
  }],
  cta,
  right,
  scrolled = false,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: className,
    style: {
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 80,
      background: scrolled ? 'color-mix(in srgb, var(--surface) 85%, transparent)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      transition: 'background 0.3s, border-color 0.3s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '20px var(--gutter-desktop)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    style: {
      textDecoration: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    src: logoSrc,
    variant: "full",
    height: logoHeight,
    showCredential: showCredential
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    },
    "aria-label": "Principal"
  }, nav.map(link => /*#__PURE__*/React.createElement("a", {
    key: link.href,
    href: link.href,
    style: {
      position: 'relative',
      display: 'inline-block',
      padding: '8px 14px',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--muted)',
      textDecoration: 'none',
      borderRadius: 6,
      transition: 'color 0.2s'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--foreground)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--muted)'
  }, link.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, right, cta)));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Header.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.ProvaCard = __ds_scope.ProvaCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TimelineItem = __ds_scope.TimelineItem;

__ds_ns.TrustCard = __ds_scope.TrustCard;

__ds_ns.FloatingCta = __ds_scope.FloatingCta;

__ds_ns.NewsletterForm = __ds_scope.NewsletterForm;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Logo = __ds_scope.Logo;

})();
