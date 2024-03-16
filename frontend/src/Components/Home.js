import React from "react";
import Intro from "./HomeComponents/intro.js";
import About from "./HomeComponents/about.js";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-4 h-screen">
      <Intro />
      <p className="mb-20"></p>
      <About />
    </div>
  );
}

export default Home;
