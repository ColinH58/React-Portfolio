/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      key: "Blog",
      route: "/Blog",
      ph: "Blog",
      display: true,
    },
    {
      key: "Resume",
      route: "/Resume",
      ph: "Resume",
      display: true,
    },
    {
      key: "Projects",
      route: "/Projects",
      ph: "Projects",
      display: true,
    },
    {
      key: "Contact",
      route: "/Contact",
      ph: "Contact",
      display: true,
    },
  ];

  return (
    <div className="Navbar">
      <Link to={"/"}>Home</Link>
      {links.map((link) => {
        const { key, route, ph, display } = link;
        if (display === true) {
          return (
            <div key={key}>
              <Link to={route}>{ph}</Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Navbar;
