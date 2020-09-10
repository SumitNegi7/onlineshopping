import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";
import CartScreen from "./CartScreen";
import { Carousel } from "react-bootstrap";
import "./ProductScreen.css";

function ProductScreen(props) {
  const [qty, setQty] = useState(1);

  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => { };
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };

  return (
    <>
      {/* <div className="back-to-result">
            <Link to="/"> Back to result</Link>
        </div> */}
      {loading ? (
        <div> loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
            <div className="prod-container">
              <div className="pimg-container">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 cc"
                      src={product.image}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100  cc"
                      src={product.image1}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 cc"
                      src={product.image2}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="ptext-container">
                <ul className="product-desc">
                  <li>
                    <h4> {product.name} </h4>
                  </li>

                  <li>{<div>{product.description}</div>}</li>
                  {/* </ul>
                        </div>
                        <div className="deatils-action">
                            <ul className="cart-desc"> */}
                  <br />
                  <li>Price:{product.price}Rs</li><br />
                  <li>
                    Status:{product.countInStock > 0 ? "In Stock" : "Unavailable"}
                  </li>
                  <li className="qty-prod">
                    <span className="qqty">Qty:</span>
                    <select
                      value={qty}
                      onChange={(e) => {
                        setQty(e.target.value);
                      }}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>{" "}
                  </li>
                  <li>
                    <div className="outer-product-details">
                      <div className="button-cart">
                        {product.countInStock > 0 && (
                          <button className="atc-btn " onClick={handleAddToCart}>
                            {" "}
                        ADD TO CART{" "}
                          </button>
                        )}{" "}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
    </>
  );
}

export default ProductScreen;