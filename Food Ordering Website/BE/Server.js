require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());

const DBURL = process.env.DBConnectionURL.replace(
  "<password>",
  process.env.DBPASSWORD
);
//console.log(DBURL);

mongoose
  .connect(DBURL)
  .then(() => {
    console.log(`DB Connection made Successful`);
    app.listen(process.env.PORT, () => {
      console.log(`app is running on port ${process.env.PORT}....`);
    });
  })
  .catch((error) => {
    console.log(
      `There is a Error in connecting to DB, please check DB Connection and Network..${error}`
    );
  });
