"use client";
import Image from "next/image";
import { useState } from "react";

type Props = { src: string; alt: string; className?: string; priority?: boolean; sizes?: string };

// Shows a steel-blue placeholder if the image file is missing.
export default function Photo({ src, alt, className = "", priority = false, sizes = "(min-width:1024px) 33vw, 100vw" }: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-ink-2 to-teal">
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className={`object-cover ${className}`}
        />
      )}
    </div>
  );
}
