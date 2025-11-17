import React from "react";
import Navbar from "./Navbar";
import { UilJavaScript } from "@iconscout/react-unicons";

const Projects = () => {
  return (
    <div className="Projects">
      <Navbar />
      <h2>Projects Deployed on Netlify</h2>
      <div className="ProjectList">
        <ul style={{ listStyleType: "none" }}>
          {/* <li>
            <a
              href="https://colin-hoolwerf-art-collector.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Art Collector (Harvard Art API)
            </a>
            <UilReact className="Icon" />
            <p style={{ fontSize: "1rem" }}>
              A project from the Fullstack Academy Bootcamp curriculum, this is
              a website that lets you search for historical artifacts, art, and
              more using the Harvard API. This project was completed in{" "}
              <strong>React</strong>.
            </p>
          </li>
          <li>
            <a
              href="https://colin-hoolwerf-strangers-things.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Stranger's Things (CRUD App)
            </a>
            <UilReact className="Icon" />
            <p style={{ fontSize: "1rem" }}>
              The first group project from the Fullstack Academy Bootcamp, this
              project is a Craig's List/eBay clone and uses a class API. This is
              my first CRUD app and my first app with login and registration
              functionality. This app allows you to list items for sale, update
              the item, delete the item, and read all of the items available.
              This project was completed in <strong>React</strong>.
            </p>
          </li>
          <li>
            <a
              href="https://colin-hoolwerf-grocery-list.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Grocery List App
            </a>
            <UilReact className="Icon" />
            <p style={{ fontSize: "1rem" }}>
              A spin on a classic starter app, the to-do list app. This is a
              very simple grocery list app where you can add items to a list,
              cross them off as you complete them, and delete them entirely when
              you're ready to. This starter project was built in{" "}
              <strong>React</strong>.
            </p>
          </li> */}
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
              A project from my Fullstack Academy Bootcamp curriculum and my 3rd game.
              This is the classic Snake game made in <strong>JavaScript</strong>
              . Eat the red square to grow while avoiding your tail and the
              walls. I added a difficulty slider to increase the Snake speed, as
              well as a score tracker to keep track of your highscore (for as
              long as the window is left open).
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
              Another project from the Fullstack Academy Bootcamp curriculum and my 2nd game. In
              this game, made with <strong>JavaScript</strong>, you are given 5
              chances to guess a randomly generated number. I added hints that
              change dynamically with every guess. I also added a hint button
              that gives you 3 answers, one of which is the correct answer, the
              other two are random numbers.
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
              My very first solo project, made before my bootcamp, and my first game. This is a
              very basic and simplified version of BlackJack, made in{" "}
              <strong>JavaScript</strong>. I added "AI" that plays by the same
              rules a dealer in a casino would.
            </p>
          </li>
        </ul>
        {/* <hr /> */}
      </div>
      {/* <h2>Projects Deployed on Heroku</h2>
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
              curriculum. This project was built with{" "}
              <strong>React and PostreSQL</strong>. This is a faux eCommerce
              website with a large inventory of exotic and mythical animals for
              purchase. You are able to search and sort the inventory. You are
              able to register an account, login and out, add animals to your
              cart, and read about each animal. The website will alert you when
              you try to add an animal to your cart that you have already added
              and preserves your cart when you leave or login.
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
              This project was built using{" "}
              <strong>JavaScript, Express, and Volleyball</strong>.
            </p>
          </li>
        </ul>
        <hr />
      </div>
      <h2>
        <a href="https://github.com/ColinH58" rel="noreferrer" target="_blank">
          My GitHub Profile
        </a>
      </h2> */}
    </div>
  );
};

export default Projects;
