import React, { useState, useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import session from "sessionstorage";
import jsCookie from 'js-cookie';
import "../App.css";
function CartScreen(props) {

    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;
    const [count, setCount] = useState(0);



    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }

    useEffect(() => {

    }, []);

    useEffect(() => {

        // jsCookie.set(count, x)
        // document.querySelector(".cart-img1").innerHTML = count;

    })



    return <div className="cart1">



        {
            cartItems.length === 0 ?
                <div>
                    Cart is empty
          </div>
                :
                cartItems.map(item =>
                    <div className="cart-content">
                        <div>
                            <img src={item.image} alt="product" height="200px" />
                        </div>
                        <div>
                            <Link to={"/product/" + item.product}>
                                {item.name}
                            </Link>
                        </div>

                        <div>
                            Qty:<select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                {[...Array(item.countInStock).keys()].map(x =>
                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                )}
                            </select>

                            <button type="button" className="button77" onClick={() => removeFromCartHandler(item.product)} >
                                &#9851;
                    </button>
                        </div>
                        <div>
                            {item.price}{" "}Rs
                        </div>
                    </div>
                )
        }




                                Subtotal
                                :
         $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        <br />
        <button className="btn-cart sub1" disabled={cartItems.length === 0}>
            Proceed to Checkout
      </button>

    </div>


}

export default CartScreen;