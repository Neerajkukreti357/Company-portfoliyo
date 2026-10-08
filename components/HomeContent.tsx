"use client";
import Link from "next/link";
import Hero from "./Hero";
import ProjectCard from "./ProjectCard";
import VideoGrid from "./VideoGrid";
import Reviews from "./Reviews";
import { useLang } from "@/lib/i18n";
import { projects } from "@/data/site";
import { ui } from "@/data/ui";

export default function HomeContent() {
  const { t } = useLang();
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-5xl font-extrabold">{t(ui.home.builtTitle)}</h2>
            <p className="mt-2 max-w-xl text-slate">{t(ui.home.builtSub)}</p>
          </div>
          <Link href="/gallery" className="rounded border-2 border-ink px-5 py-2.5 font-semibold hover:bg-ink hover:text-white">
            {t(ui.home.viewAll)}
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </section>

      <section className="blueprint bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-5xl font-extrabold">{t(ui.home.videoTitle)}</h2>
              <p className="mt-2 max-w-xl text-white/70">{t(ui.home.videoSub)}</p>
            </div>
            <Link href="/videos" className="rounded border-2 border-white/60 px-5 py-2.5 font-semibold hover:bg-white hover:text-ink">
              {t(ui.home.allVideos)}
            </Link>
          </div>
          <VideoGrid limit={3} />
        </div>
      </section>

      <Reviews />

      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <h2 className="font-display text-5xl font-extrabold">{t(ui.home.ctaTitle)}</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate">{t(ui.home.ctaSub)}</p>
        <Link href="/aboutUs" className="mt-7 inline-block rounded bg-amber px-8 py-3.5 font-semibold text-ink hover:brightness-110">
          {t(ui.home.talk)}
        </Link>
      </section>
    </>
  );
}
