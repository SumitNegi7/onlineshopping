import React, { Fragment, useEffect, useRef } from "react";
import "./animaition.css";
import "./App.css";
import { TimelineLite, TweenMax, Power3 } from "gsap";

import imgGirl from "./images/1.jpg";
import imgBoy from "./images/2.jpg";
import arrow from "./images/arrow-right.svg";
import { Link } from "react-router-dom";

function Animation() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild; // or children[0]
    const boyImage = images.lastElementChild;

    //content vars
    const headlineFirst = content.children[0].children[0];
    // const headlineSecond = headlineFirst.nextSibling;
    // const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Remove initial flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    //Images Animation
    tl.from(girlImage, 1.6, { x: 1580, ease: Power3.easeOut }, "Start")
      .from(
        girlImage.firstElementChild,
        2.2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      )
      .from(boyImage, 1.2, { x: 1280, ease: Power3.easeOut }, 0.2)
      .from(
        boyImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      );

    //Content Animation
    tl.staggerFrom(
      [headlineFirst.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]);

  return (
    <Fragment>
      <div className="animation-container">
        <div className="hero" ref={(el) => (app = el)}>
          <div className="container">
            <div className="hero-inner">
              <div className="hero-content">
                <div
                  className="hero-content-inner"
                  ref={(el) => (content = el)}
                >
                  <h1>
                    <div className="hero-content-line">
                      <div className="hero-content-line-inner">
                        PratapInfoTech
                      </div>
                    </div>
                  </h1>
                  <p>We provide the best not the cheapest</p>
                  <div className="btn-row">
                    <Link to="/product">
                      <button className="explore-button">
                        Shop Now
                        <div className="arrow-icon">
                          <img src={arrow} alt="row" />
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="hero-images">
                <div ref={(el) => (images = el)} className="hero-images-inner">
                  <div className="hero-image girl">
                    <img src={imgGirl} alt="girl" />
                  </div>
                  <div className="hero-image boy">
                    <img src={imgBoy} alt="boy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="landing-3">
          <p className="category-landing"> CATEGORIES</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Animation;
