"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { services, site } from "@/data/site";
import { ui } from "@/data/ui";

// No email or backend: the form builds a message and opens WhatsApp with it filled in.
export default function ContactForm() {
  const { t } = useLang();
  const [f, setF] = useState({ name: "", phone: "", service: 0, message: "" });
  const set = (k: "name" | "phone" | "message") => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `${t(ui.contact.hello)} ${t(site.name)},\n\n` +
      `${t(ui.contact.name)}: ${f.name}\n` +
      `${t(ui.contact.phone)}: ${f.phone}\n` +
      `${t(ui.contact.lookingFor)}: ${t(services[f.service])}\n\n${f.message}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  const input =
    "mt-1 w-full rounded border border-ink/20 bg-white px-4 py-3 outline-none focus:border-teal focus:ring-2 focus:ring-teal/30";

  return (
    <form onSubmit={submit} className="space-y-5 rounded-sm bg-white p-6 shadow-sm ring-1 ring-ink/10 sm:p-8">
      <label className="block text-sm font-medium">{t(ui.contact.name)}
        <input required value={f.name} onChange={set("name")} className={input} />
      </label>
      <label className="block text-sm font-medium">{t(ui.contact.phone)}
        <input required type="tel" value={f.phone} onChange={set("phone")} className={input} />
      </label>
      <label className="block text-sm font-medium">{t(ui.contact.need)}
        <select value={f.service} onChange={(e) => setF({ ...f, service: Number(e.target.value) })} className={input}>
          {services.map((s, i) => <option key={s.en} value={i}>{t(s)}</option>)}
        </select>
      </label>
      <label className="block text-sm font-medium">{t(ui.contact.details)}
        <textarea required rows={4} value={f.message} onChange={set("message")} placeholder={t(ui.contact.placeholder)} className={input} />
      </label>
      <button className="flex w-full items-center justify-center gap-2 rounded bg-[#25D366] px-6 py-3.5 font-semibold text-ink hover:brightness-110">
        <MessageCircle size={20} /> {t(ui.contact.send)}
      </button>
    </form>
  );
}
