import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {listOrders} from '../actions/orderActions';

function OrdersScreen(props) {
  const orderList = useSelector(state => state.orderList);
  const {loading, order, error} = orderList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrders());
    return () => {
      //
    };
  }, []);


  return loading ? <div>Loading...</div> :
    <div className="content content-margined">

      <div class="outer-container">
        <h1>Ads Manager Table</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Clicks</th>
              <th>Priority</th>
              <th>Impressions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {order.map(order => (
              <tr class="priority-200" key={order._id}>

                {/* <td>{order.user.name}</td> */}
                <td class="name">{order._id}</td>
                <td class="clicks">{order.createdAt}</td>
                <td class="priority"><i class="fas fa-circle"></i> {order.totalPrice}</td>
                {/* <td class="impressions">190</td> */}
                <td class="delete"><button class="delete-btn"><i class="fas fa-trash-alt" title="delete row"></i></button></td>
                <td>
                  <Link to={"/order/" + order._id} className="button secondary" >Details</Link>
                  {' '}

                </td>
              </tr>))}


          </tbody>
        </table>
      </div>






    </div>
}
export default OrdersScreen;
