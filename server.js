const express = require('express');
const app = express();
const PORT = 3000;

app.get('/health', (req, res) => {
  res.status(200).send('Working');
});

app.get('/signup', (req, res) => {
  res.status(200).send('Signup Working');
});

app.get('/login', (req, res) => {
  res.status(200).send('Login Working');
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
