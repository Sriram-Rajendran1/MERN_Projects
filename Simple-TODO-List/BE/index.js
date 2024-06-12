require("dotenv").config({ path: "./config.env" });
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Simple TODO-Application");
});

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
