import React from "react";

function NavigationBar({ currentBuild, changeBuild }) {
  return (
    <nav>
      <ul className="nav flex-row nav-tabs">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => changeBuild("About")}
            className={currentBuild === "About"}
          >
            About
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => changeBuild("Projects")}
            className={currentBuild === "Projects"}
          >
            Projects
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => changeBuild("Resume")}
            className={currentBuild === "Resume"}
          >
            Resume
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => changeBuild("Contact")}
            className={currentBuild === "Contact"}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
