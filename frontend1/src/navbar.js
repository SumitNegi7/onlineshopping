import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const OnNavSlideClick = () => {
    const header1 = document.querySelector(".navbar");
    const handburger1 = document.querySelector(".handburger");
    const navlinks = document.querySelectorAll(".navbar li");

    header1.classList.toggle("navbar-active");
    handburger1.classList.toggle("toggle");
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinkfade 0.5s ease forwards ${
          index / 7 + 0.3
          }s`;
      }
    })

  }
  const drop = () => {
    const box = document.querySelector('.dropdown-content');
    const btnn = document.querySelector('.dropdown');
    // const droplinks = document.querySelector('.dropdown-content li');

    box.classList.toggle('navbar-active-half');
    btnn.classList.toggle('toggle1');

  }
  return (
    <div className="navbar-container">
      <nav>
        <div class="outer">
          <div className="handburger" onClick={OnNavSlideClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <Link to="/">
            <div class="logobox">PratapInfotech</div>
          </Link>
          <ul class="navbar ">
            <div class="dropdown" onClick={drop}>
              <span>
                {/* <Link to="/product"> */}
                <li class="none one">Shop</li>
                {/* </Link> */}
              </span>
              <div class="dropdown-content">
                <Link to="/product/Desktops">
                  <li>Desktops</li>
                </Link>
                <Link to="/product/Laptops">
                  <li>Laptop</li>
                </Link>
                <Link to="/product/Accesories">
                  <li>Accessries</li>
                </Link>
                <Link to="/product/Refubrished">
                  <li>Refubrished</li>
                </Link>
              </div>
            </div>
            <li class="none one">Visit Store</li>
            <li class="none one">Services</li>
            <li class="none one">Contact</li>
          </ul>
          <ul class=" navbar1">
            <Link to="/signin">
              {" "}
              <ion-icon size="" name="logo-tux"></ion-icon>
            </Link>
            <Link to="/cart">
              <ion-icon name="cart-outline"></ion-icon>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
