const express = require("express");
const server = express();

server.use(express.static("./"));

server.get("/", function(req, res) {
  res.render("index");
});

server.listen(5000, function() {
  console.log("Server is running");
});
