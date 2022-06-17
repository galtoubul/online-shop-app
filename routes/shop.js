import express from "express";
import {
  getProducts,
  getIndex,
  getCart,
  getCheckout,
  getOrders,
} from "../controllers/shop.js";

const shopsRoutes = express.Router();

shopsRoutes.get("/", getIndex);
shopsRoutes.get("/products", getProducts);
shopsRoutes.get("/cart", getCart);
shopsRoutes.get("/orders", getOrders);
shopsRoutes.get("/checkout", getCheckout);

export { shopsRoutes };
