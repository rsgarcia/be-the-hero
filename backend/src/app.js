const express = require('express');
const routes = require('./routes');/// indica arquivo ./ e  ñ diretorio
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;