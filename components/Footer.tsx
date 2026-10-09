"use client";

import Link from "next/link";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { services, site } from "@/data/site";
import { ui } from "@/data/ui";
import Year from "./Year";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="blueprint relative overflow-hidden bg-ink text-white">
      <div className="h-1.5 bg-linear-to-r from-amber via-amber/40 to-teal" />

      <p aria-hidden className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] font-extrabold leading-none text-white/4">
        {t(site.short)}
      </p>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="font-display text-4xl font-extrabold leading-none">{t(site.name)}</h2>
          <p className="mt-4 max-w-xs text-white/70">{t(site.tagline)}</p>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded bg-[#25D366] px-5 py-3 font-semibold text-ink hover:brightness-110"
          >
            <MessageCircle size={18} /> {t(ui.footer.msgUs)}
          </a>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-display text-2xl font-extrabold text-amber">{t(ui.footer.services)}</h3>
          <ul className="mt-4 space-y-2 text-white/80">
            {services.map((s) => (
              <li key={s.en} className="border-l-2 border-teal pl-3">{t(s)}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-display text-2xl font-extrabold text-amber">{t(ui.footer.pages)}</h3>
          <ul className="mt-4 space-y-2 text-white/80">
            <li><Link href="/project" className="hover:text-white">{t(ui.nav.projects)}</Link></li>
            <li><Link href="/videos" className="hover:text-white">{t(ui.nav.videos)}</Link></li>
            <li><Link href="/aboutUs" className="hover:text-white">{t(ui.nav.contact)}</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-display text-2xl font-extrabold text-amber">{t(ui.footer.contact)}</h3>
          <ul className="mt-4 space-y-3 text-white/80">
            <li className="flex gap-3"><Phone size={18} className="mt-1 shrink-0 text-teal" /><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">{site.phone}</a></li>
            <li className="flex gap-3"><MapPin size={18} className="mt-1 shrink-0 text-teal" />{t(site.address)}</li>
            <li className="flex gap-3"><Clock size={18} className="mt-1 shrink-0 text-teal" />{t(site.hours)}</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-5 py-5 text-center text-sm text-white/50">
        © <Year /> {t(site.name)}. {t(ui.footer.rights)}
      </div>
    </footer>
  );
}
