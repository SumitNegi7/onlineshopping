import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder, detailsOrder, paidOrder } from '../actions/orderActions';
import "./orderScreen.css";

const CURRENCY = 'INR';

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";




function OrderScreen(props) {
  const orderDetails = useSelector(state => state.orderDetails);
  const { loading, order, error } = orderDetails;
  const dispatch = useDispatch();

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // const data = await fetch('http://localhost:5000/razorpay', { method: 'POST' }).then((t) =>
    //     t.json()
    // )

    // const data = await fetch(`http://localhost:5000/api/orders/${props.method.id}`, {
    //   method: "POST",
    // }).then((t) => t.json());

    console.log(typeof order.totalPrice);
    const options = {
      key: __DEV__ ? "rzp_test_ezgLtJPpftmOma" : "PRODUCTION_KEY",
      currency: CURRENCY,
      amount: order.totalPrice * 100,
      // order_id: order._id,
      name: "Sumit Negi",
      description: "Thank you for nothing. Please give us some money",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        if (response.razorpay_payment_id) {


          dis()
          console.log("mmc")
          props.history.push("/orderplaced")

        }
      },
      prefill: {
        name: "Sumit Negi",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const dis = () => {
    const isPaid = true
    dispatch(paidOrder(props.match.params.id, isPaid))
    console.log(isPaid, "hello")
  }

  useEffect(() => {
    dispatch(detailsOrder(props.match.params.id));
    return () => {
    };
  }, []);



  return loading ? <div>Loading ...</div> : error ? <div>{error}</div> :
    <div>
      <div className="placeorder">
        <div className="placeorder-info  shipping-design">
          <div>
            <h3 className="shipping-det m"> Shipping Details</h3>
            <div className="place-order-details">
              <label for="Name" className="cart-prod-apple">Name</label>{"  "}{order.shipping.name}<br />
              <label for="Phoneno" className="cart-prod-apple ">Phoneno</label>    {"  "}{order.shipping.phoneno}<br />
              <label for="Address" className="cart-prod-apple">Address</label>        {"  "}{order.shipping.address}<br />
              <label for="City" className="cart-prod-apple">City</label>      {"  "}{order.shipping.city}<br />
              <label for="Pincode" className="cart-prod-apple">Pincode</label>   {"  "}{order.shipping.pincode}<br />
            </div>

          </div>

        </div>
        <div className="placeorder-action">
          <ul>
            <li>

            </li>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>{order.itemsPrice}Rs</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>{order.shippingPrice}Rs</div>
            </li>
            <li>
              <div>GST</div>
              <div>{order.taxPrice}Rs</div>
            </li>
            <li>
              <div>Order Total</div>
              <div>{order.totalPrice}Rs</div>
            </li>
          </ul>
        </div>


      </div>
      <div className="App-link">
        <button
          className="App-link1"
          onClick={displayRazorpay}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pay Now
        </button>
      </div>
      <div className="iline">
      </div>
      <ul className="cart-list-container oc-container">

        {
          order.orderItems.length === 0 ?
            <div>
              Cart is empty
                                </div>
            :
            order.orderItems.map(item =>
              <li className="pcart-content1">
                <div className="pcart-image1">
                  <img src={item.image} alt="product-img" height="100px" />
                </div>
                <div className="pcart-name1">
                  <div>
                    {item.name}
                  </div>
                  <div>
                    Qty:{item.qty}
                  </div>
                </div>
                <div className="pcart-price1">
                  {item.price}Rs
                </div>
                <br />

              </li>
            )
        }
      </ul>

    </div>
}

export default OrderScreen;
