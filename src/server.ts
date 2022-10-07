import path from "path";

import "dotenv/config";
import "reflect-metadata";
import express from "express";
import "express-async-errors";
import cors from "cors";

import "./database/connection";
import routes from "./routes";
import errorHandler from "./errors/handler";

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE");
    return res.status(200).json({});
  }
  next();
});
app.use(
  cors({
    origin: "https://happy-nlw3-wesley.herokuapp.com",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  })
);

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(routes);
app.use(errorHandler);

app.listen(process.env.PORT || 3333);
