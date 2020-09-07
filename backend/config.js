import dotenv from "dotenv";

dotenv.config();
export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL:
    process.env.MONGODB_URL ||
    "mongodb+srv://sumit123:sumit123@devconnector.fyznp.mongodb.net/online001?retryWrites=true&w=majority",
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
};
