import express from "express";
import favicon from "serve-favicon";
import path from "path";
import { fileURLToPath } from "url";
import { shopsRoutes } from "./routes/shop.js";
import { adminRoutes } from "./routes/admin.js";
import { get404 } from "./controllers/error.js";
import bodyParser from "body-parser";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopsRoutes);

app.use(get404);

app.listen(3000);
