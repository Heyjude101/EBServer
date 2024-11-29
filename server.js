const express = require('express');
const app = express();
const PORT = 3000;

app.get('/health', (req, res) => {
  res.status(200).send('Working');
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
