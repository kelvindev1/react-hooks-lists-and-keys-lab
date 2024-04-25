import React from "react";
import Home from "./Home";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
