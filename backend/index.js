const SWIGGY_API_DATA = require("./SWIGGY_API_DATA.json");

const express = require("express");
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("hello from root side");
  // console
});

app.get("/swiggy", (req, res) => {
  res.json(SWIGGY_API_DATA);
});

app.listen(PORT, () => {
  console.log(`server started at port no ${PORT}`);
});
