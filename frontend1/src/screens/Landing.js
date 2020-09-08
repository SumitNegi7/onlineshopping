import React from "react";
import Navbar from "../navbar";
import Mini from "../mini";
import Middle from "../middle";
import Animation from "../animation";
import Landing1 from "../landing-2";

function Landing() {
  return (
    <div className="main-container">
      <Mini />
      <Animation />

      <Middle />
      <Landing1 />
    </div>
  );
}

export default Landing;
