const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Todo = require("./models/todo")
const connectToDatabase = require('./db');

connectToDatabase();

const port = 5000;
const masterKey = "4VGP2DN-6EWM4SJ-N6FGRHV-Z3PR3TT";
app.use(express.urlencoded({ extended: true }));




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}
);