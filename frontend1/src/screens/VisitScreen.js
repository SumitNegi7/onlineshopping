import React from 'react'
import "./visit.css";
import { TweenLite, Power3 } from "gsap";
import '@open-wa/whatsapp-button/whatsapp-button.js';

function Visit() {
    React.useEffect(() => {
        const myElement = document.querySelector(".grid1");
        const myElement1 = document.querySelector(".grid2");
        const myElement2 = document.querySelector(".grid3");
        TweenLite.fromTo(
            myElement,
            { opacity: 0, y: "10vw" },
            {
                y: 0,
                opacity: 1,
                y: 0,
                duration: 3,
                ease: Power3.easeIn
            }
        );
        TweenLite.fromTo(
            myElement1,

            { opacity: 0, y: "-0vh" },
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
            { opacity: 0, x: "10vw", delay: 2 },
            {
                x: 0,
                opacity: 1,
                x: 0,
                duration: 3,

                ease: Power3.easeIn
            }
        );
    }, []);
    return (
        <div class="visit-container">
            <div class="vouter">

                <div class="  visit-card v1 grid1">
                    <img src="https://i.pinimg.com/originals/40/0a/42/400a42b1f7c6859a67b818aba07fc01c.png" className="img-visit" />
                </div>
                <div class="visit-card v2 grid2">
                    <img src="https://i.pinimg.com/736x/12/cc/80/12cc804b0bfe9643d4582d1853b1211b.jpg" className="img-visit" />

                </div>
                <div class="visit-card v3 grid3">

                    <p class="address">
                        <h2>Location</h2>
                        <p className="visiter-content">
                            Address: B-4, Shilpa Apartment,Vrundavan Society,
                            Silvassa, Dadra and Nagar Haveli 396230
                            Hours:
                            Open ⋅ Closes 11PM
                            Phone: 083472 73869
        </p>
                        <div className="whats-btn">
                            <whatsapp-button phone="7698215771" dialcode="91" label="Contact" width="50px" bypass></whatsapp-button>
                        </div>
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Visit;