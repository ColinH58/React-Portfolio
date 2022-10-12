import React from "react";
import Navbar from "./Navbar";

const Thanks = () => {
  return (
    <div className="Thanks">
      <Navbar />
      <h1>Thank you for reaching out, I'll get back to you soon!</h1>
      <br />
      <a href="/" title="Home Page">
        Return to Home Page
      </a>
    </div>
  );
};

export default Thanks;
