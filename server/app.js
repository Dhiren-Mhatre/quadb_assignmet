const express = require("express");
const morgan = require("morgan");
const { Pool } = require("pg");
const fetchData = require("./api/data/info");
const updateInfo = require('./api/data/infoUpdate');
const getData = require('./api/routes/getData');
require('dotenv').config(); 
// PostgreSQL connection setup
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Test the database connection
pool.connect((err) => {
  if (err) {
    console.error('Connection to PostgreSQL failed!', err);
  } else {
    console.log('Connected to PostgreSQL successfully!');
  }
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

// CORS handling
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

fetchData();
updateInfo();

// Routes
app.use('/api/data', getData);

// Error handling
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    success: false,
    error: error.message,
  });
});

module.exports = app;
