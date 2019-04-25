const express = require('express');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// app.use(express.static(publicPath));

const files = require('./routes/api/files');

app.use('/api/files', files);

app.listen(port, () => {
  console.log(`Server has been started on port ${port}`);
});
