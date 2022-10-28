import React from "react";
import Navbar from "./Navbar";
import { UilReact, UilJavaScript, UilDatabase } from '@iconscout/react-unicons';

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
              Weather App (OpenWeatherMap.org API)
            </a>
            <UilReact className="Icon" />
            <p style={{ fontSize: "1rem" }}>
              This is my first solo project after graduating from Fullstack Academy. This weather app, made in React,
              uses the OpenWeatherMap API and the GeoCities API to allow you to search the local weather
              anywhere on the planet.
            </p>
          </li>
          <li>
            <a
              href="https://mystifying-euclid-1fb75d.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Art Collector (Harvard Art API)
            </a>
            <UilReact className="Icon" />
            <p style={{ fontSize: "1rem" }}>
              A project from the Fullstack Academy Bootcamp curriculum, this is
              a website that lets you search for historical artifacts, art, and
              more using the Harvard API. This project was completed in React.
            </p>
          </li>
          <li>
            <a
              href="https://colin-hoolwerf-snake.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Classic Snake in JavaScript
            </a>
            <UilJavaScript className="Icon" />
            <p style={{ fontSize: "1rem" }}>
              Another project from the Fullstack Academy Bootcamp curriculum.
              This is the classic Snake game made in JavaScript. Eat the red
              square to grow while avoiding your tail and the walls. I added a
              difficulty slider to increase the Snake speed, as well as a score
              tracker to keep track of your highscore (for as long as the window
              is left open).
            </p>
          </li>
          <li>
            <a
              href="https://colin-hoolwerf-guessing-game.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Guessing Game in JavaScript
            </a>
            <UilJavaScript className="Icon" />
            <p style={{ fontSize: "1rem" }}>
              Another project from the Fullstack Academy Bootcamp curriculum. In
              this game, made with JavaScript, you are given 5 chances to guess
              a randomly generated number. I added hints that change dynamically
              with every guess. I also added a hint button that gives you 3
              answers, one of which is the correct answer, the other two are
              random numbers.
            </p>
          </li>
          <li>
            <a
              href="https://colin-hoolwerf-blackjack.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Blackjack Game in JavaScript
            </a>
            <UilJavaScript className="Icon" />
            <p style={{ fontSize: "1rem" }}>
              My very first solo project, made before my bootcamp. This is a
              very basic and simplified version of BlackJack, made in
              JavaScript. I added "AI" that plays by the same rules a dealer in
              a casino would.
            </p>
          </li>
        </ul>
        <hr />
      </div>
      <h2>Projects Deployed on Render</h2>
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
            <UilReact className="Icon" />
            <UilDatabase />
            <p style={{ fontSize: "1rem" }}>
              The final, capstone, project of the Fullstack Academy Bootcamp
              curriculum. This project was built with React and PostreSQL. This
              is a faux eCommerce website with a large inventory of exotic and
              mythical animals for purchase. You are able to search and sort the
              inventory. You are able to register an account, login and out, add
              animals to your cart, and read about each animal. The website will
              alert you when you try to add an animal to your cart that you have
              already added and preserves your cart when you leave or login.
            </p>
          </li>
          <li>
            <a
              href="https://rocky-oasis-30036.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              Wizard News (Hacker News Clone)
            </a>
            <UilJavaScript className="Icon" />
            <UilDatabase />
            <p style={{ fontSize: "1rem" }}>
              Another project from the Fullstack Academy Bootcamp curriculum.
              This is a "Hacker News" clone with hardcoded data stored in a
              pseudo backend and displayed in a frontend with Express routes.
              This project was built using JavaScript, Express, and Volleyball.
            </p>
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
