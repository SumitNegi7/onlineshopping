import Axios from "axios";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAID_REQUEST,
  ORDER_PAID_SUCCESS,
  ORDER_PAID_FAILED,
  MY_ORDER_LIST_REQUEST,
  MY_ORDER_LIST_SUCCESS,
  MY_ORDER_LIST_FAIL,
} from "../constants/orderConstants";

const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    const {
      userSignin: { userInfo },
    } = getState();

    console.log(userInfo);
    const {
      data: { data: newOrder },
    } = await Axios.post("/api/orders", order, {
      headers: {
        Authorization: "Bearer " + userInfo.token,
      },
    });
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: newOrder });
  } catch (error) {
    dispatch({ type: ORDER_CREATE_FAIL, payload: error.message });
  }
};

const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MY_ORDER_LIST_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get("/api/orders/mine", {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    dispatch({ type: MY_ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MY_ORDER_LIST_FAIL, payload: error.message });
  }
};

const detailsOrder = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get("/api/orders/" + orderId, {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_DETAILS_FAIL, payload: error.message });
  }
};


const paidOrder = (orderId) => async (dispatch, getState) => {

  const {
    userSignin: { userInfo },
  } = getState();

  try {

    const { data } = await Axios.put("/api/orders/" + orderId, {
      isPaid: true
    }, {

      headers: { Authorization: "Bearer " + userInfo.token },

    });
    dispatch({ type: ORDER_PAID_SUCCESS, payload: data })
  }
  catch (error) {
    dispatch({ type: ORDER_PAID_FAILED, payload: error.message });
  }


};
const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get("/api/orders/", {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_LIST_FAIL, payload: error.message });
  }
};

export { createOrder, detailsOrder, listOrders, listMyOrders, paidOrder };
