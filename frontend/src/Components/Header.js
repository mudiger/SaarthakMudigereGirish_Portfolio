import { useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("intro");

  return (
    <header className="text-gray-900 bg-white flex items-center justify-between px-4 py-6">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#intro"
              className={`${
                activeSection === "intro"
                  ? "text-blue-500 underline"
                  : "text-gray-500"
              } hover:text-blue-500`}
              onClick={() => setActiveSection("intro")}
            >
              Intro
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`${
                activeSection === "about"
                  ? "text-blue-500 underline"
                  : "text-gray-500"
              } hover:text-blue-500`}
              onClick={() => setActiveSection("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`${
                activeSection === "projects"
                  ? "text-blue-500 underline"
                  : "text-gray-500"
              } hover:text-blue-500`}
              onClick={() => setActiveSection("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`${
                activeSection === "skills"
                  ? "text-blue-500 underline"
                  : "text-gray-500"
              } hover:text-blue-500`}
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`${
                activeSection === "experience"
                  ? "text-blue-500 underline"
                  : "text-gray-500"
              } hover:text-blue-500`}
              onClick={() => setActiveSection("experience")}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={`${
                activeSection === "education"
                  ? "text-blue-500 underline"
                  : "text-gray-500"
              } hover:text-blue-500`}
              onClick={() => setActiveSection("education")}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${
                activeSection === "contact"
                  ? "text-blue-500 underline"
                  : "text-gray-500"
              } hover:text-blue-500`}
              onClick={() => setActiveSection("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
