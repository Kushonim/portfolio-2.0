import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="mt-4 w-full fixed">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#2a2a2a] border border-[#484848] p-4 rounded-xl">
          <h1 className="font-bold tracking-tight text-xl hover:text-[#999] transition-all duration-300">
            <Link to="/">Austin Lee</Link>
          </h1>
          <Navbar />
        </div>
      </Container>
    </nav>
  );
}
