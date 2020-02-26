const express = require("express");
const nunjucks = require("nunjucks");
const server = express();

server.set("view engine", "njk");
server.use(express.static("./public"));
server.use(express.urlencoded({ extended: true }));

nunjucks.configure("./views", {
  express: server,
  autoescape: false,
  noCache: true
});

const donors = [
  {
    name: "Julio Cesar",
    email: "buenojc@outlook.com",
    blood: "A+"
  },
  {
    name: "Julio Cesar",
    email: "buenojc@outlook.com",
    blood: "A+"
  },
  {
    name: "Julio Cesar",
    email: "buenojc@outlook.com",
    blood: "A+"
  },
  {
    name: "Julio Cesar",
    email: "buenojc@outlook.com",
    blood: "A+"
  }
];

server.get("/", function(req, res) {
  return res.render("index", { donors });
});

server.post("/", function(req, res) {
  const donor = {
    name: req.body.name,
    email: req.body.email,
    blood: req.body.blood
  };
  donors.push(donor);
  return res.redirect("/");
});

server.listen(5000, function() {
  console.log("Server is running");
});
