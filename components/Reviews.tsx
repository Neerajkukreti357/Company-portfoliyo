"use client";
import { Star } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { projects, reviews } from "@/data/site";
import { ui } from "@/data/ui";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

export default function Reviews() {
  const { t } = useLang();
  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize();

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-5xl font-extrabold">{t(ui.reviews.title)}</h2>
          <p className="mt-2 max-w-xl text-slate">{t(ui.reviews.sub)}</p>
        </div>
        <p className="flex items-center gap-3">
          <span className="font-display text-6xl font-extrabold leading-none">{avg}</span>
          <span className="max-w-24 text-sm text-slate">{t(ui.reviews.avg).replace("{n}", String(reviews.length))}</span>
        </p>
      </div>

      <Carousel
      className="reviews-carousel"
  showArrows={false}
  showStatus={false}
  showThumbs={false}
  showIndicators={true}
  autoPlay={true}
  infiniteLoop={true}
  interval={3000}
  transitionTime={500}
  swipeable={true}
  emulateTouch={true}
  centerMode={!isMobile}
  centerSlidePercentage={isMobile ? 100 : 33.33}
  renderIndicator={(onClickHandler, isSelected, index, label) => (
  <button
    key={index}
    type="button"
    onClick={onClickHandler}
    aria-label={label}
    className={`mx-1 inline-block h-2 rounded-full transition-all duration-300 cursor-pointer ${
      isSelected
        ? "w-8 bg-teal"
        : "w-2 bg-teal/30"
    }`}
  />
)}
>
  {reviews.map((r) => {
    const project = projects.find((p) => p.id === r.projectId);

    return (
      <figure
        key={r.id}
        className="mx-2 flex flex-col border-l-4 border-teal bg-white p-7 shadow-sm ring-1 ring-ink/10"
      >
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <Star
              key={n}
              size={20}
              className={
                n <= r.rating
                  ? "fill-amber text-amber"
                  : "text-ink/20"
              }
            />
          ))}
        </div>

        <blockquote className="mt-4 flex-1 text-lg leading-relaxed">
          {t(r.text)}
        </blockquote>

        <figcaption className="mt-5 border-t border-ink/10 pt-4">
          <p className="font-semibold">{t(r.name)}</p>

          <p className="text-sm text-slate">
            {t(r.company)}
          </p>

          {project && (
            <p className="mt-1 text-sm font-medium text-teal">
              {t(ui.reviews.project)} {t(project.title)}
            </p>
          )}
        </figcaption>
      </figure>
    );
  })}
</Carousel>
    </section>
  );
}
