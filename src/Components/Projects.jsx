import React from "react";
import Navbar from "./Navbar";

const Projects = () => {
  return (
    <div className="Projects">
      <Navbar />
      <h2>Projects Deployed on Netlify</h2>
      <div className="ProjectList">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <a
              href="https://mystifying-euclid-1fb75d.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Art Collector (Harvard Art API)
            </a>
          </li>
          <li>
            <a
              href="https://colin-hoolwerf-snake.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Classic Snake in Vanilla JavaScript
            </a>
          </li>
          <li>
            <a
              href="https://colin-hoolwerf-guessing-game.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Guessing Game in Vanilla JavaScript
            </a>
          </li>
          <li>
            <a
              href="https://colin-hoolwerf-blackjack.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Blackjack Game in Vanilla JavaScript
            </a>
          </li>
        </ul>
        <hr />
      </div>
      <h2>Projects Deployed on Heroku</h2>
      <div className="ProjectList">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <a
              href="https://exotic-animal-shop.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              Exotic Animals 'R Us (eCommerce Website)
            </a>
          </li>
          <li>
            <a
              href="https://rocky-oasis-30036.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              Wizard News (Hacker News Clone)
            </a>
          </li>
        </ul>
        <hr />
      </div>
      <h2>
        <a href="https://github.com/ColinH58" rel="noreferrer" target="_blank">
          My GitHub Profile
        </a>
      </h2>
    </div>
  );
};

export default Projects;
