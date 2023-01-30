import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const NavLinks = links.map((link) => {
    return <a  href={`#${link}`}key={link}>{link}</a>
  })

  return <nav>{NavLinks}</nav>;
}

export default NavBar;
