"use client";
import VideoGrid from "./VideoGrid";
import { useLang } from "@/lib/i18n";
import { ui } from "@/data/ui";

export default function VideosContent() {
  const { t } = useLang();
  return (
    <div className="blueprint min-h-[70vh] bg-ink text-white">
      <section className="mx-auto max-w-7xl px-5 py-16">
        <h1 className="font-display text-6xl font-extrabold">{t(ui.videosPage.title)}</h1>
        <p className="mb-10 mt-2 max-w-xl text-white/70">{t(ui.videosPage.sub)}</p>
        <VideoGrid />
      </section>
    </div>
  );
}
