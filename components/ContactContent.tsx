"use client";

import { Phone, MapPin, Clock } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import Image from "next/image";
import appImages from "@/constants/imageConstants";

export default function ContactContent() {
  const { t } = useLang();

  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2">
      <div>
        <h1 className="font-display text-6xl font-extrabold">
          {t(ui.about.title)}
        </h1>

        <div className="mt-6">
          <Image
            src={appImages.me}
            alt="Founder"
            width={220}
            height={220}
            className="h-55 w-55 rounded-full object-cover mx-auto"
          />
        </div>

        <div className="mt-6 space-y-5 text-slate leading-relaxed">
          <p>{t(ui.about.sub)}</p>

          <p>{t(ui.about.experience)}</p>

          <p>{t(ui.about.approach)}</p>

          <p>{t(ui.about.commitment)}</p>
        </div>

        <ul className="mt-8 space-y-4">
          <li className="flex gap-3">
            <Phone className="mt-1 shrink-0 text-teal" size={20} />

            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="font-medium hover:text-teal transition"
            >
              {site.phone}
            </a>
          </li>

          <li className="flex gap-3">
            <MapPin className="mt-1 shrink-0 text-teal" size={20} />

            <span>{t(site.address)}</span>
          </li>

          <li className="flex gap-3">
            <Clock className="mt-1 shrink-0 text-teal" size={20} />

            <span>{t(site.hours)}</span>
          </li>
        </ul>
      </div>

      {/* <ContactForm /> */}
    </section>
  );
}
