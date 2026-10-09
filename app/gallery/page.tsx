'use client'

import PhotoGallery from "@/components/PhotoGallery";
import { ui } from "@/data/ui";
import { useLang } from "@/lib/i18n";


export default function GalleryPage() {
    const { t } = useLang();
  
  return <section className="mx-auto max-w-7xl px-5 pb-8 mt-8">
  <h2 className="font-display text-5xl font-extrabold">{t(ui.gallery.photosTitle)}</h2>
  <p className="mb-8 mt-2 max-w-xl text-slate">{t(ui.gallery.photosSub)}</p>
  <PhotoGallery />
</section>;
}
