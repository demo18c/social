const express = require('express');
const connectDB = require('./config/db');
const app = express();

//connect database

connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('api running'));

app.listen(PORT, () => console.log(`on port ${PORT}`));
