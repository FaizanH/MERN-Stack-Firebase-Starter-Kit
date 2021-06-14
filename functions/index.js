const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ATLAS_URI = "";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

// Add Routes here
/*
const exampleRouter = require("./routes/example");
app.use("/example", exampleRouter);
*/

exports.app = functions.https.onRequest(app);
