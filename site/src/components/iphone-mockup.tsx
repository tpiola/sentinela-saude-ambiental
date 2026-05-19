"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Slide = {
  src: string;
  alt: string;
};

type IPhoneMockupProps = {
  slides: readonly Slide[];
  className?: string;
};

/** Moldura leve estilo iPhone para reels / galeria social. */
export function IPhoneMockup({ slides, className }: IPhoneMockupProps) {
  const items = slides.length > 0 ? slides : [{ src: "", alt: "" }];
  const primary = items[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="mx-auto w-full max-w-[260px] motion-reduce:animate-none"
      >
        <motion.div
          className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.25rem] border-[3px] border-slate-800 bg-slate-950 p-2 shadow-2xl ring-1 ring-white/10"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <motion.div
            className="absolute top-2 left-1/2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black"
            aria-hidden
          />
          <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-slate-900">
            {primary.src ? (
              <Image
                src={primary.src}
                alt={primary.alt}
                fill
                className="object-cover"
                sizes="260px"
              />
            ) : (
              <div className="flex h-full items-center justify-center px-4 text-center text-xs text-slate-500">
                Exporte fotos do Instagram para public/media/sentinela/instagram
              </div>
            )}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
