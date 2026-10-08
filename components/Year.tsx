"use client";
import { useSyncExternalStore } from "react";

// Current year, read on the client only (avoids the new Date() prerender error).
export default function Year() {
  const year = useSyncExternalStore(
    () => () => {},
    () => String(new Date().getFullYear()),
    () => ""
  );
  return <span>{year}</span>;
}
