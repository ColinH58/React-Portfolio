import React from "react";
import selfie from "../Assets/Selfie.jpg";
import Navbar from "./Navbar";

const Resume = () => {
  return (
    <>
      <Navbar />
      <img id="selfie" src={selfie} alt="selfie of Colin Hoolwerf" />
      <div className="AboutSection">
        <h1>
          <u>About</u>
        </h1>
        <ul>
          <li>
            I am a Jr. Software Engineer, having completed a boot camp with
            Fullstack Academy in June 2022, hosted by the University of Texas at
            Dallas. Welcome to my portfolio!
          </li>
          <li>
            Currently, I'm a Workplace Coordinator for Autodesk, Inc in Plano,
            TX. I have a diverse and well-rounded employment history with
            experience in construction (sheet metal), payroll, facilities, and
            general office support. I am excited to start my next chapter in
            software development!
          </li>
          <li>
            Originally from Calgary, Alberta, I'm a dual citizen of Canada and
            the US. I was naturalized in Irving, Texas in the summer of 2011.
          </li>
        </ul>
        <ul>
          <li>
            Find my {' '}
            <a
              href="https://github.com/ColinH58"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Here
            </a>
            {' '} and my {' '}
            <a
              href="https://www.linkedin.com/in/colinhoolwerf/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Here
            </a>
          </li>
        </ul>
      </div>
      <div className="ExperienceSection">
        <h1>
          <u>Technical Skills</u>
        </h1>
        <ul>
          <li>
            <strong>Proficient:</strong> JavaScript, React / Redux, Node,
            Express, HTML5, CSS, Git
          </li>
          <li>
            <strong>Knowledgeable:</strong> PostgreSQL, Heroku
          </li>
        </ul>
      </div>
      <div className="ExperienceSection">
        <h1>
          <u>Experience</u>
        </h1>
        <ul>
          <li>
            <h2>Workplace Coordinator</h2>
          </li>
          <h3>Autodesk, Plano TX</h3>
          <h4>May 2016 - Present</h4>
          <ul>
            <li>
              Started as a contractor, converted to a full time employee in July
              2018
            </li>
            <li>Completed multiple office revisions and overhauls</li>
            <li>
              Cut costs by reviewing contracts annually and selecting cost
              efficient vendors
            </li>
            <li>
              Received and fulfilled facilities requests including requests for
              new furniture, conferencing equipment, kitchen equipment, general
              supplies and repairs
            </li>
            <li>
              Collaborated with our IT department to update and refresh server
              room equipment, including UPS and network switch upgrades
            </li>
          </ul>
        </ul>
      </div>
      <div className="EducationSection">
        <h1>
          <u>Education</u>
        </h1>
        <ul>
          <li>
            <h2>University of Texas at Dallas</h2>
          </li>
          <ul>
            <li>
              <h3>Full-Stack Web Development Bootcamp Certificate</h3>
            </li>
            <li>
              <h4>June 2022</h4>
            </li>
          </ul>
          <li>
            <h2>Dallas College</h2>
          </li>
          <ul>
            <li>
              <h3>Associate of Arts and Sciences (AAS), Biology</h3>
            </li>
            <li>
              <h4>August 2011</h4>
            </li>
          </ul>
        </ul>
      </div>
      <div className="VolunteerSection">
        <h1>
          <u>Volunteer Experience</u>
        </h1>
        <ul>
          <li>
            <h2>Legacy Counseling Center, Inc.</h2>
          </li>
          <ul>
            <li>
              <h3>Administrative Assistant/General Labor</h3>
            </li>
            <li>
              <h4>July 2003 - Present</h4>
            </li>
            <li>Assisted with event setup, operations, and clean-up</li>
            <li>
              Office support including filing, organizing, data entry, and
              client contact
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default Resume;
