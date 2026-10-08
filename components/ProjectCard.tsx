"use client";
import { MapPin } from "lucide-react";
import Photo from "./Photo";
import { useLang } from "@/lib/i18n";
import { categoryLabels, type Project } from "@/data/site";

export default function ProjectCard({ p }: { p: Project }) {
  const { t } = useLang();
  return (
    <article className="group overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-ink/10 transition hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Photo src={p.image} alt={t(p.title)} className="transition duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-sm bg-amber px-2.5 py-1 text-xs font-semibold text-ink">
          {t(categoryLabels[p.category])}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl font-extrabold leading-tight">{t(p.title)}</h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-slate">
          <MapPin size={14} /> {t(p.location)}, {p.year}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink/80">{t(p.summary)}</p>
        <p className="mt-4 border-t border-ink/10 pt-3 text-sm font-semibold text-teal">{t(p.capacity)}</p>
      </div>
    </article>
  );
}
