import React, { Fragment } from "react";
import "./middle.css";
import "./App.css";
import { Link } from "react-router-dom";

import arrow from "./images/arrow-right.svg";

function Middle() {
  return (
    <div className="cantainer-1">
      <div className="card">
        <div className="imgbx">
          <img src="laptop.jpg" alt="hatt" />

          <div className="naming">
            <span className="i-name">Laptops</span>
            <Link to="/category/Laptops">
              <span className="press-container">
                Shop Now<button className="press1">&#8595;</button>
              </span>
            </Link>
            {/* <h3 className="i-arrow">   &#8681; </h3> */}
          </div>
        </div>
        <div className="content">
          <p>Laptops Under 20000/-</p>
        </div>
      </div>
      <div className="card">
        <div className="imgbx">
          {/* <img src="desktop.jpg" alt="hatt" /> */}
          <div className="naming">
            <span className="i-name">Desktops</span>
            <Link to="/category/Desktop">
              <span className="press-container">
                Shop Now<button className="press1">&#8595;</button>
              </span>
            </Link>
            {/* <h3 className="i-arrow">   &#8681; </h3> */}
          </div>
        </div>
        <div className="content">
          <p>Desktop Under 19999/-</p>
        </div>
      </div>

      <div className="card">
        <div className="imgbx">
          <img className="access-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdE1BnV7KchG8NeSV-xsDMgPGAbml3HhlMgQ&usqp=CAU" alt="hatt" />
          <div className="naming">
            <span className="i-name"> Accessories</span>
            <Link to="/category/Accessories">
              <span className="press-container">
                Shop Now<button className="press1">&#8595;</button>
              </span>
            </Link>
            {/* <h3 className="i-arrow">   &#8681; </h3> */}
          </div>
        </div>
        <div className="content">
          <p> Accessories Under 299/-</p>
        </div>
      </div>
      <div className="card">
        <div className="imgbx">
          <img src="ref.jpg" alt="hatt" />
          <div className="naming">
            <span className="i-name">Refurbished</span>
            <Link to="/category/Refubrished">
              <span className="press-container">
                Shop Now<button className="press1">&#8595;</button>
              </span>
            </Link>
            {/* <h3 className="i-arrow">   &#8681; </h3> */}
          </div>
        </div>
        <div className="content">
          <p> Products starting at 999/-</p>
        </div>
      </div>
    </div>
  );
}

export default Middle;
