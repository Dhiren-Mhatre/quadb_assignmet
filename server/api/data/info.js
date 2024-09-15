const axios = require("axios");
const { saveOrUpdateStock } = require("../models/StockInfo");

let data = [];

const fetchData = async () => {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    data = Object.values(response.data)
      .slice(0, 20)
      .map((obj) => {
        const { base_unit, last, volume, sell, buy, name } = obj;
        return { base_unit, last, volume, sell, buy, name };
      });

    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      try {
        const stock = await saveOrUpdateStock(obj);
        console.log('Stock updated:', stock);
      } catch (err) {
        console.error('Error updating stock:', err);
      }
    }
  } catch (err) {
    console.error('Error fetching data:', err.message);
  }
};

module.exports = fetchData;
