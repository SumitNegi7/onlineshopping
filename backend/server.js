import express from "express";
import data from "./data";

import config from "./config";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import orderRoute from "./routes/orderRoute";
import Razorpay from "razorpay";
import shortid from "shortid";
import path from "path";

const app = express();

// const razorpay = new Razorpay({
//   key_id: "rzp_test_ezgLtJPpftmOma",
//   key_secret: "mmDbwfcGNR4FPl5M3ei1U9rZ",
// });

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

app.use(bodyParser.json());

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

app.post("/razorpay", async (req, res) => {
  const payment_capture = 1;
  const amount = 1000;
  const currency = "INR";

  const options = {
    amount: amount * 10,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Step 3

app.use(express.static("frontend1/build"));

// app.get("*", (req, res) => {

//   res.sendFile(path.join(__dirname, "frontend1", "build", "index.html")); // relative path

// });
console.log(path.join(__dirname, "frontend1", "build", "index.html"))

app.listen(config.PORT, () => {
  console.log("Server started at http://localhost:5000");
});
