import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveShipping } from "../actions/cartActions";
import "./shippingscreen.css";

function ShippingScreen(props) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [name, setName] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ name, address, city, pincode, phoneno }));
    props.history.push("placeorder");
  };
  return (
    <div id="myform">
      <header>Shipping Order Form</header>
      <div class="area">
        <div class="row">
          <input
            type="text"
            placeholder="FullName"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div class="row">
          <input
            type="text"
            placeholder="Phone"
            onChange={(e) => setPhoneno(e.target.value)}
            required
            minlength="10"
            maxlength="10"
          />
        </div>
        <div class="row">
          <input
            type="text"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div class="row">
          <div class="col2">
            <input
              type="text"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div class="col2">
            <input
              type="text"
              placeholder="PinCode"
              onChange={(e) => setPincode(e.target.value)}
              required
              minlength="6"
              maxlength="6"
            />
          </div>
        </div>
      </div>
      <div class="row-1">
        <button type="submit" onClick={submitHandler} className="shipping-btn">
          Continue
        </button>
      </div>
    </div>
  );
}

export default ShippingScreen;

//<div className="form">
//     <form onSubmit={submitHandler} >
//         <ul className="form-container">
//             <li>
//                 <h2>Shipping</h2>
//             </li>

//             <li>
//                 <label htmlFor="address">
//                     Name
//       </label>
//                 <input type="name" name="name" id="name">
//                 </input>
//             </li>
//             <li>
//                 <label htmlFor="address">
//                     Address
//       </label>
//                 <input type="name" name="name" id="name">
//                 </input>
//             </li>
//             <li>
//                 <label htmlFor="address">
//                     Phone no
//       </label>
//                 <input type="name" name="name" id="name" >
//                 </input>
//             </li>

//             <li>
//                 <label htmlFor="city">
//                     City
//       </label>
//                 <input type="name" name="city" id="city" >
//                 </input>
//             </li>

//             <li>
//                 <label htmlFor="pincode">
//                     PinCode
//       </label>
//                 <input type="name" name="name" id="name" onChange={(e) => setPincode(e.target.value)}>
//                 </input>
//             </li>

//             <li>
//                 <button type="submit" className="button primary">Continue</button>
//             </li>

//         </ul>
//     </form>
// </div>
