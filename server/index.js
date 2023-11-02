require("dotenv").config();
const express = require("express");
const app = express();
const { connectToDatabase } = require("./db");
const router = require("./routes/router");
const morgan = require("morgan");
const cors = require("cors");

connectToDatabase();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

const port = 5000;
const masterKey = "4VGP2DN-6EWM4SJ-N6FGRHV-Z3PR3TT";
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
