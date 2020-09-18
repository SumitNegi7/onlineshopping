import React, { useEffect } from "react";
import "./App.css";
import Subcart from "./screens/Subcart";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProductsScreen from "./screens/ProductsScreen";
import SignInScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import FinalOrder from "./screens/FinalOrder";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { cartReducer } from "./reducers/cartReducers";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrdersScreen from "./screens/OrdersScreen";
import OrderScreen from "./screens/orderScreen";
import Visit from "./screens/VisitScreen";
// import Landing from "./screens/Landing";
import OrderPlaced from "./screens/OrderPlaced";
import "./navbar.css";
import ProfileScreen from "./screens/ProfileScreen";
import Footer from "./footer";
import About from "./screens/about";
import Elanding from "./screens/Elanding";
import service from "./screens/service";

function App(props) {


  const closelink = () => {
    const header1 = document.querySelector('.navbar');
    const closelinks = document.querySelector('.close-tab');
    const handburger1 = document.querySelector('.handburger');
    header1.classList.toggle('navbar-active');
    handburger1.classList.toggle('toggle');
    closelinks.classList.toggle('close-tab-active');
  }
  const OnNavSlideClick = () => {
    const header1 = document.querySelector(".navbar");
    const handburger1 = document.querySelector(".handburger");
    const navlinks = document.querySelectorAll(".navbar li");

    header1.classList.toggle("navbar-active");
    handburger1.classList.toggle("toggle");
    // navlinks.forEach((link, index) => {
    //   if (link.style.animation) {
    //     link.style.animation = "";
    //   } else {
    //     link.style.animation = `navlinkfade 0.5s ease forwards ${
    //       index / 7 + 0.3
    //       }s`;
    //   }
    // });
  };
  // const drop = () => {
  //   const box = document.querySelector('.dropdown-content');
  //   const btnn = document.querySelector('.dropdown');
  //   // const droplinks = document.querySelector('.dropdown-content li');

  //   box.classList.toggle('navbar-active-half');
  //   btnn.classList.toggle('toggle1');

  // }

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
    document.querySelector("#empty").classList.add("sidebar-close-button");
  };
  var loc = window.location.pathname.split("/")[1];
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
    document.querySelector("#empty").classList.remove("sidebar-close-button");
  };

  return (
    <BrowserRouter>
      <div className="App1">
        <div className="navbar-container">
          <nav>
            <div className="outer">
              <div className="handburger" onClick={OnNavSlideClick}  >
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
              <Link to="/">   <div className="logobox">
                Pratapinfotech
        </div>
              </Link>
              <ul className="navbar" >

                <div className="dropdown" >
                  <li className="one">Shop
          <i className="fa fa-caret-down"></i>
                  </li>
                  <div className="dropdown-content">
                    <Link to="/category/Desktops">  <li className="drop">Desktop</li></Link>
                    <Link to="/category/Laptops">  <li className="drop">Laptop</li></Link>
                    <Link to="/category/Accessories">  <li className="drop">Accessories</li></Link>
                    <Link to="/category/Refubrished">    <li className="drop">Refurbished</li></Link>
                  </div>
                </div>
                <Link to='/product'>
                  <li className="newshop one close-tab" onClick={closelink}> Shop</li>
                </Link>
                <Link to='/Visit'>
                  <li className=" one " onClick={closelink}>Visit Store</li>
                </Link>
                <Link to="/service">
                  <li className=" one " onClick={closelink}>Services</li>
                </Link>
                <Link to="/About">
                  <li className="one" onClick={closelink}>About</li>
                </Link>
                <div className="copy-right">
                  <p className="pcopy">
                    2020 @ Pratapinfotech
            </p>
                  <p className="siteby">
                    Site By Badboys
            </p>

                </div>

              </ul>

              <ul class=" navbar1">
                {userInfo ? (
                  <Link to="/profile">{userInfo.name} </Link>
                ) : (
                    <Link to="/signin">
                      {" "}
                      <ion-icon size="" name="logo-tux"></ion-icon>
                    </Link>
                  )}

                {/* <Link to="/subcart"> */}
                <div class="cart-img">
                  <div className="cart-img1">
                    <ion-icon name="cart-outline"></ion-icon>
                  </div>
                </div>
                {/* </Link> */}
              </ul>
            </div>


          </nav>
        </div>
        {/* 
        <aside className="sidebar" onMouseOver={openMenu}>
          <button id="empty" onClick={closeMenu}>
            &#10060;
          </button>
          <Subcart />
        </aside> */}

        {/* <header className="header">
          <div className="brand">
            <button onMouseOver={openMenu} onClick={closeMenu}>&#x2630;</button>
            <Link to="/">
              {" "}
              <img className="logomaker" src="/logo.png" height="100rem" />
            </Link>
          </div>
          <div className="header-links">
            {" "}
            {
              userInfo ? <Link to="/profile">{userInfo.name} </Link> :
                <Link to="/signin" >Sign In
              </Link>
            }
            {loc != "cart" ?
              <div class="cart-img" onMouseOver={openMenu}>
                <img src="cart.png" alt="cart" className="bag" /><div className="cart-img1"></div>
              </div>
              :
              <Link to="/cart">
                <div class="cart-img" >
                  <img src="cart.png" alt="cart" className="bag" /><div className="cart-img1"></div>
                </div>
              </Link>
            }
          </div>
        </header> */}

        {/* <aside className="sidebar" onMouseOver={openMenu}>
          <button id="empty" onClick={closeMenu}>
            &#10060;
          </button>
          <Subcart />
        </aside> */}
        <main>
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/signin" component={SignInScreen} />
          <Route path="/products" exact component={ProductsScreen} />
          <Route path="/cart/:id?" component={CartScreen} />

          <Route path="/product" exact component={HomeScreen} />
          <Route path="/shipping" exact component={ShippingScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/forder" component={FinalOrder} />
          <Route path="/orders" component={OrdersScreen} />
          <Route path="/category/:id" component={HomeScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/" exact component={Elanding} />
          <Route path="/subcart" exact component={Subcart} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/Visit" component={Visit} />
          <Route path="/orderplaced" exact component={OrderPlaced} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/About" exact component={About} />
          <Route path="/service" exact component={service} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
