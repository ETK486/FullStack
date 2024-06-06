// Require the Express library
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define another route handler for a different URL
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Define a route handler for a dynamic URL parameter
app.get('/users/:userId?', (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});

// Start the server and listen on a specific port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
