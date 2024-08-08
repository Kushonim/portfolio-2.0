import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="flex gap-3 sm:gap-8 text-sm">
      <li className="hover:text-[#999] transition-all duration-300">
        <Link to="/about">About</Link>
      </li>
      <li className="hover:text-[#999] transition-all duration-300">
        <Link to="/projects">Projects</Link>
      </li>
      <li className="hover:text-[#999] transition-all duration-300">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="hover:text-[#999] transition-all duration-300">
        <Link to="/resume">Resume</Link>
      </li>
    </ul>
  );
}
