const express = require("express");
const server = express();

server.get("/", function(req, res) {
  res.send("Ainda funciona!");
});

server.listen(5000, function() {
  console.log("Server is running");
});
