const express = require('express');

function createServer(port) {
  const app = express();

  app.get('/', (req, res) => {
    res.send(`Hello, world! from server on port ${port}`);
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

module.exports = createServer;



