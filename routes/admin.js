import express from "express";
import {
  getAddProduct,
  postAddProduct,
  getProducts,
} from "../controllers/admin.js";

const adminRoutes = express.Router();

adminRoutes.get("/add-product", getAddProduct);
adminRoutes.get("/products", getProducts);
adminRoutes.post("/add-product", postAddProduct);

export { adminRoutes };
