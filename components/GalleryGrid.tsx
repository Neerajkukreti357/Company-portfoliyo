"use client";
import ProjectCard from "./ProjectCard";
import {  projects } from "@/data/site";

export default function GalleryGrid() {
  const list = projects ;

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => <ProjectCard key={p.id} p={p} />)}
      </div>
    </>
  );
}
