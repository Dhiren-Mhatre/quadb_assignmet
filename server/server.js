const express = require('express');
const server = express();
const app = require('./app');

const PORT = process.env.PORT || 3000;

server.use(app);

server.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
