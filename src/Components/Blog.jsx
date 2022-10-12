import React from "react";
import Navbar from "./Navbar";

const Blog = () => {
  return (
    <div>
        <Navbar />
      <div className="AboutSetup">
        <h2>My Coding Journey</h2>
        <p>
          I officially started my coding journey on <b>June 5th, 2021.</b> I had
          started, and stopped, twice before but this time I was committed! I
          was ready to change my career and learn a new skill. I started out
          using Codecademy and YouTube, about 16 weeks in I decided to sign up
          for a coding boot camp, Fullstack Academy, hosted through the
          University of Texas at Dallas.
        </p>

        <p>
          To help me stay focused and accountable, before the boot camp, I set a
          goal and kept a daily journal of my progress. My goal was to complete
          the Full Stack Developer course on Codecademy. Starting with the Front
          End Developer section, pausing my progress to build out my portfolio,
          then resuming the Back End section while searching for a Front End
          Developer position. I didn’t ultimately stick to this original plan. I
          saw what I was doing wasn’t working, so halfway through it, I decided
          to sign up for a boot camp.
        </p>

        <p>
          I started my journey with a strict timeline to follow but adjusted and
          shifted the goalposts as I figured out what worked and what didn’t.
          Through it all, I never lost sight of the ultimate goal: Developing
          and honing the necessary skills for a career change. Below is my
          weekly journal through my first year!
        </p>
      </div>

      <div className="CodingJournal">
        <h2>Coding Journal</h2>
        <ul>
          <li>
            {" "}
            <u>Week 0: Saturday, June 5 - Sunday, June 6</u> <br />
            I started by first resetting all my previous progress on Codecademy,
            then subscribing to the Fullstack Engineer Pro course. The first two
            days, and my first “week”, I was excited and probably overdid it a
            bit. I spent 3 hours both days, I learned the basics of JavaScript,
            and I spent time reading the first chapters in the two Jon Duckett
            books my curriculum recommended. (HTML & CSS Design and Build
            Websites - JavaScript and JQuery) <br />
            <em>
              (6 hrs Total) (4% Codecademy Fullstack Developer course)
            </em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 1: Monday, June 7 - Sunday, June 13</u> <br />
            My first full week. I spent over 3 hours per day between Codecademy,
            reading the textbooks, and watching youtube. I struggled with
            higher-order functions, so I slowed down a bit to research them
            more. I turned to YouTube and a friend in the industry for help. I
            was also introduced to the art of understanding error messages and
            started doing daily knowledge checks with the CodecademyGo mobile
            app. <br />
            <em>
              (29.5 hrs Total) (11% Codecademy Fullstack Developer course)
            </em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 2: Monday, June 14 - Sunday, June 2</u> <br />
            The first thing I learned about this week was git, what it is and
            how to use GitHub, the very basics only. After git, the course
            returned to JavaScript. All in all, I had a rough week, I was
            unproductive and unfocused. I had a stressful life event that made
            the week a challenge, but I powered through as best as I could. I
            found myself making more progress in the textbooks than in the
            actual Codecademy course. <br />
            <em>
              (42.5 hrs Total) (15% Codecademy Fullstack Developer course)
            </em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 3: Monday, June 21 - Sunday, June 27</u> <br />
            This week saw me return to the office for my job, I was previously
            working from home. I was determined to slow down as little as
            possible though. While at the office I was able to read a few
            chapters of my textbook and watch the CS50 Lecture Series on
            YouTube. By Sunday I had learned enough HTML and CSS to get a basic
            portfolio page up and hosted it on GitHub Pages. <br />
            <em>
              (53.5 hrs Total) (22% Codecademy Fullstack Developer course)
            </em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 4: Monday, June 28 - Sunday, July 4</u> <br />
            This week was largely uneventful, just more HTML and CSS courses.
            I’m done with JavaScript for a bit, having completed the
            fundamentals. By the end of the week, I had reached the Create A
            Portfolio Page section of the curriculum, which I was already ahead
            of. I set myself up to be able to take full advantage of the long
            weekend, and read chapters in the textbooks to round out the week.{" "}
            <br />
            <em>
              (63.5 hrs Total) (30% Codecademy Fullstack Developer course)
            </em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 5: Monday, July 5 - Sunday, July 11</u> <br />
            I took advantage of the long weekend to finish setting up my basic
            portfolio website. I even figured out how to add a contact me page
            without any JavaScript. This week was largely about keeping the
            momentum going. Work was definitely taking my energy out of me but I
            wasn’t about to let anything stop me! <br />
            <em>
              (74 hrs Total) (38% Codecademy Fullstack Developer course)
            </em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 6: Monday, July 12 - Sunday, July 18</u> <br />
            I started the week off working with APIs in vanilla JavaScript, the
            very basics, and then moved on to React. I learned about React
            states, components, props, and the lifecycle. I learned about
            manipulating the DOM and how to create a React app locally. This
            week was all about working with classes in React, but towards the
            end of the week, I started to learn about hooks. <br />
            <em>
              (85 hrs Total) (45% Codecademy Fullstack Developer course)
            </em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 7: Monday, July 19 - Sunday, July 25</u> <br />
            This week covered useState, useEffect, useRef, and inline CSS in
            JSX. I then learned about properly separating components and
            importing and exporting them accordingly. The second half of the
            week briefly covered Redux. I learned about states, actions,
            reducers, pure functions, and storing data in Redux. <br />
            <em>
              (94 hrs Total) (51% Codecademy Fullstack Developer course)
            </em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 8: Monday, July 26 - Sunday, August 1</u> <br />
            The week started off with finishing up the Redux lessons. I learned
            about testing in Redux then moved back to using git. This time I
            learned about creating and deleting branches in git and how to
            handle merge conflicts. At this point, I was through the Front-End
            section of the curriculum so I took this time to finish up every
            other Front-End related course I could on Codecademy. I covered the
            Sass, intermediate CSS, Responsive Design, Bootstrap, and Navigation
            Design courses. At this point in my journey, I felt it would be a
            good idea to create a couple of web apps in React for my portfolio.{" "}
            <br />
            <em>
              (104 hrs Total) (56% Codecademy Fullstack Developer course)
            </em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 9: Monday, August 2 - Sunday, August 8</u> <br />
            The first thing I did was make a list of the React projects I wanted
            to attempt. I wanted to start off easy and ramp up so I planned on
            starting with a To-Do List app and a Tic-Tac-Toe app. Then from
            there, I would create a Stock/Crypto Tracker and a Yelp! app that
            helps you find nearby, highly reviewed, restaurants. I spent some
            time setting up my first React environment and prepared for the week
            ahead.{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 10: Monday, August 9 - Sunday, August 15</u> <br />
            I’m not going to lie, my first attempt was miserable and
            disheartening. I realized almost right away that I was in way over
            my head. All I was trying to do was a simple To-Do List app and I
            struggled with the basics. I watched a few tutorials and code-alongs
            and felt more lost and frustrated than before. I decided to slow
            down, back up a bit, and try again. I came up with a game plan to
            retread some ground, revisit some Codecademy lessons, then try
            again. By the end of the week, I had made a Blackjack app in vanilla
            JS and added it to my portfolio page (check it out!). Although it
            was a code-along project I was able to add features, such as an “AI”
            opponent, and various other small changes. It was exactly the
            confidence builder I needed!{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 11: Monday, August 16 - Sunday, August 22</u> <br />
            My goal isn’t to work in vanilla JS though, so now I needed to focus
            on React projects. At the start of the week, I laid out a list of
            tutorials to watch on YouTube, with a code along with the project at
            the end. The same To-Do List app that was tripping me up earlier. I
            watched roughly 20 hours of tutorials, then completed the
            code-along. I added the link to the app in my portfolio from my
            GitHub and called it a week. I definitely feel a little better,
            ready to take on a project from scratch again!{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 12: Monday, August 23 - Sunday, August 29</u> <br />I
            started the week off by tweaking the colors and responsiveness of my
            portfolio. I then attempted a tic-tac-toe project on my own. I once
            again found myself struggling with it. So I decided to watch a
            code-along for it as well but this time I would make a couple of
            modifications to it. I tinkered with it for a day after the
            code-along. I added a reset button and set it to automatically reset
            on meeting the win condition after a short delay. I also spent about
            two hours trying to rebuild the to-do list app from scratch with a
            web developer friend, which I also found very challenging but
            ultimately was able to do.{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 13: Monday, August 30 - Sunday, September 5</u> <br />
            I’m beginning to see what I’ve been doing isn’t working for me. I
            spent the first half of the week finding more resources online to
            help me with React. I researched tutors and coding boot camps and
            ultimately ended up taking half the week off from projects. I’m
            still determined to do this though, it's just a setback.{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 14: Monday, September 6 - Sunday, September 12</u> <br />I
            spent the week researching boot camps, and I got accepted into two
            local programs hosted by SMU and UTD in Dallas, TX. I ultimately
            decided these weren’t going to be a good fit, I need to slow down
            and work at my pace, and boot camps were going to be too fast-paced.
            I felt comfort in knowing that if I couldn’t figure out how to
            progress I could always fall back on one.{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 15: Monday, September 13 - Sunday, September 19</u> <br />
            Ok so, back on track? I spent the week back on Codecademy. I redid
            the vanilla JS lessons and the React lessons. I may have gone
            through them too quickly the first time. My plan was to slow down,
            make sure I understood everything I was seeing, and not dismiss
            anything. When I hit something I didn’t fully understand I made sure
            to supplement it with a YouTube tutorial. I also revisited the
            textbooks, cover to cover.{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 16: Monday, September 20 - Sunday, September 26</u> <br />I
            wasn’t able to finish the React lessons (for the 2nd time) last week
            so I made sure to complete them, again, this week. I did all the
            same things as last week but this time with React exclusively. I’m
            almost certain this is what “tutorial hell” is, but I planned on
            moving on to guided projects via YouTube and I wasn’t feeling quite
            ready until now.{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 17: Monday, September 27- Sunday, October 3</u> <br />I
            revisited the boot camp program that UTD was hosting. I reread the
            Fullstack Academy boot camp curriculum and information. I applied
            for a loan, added it to my budget, and planned out what my weekly
            schedule might look like. I really liked what I saw and I felt like
            I was properly prepared for it. So I signed up and created a new
            game plan. The boot camp starts December 6th so I have a couple of
            months to make sure I’m as prepared as I possibly can be. My new
            plan is to complete the Back End portion, and therefore the rest of,
            the Fullstack Developer program on Codecademy ahead of the boot camp
            start.{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 18: Monday, October 4 - Sunday, October 10</u> <br />
            This week I started learning the basics and fundamentals of the back
            end, what it is, how it works, what languages and frameworks exist
            for it, etc. I didn’t make as much progress as I had hoped, I found
            it a bit difficult to switch back to the courses from Youtubing and
            trial and error. <br />
            <em>
              (109 hrs Total) (58% Codecademy Fullstack Developer course)
            </em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 19: Monday, October 11 - Sunday, October 17</u> <br />
            This week I learned the basics of Node and Express. I learned the
            very basics of RESTful APIs, CORS, Express routes, error handling,
            and middleware. Towards the end of the week, I learned about the
            Testing Pyramid, Feature Testing, and Testing Driven Development
            (TDD). I finished off the week with an introduction to SQL. <br />
            <em>
              (120 hrs Total) (64% Codecademy Fullstack Developer course)
            </em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 20: Monday, October 18 - Sunday, October 24</u> <br />I had
            to travel this week for work, I don’t have a laptop (yet, I have one
            on the way). I made absolutely no progress this week. <br />
            <em>
              (120 hrs Total) (64% Codecademy Fullstack Developer course)
            </em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 21: Monday, October 25 - Sunday, October 31</u> <br />
            This week I finished up the introductory lessons on SQL first then
            powered through the PostgreSQL database lessons. Towards the end of
            the week, I completed lessons on relational databases, then returned
            to PostgreSQL for more advanced topics like ACID vs BASE and tuning
            and performance. There was a ton of reading this week but I was
            determined to make up for last week! <br />
            <em>
              (133 hrs Total) (73% Codecademy Fullstack Developer course)
            </em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 22: Monday, November 1 - Sunday, November 7</u> <br />
            This week started with a lesson on fusing the Front and Back Ends
            together, covered how you would deploy a PERN app to Heroku, then
            moved on to security. I learned the basics about authentication,
            cookies, sessions, and web security. Towards the end of the week, I
            briefly covered data structures and algorithms, including hash maps,
            bubble/merge/quicksort, and more. I could tell I only barely
            scratched the surface on those last topics though and will need to
            supplement them later! All in all a VERY full week, with a ton of
            reading. <br />
            <em>
              (148 hrs Total) (95% Codecademy Fullstack Developer course)
            </em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 23: Monday, November 8 - Sunday, November 14</u> <br />
            The final week before the boot camp! This week started with a brief
            lesson on binary search and search trees. The next lessons were all
            about interviewing and soft skills, what to expect and how to
            prepare. The final lesson was more or less a “now do it”. I didn’t
            feel prepared enough, but I expected I wouldn’t, which is why I have
            the boot camp coming up. This marks the end of my Fullstack
            Developer course on Codecademy! I plan on taking the next couple of
            weeks to slow down and take a break before the boot camp. <br />
            <em>
              (154 hrs Total) (100% Codecademy Fullstack Developer course)
            </em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 27: Monday, December 6 - Sunday, December 12</u> <br />
            I ended up taking the previous 3 weeks off completely, I felt like
            what I was doing wasn’t working so there was little point in
            continuing to self-teach. The first day of the boot camp was mostly
            set up; the first half of the second day was a bit more of the same.
            We did manage to cover all of the HTML lessons and, I’m guessing, a
            third of the CSS lessons. The assignment at the end of the week was
            to create a portfolio page. <br />
            <em>(Fullstack Academy Week 1 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 28: Monday, December 13 - Sunday, December 19</u> <br />
            This week was about CSS then JS towards the end. We covered
            responsive design and pseudo-classes. It was a nice refresher, but
            we also covered some things I had not learned on my own. On the
            final day of the week, we covered the fundamentals of JS. So far, so
            good! <br />
            <em>(Fullstack Academy Week 2 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 29: Monday, December 20 - Sunday, December 26</u> <br />
            There was only one class this week, on Monday. Class resumes on the
            3rd, so I have two weeks “off” but I don’t plan on stopping! My job
            has given me those same two weeks off! I rewatched lectures, did and
            redid the assignments/quizzes, and researched the gaps in my
            understanding when I found some. I even got a head start on the next
            graded project due in the first week of next year! <br />
            <em>(Fullstack Academy Week 3 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 30: Monday, December 27 - Sunday, January 2</u> <br />
            This week I finished watching a playlist the boot camp instructor
            recommended, a series on JS concepts. I then researched the Caesar
            Cipher project that is coming up. I was already starting to feel
            like I had made the right decision, this format was much more
            productive. <br />
            <em>(Fullstack Academy Week 4 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 31: Monday, January 3 - Sunday, January 9</u> <br />
            We started the week with loops then quickly moved on to arrays. I
            found myself struggling with loops, more than I had when I was
            working through them in Codecademy. The project for this week was a
            Sudoku Validator, not the Caesar Cipher project (which ended up just
            being a bonus un-graded project). For the Sudoku Validator, the idea
            is if you enter a sudoku puzzle, in array format, the validator
            would spit out whether or not the puzzle was completed correctly. I
            found it very challenging but I persevered! <br />
            <em>(Fullstack Academy Week 5 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 32: Monday, January 10 - Sunday, January 16</u> <br />
            This week was all about objects, which I learned I didn’t have down,
            which I previously thought I did. I found looping through them,
            specifically, to be a challenge. By the end of the week, I felt much
            better about looping through objects. The project for this week was
            using a Markov Chain to write a poem. This week ended up being a
            really fun and challenging one. <br />
            <em>(Fullstack Academy Week 6 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 33: Monday, January 17 - Sunday, January 23</u> <br />
            We had no class on Monday for MLK day so instead, I used that time
            to get as ahead as I possibly could. We started the week working
            with the DOM and event listeners and ended it working with and in
            GitHub. The project for the week was a guessing game that I should
            have showcased in my projects section if you would like to take a
            look! <br />
            <em>(Fullstack Academy Week 7 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 34: Monday, January 24 - Sunday, January 30</u> <br />
            Review week! We started working with the DOM and event listeners
            last week, they decided we need a bit more time with them. This week
            was light on lectures and mostly just pair programming labs. In the
            lab, my partner and I made a webpage where you could add rows of 20
            to then click on the cells in the rows to change their colors like
            really blown up 8-bit art. The homework for this week is actually
            due next week, I’ll be making the game snake, check it out in my
            projects section! <br />
            <em>(Fullstack Academy Week 8 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 35: Monday, January 31 - Sunday, February 6</u> <br />
            Review week continued! We spent every lecture night working on our
            game of choice. We were usually in groups of 4 so that we could ask
            our fellow classmates for help (as well as the teacher and TAs).
            This week was easily the most satisfying and validating week of my
            relatively short coding career. By the end of the week, I had a
            fully functioning Snake game with bonus features! Check out my
            projects page for more! <br />
            <em>(Fullstack Academy Week 9 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 36: Monday, February 7 - Sunday, February 13</u> <br />
            Promises, Async, Await, and Fetching API data. This was a big week!
            We covered grabbing and working with APIs and posting them on a
            SPA-style site. We made a very simple website that shows you cards
            of puppies and allows you to create your own or delete an existing
            one. It was surprisingly more challenging than I expected and was
            our first group project. <br />
            <em>(Fullstack Academy Week 10 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 37: Monday, February 14 - Sunday, February 20</u> <br />
            We started the week off with higher-order functions and passing
            functions as arguments into other functions. That quickly
            transitioned into React! It was a big week. I’m very grateful this
            wasn’t my first time seeing React, and because it wasn’t, the
            lessons and labs went relatively smoothly. <br />
            <em>(Fullstack Academy Week 11 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 38: Monday, February 21 - Sunday, February 27</u> <br />
            React labs on React labs and into a solo React project. We covered
            working with NPM, setting up React projects, working with components
            and props and so much more. This week’s project was another two-week
            one. We were tasked with making a research web app using a Harvard
            art history API. <br />
            <em>(Fullstack Academy Week 12 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 39: Monday, February 28 - Sunday, March 6</u> <br />
            This week’s goal was the completion of the project we started last
            week. Hooking up components, passing props, and making async/await
            fetch calls to an API. It was definitely the most challenging
            project we’ve done yet! Check it out on my projects page, it’s
            called Art Collector! <br />
            <em>(Fullstack Academy Week 13 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 40: Monday, March 7 - Sunday, March 13</u> <br />
            React Router kicked us off this week, then we moved on to making a
            CRUD app. The big project due next week, which started this week,
            was that CRUD app. We were tasked with making a simplified version
            of craigslist, called Stranger’s Things. I was given team members
            and most of each class period for this assignment. By the end of the
            week, we had made really good progress and were starting to work on
            authentication and account creation. <br />
            <em>(Fullstack Academy Week 14 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 41: Monday, March 14 - Sunday, March 20</u> <br />
            This week was another lab-focused week with lectures starting us off
            each class but kept relatively short and concise. My group and I
            made a lot of progress in each class, mostly working with the
            provided API. Check it out on my projects page, Stranger’s Things!{" "}
            <br />
            <em>(Fullstack Academy Week 15 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 42: Monday, March 21 - Sunday, March 27</u> <br />
            We started back end this week, kicking it off with Node and Express.
            Our first project was a Hacker News clone with dummy data for posts
            called Wizard News. We were tasked with displaying all the posts and
            routing users to the individual posts when they clicked on them. We
            were also tasked with handling erroneous routes. All in all, it was
            a very small and simple project, meant to get our feet wet using
            Node and Express. <br />
            <em>(Fullstack Academy Week 16 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 43: Monday, March 28 - Sunday, April 3</u> <br />
            PostgreSQL! We started by creating a simple dummy database, with
            tables, and seed data. We practiced manipulating data both in the
            CLI and VSCode with javascript. It was a lot more challenging than
            it should have been due to PC issues during setup. <br />
            <em>(Fullstack Academy Week 17 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 44: Monday, April 4 - Sunday, April 10</u> <br />
            This week was a continuation of the previous week’s assignment in
            PostgreSQL. By the end of the week, I had created a fully
            functioning and usable API! The project was very basic and nothing
            of actual value was stored but I enjoyed it, it was challenging and
            fun! <br />
            <em>(Fullstack Academy Week 18 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 45: Monday, April 11 - Sunday, April 17</u> <br />
            This week was all about Test-Driven Development and the importance
            of testing, but we also discussed when testing may not be necessary.
            We started off by covering how to write tests and how they work.
            Then we were assigned a list of tests to try to solve ourselves
            using PostgreSQL and JavaScript. <br />
            <em>(Fullstack Academy Week 19 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 46: Monday, April 18 - Sunday, April 24</u> <br />
            Time to practice what we’ve learned and start building some web
            apps! We were broken into groups and given guiding instructions to
            build a fitness tracking web app. We were given two weeks to
            complete the back end, then one to complete the front end. By the
            end of week one, we were almost done with the back end! <br />
            <em>(Fullstack Academy Week 20 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 47: Monday, April 25 - Sunday, May 1</u> <br />
            After struggling with various issues and bugs the back end was
            completed just in time for the turn-in. Now the clock starts on the
            front-end functionality, pulling it all together. We have until next
            week to get it done! <br />
            <em>(Fullstack Academy Week 21 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 48: Monday, May 2 - Sunday, May 8</u> <br />
            Another challenging but satisfying week, once again it came down to
            the wire. I was having issues getting my API calls to route
            correctly, an office hour later and the team and I got it figured
            out and submitted! It doesn’t look the best but it works as
            expected, and we take those. <br />
            <em>(Fullstack Academy Week 22 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 49: Monday, May 9 - Sunday, May 15</u> <br />
            After last week this week was very easy. This week was mostly about
            preparing to work on the next, and final, assignment. Our
            Amazon-clone and capstone project for the boot camp. By the end of
            the week, my group had the back end mostly set up except for a few
            tables that we plan on creating as we need them. <br />
            <em>(Fullstack Academy Week 23 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 50: Monday, May 16 - Sunday, May 22</u> <br />
            The rubber started meeting the road this week but we also spun out a
            bit. Some of the back-end code that we thought was good to go
            wasn’t. We worked together, as a team, figured out our issues, and
            pushed forward. We didn’t make as much progress as we had hoped but
            we made meaningful progress nonetheless! <br />
            <em>(Fullstack Academy Week 24 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 51: Monday, May 23 - Sunday, May 29</u> <br />
            This week was all about working through blockers as a team. We
            completely wrapped up the back-end code, actually this time, and
            started putting it together on the front end. All in all a very fun
            and productive week! <br />
            <em>(Fullstack Academy Week 25 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 52: Monday, May 30 - Sunday, June 5</u> <br />
            Once again it was a week of progress, maybe a bit slower than we
            would have liked as a group, but progress all the same. We’re very
            close to finishing up! This week marks my official one-year
            anniversary from when I started on this path! <br />
            <em>(Fullstack Academy Week 26 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Week 53: Monday, June 6 - Sunday, June 12</u> <br />
            At the start of the week, we were told to wrap up what we could and
            record a demo of the website for graduation. We had to make some
            decisions, the website isn’t 100% done but it was close enough to
            show off. So we did just that, buttoned up a few things, recorded
            the presentation for graduation, and showed it off at graduation.
            That’s it. Boot camp over. <br />
            <em>(Fullstack Academy Week 27 of 27)</em>{" "}
          </li>
          <hr />
          <br />
          <li>
            {" "}
            <u>Final Word</u> <br />
            There it is, my first full year of learning to code. Except for that
            3-week break before the boot camp started, I spent hours almost
            every single day for a year working towards this goal. There is
            still much to learn and I still have big goals I want to achieve,
            I’m still moving forward and I can’t wait to help a professional
            team in the very near future!{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
