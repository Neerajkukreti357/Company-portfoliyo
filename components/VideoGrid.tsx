"use client";
import { useCallback, useState } from "react";
import { Play } from "lucide-react";
import Photo from "./Photo";
import VideoModal from "./VideoModal";
import { useLang } from "@/lib/i18n";
import { videos as allVideos, type Video } from "@/data/site";

export default function VideoGrid({ limit }: { limit?: number }) {
  const { t } = useLang();
  const [active, setActive] = useState<Video | null>(null);
  const close = useCallback(() => setActive(null), []);
  const list = limit ? allVideos.slice(0, limit) : allVideos;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((v) => (
          <button
            key={v.id}
            onClick={() => setActive(v)}
            className="group overflow-hidden rounded-sm bg-ink-2 text-left ring-1 ring-white/10 transition hover:ring-amber"
          >
            <div className="relative aspect-video overflow-hidden">
              <Photo src={v.thumb} alt="" className="opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber text-ink shadow-lg transition group-hover:scale-110">
                  <Play size={26} fill="currentColor" />
                </span>
              </span>
              <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white">{v.duration}</span>
            </div>
            <div className="p-4 text-white">
              <h3 className="font-display text-xl font-extrabold">{t(v.title)}</h3>
              <p className="mt-1 text-sm text-white/60">{t(v.location)}</p>
            </div>
          </button>
        ))}
      </div>
      {active && <VideoModal video={active} onClose={close} />}
    </>
  );
}
