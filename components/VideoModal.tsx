"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import type { Video } from "@/data/site";
import { ui } from "@/data/ui";

export default function VideoModal({
  video,
  onClose,
}: {
  video: Video;
  onClose: () => void;
}) {
  const { t } = useLang();
  const box = useRef<HTMLDivElement>(null);
  const entered = useRef(false);

  useEffect(() => {
    const el = box.current;

    el?.requestFullscreen?.().catch(() => {});

    const onFs = () => {
      if (document.fullscreenElement) {
        entered.current = true;
      } else if (entered.current) {
        onClose();
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };


    document.addEventListener("fullscreenchange", onFs);
    window.addEventListener("keydown", onKey);

    document.body.style.overflow = "hidden";

    return () => {
      entered.current = false;

      document.removeEventListener("fullscreenchange", onFs);
      window.removeEventListener("keydown", onKey);

      document.body.style.overflow = "";

      if (document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => {});
      }
    };
  }, [onClose]);

  return (
    <div
      ref={box}
      role="dialog"
      aria-modal="true"
      aria-label={t(video.title)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <button
        onClick={onClose}
        aria-label={t(ui.videosPage.close)}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/15 p-2 text-white hover:bg-white/30"
      >
        <X size={24} />
      </button>

      <video
        src={video.src}
        poster={video.thumb}
        controls
        autoPlay
        playsInline
        className="h-full w-full object-contain"
        onError={(err) => console.log(err)}
      />
    </div>
  );
}