import type { Metadata } from "next";
import GalleryContent from "@/components/GalleryContent";

export const metadata: Metadata = { title: "Projects | Completed tanks and plants" };

export default function GalleryPage() {
  return <GalleryContent />;
}
