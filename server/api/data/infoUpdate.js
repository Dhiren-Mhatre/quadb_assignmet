const fetchData = require('./info');

const updateInfo = async () => {
  setInterval(() => {
    fetchData();
    console.log('Updating...');
  }, 10000);
};

module.exports = updateInfo;
