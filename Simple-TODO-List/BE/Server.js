require("dotenv").config({ path: "./config.env" });
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
const postrouter = require("./Router/postRouter");
const getrouter = require("./Router/getRouter");
const deleterouter = require("./Router/deleteRouter");
const updaterouter = require("./Router/updateRouter");

app.use("/api/v1", postrouter);
app.use("/api/v1", getrouter);
app.use("/api/v1", deleterouter);
app.use("/api/v1", updaterouter);

const URL = process.env.DBConnectionURL.replace(
  "<password>",
  process.env.DBPASSWORD
);

//DB Connection

app.listen(process.env.PORT, () => {
  try {
    const DBConnection = mongoose
      .connect(URL)
      .then(() => {
        console.log("DB Connection Successful");
        console.log("The App Started Running on port 4000...");
      })
      .catch((error) => {
        console.log(`There is a issue in connecting to DB : ${error}`);
      });
  } catch (error) {
    console.log(`Something went Wrong, please check you code + DB Connection`);
  }
});
