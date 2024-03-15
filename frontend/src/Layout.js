import React from "react";
import Header from "./Components/Header.js";
// import Footer from "./Components/Footer.js";
import "./input.css";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-50 text-gray-950 relative pt-28 sm:pt-36">
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] x1:left-[-15rem] 2xl:left-[-5rem]"></div>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
