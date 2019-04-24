const express = require('express');
const path = require('path');

// const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();

// app.use(express.static(publicPath));

// const files = require('./files.js');

// app.use('/', files);

app.listen(port, () => {
  console.log(`Server has been started on port ${port}`);
})
