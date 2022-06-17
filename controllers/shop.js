import { Product } from "../models/product.js";

const getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index.ejs", {
      products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

const getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list.ejs", {
      products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

const getCart = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/cart.ejs", {
      pageTitle: "Your Cart",
      path: "/cart",
    });
  });
};

const getOrders = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/orders.ejs", {
      pageTitle: "Your Orders",
      path: "/orders",
    });
  });
};

const getCheckout = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/checkout.ejs", {
      pageTitle: "Checkout",
      path: "/checkout",
    });
  });
};

export { getProducts, getIndex, getCart, getCheckout, getOrders };
