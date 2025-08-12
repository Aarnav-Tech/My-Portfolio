"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";

const EmailSection = () => {
  const email = "aarnavlokesh1@gmail.com";
  const subject = encodeURIComponent("Hello from your portfolio!");
  const body = encodeURIComponent("Hi Aarnav, I wanted to reach out regarding...");

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  const githubUrl = "https://github.com/Aarnav-Tech";

  return (
    <section id="contact" className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-white text-3xl font-bold mb-10 text-center">Contact</h2>

      <div className="flex items-center justify-between">
        {/* Email button aligned left */}
        <a
          href={mailtoLink}
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold text-center shadow-lg
                     hover:from-teal-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send Email"
        >
          📨 Send Email
        </a>

        {/* GitHub button aligned right */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold shadow-lg
                     hover:from-teal-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400"
        >
          <FaGithub size={24} />
          GitHub
        </a>
      </div>
    </section>
  );
};

export default EmailSection;
