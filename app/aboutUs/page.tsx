import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = { title: "Contact | Get a quote on WhatsApp" };

export default function ContactPage() {
  return <ContactContent />;
}
