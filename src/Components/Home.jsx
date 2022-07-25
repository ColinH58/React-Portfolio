/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
      route: { pathname: "https://www.linkedin.com/in/colinhoolwerf/" },
      ph: "Contact",
      display: true,
    },
  ];
  return (
    <div className="Banner">
      <div className="HomePage">
        <h1 id="MyName">Colin Hoolwerf</h1>
        <div className="Links">
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
    </div>
    </div>
  );
};

export default Home;
