import React from "react";
import Container from "../components/Container";

export default function AboutPage() {
  return (
    <section className="pt-[12rem] py-16 h-screen">
      <Container>
        <h2 className="text-3xl tracking-tight font-bold mb-8">About Me</h2>
        <div className="flex flex-col gap-10">
          <p>
            Student at the University of Minnesota Twin Cities and a 
            junior full-stack web developer. I'm quick to learn and
            find enjoyment in solving puzzle-problems and creating projects 
            in my spare time. With eagerness to get into the field, I like to keep
            up to date with the latest trends and connect with other developers.
          </p>
          <p>
            I am proficient in Javascript, React, Java,
            Python, MongoDB, Node.js, Express, Handlebar.js, and MySQL. 
            With a variety of projects and challenges in my portfolio 
            and horizons, I'm excited to improve my skills and contribute 
            to meaningful aplications.
          </p>
          <p>
            Although I am very passionate about developing video games, I find
            interest in UIX design and enjoy working either front or back end work!
            My flexibility and thirst for knowledge are great indicators of my hardworking
            and organizational capabilities. That said, I am open to any work and appreciate
            any opportunities and reach outs.
          </p>
        </div>
      </Container>
    </section>
  );
}
