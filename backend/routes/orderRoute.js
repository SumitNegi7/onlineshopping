import express from "express";
import { isAuth } from "../utils";
import Order from "../models/orderModel";

const router = express.Router();

router.get("/mine", isAuth, async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.send(orders);
});
router.get("/:id", async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id });

  if (order) {
    res.send(order);
  } else {
    res.status(404).send("Order not Found");
  }
});

router.get("/", isAuth, async (req, res) => {
  const orders = await Order.find({}).populate("user");
  res.send(orders);
});

router.get("/:id", isAuth, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id });

  if (order) {
    res.send(order);
  } else {
    res.status(404).send("Order not found");
  }
});

router.post("/", isAuth, async (req, res) => {
  // console.log(req.body);
  try {
    const newOrder = new Order({
      orderItems: req.body.orderItems,
      user: req.user._id,
      shipping: req.body.shipping,
      itemsPrice: req.body.itemsPrice,
      taxPrice: req.body.taxPrice,
      shippingPrice: req.body.shippingPrice,
      totalPrice: req.body.totalPrice,
    });

    const newOrderCreated = await newOrder.save();
    // console.log(newOrderCreated)
    res
      .status(201)
      .send({ message: "New Order Created", data: newOrderCreated });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

export default router;
