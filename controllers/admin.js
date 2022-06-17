import { Product } from "../models/product.js";

const getAddProduct = (req, res, next) => {
  res.render("admin/add-product.ejs", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

const postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

const getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products.ejs", {
      products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

export { getAddProduct, postAddProduct, getProducts };
