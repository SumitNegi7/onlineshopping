import React, { useEffect } from "react";
import "./elanding.css";
import lappy from "./greylaptop.png";
import broll from "./broll.mp4";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Landing from "../landing-2";
export default function Elanding() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <div className="Mainland">
            <div id="mainland" class="is-loading" data-aos="zoom-in">


                <div className="btn-first">
                    <Link to="/product">
                        <button className="l-btn">
                            SHOP NOW
                </button>
                    </Link>
                </div>


            </div>

            <div className="txt-blob-container">
                <div class="web-cam">
                    <video autoPlay muted loop>
                        <source src={broll} type="video/mp4" />
                    </video>
                </div>
                <div
                    className="video-text"
                    data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                >
                    Best Services at Affordable prices. <br />
                    <span className="inner-video-text">Build with premium quality.</span>
                </div>
            </div>

            <div className="blob-container">
                <div className="container-rb">
                    <div class="abc-rb">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="#BAE6FF"
                                d="M37,-33.5C46.8,-17.3,52.7,-2,49.6,11.3C46.6,24.6,34.6,35.8,20.7,42.4C6.7,48.9,-9.3,50.7,-28.4,46.3C-47.5,42,-69.8,31.5,-72.6,17.1C-75.4,2.8,-58.8,-15.4,-43.4,-32.9C-28.1,-50.4,-14.1,-67.2,-0.2,-67.1C13.6,-66.9,27.3,-49.8,37,-33.5Z"
                                transform="translate(100 100)"
                            />
                        </svg>
                    </div>

                    <div class="a-rb">
                        <img src={lappy} className="image-new" />
                    </div>
                </div>
                <div
                    className="video-text vt2"
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                >
                    Try our Risk free Services <br />
                    <span className="inner-video-text">Now at your doorstep.</span>
                </div>
            </div>
            <div class="parent" data-aos="fade-up">

                <div class="child ch1">
                    <Link to="/category/Desktops">
                        <div class="middle">

                            <button class="btn-img1">SHOP NOW</button>

                        </div>
                    </Link>
                </div>


                <div class="child ch2">
                    <Link to="/category/Laptops">
                        <div class="middle2">

                            <button class="btn-img2">SHOP NOW</button>
                        </div>
                    </Link>
                </div>



                <div class="child ch3">
                    <Link to="/category/Accessories">
                        <div class="middle3">

                            <button class="btn-img3">SHOP NOW</button>

                        </div>
                    </Link>
                </div>


            </div>
            <div>
                <Landing />

            </div>
            <br />
            <br />
            <br />
        </div>
    );
}
