import React from "react";
import "./mini.css";
import { TweenLite, Power3 } from "gsap";

function Mini() {
  React.useEffect(() => {
    const myElement = document.querySelector(".grid1");
    const myElement1 = document.querySelector(".pratap");
    const myElement2 = document.querySelector(".grid3");
    TweenLite.fromTo(
      myElement,

      { opacity: 0, x: "-100vw" },
      {
        x: 0,
        opacity: 1,
        x: 0,
        duration: 3,
        delay: 0.5,
        ease: Power3.easeIn
      }
    );

    TweenLite.fromTo(
      myElement1,

      { opacity: 0, y: "-10vh" },
      {
        x: 0,
        opacity: 1,
        y: 0,
        duration: 3,

        ease: Power3.easeIn
      }
    );

    TweenLite.fromTo(
      myElement2,
      { opacity: 0, x: "100vw", delay: 2 },
      {
        x: 0,
        opacity: 1,
        x: 0,
        duration: 3,
        delay: 0.5,
        ease: Power3.easeIn
      }
    );
  }, []);
  return (
      <div class="landing">
        <div class="g grid1">
          <img
            src="RBest-Gaming.png"
            alt="image1"
          />
        </div>
        <div class=" b pratap">
          <div class="desc d2">
            <h3>Pratap Infotech</h3>
             <p>
                We provide the best not the cheapest
                </p>
            <button class="b btn1">Shop Now</button>
          </div>
        </div>

        <div class="g grid3">
          <img
            src="party-speaker.jpg"
            alt="image1"
          />
        
        </div>
        <div className="landing-3">
  
         <p className="category"> CATEGORIES</p>

        </div>
    </div>
  );
}
export default Mini;

