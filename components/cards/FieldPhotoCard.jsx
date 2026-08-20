import React from "react";

/** Registro real de campo: foto + gradiente + local (lima) e título. Nunca banco de imagem. */
export function FieldPhotoCard({
  src,
  alt,
  location,
  title,
  caption,
  aspect = "3 / 4",
  radius = "lg",
  showCaptionBelow = true,
  className,
  style,
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        overflow: "hidden",
        borderRadius: radius === "none" ? 0 : `var(--radius-${radius})`,
        border: "1px solid var(--border-default)",
        background: "var(--brand-surface)",
        ...style,
      }}
    >
      <div style={{ position: "relative", aspectRatio: aspect, overflow: "hidden" }}>
        <img
          src={src}
          alt={alt}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hover ? "scale(var(--hover-image-scale))" : "none",
            transition: "transform var(--duration-image) var(--ease-standard)",
          }}
        />
        <div
          style={{
            position: "absolute",
            insetInline: 0,
            bottom: 0,
            padding: "1rem",
            paddingTop: "4rem",
            background: "var(--overlay-photo)",
          }}
        >
          <p style={{ margin: 0, fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--brand-lime)" }}>
            {location}
          </p>
          <h3 style={{ margin: "0.25rem 0 0", fontFamily: "var(--font-heading)", fontSize: "1.125rem", fontWeight: 600, color: "#fff" }}>
            {title}
          </h3>
        </div>
      </div>
      {caption && showCaptionBelow ? (
        <p style={{ margin: 0, padding: "1rem", fontSize: "0.875rem", lineHeight: 1.6, color: "var(--brand-muted)" }}>{caption}</p>
      ) : null}
    </article>
  );
}
