'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hallo, dies ist ein Test -ASO   W13 Cloud Deployment with GitHub Actions -v2 !!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
