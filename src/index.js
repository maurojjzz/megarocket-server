const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Joi = require('joi');

const router = require('./routes');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const DB_URL = 'mongodb+srv://nico-team:UcLQ3ogL9TCSIMH2@megarocket-databases.inpprte.mongodb.net/';

mongoose
  .connect(DB_URL)
  .then(() => console.log('Db connected'))
  .catch((error) => console.log('Error : ', error));

app.use('/api', router);

app.listen(port, () => {
// eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
