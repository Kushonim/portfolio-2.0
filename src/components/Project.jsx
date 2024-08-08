import React from "react";

export default function Project({ project }) {
  return (
    <div
      className="p-4 border border-[#484848] rounded-xl shadow-md"
      style={{ backgroundColor: project.color }}
    >
      <h1 className="font-bold mb-4">{project.title}</h1>
      <a
        href={project.link}
        target="_blank"
        className="hover:text-[#999] duration-300 transition-all text-sm"
      >
        Application / Demo
      </a>
      <br />
      <a
        href={project.github}
        className="hover:text-[#999] duration-300 transition-all text-sm"
        target="_blank"
      >
        GitHub Repo
      </a>
    </div>
  );
}
