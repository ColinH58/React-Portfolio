/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const links = [
    {
      key: "Blog",
      route: "/Blog",
      ph: "Blog",
      internal: true,
    },
    {
      key: "Resume",
      route: "/Resume",
      ph: "Resume",
      internal: true,
    },
    {
      key: "Projects",
      route: "/Projects",
      ph: "Projects",
      internal: true,
    },
    {
      key: "Contact",
      route: "https://www.linkedin.com/in/colinhoolwerf/",
      ph: "Contact",
      internal: false,
    },
  ];
  return (
    <div className="Banner">
      <div className="HomePage">
        <h1 id="MyName">Colin Hoolwerf</h1>
        <div className="Links">
          {links.map((link) => {
            const { key, route, ph, internal } = link;
            if (internal === true) {
              return (
                <div key={key}>
                  <Link to={route}>{ph}</Link>
                </div>
              );
            } else {
              return (
                <div key={key}>
                  <a href={route} target="_blank" rel="noreferrer">
                    {ph}
                  </a>
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
