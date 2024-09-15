const pgp = require('pg-promise')();
require('dotenv').config(); 
const db = pgp({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Save or update stock info
const saveOrUpdateStock = async (obj) => {
  try {
    const query = `
      INSERT INTO stocks (name, last, buy, sell, volume, base_unit)
      VALUES ($[name], $[last], $[buy], $[sell], $[volume], $[base_unit])
      ON CONFLICT (name) DO UPDATE 
      SET last = $[last], buy = $[buy], sell = $[sell], volume = $[volume], base_unit = $[base_unit]
      RETURNING *;
    `;
    const result = await db.one(query, obj);
    return result;
  } catch (err) {
    console.error('Error saving/updating stock:', err);
    throw err;
  }
};

module.exports = {
  saveOrUpdateStock,
};
