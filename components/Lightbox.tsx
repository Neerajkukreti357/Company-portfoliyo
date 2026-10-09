"use client";
import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { ui } from "@/data/ui";
import type { GalleryPhoto } from "@/data/site";

type Props = { photos: GalleryPhoto[]; index: number; onClose: () => void; onIndex: (i: number) => void };

// Full-screen photo preview. The image fits the screen whatever its shape (wide, tall or square).
export default function Lightbox({ photos, index, onClose, onIndex }: Props) {
  const { t } = useLang();
  const touchX = useRef<number | null>(null);
  const prev = useCallback(() => onIndex((index - 1 + photos.length) % photos.length), [index, photos.length, onIndex]);
  const next = useCallback(() => onIndex((index + 1) % photos.length), [index, photos.length, onIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const p = photos[index];
  const btn = "absolute z-10 rounded-full bg-white/15 p-2.5 text-white hover:bg-white/30";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t(p.alt)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx > 0 ? prev : next)(); // swipe left or right
        touchX.current = null;
      }}
    >
      <button onClick={onClose} aria-label={t(ui.gallery.close)} className={`${btn} right-3 top-3 sm:right-5 sm:top-5`}>
        <X />
      </button>
      <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label={t(ui.gallery.prev)} className={`${btn} left-3 top-1/2 -translate-y-1/2 sm:left-5`}>
        <ChevronLeft />
      </button>
      <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label={t(ui.gallery.next)} className={`${btn} right-3 top-1/2 -translate-y-1/2 sm:right-5`}>
        <ChevronRight />
      </button>

      <figure className="flex max-h-full max-w-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img key={p.src} src={p.src} alt={t(p.alt)} className="h-auto max-h-[82vh] w-auto max-w-[94vw] object-contain" />
        <figcaption className="mt-3 text-center text-sm text-white/80">
          {t(p.alt)} <span className="text-white/50">({index + 1}/{photos.length})</span>
        </figcaption>
      </figure>
    </div>
  );
}