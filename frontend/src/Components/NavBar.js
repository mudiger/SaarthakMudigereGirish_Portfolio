import React, { useState, useEffect } from "react";

const NavigationBar = () => {
  // Add state to manage the navigation bar's position
  const [navbarPosition, setNavbarPosition] = useState("absolute");

  // Add effect to update the navigation bar's position when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarPosition("fixed");
      } else {
        setNavbarPosition("absolute");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${navbarPosition}`}>
      {/* Add your navigation links here */}
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  );
};

export default NavigationBar;
