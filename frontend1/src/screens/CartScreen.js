import React, { useState, useEffect } from "react";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./cart.css";
function CartScreen(props) {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;
  const [count, setCount] = useState(0);

  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  useEffect(() => {
    let x = cartItems.reduce((a, c) => a + c.qty, 0);
    setCount(x);
    // jsCookie.set(count, x)
    // document.querySelector(".cart-img1").innerHTML = count;
  });

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <div className="pcart">
      <div className="pcart-list">
        <ul className="pcart-list-container">
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
              cartItems.map((item) => (
                <>
                  <li className="pcart-content">
                    <div className="pcart-image">
                      <img src={item.image} alt="product" height="100px" />
                    </div>
                    <div className="pcart-name">
                      <div>
                        <Link to={"/product/" + item.product}>{item.name}</Link>
                      </div>
                      <div>
                        Qty:
                      <select
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(addToCart(item.product, e.target.value))
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                        <button
                          type="button"
                          className="pcart-btn-delete"
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          <i
                            class="fa fa-trash-o"
                            style={{ fontSize: "48px" }}
                            style={{ color: "red" }}
                          ></i>
                        </button>
                      </div>
                    </div>
                    <div className="pcart-price">{item.price}Rs</div>
                    <br />
                  </li>
                  <div className="iline"></div>
                  <br />
                </>
              ))
            )}
        </ul>
      </div>

      <div className="cart-action">
        <h2 className="csub">
          Subtotal :{cartItems.reduce((a, c) => a + c.price * c.qty, 0)} Rs
          <br />
          <span className="checkout">
            Proceed to Checkout{" "}
            <button
              onClick={checkoutHandler}
              className="btn-cart"
              disabled={cartItems.length === 0}
              className="press2"
            >
              &#8595;
            </button>
          </span>
        </h2>
      </div>
      <div className="Blank-space"></div>
    </div>
  );
}

export default CartScreen;
