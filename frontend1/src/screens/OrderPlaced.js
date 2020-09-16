import React from 'react'
import "./orderplaced.css";
function OrderPlaced(props) {
    return (
        <div className="os-container">
            <div className="os-inner">

                <div className="o1">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/green-checkmark-line.png" className="tick" />
                </div>
                <div className="o2">
                    <h1 className="ot1">Your order has been successfully placed</h1>
                    <h5 className="ot2">Thankyou for shopping with us</h5>
                </div>

            </div>

        </div>
    )
}

export default OrderPlaced;
