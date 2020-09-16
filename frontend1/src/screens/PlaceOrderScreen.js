import React, { useState, useEffect } from 'react';
import { addToCart, removeFromCart, saveShipping } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../actions/orderActions';
import { Link } from 'react-router-dom';
import "./placeorderscreen.css";

function PlaceOrderScreen(props) {

    const cart = useSelector(state => state.cart);
    const orderCreate = useSelector(state => state.orderCreate);
    const { loading, success, error, order } = orderCreate
    const { cartItems, shipping } = cart;

    // if (!shipping) {
    //     props.history.push("/shipping");
    // }

    const dispatch = useDispatch();
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 100 ? 0 : 10;
    const taxPrice = 0 * itemsPrice;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;


    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems: cartItems, shipping, itemsPrice,
            shippingPrice, taxPrice, totalPrice
        }));

    }


    useEffect(() => {
        if (success) {
            props.history.push("/order/" + order._id)
        }

    }, [success]);






    return (<div className="placeorder-container1">






        <div className="placorder-products1">
            <ul className="pcart-list-container1">

                {

                    cartItems.map(item =>
                        <>
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

                        </>
                    )
                }
            </ul>
        </div >


        <div className="placeorder-action1">


            <div className="placeorder001">
                <div className="placeorderinfo">

                    <h3 className="shipping-det"> Shipping Details</h3>

                    <div className="place-order-details">
                        <label for="Name" className="cart-prod">Name</label>{"  "}{cart.shipping.name}<br />
                        <label for="Phoneno" className="cart-prod">Phoneno</label>    {"  "}{cart.shipping.phoneno}<br />
                        <label for="Address" className="cart-prod">Address</label>        {"  "}{cart.shipping.address}<br />
                        <label for="City" className="cart-prod">City</label>      {"  "}{cart.shipping.city}<br />
                        <label for="Pincode" className="cart-prod">Pincode</label>   {"  "}{cart.shipping.pincode}<br />
                    </div>

                </div>
                <br />
                <br />




                <div className="placeorder-sub">
                    <h4 className="shipping-det">
                        Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
        :
 {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}Rs<br />
                        <button className="placeorder-btn1 " onClick={placeOrderHandler}>
                            Place Order
      </button>
                    </h4>
                </div>
            </div>
        </div>


    </div>

    )
}

export default PlaceOrderScreen;