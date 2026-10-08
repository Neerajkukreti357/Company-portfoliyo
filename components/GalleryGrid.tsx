"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useLang } from "@/lib/i18n";
import { categoryLabels, projects, type CatKey } from "@/data/site";
import { ui } from "@/data/ui";

const catKeys = Object.keys(categoryLabels) as CatKey[];

export default function GalleryGrid() {
  const { t } = useLang();
  const [cat, setCat] = useState<"all" | CatKey>("all");
  const list = cat === "all" ? projects : projects.filter((p) => p.category === cat);
  const chips: { key: "all" | CatKey; label: string }[] = [
    { key: "all", label: t(ui.gallery.all) },
    ...catKeys.map((k) => ({ key: k, label: t(categoryLabels[k]) })),
  ];

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {chips.map((c) => (
          <button
            key={c.key}
            onClick={() => setCat(c.key)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              cat === c.key ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-ink/15 hover:bg-ink/5"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => <ProjectCard key={p.id} p={p} />)}
      </div>
    </>
  );
}
