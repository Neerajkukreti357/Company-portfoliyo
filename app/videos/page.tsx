import type { Metadata } from "next";
import VideosContent from "@/components/VideosContent";

export const metadata: Metadata = { title: "Videos | Site and plant walkthroughs" };

export default function VideosPage() {
  return <VideosContent />;
}
