const express = require("express");
const bodyParser = require("body-parser");

// require('dotenv').config();

const app = express();

const { getUser } = require("./middleware/getUserRole");

// const routes = require('./app/routes');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/otp", getUser, async (req, res) => {
  console.log(req.body);
  return res.send(req.body);
});

// app.use('/api/notes', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
