import React, { useState } from "react";
import Container from "../components/Container";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    } else if (!name) {
      setErrorMessage("Please enter your name.");
      return;
    } else if (!message) {
      setErrorMessage("Please enter a message.");
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  };

  return (
    <section className="pt-[12rem] py-16 h-screen">
      <Container>
        <h2 className="text-3xl tracking-tight font-bold mb-8">Contact Me</h2>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="p-2 border border-[#484848] rounded text-black focus:outline-none "
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="p-2 border border-[#484848] rounded text-black focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleInputChange}
              className="p-2 border border-[#484848] rounded text-black focus:outline-none"
              required
            />
          </div>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <div>
            <button
              onClick={handleFormSubmit}
              className="bg-[#2a2a2a] text-white px-8 py-2 mt-10 rounded-lg border border-[#484848] hover:bg-[#484848] transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
