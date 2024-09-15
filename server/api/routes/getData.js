const express = require("express");
const router = express.Router();
const pgp = require('pg-promise')();
require('dotenv').config(); 
const db = pgp({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Get 10 Crypto Info
router.get("/", async (req, res) => {
  try {
    const stocks = await db.any('SELECT * FROM stocks ORDER BY RANDOM() LIMIT 10');
    return res.status(200).json(stocks);
  } catch (err) {
    console.error('Error fetching data:', err);
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// Get Specific Crypto Info
router.get("/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const stock = await db.oneOrNone('SELECT * FROM stocks WHERE base_unit = $1', [name]);
    if (!stock) {
      return res.status(404).json({ success: false, error: "Couldn't find stock" });
    }
    return res.status(200).json(stock);
  } catch (err) {
    console.error('Error fetching data:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
