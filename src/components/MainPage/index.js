import React, { useState } from "react";
import About from "../Pages/AboutMe";
import Projects from "../Pages/Projects";
import Resume from "../Pages/Resume";
import Contact from "../Pages/ContactPage";
import NavBar from "../NavBar";

export default function BuildPage() {
  const [currentBuild, setCurrentBuild] = useState("Home");

  const pageBuild = () => {
    if (currentBuild === "Projects") {
      return <Projects />;
    }
    if (currentBuild === "Resume") {
      return <Resume />;
    }
    if (currentBuild === "Contact") {
      return <Contact />;
    }
    return <About />;
  };

  const changeTheBuild = (page) => setCurrentBuild(page);

  return (
    <div>
      <NavBar currentBuild={currentBuild} changeBuild={changeTheBuild} />
      {pageBuild()}
    </div>
  );
}
