const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Vishakha 🚀 Your ECS app is running!");
});

app.get("/about", (req, res) => {
  res.send("This app is deployed using AWS ECS Fargate");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});