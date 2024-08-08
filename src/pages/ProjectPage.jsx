import React from "react";
import Container from "../components/Container";
import Project from "../components/Project";

const projects = [
  {
    title: "Office-Break-Room",
    link: "https://office-break-room.onrender.com",
    github: "https://github.com/emulcahey/Office_Break_Room",
    color: "#f5f1e4",
  },
  {
    title: "tenacious-test-taker",
    link: "https://text-editor-9xtb.onrender.com/",
    github: "https://github.com/Kushonim/tenacious-text-taker",
    color: "#2d5b50",
  },
  {
    title: "face-db-book",
    link: "https://drive.google.com/file/d/1T4Bo9jfgu4IFRFJeu0MZVfNIqDmI56hQ/view",
    github: "https://github.com/Kushonim/face-db-book",
    color: "#2d5b50",
  },
  {
    title: "e-comsomnia-db",
    link: "https://drive.google.com/file/d/1OzlCOwlzraciStEscaAKdVkMwekzWA1s/view",
    github: "https://github.com/Kushonim/e-comsomnia-db",
    color: "#f5f1e4",
  },
  {
    title: "PsycheScape",
    link: "https://github.com/anton-oz/PsycheScape",
    github: "https://github.com/anton-oz/PsycheScape",
    color: "#f5f1e4",
  },
  {
    title: "project-pal",
    link: "https://kushonim.github.io/project-pal/",
    github: "https://github.com/Kushonim/project-pal",
    color: "#2d5b50",
  },
];

export default function ProjectPage() {
  return (
    <section className="pt-[12rem] py-16 h-screen">
      <Container>
        <h2 className="text-3xl tracking-tight font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
