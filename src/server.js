const express = require('express');
const routes = require('./routes');
require('dotenv').config();
const cors = require('cors');

const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));

module.exports = app;
