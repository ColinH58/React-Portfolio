import React from "react";

const Projects = () => {
  return (
    <>
      <div className="Projects">
        <h2>Projects Deployed on Netlify or Heroku</h2>
        <div className="ProjectList">
          <li>
            <a
              href="https://exotic-animal-shop.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Exotic Animals 'R Us (eCommerce Website)
            </a>
          </li>
          <li>
            <a
              href="https://sharp-poitras-b94dad.netlify.app/posts"
              target="_blank"
              rel="noreferrer"
            >
              Stranger's Things (Craig's List Clone)
            </a>
          </li>
          <li>
            <a
              href="https://mystifying-euclid-1fb75d.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Art Collector (Harvard Art API)
            </a>
          </li>
          <li>
            <a
              href="https://rocky-oasis-30036.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Wizard News (Hacker News Clone)
            </a>
          </li>
          <li>
            <a
              href="https://colin-hoolwerf-snake.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Classic Snake in Vanilla JavaScript
            </a>
          </li>
          <li>
            <a
              href="https://colin-hoolwerf-guessing-game.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Guessing Game in Vanilla JavaScript
            </a>
          </li>
          <li>
            <a
              href="https://colin-hoolwerf-blackjack.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Blackjack Game in Vanilla JavaScript
            </a>
          </li>
        </div>
        <hr />
        <h2>
          <a
            href="https://github.com/ColinH58"
            target="_blank"
            rel="noreferrer"
          >
            My GitHub Profile
          </a>
        </h2>
      </div>
    </>
  );
};

export default Projects;
