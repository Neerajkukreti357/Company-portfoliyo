"use client";
import GalleryGrid from "./GalleryGrid";
import { useLang } from "@/lib/i18n";
import { ui } from "@/data/ui";

export default function GalleryContent() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <h1 className="font-display text-6xl font-extrabold">{t(ui.gallery.title)}</h1>
      <p className="mb-10 mt-2 max-w-xl text-slate">{t(ui.gallery.sub)}</p>
      <GalleryGrid />
    </section>
  );
}
