const express = require("express");
const nunjucks = require("nunjucks");
const server = express();

const Pool = require("pg").Pool;
const db = new Pool({
  user: "postgres",
  password: "0000",
  host: "localhost",
  port: 5432,
  database: "doe"
});

server.set("view engine", "njk");
server.use(express.static("./public"));
server.use(express.urlencoded({ extended: true }));

nunjucks.configure("./views", {
  express: server,
  autoescape: false,
  noCache: true
});

server.get("/", function(req, res) {
  db.query("SELECT * FROM donors", function(err, result) {
    if (err) {
      return res.send("Erro no banco de dados");
    }
    const donors = result.rows;
    return res.render("index", { donors });
  });
});

server.post("/", function(req, res) {
  const donor = {
    name: req.body.name,
    email: req.body.email,
    blood: req.body.blood
  };

  if (donor.name == "" || donor.email == "" || donor.blood == "") {
    return res.send("É necessário que todos os campos sejam preenchidos");
  }

  const query = `INSERT INTO donors ("name", "email", "blood")
  VALUES ($1, $2, $3)`;

  db.query(query, [donor.name, donor.email, donor.blood]);

  return res.redirect("/");
});

server.listen(5000, function() {
  console.log("Server is running");
});
