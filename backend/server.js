const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const { errorMiddleware } = require('./middlewares/errorMiddleware');

connectDB();
const app = express();

app.use(express.json());

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorMiddleware);


app.listen(5000, () => console.log('hello'));