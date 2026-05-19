"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { IPhoneMockup } from "@/components/iphone-mockup";

/** Galeria Facebook + mockup Instagram — imagens a partir do índice 2 em brand.ts */
export function SocialGallerySection() {
  const fbGallery = BRAND.galleryImages.slice(2);
  const igSlides =
    BRAND.instagramGalleryImages.length > 0
      ? BRAND.instagramGalleryImages
      : [BRAND.galleryImages[0]];

  return (
    <section
      id="redes"
      className="scroll-mt-28 bg-white py-20 md:py-28"
      aria-labelledby="redes-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Presença real nas redes
          </p>
          <h2
            id="redes-heading"
            className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl"
          >
            Trabalho de campo e resultados
          </h2>
          <p className="mt-4 max-w-2xl text-[color:var(--brand-muted)]">
            Fotos da página no Facebook e conteúdo alinhado ao Instagram{" "}
            <strong className="text-[color:var(--brand-navy)]">
              @sentinelasaudeambiental
            </strong>
            .
          </p>

          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="grid gap-4 sm:grid-cols-2">
              {fbGallery.map((img, i) => (
                <motion.figure
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.06 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition duration-500 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </motion.figure>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6">
              <IPhoneMockup slides={igSlides} />
              <p className="max-w-xs text-center text-sm text-[color:var(--brand-muted)]">
                Visualização mobile do conteúdo social.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[color:var(--brand-navy)] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[color:var(--brand-navy-soft)]"
                >
                  Instagram
                </a>
                <a
                  href={BRAND.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-[color:var(--brand-navy)] px-6 py-2.5 text-sm font-bold text-[color:var(--brand-navy)] transition hover:bg-[color:var(--brand-surface)]"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
