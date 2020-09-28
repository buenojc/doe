require('dotenv').config();

const express = require('express');
const nunjucks = require('nunjucks');
const server = express();

const Pool = require('pg').Pool;
const db = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});

server.set('view engine', 'njk');
server.use(express.static('./public'));
server.use(express.urlencoded({ extended: true }));

nunjucks.configure('./views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get('/', async function (req, res) {
  db.query('SELECT * FROM donors', function (err, result) {
    if (err) {
      return res.send('Erro no banco de dados');
    }
    const donors = result.rows;
    return res.render('index', { donors });
  });
});

server.post('/', async function (req, res) {
  const donor = {
    name: req.body.name,
    email: req.body.email,
    blood: req.body.blood,
  };

  if (donor.name == '' || donor.email == '' || donor.blood == '') {
    return res.send('É necessário que todos os campos sejam preenchidos');
  }

  const query = `INSERT INTO donors ("name", "email", "blood")
  VALUES ($1, $2, $3)`;

  await db.query(query, [donor.name, donor.email, donor.blood]);

  return res.redirect('/');
});

server.listen(5000, function () {
  console.log('Server is running');
});
