import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div className="Contact">
      <Navbar />
      <div className="ContactForm">
        <form
          action="https://formsubmit.co/colinhoolwerf@gmail.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_next"
            value="https://colinh58.github.io/Portfolio/Thanks"
          />
          <label for="inputname">Name</label>
          <input
            type="text"
            id="inputname"
            name="inputname"
            placeholder="Enter Your Name"
            required
          />
          <label for="inputcompany">Company</label>
          <input
            type="text"
            id="inputcompany"
            name="inputcompany"
            placeholder="Enter Your Company"
            required
          />
          <label for="inputemail">Email Address</label>
          <input
            type="text"
            id="inputemail"
            name="inputemail"
            placeholder="Enter Your Email Address"
            required
          />
          <label for="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject Line"
            required
          />
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            style={{ height: "200px" }}
            required
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
