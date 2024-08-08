import React from "react";
import Container from "../components/Container";

export default function ResumePage() {
  return (
    <section className="pt-[12rem] py-16 h-screen">
      <Container>
        <h2 className="text-3xl tracking-tight font-bold mb-8">Resume:</h2>
        <div className="flex flex-col gap-8">
          <a
            href="/Austin-Lees-Resume.pdf"
            download
            className="hover:text-[#999] transition duration-300 underline"
          >
            Download Here
          </a>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Frontend Skills</h3>
              <ul className="ml-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>JQuery</li>
                <li>Tailwind</li>
                <li>HandlerbarJS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Backend Skills</h3>
              <ul className="ml-2">
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>ExpressJS</li>
                <li>GraphQL</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
