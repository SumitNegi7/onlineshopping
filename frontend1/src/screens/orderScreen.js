import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder, detailsOrder } from '../actions/orderActions';
import "./orderScreen.css";
function OrderScreen(props) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsOrder(props.match.params.id));
        return () => {
        };
    }, []);

    const orderDetails = useSelector(state => state.orderDetails);
    const { loading, order, error } = orderDetails;

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
                            <div>${order.itemsPrice}</div>
                        </li>
                        <li>
                            <div>Shipping</div>
                            <div>${order.shippingPrice}</div>
                        </li>
                        <li>
                            <div>Tax</div>
                            <div>${order.taxPrice}</div>
                        </li>
                        <li>
                            <div>Order Total</div>
                            <div>${order.totalPrice}</div>
                        </li>
                    </ul>
                </div>
                <div>
                </div>

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
                                    <img src={item.image} alt="madarchod" height="100px" />
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