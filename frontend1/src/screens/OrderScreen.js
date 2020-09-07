// import React, { useState, useEffect } from 'react';
// import { addToCart, removeFromCart, saveShipping } from '../actions/cartActions';
// import { useDispatch, useSelector } from 'react-redux';
// import { createOrder } from '../actions/orderActions';
// import { Link } from 'react-router-dom';
// import { startSession } from 'mongoose';

// function OrderScreen(props) {


//     const orderDetails = useSelector(state => state.orderDetails);
//     const { loading, order, error } = orderDetails;



//     return <div className="placeorder">
//         <div className="placeorderinfo">
//             <div>
//                 <h3>
//                     Shipping
//                     </h3>
//                 <div>
//                     {cart.shipping.address},{cart.shipping.city},
//             {cart.shipping.pincode}
//                 </div>
//             </div>


//             <div>
//                 <h3> Payment </h3>
//                 <div>
//                     Payment Method : Google Pay
//                     </div>
//             </div>
//         </div>
//         <ul className="cart-list-container">
//             <li>
//                 <h3>
//                     Shopping Cart
//           </h3>
//                 <div>
//                     Price
//           </div>
//             </li>
//             {
//                 cartItems.length === 0 ?
//                     <div>
//                         Cart is empty
//           </div>
//                     :
//                     cartItems.map(item =>
//                         <li>
//                             <div className="cart-image">
//                                 <img src={item.image} alt="product" height="200px" />
//                             </div>
//                             <div className="cart-name">
//                                 <div>
//                                     <Link to={"/product/" + item.product}>
//                                         {item.name}
//                                     </Link>

//                                 </div>
//                                 <div>
//                                     Qty:{item.qty}


//                                 </div>
//                             </div>
//                             <div className="cart-price">
//                                 ${item.price}
//                             </div>
//                             <hr />
//                         </li>
//                     )
//             }
//         </ul>


//         <div className="placeorder-action">
//             <h3>
//                 Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
//         :
//          $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
//             </h3>
//             <button className="button primary full-width" onClick={placeOrderHandler}>
//                 Place Order
//       </button>

//         </div>
//     </div >




// }

// export default PlaceOrderScreen;