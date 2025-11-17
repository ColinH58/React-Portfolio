/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";
import { UilDocumentLayoutLeft, UilFileAlt, UilReact, UilEnvelopes } from '@iconscout/react-unicons';

const Home = () => {
  const links = [
    {
      key: "Blog",
      route: "/Blog",
      ph: "Blog",
      icon: <UilDocumentLayoutLeft className="IconHomePage" />,
      display: true,
    },
    // {
    //   key: "Resume",
    //   route: "/Resume",
    //   ph: "Resume",
    //   icon: <UilFileAlt className="IconHomePage" />,
    //   display: true,
    // },
    {
      key: "Projects",
      route: "/Projects",
      ph: "Projects",
      icon: <UilReact className="IconHomePage" />,
      display: true,
    },
    {
      key: "Contact",
      route: "/Contact",
      ph: "Contact",
      icon: <UilEnvelopes className="IconHomePage" />,
      display: true,
    },
  ];

  return (
    <div className="HomePage">
      <h1 id="MyName">Colin Hoolwerf</h1>
      <div className="Links">
        {links.map((link) => {
          const { key, route, ph, icon, display } = link;
          if (display === true) {
            return (
              <div style={{fontSize: "3.25rem"}} key={key}>
              <Link to={route}>{icon}{ph}</Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Home;
