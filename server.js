const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Routes

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/app.js'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
