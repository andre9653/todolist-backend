const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const { PORT } = process.env;

const app = express();
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));

module.exports = app;
