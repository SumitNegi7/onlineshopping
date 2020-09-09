import React from "react";
import "./landing-2.css";

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="landing-container" data-aos="fade-right">
      <div className="three">
        <div class="parent">
          <div class="child1 two-img "></div>
          <div class="child1 contact-desc">
            <p className="head">Best Services at Affordable Price </p>
            <p className="desc">
              {" "}
              Lauching in 2016, Pratap Infotech is servicing its cutomers with
              satisfatory responsed from its customer. we are Expanding now and
              service you the some service online{" "}
            </p>
            <button className="contact-btn"> Contact</button>
          </div>
        </div>
        <div class="parent">
          <div class="child1 contact-desc2">
            <p className="head">Best Services at Affordable Price </p>
            <p className="desc">
              {" "}
              Lauching in 2016, Pratap Infotech is servicing its cutomers with
              satisfatory responsed from its customer. we are Expanding now and
              service you the some service online{" "}
            </p>
            <Link to="/product">
              <button className="contact-btn2"> Services</button>
            </Link>
          </div>
          <div class="child1  one-img "></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
