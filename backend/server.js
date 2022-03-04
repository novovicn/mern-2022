const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

app.use('/api/goals', require('./routes/goalRoutes'));


app.listen(5000, () => console.log('hello'));