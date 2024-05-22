const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client.html');
});

app.post('/calculate', (req, res) => {
  let grades = req.body.grades.split(',').map(Number);
  let credits = req.body.credits.split(',').map(Number);

  if (grades.length !== credits.length) {
    return res.send('The number of grades and credits must be the same.');
  }

  let totalCredits = 0;
  let totalPoints = 0;

  for (let i = 0; i < grades.length; i++) {
    totalPoints += grades[i] * credits[i];
    totalCredits += credits[i];
  }

  let cgpa = totalPoints / totalCredits;
  res.send(`Your CGPA is ${cgpa.toFixed(2)}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
