"use client";
import { Languages } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { ui } from "@/data/ui";

export default function LangToggle() {
  const { lang, setLang, t } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "hi" : "en")}
      aria-label={t(ui.nav.switchAria)}
      className="flex items-center gap-1.5 rounded border border-white/30 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10"
    >
      <Languages size={16} />
      {t(ui.nav.switchTo)}
    </button>
  );
}
