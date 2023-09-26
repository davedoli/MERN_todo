import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 5000;

app.use(bodyParser.urlencoded( {extended:true} ));

console.log("coming from server")

app.listen(port, () => {
    console.log(`Successfully started server on port ${port}.`);
  });