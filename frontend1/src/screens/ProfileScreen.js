import React, { useState, useEffect } from "react";
import "./profilescreen.css";
import { Link } from "react-router-dom";
import { logout, update } from "../actions/userActions";
import { listMyOrders } from "../actions/orderActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ProfileScreen = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }));
  };
  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, success, error } = userUpdate;

  const myOrderList = useSelector((state) => state.myOrderList);
  const { loading: loadingOrders, orders, error: errorOrders } = myOrderList;
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.name);
      setEmail(userInfo.email);
      setName(userInfo.name);
      setPassword(userInfo.password);
    }
    dispatch(listMyOrders());
    return () => { };
  }, [userInfo]);

  return (
    <div className="pr">
      <div className="pro">
        <div className="formz">
          <form onSubmit={submitHandler}>
            <>
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
              {success && <div>Profile Saved Successfully.</div>}
            </>

            <div className="container-loginz">
              <div className="image-loginz">
                <img src="https://secure.gravatar.com/avatar/22976cbdb272ff95a121f4ca85ba1d7f.png?d=https://www.meowaround.com/assets/no-gravatar-meow-around-24483b872bfd6e5cd1954267954b3f49fc8b55ec7a3a48481a6510576c1c4550.png&r=PG&s=400"
                  alt="profile" className="profile-image" />
              </div>

              <div className="content1z">
                <h1 className="h1-login">Profile</h1>

                <div className="form-groupz">
                  <br />
                  {name}
                </div>

                <div className="form-group-profilez">{email}</div>
                {/* <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name=""
                    value={password}
                    placeholder="Re enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div> */}

                <br />
                <button
                  onClick={handleLogout}
                  className="button-profile"
                >
                  Logout
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="profile-orders content-margined">
        {loadingOrders ? (
          <div>Loading...</div>
        ) : errorOrders ? (
          <div>{errorOrders} </div>
        ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>PAID</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>{order.createdAt}</td>
                      <td>{order.totalPrice}</td>
                      <td>{order.isPaid}</td>
                      <td>
                        <Link to={"/order/" + order._id}>DETAILS</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
      </div>
    </div>
  );
};

export default ProfileScreen;
