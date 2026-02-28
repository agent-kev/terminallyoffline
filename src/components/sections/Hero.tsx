"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero({
  title,
  subtitle,
  ctaText = "Disconnect",
  ctaHref = "/disconnect",
  imageSrc,
  imageAlt = "Hero background",
  height = "full",
}: {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  height?: "full" | "half";
}) {
  return (
    <section
      className={`relative flex items-end ${
        height === "full" ? "min-h-[100svh]" : "min-h-[60vh]"
      }`}
    >
      {/* Background Image */}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
      )}

      {/* Gradient Overlay — heavier at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Fallback when no image */}
      {!imageSrc && (
        <div className="absolute inset-0 bg-gradient-to-br from-bush via-tui to-volcanic" />
      )}

      {/* Content — pinned to bottom */}
      <Container size="lg" className="relative z-10 pb-16 md:pb-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-5 text-base sm:text-lg text-white/80 max-w-lg leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="mt-8"
          >
            <Button href={ctaHref} size="lg">
              {ctaText}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
