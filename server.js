const express = require('express');
const path = require('path');
const compress = require('compression');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(compress());

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000, () => {
  console.log('App started on port 3000');
});
