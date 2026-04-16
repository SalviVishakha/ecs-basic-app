const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from ci/cd deployment !");
});

app.get("/about", (req, res) => {
  res.send("This app is deployed using AWS ECS Fargate");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});