"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Photo from "./Photo";
import { useLang } from "@/lib/i18n";
import { projects, site } from "@/data/site";
import { ui } from "@/data/ui";

const slides = projects.slice(0, 4);

export default function Hero() {
  const { t } = useLang();
  const [i, setI] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setI((n) => (n + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const s = slides[i];

  return (
    <section className="relative isolate h-[calc(100svh-4rem)] min-h-150 overflow-hidden bg-ink text-white">
      <AnimatePresence>
        <motion.div
          key={s.id}
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className=" absolute inset-0">
            <Photo src={s.image} alt={t(s.title)} priority sizes="100vw" />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink/90 via-ink/60 to-ink/10" />
      <div className="blueprint absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center gap-10 px-5 lg:flex-row lg:items-center lg:justify-between lg:pb-20">
        <div className="max-w-2xl lg:pb-4">
          <h1 className="hero-h1 font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl">{t(ui.hero.title)}</h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            {t(site.tagline)} {t(ui.hero.years).replace("{n}", String(site.yearsExperience))}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/gallery" className="rounded bg-amber px-6 py-3 font-semibold text-ink hover:brightness-110">
              {t(ui.hero.seeProjects)}
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded border border-white/40 px-6 py-3 font-semibold hover:bg-white/10"
            >
              <MessageCircle size={18} /> {t(ui.hero.chat)}
            </a>
          </div>
        </div>

        <div className="nameplate w-full max-w-sm shrink-0 rounded-sm px-8 py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm font-medium text-slate">{t(ui.hero.builtByUs)}</p>
              <h2 className="font-display text-3xl font-extrabold leading-none">{t(s.title)}</h2>
              <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                <dt className="text-slate">{t(ui.hero.location)}</dt><dd className="font-medium">{t(s.location)}</dd>
                <dt className="text-slate">{t(ui.hero.capacity)}</dt><dd className="font-medium">{t(s.capacity)}</dd>
                <dt className="text-slate">{t(ui.hero.year)}</dt><dd className="font-medium">{s.year}</dd>
              </dl>
            </motion.div>
          </AnimatePresence>
          <div className="mt-5 flex gap-2">
            {slides.map((sl, n) => (
              <button
                key={sl.id}
                onClick={() => setI(n)}
                aria-label={`${t(ui.hero.show)} ${t(sl.title)}`}
                className={`h-1.5 flex-1 rounded-full transition ${n === i ? "bg-teal" : "bg-slate/30 hover:bg-slate/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
