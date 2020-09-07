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
import { cartReducer } from "./reducers/cartReducers";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrdersScreen from "./screens/OrdersScreen";
import OrderScreen from "./screens/orderScreen";
import Landing from "./screens/Landing";
import Profile from "./screens/ProfileScreen";
import "./navbar.css";
import ProfileScreen from "./screens/ProfileScreen";

function App(props) {
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
    });
  };
  const Pro = () => {
    const dropp = document.querySelector(".dropdown-content");
    const content = document.querySelector(".dropdown");
    dropp.classList.toggle("navbar-active");
    content.classList.toggle("bc");
  };

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
      <div>
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
                <div class="dropdown" onClick={Pro}>
                  <span>
                    <Link to="/product">
                      <li className="none one">
                        Shop
                        <i class="fa fa-caret-down"></i>
                      </li>
                    </Link>
                  </span>
                  <div class="dropdown-content">
                    <Link to="/product/Desktops">
                      <li className="drop">Desktops</li>
                    </Link>
                    <Link to="/product/Laptops">
                      <li className="drop">Laptop</li>
                    </Link>
                    <Link to="/product/Accesories">
                      <li className="drop">Accessries</li>
                    </Link>
                    <Link to="/product/Refubrished">
                      <li className="drop">Refubrished</li>
                    </Link>
                  </div>
                </div>
                <li class="none one">Visit Store</li>
                <li class="none one">Services</li>
                <li class="none one">Contact</li>
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

                <Link to="/subcart">
                  <div class="cart-img">
                    <div className="cart-img1">
                      <ion-icon name="cart-outline"></ion-icon>
                    </div>
                  </div>
                </Link>
              </ul>
            </div>
          </nav>
        </div>

        <aside className="sidebar" onMouseOver={openMenu}>
          <button id="empty" onClick={closeMenu}>
            &#10060;
          </button>
          <Subcart />
        </aside>

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
          <Route path="/" exact component={Landing} />
          <Route path="/subcart" exact component={Subcart} />
          <Route path="/profile" component={ProfileScreen} />

          <Route path="/register" exact component={RegisterScreen} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
