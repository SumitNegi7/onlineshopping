import React, { Fragment } from "react";
import "./footer.css";
import "./App.css";
import pay from "./images/razorpa.png";

function Footer() {
  return (
    // <div className="footer-container">
    //     <section>

    //     <div className="wave wave1"></div>
    //     <div className="wave wave2"></div>

    //     </section>

    <div className="footer-container-2">
      <hr />
      <ul className="footer-content">
        <div className="pay">
          <li className="razor">
            {" "}
            <img src={pay} alt="pay" height="90px" />
          </li>
        </div>
        <div className="connect">
          <li>
            CONNECT <br />
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-whatsapp"></ion-icon>
          </li>
        </div>
        <div className="policy">
          <li>
            POLICY <br />
            <span className="policy-detail">
              {" "}
              Terms of Sale <br />
              Privacy policy
            </span>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Footer;
