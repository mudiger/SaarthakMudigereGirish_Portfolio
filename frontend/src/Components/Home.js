import React from "react";
import Intro from "./HomeComponents/intro.js";
import About from "./HomeComponents/about.js";

function Home() {
  return (
    // className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5"
    <div classname="mb-10 px-18 text-center text-gray-500">
      <Intro />
      <About />
    </div>
  );
}

export default Home;
