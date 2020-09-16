import React, { useState } from "react";
import { useSelector } from 'react-redux';

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

function Rpay() {
  const orderList = useSelector(state => state.orderList);
  const { order } = orderList;

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

    const data = await fetch("http://localhost:5000/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    console.log(orderList);
    const options = {
      key: __DEV__ ? "rzp_test_ezgLtJPpftmOma" : "PRODUCTION_KEY",
      currency: CURRENCY,
      amount: order.totalPrice,
      order_id: order._id,
      name: "Sumit Negi",
      description: "Thank you for nothing. Please give us some money",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Sumit Negi",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="App">
      <header className="App-header">
        s
        <a
          className="App-link"
          onClick={displayRazorpay}
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate $5
        </a>
      </header>
    </div>
  );
}

export default Rpay;
