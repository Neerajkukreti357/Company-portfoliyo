"use client";
import { MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/data/site";
import { ui } from "@/data/ui";

export default function WhatsAppButton() {
  const { t } = useLang();
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t(ui.footer.whatsappAria)}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <MessageCircle size={28} />
    </a>
  );
}
