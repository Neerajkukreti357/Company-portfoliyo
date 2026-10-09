"use client";
import { useCallback, useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { useLang } from "@/lib/i18n";
import { galleryPhotos } from "@/data/site";
import { ui } from "@/data/ui";

// Masonry layout: no fixed heights. Each photo keeps its own shape.
// 1 column on phones, 2 on tablets, 3 on desktops.
export default function PhotoGallery() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {galleryPhotos.map((p, i) => (
          <button
            key={p.src}
            onClick={() => setOpen(i)}
            aria-label={`${t(ui.gallery.open)} ${t(p.alt)}`}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-sm bg-ink-2 ring-1 ring-ink/10"
          >
            
            <Image
              src={p.src}
              alt={t(p.alt)}
              width={0}
              height={0}
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              className="h-auto w-full transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-sm text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
              {t(p.alt)}
            </span>
          </button>
        ))}
      </div>
      {open !== null && <Lightbox photos={galleryPhotos} index={open} onClose={close} onIndex={setOpen} />}
    </>
  );
}