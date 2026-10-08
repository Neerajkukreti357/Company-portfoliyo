"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import LangToggle from "./LangToggle";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";

const links = [
  { href: "/", label: ui.nav.home },
  { href: "/gallery", label: ui.nav.projects },
  { href: "/videos", label: ui.nav.videos },
  { href: "/aboutUs", label: ui.nav.contact },
];

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5">
        <Link
          href="/"
          className="font-display text-lg font-extrabold tracking-wide text-white sm:text-2xl"
        >
          {t(site.name)}
        </Link>

        <nav className="hidden gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`border-b-2 py-1 text-sm font-medium transition ${
                pathname === l.href
                  ? "border-amber text-white"
                  : "border-transparent text-white/70 hover:text-white"
              }`}
            >
              {t(l.label)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle />

          <Link
            href="/aboutUs"
            className="hidden rounded bg-amber px-4 py-2 text-sm font-semibold text-ink hover:brightness-110 md:block"
          >
            {t(ui.nav.quote)}
          </Link>

          <button
            className="text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={t(ui.nav.menu)}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-50 flex h-[100dvh] w-full flex-col bg-ink md:hidden"
            aria-label="Mobile"
          >
            {/* Mobile menu top bar */}
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="font-display text-lg font-extrabold tracking-wide text-white"
              >
                {t(site.name)}
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="text-white"
                aria-label="Close menu"
              >
                <X size={25} />
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col overflow-y-auto px-6 pb-6 pt-8">
              
              {/* YOUR EXISTING NAV ITEMS - UNCHANGED */}
              <div className="mx-auto flex w-full max-w-md flex-col gap-2">
                {links.map((l, index) => {
                  const active = pathname === l.href;

                  return (
                    <motion.div
                      key={l.href}
                      initial={{ x: -25, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.1 + index * 0.06,
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={`group relative flex items-center justify-between rounded-xl px-5 py-4 text-base font-medium transition-all duration-200 ${
                          active
                            ? "bg-white/10 text-white"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{t(l.label)}</span>

                        <span
                          className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                            active
                              ? "bg-amber"
                              : "bg-transparent group-hover:bg-white/40"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom contact section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 0.4,
                }}
                className="mx-auto mt-[20%] w-full max-w-md pt-10"
              >
                <div className="mb-5 border-t border-white/10 pt-6">
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                    Connect with us
                  </p>

                  {/* WhatsApp + FaFacebookF */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://wa.me/911234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-amber px-4 py-3.5 text-sm font-medium text-white transition hover:bg-white/15"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>

                    <a
                      href="https://FaFacebookF.com/yourpage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3.5 text-sm font-medium text-white transition hover:bg-white/15"
                    >
                      <FaFacebookF size={18} />
                      Facebook
                    </a>
                  </div>

                  {/* Phone */}
                  <a
                    href="tel:+911234567890"
                    className="mt-3 flex items-center gap-3 rounded-xl border border-white/10 px-4 py-4 transition hover:bg-white/5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Phone size={17} className="text-amber" />
                    </div>

                    <div>
                      <p className="text-xs text-white/40">
                        Call us
                      </p>

                      <p className="mt-0.5 text-sm font-medium text-white">
                        +91 12345 67890
                      </p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}