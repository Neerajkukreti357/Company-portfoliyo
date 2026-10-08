"use client";
import { Phone, MapPin, Clock } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/data/site";
import { ui } from "@/data/ui";

export default function ContactContent() {
  const { t } = useLang();
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2">
      <div>
  <h1 className="font-display text-6xl font-extrabold">
    {t(ui.about.title)}
  </h1>

  <p className="mt-3 max-w-2xl text-slate">
    {t(ui.about.sub)}
  </p>

  <ul className="mt-8 space-y-4">
    <li className="flex gap-3">
      <Phone className="mt-1 text-teal" size={20} />
      <a
        href={`tel:${site.phone.replace(/\s/g, "")}`}
        className="font-medium"
      >
        {site.phone}
      </a>
    </li>

    <li className="flex gap-3">
      <MapPin className="mt-1 text-teal" size={20} />
      {t(site.address)}
    </li>

    <li className="flex gap-3">
      <Clock className="mt-1 text-teal" size={20} />
      {t(site.hours)}
    </li>
  </ul>
</div>
      {/* <ContactForm /> */}
    </section>
  );
}
