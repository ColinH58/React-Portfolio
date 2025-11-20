import React from "react";
import Navbar from "./Navbar";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <div className="ResumeIntro">
      <img
        id="selfie"
        src="https://i.imgur.com/J3ag0JF.jpg"
        alt="selfie of Colin Hoolwerf"
      />
      <br />
        <a style={{fontSize: "1.75rem"}}
          href="https://www.linkedin.com/in/colinhoolwerf/"
          rel="noreferrer"
          target="_blank"
        >
          My LinkedIn
        </a>
        <hr />
      </div>
      <div className="AboutSection">
        <p>Changes coming soon!</p>
        {/* <h1>
          <u>About</u>
        </h1>
        <ul>
          <li>
          I am an aspiring INDIE GAME developer based in Denver, Colorado. I have completed 
          a boot camp with Fullstack Academy in <b>June 2022</b>, hosted by the 
          University of Texas at Dallas. Please find my projects, and other information 
          about me, in the tabs above.
          </li>
          <br />
          <li>
          I am currently a Workplace Coordinator for Autodesk, Inc in Denver, CO. My current 
          employment background consists of experience in construction (sheet metal), payroll, 
          facilities, general office support, and retail. I am eager to start my next chapter in web 
          development!
          </li>
          <br />
          <li>
          I am originally from Calgary, Alberta, Canada. I'm a dual citizen of Canada and the United States. 
          I was naturalized in Irving, TX in the summer of 2011. I moved to Denver, CO in 2024.
          </li>
        </ul>
        <hr />
      </div>
      <div className="ExperienceSection">
        <h1>
          <u>Technical Skills</u>
        </h1>
        <ul>
          <li>
          <strong>Practiced In:</strong> JavaScript, React, Redux, Node, Express, HTML5, CSS, Git
          </li>
          <br />
          <li>
          <strong>Completed LinkedIn Assessments:</strong> React.js, React, JavaScript, HTML, CSS
          </li>
        </ul>
        <hr />
      </div>
      <div className="ExperienceSection">
        <h1>
          <u>Experience</u>
        </h1>

            <h2>Workplace Coordinator</h2>
          <h3>Autodesk, Denver, CO</h3>
          <h4>May 2016 - Present</h4>
          <ul>
            <li>
            Started as a contractor, converted to a full time employee in July 2018.
            </li>
            <li>Completed multiple office revisions, relocations, and closures in offices in Texas, Colorado, and Utah.</li>
            <li>
            Participated in contract renewals, lease agreements, and construction planning and execution.
            </li>
            <li>
            Received and fulfilled facilities requests including requests for new furniture, conferencing equipment, 
            kitchen equipment, general supplies and repairs.
            </li>
            <li>
            Collaborated across the company to update and refresh server room equipment, including UPS and network 
            switch upgrades, create inclusive spaces, and more.
            </li>
          </ul>

        <hr />
      </div>
      <div className="EducationSection">
        <h1><u>Education</u></h1>
            <h2>Fullstack Academy</h2>
              <h4>Fullstack Web Development Bootcamp Certificate</h4>
            <h2>Eastfield College</h2>
              <h4>Associate of Arts and Sciences (AAS), Biology</h4> */}
      </div>
    </div>
  );
};

export default Resume;
