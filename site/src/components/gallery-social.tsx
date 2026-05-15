"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";

export function GallerySocial() {
  return (
    <section id="resultados" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Presença real nas redes
          </h2>
          <p className="mt-4 text-lg text-[color:var(--brand-muted)]">
            Momentos do dia a dia da equipe e dos trabalhos — o mesmo padrão que
            você pode esperar ao nos chamar.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-medium">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[color:var(--brand-navy)] px-5 py-2 text-white transition hover:bg-[color:var(--brand-navy-soft)]"
            >
              Instagram
            </a>
            <a
              href={BRAND.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[color:var(--brand-navy)] px-5 py-2 text-[color:var(--brand-navy)] transition hover:bg-[color:var(--brand-surface)]"
            >
              Facebook
            </a>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BRAND.galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-2xl bg-[color:var(--brand-surface)] ring-1 ring-black/5"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width:1024px) 50vw, 25vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
